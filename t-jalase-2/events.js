const events = require("events");
const http = require("http");

const emitter = new events.EventEmitter();
const server = http.createServer((req ,res)=>{
    if(req.url === "/"){
        res.write("ok :)");
        emitter.on("symbol" , ()=>{
            console.log('an event occurred!');
        })
    }
    setTimeout(()=>{
       emitter.emit("symbol")
    },3000)
    res.end();
})
server.listen(3000);