const express = require('express');
const app = express();
const cors = require('cors');
const router = require("./router");
const http = require('http');
const server = http.createServer(app);
const { API_ROUTE_IP, config } = require('./constant');

//<--------------------------------HTTP settings-------------------------------->
// HTTP Cors settings
app.use(cors(corsSetting));

// Bind api IP to "127.0.0.1:3030/api"
app.use(API_ROUTE_IP, router.router);

//<--------------------------------Start listen-------------------------------->
server.listen(config["API_PORT"], config["API_BASE_IP"], function () {
    console.log(`Backend listening on port ${config["API_PORT"]}!`);
});