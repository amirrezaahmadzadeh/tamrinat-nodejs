const http = require("http");

let server = http.createServer((req , res) => {
    if(req.url === "/"){
        res.write(`<h1 align="center">Welcome :)</h1>`);
        res.end();
    }
})
server.listen(3000);