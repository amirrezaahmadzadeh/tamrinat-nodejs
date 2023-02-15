const mongoose = require("mongoose");

let users = mongoose.Model("users", {
    name : {
        type : string ,
    },
    family : {
        type : string
    },
    age : {
        type : number 
    }
})

module.exports = {users};