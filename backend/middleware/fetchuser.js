const jwt = require('jsonwebtoken');

const JWT_SECRET = 'shruthi512$'; //public key for jwt token for application API

//Get user from jwt token and add user id to req object
const fetchuser = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);  // validating the token
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
}

module.exports = fetchuser;