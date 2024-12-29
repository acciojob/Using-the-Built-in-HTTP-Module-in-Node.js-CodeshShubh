const http = require('http');
const fs = require('fs');
const path = require('path');

// const filePath = process.argv[2];

const filePath = process.argv[2] || path.join(__dirname, 'output.txt');

// if(!filePath){
//     console.error("Please provide a file path in command line argument");
// }

fs.readFile(filePath, 'utf-8', (err , data)=>{
    if(err){
      console.error(`Error reading file: ${err.message}`);
    }else{
      console.log(data);
    }
})

const server = http.createServer((req, res)=>{
   fs.readFile((filePath , 'utf-8',  (err, data)=>{
    if(err){
        res.writable(500, {'Content-Type' : 'text/plain'});
        res.end(err);
    }else{
        res.writable(200, {'Content-Type' : 'text/plain'});
        res.end(data);
    }
   }))
})

const PORT = 3000;

server.listen(PORT, 'localhost', ()=>{
    console.log(`server is running on https://localhost:${PORT}`);
})
// TODO: Create an HTTP server

// TODO: Listen on port 3000

// DO NOT EDIT BELOW THIS LINE (Uncomment it once you are done with your code)

