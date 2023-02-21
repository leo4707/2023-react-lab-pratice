require('dotenv').config()
const session = require('express-session');

const sessionMaxAge = 15 * 60 * 1000
const API_ROUTE_IP = "/api"

const dev = {
    API_BASE_IP : "127.0.0.1",
    API_PORT : 3030,
    CLIENT_IP : "http://127.0.0.1:8090",
}

const prod = {
    API_BASE_IP : "127.0.0.1",
    API_PORT : 3000,
    CLIENT_IP : "http://cosbi5.ee.ncku.edu.tw",
}

const config = process.env.NODE_ENV === "development" ? dev : prod

const corsSetting = {
    origin : config["CLIENT_IP"],
    credentials: true,
}

const sessionMiddleware = session({
    secret: 'secretkey',
    rolling: true,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge : sessionMaxAge,
        secure : false,
        httpOnly : process.env.NODE_ENV === "development" ? false : true,
        sameSite : process.env.NODE_ENV === "development" ? false : "strict"
    }
})

module.exports = {
    sessionMiddleware,
    corsSetting,
    API_ROUTE_IP,
    config
}