const {users} = require("./models/users");
const ObjectID = require("mongodb");
const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");

let app = express();
app.use(bodyParser.json());

app.post("/todos" , (req , res) => {
    let newTodo = new users({
        name : req.body.name ,
    })
    newTodo.save().then( (doc) => {
            res.send(doc);
    } ,(err) => {
        if(err){
            res.status(400).send(err);
        }
    })
})

app.get("/todos" , (req , res) => {
    users.find()
    .then((getOk)=>{
        res.send({getOk});
    } , (err)=>{
        res.status(400).send(err);
    })
})

app.get("/todos/:id" , (req, res)=>{
    let id = req.params.id;
    
    if(!ObjectID.isValid(id)){
       return res.status(404).send();
    }
        users.findById(id)
        .then((user)=>{
            if(!user){
                return res.status(404).send();
            }
          res.send({todo});
        })
        .catch((e)=> {
            res.status(404).send();
        })
    })
    
app.delete("/todos/:id" , (req , res)=>{
    let idDelete = req.params.id ;
      if(!ObjectID.isValid(idDelete)){
            return res.status(404).send();
        }
        users.findOneAndRemove({_id : new ObjectID(idDelete)})
        .then((okIdDelte)=>{
          if(!okIdDelte){
               return res.status(404).send();
          }
          res.send(okIdDelte);
      })
      .catch((e)=> {
        if(e) { return res.status(404).send }
      })
    })

    app.patch("/todos/:id" , (req,res)=>{
        let idUpdate = req.params.id ;
        let body = _.pick(req.body , [ "name" , "family"])
        if(!ObjectID.isValid()){
            return res.status(404).send(); 
        }
        users.findOneAndUpdate({_id : new ObjectID(idUpdate)} , { $set : body} , { new : true})
        .then((idOkUpdate)=>{
            if(!idOkUpdate){
                return res.status(404).send();
            }
            res.send(idOkUpdate);
        })
        .catch((e)=>{
            if(e){ res.status(404).send() ;}
        })   
    })
    
    app.listen("3000" , () => {
        console.log("started local ... ");
    })