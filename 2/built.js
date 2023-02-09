const fs = require("fs");

fs.appendFile("doc.txt" , "amirreza" , (err) => {
    if(err){
        throw err ;
    }
    console.log("save shod :)");
})