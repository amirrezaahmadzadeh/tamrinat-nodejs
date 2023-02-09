const http = require("http");
const moment = require("moment");

let server = http.createServer((req , res) => {
    if(req.url === "/"){
       res.write(`<h1 align="center">${moment().format()}</h1>`);
       res.end();
    }
})
server.listen(3000);