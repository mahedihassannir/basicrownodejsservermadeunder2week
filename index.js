const http = require('http');


const app = {


};

app.config = {
    port: 3000
};

app.createServer = () => {

    const server = http.createServer(app.handler);

    server.listen(app.config.port, () => {
        console.log(`server is running on port ${app.config.port}`);
    });

};


app.handler = (req,res) => {
    res.end("server is running");
};



app.createServer();