let jwt = require("jsonwebtoken");


let createtoken = (data) => {
    let token = jwt.sign(data, process.env.SECRET);
    return token
}


let isLogin = (req, res, next) => {
    try {
        let token = req.cookies["token"]
        if (!token) {
            throw new Error("user not login");
        }
        let user = jwt.verify(token, process.env.SECRET);
        console.log(user);
        req.user = user;
        next();
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}


let isRestrict = ([...role]) => {

    try {
        return (req, res, next) => {
            if (role.includes(req.user.user.role)) {
                next();
            } else {
                throw new Error(`${req.user.user.role} "not allowed"`)
            }
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}





module.exports = { createtoken, isLogin, isRestrict }
