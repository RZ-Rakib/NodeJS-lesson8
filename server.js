const http = require('http');
const fs = require('fs');
const port = 2001;
const localHost = '127.0.0.1';

const fileHandler = (statusCode, fileName, req, res) => {
    fs.readFile(fileName, (err, data) => {
        if(err){
            console.log(err);
        }else {
            res.writeHead(statusCode, {'content-type':'text/html'});
            res.write(data);
            res.end();
        }
        
    });

};

const myServer = http.createServer((req, res) => {

    if(req.url === '/'){
        fileHandler(202,'./public/index.html', req, res);

    } else if(req.url === '/about'){
        fileHandler(202,'./public/about.html', req, res);

    }else if(req.url === '/contact'){
        fileHandler(202,'./public/contact.html', req, res);

    }else {
        fileHandler(202,'./public/404.html', req, res);

    }
});

myServer.listen(port, localHost, () => {
    console.log(`This server is running successfully at http://${localHost}:${port}`);
})