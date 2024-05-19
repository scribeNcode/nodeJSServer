const http = require('http')
const fs = require('fs')
const os = require('os')
const server = http.createServer((req, res)=>{
    // SET CORS header
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if(req.method=== 'GET' && req.url==='/'){
        // set random number
        const delay = Math.random() * 5000;
        setTimeout(()=>{
            const cpuInfo = {
                cores: os.cpus().length,
                model: os.cpus()[0].model,
              };
              const osInfo = {
                platform: os.platform(),
                release: os.release(),
              };

              
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ cpu: cpuInfo, os: osInfo }));
        
        },delay)
    }else {
        res.statusCode = 404;
        res.end('Not found');
      }
})

server.listen(7000, 'localhost', ()=>{
    console.log('server running')
})