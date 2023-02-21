var express = require('express')
var router = express.Router();
var userRouter = express.Router();
var dataRouter = express.Router();
const User = require('./Controller/userController');

router.use("/user", userRouter)
router.use("/data", dataRouter)

/* User router */
userRouter.post('/login', User.login)

/* Data middleware auth */
dataRouter.use(function (req, res, next) {
    // to-do 
    // check username exist
    // if false destroy session
    next()
})

/* Data router */
dataRouter.get("/isAuth", function(req, res){
    res.status(200).send(req.session.userName)
})

module.exports = {router};