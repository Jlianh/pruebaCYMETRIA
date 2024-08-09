const Utils = require('../Utils/Utils');

const db = require('../config/mysqlConnecion');

const jwt = require('jsonwebtoken')

const utils = new Utils();
require('dotenv').config()
const secret = process.env.JWT_SECRET || '';

class AuthController {

    constructor() { }

    async login(req, res) {

        var email = req.body.email;
        var password = req.body.password;

        const [results] = await db.promise().query(`SELECT * FROM usuario WHERE email = "${email}"`)

        try {
            if (!results) {
                res.send({ "status": "error", "message": "The user doesnt exists" });
            } else {
                const passwordMatch = await utils.base64Encrypt(password)
                if (passwordMatch != results[0].password) {
                    res.send({ "status": "error", "message": "Incorrect password" });
                } else {
                    const token = jwt.sign({ userId: results[0].id, email: results[0].email}, secret, { expiresIn: '1h' })
                    res.send({ "status": "success", "token": token, "user": results[0] });
                }
            }
        } catch (error) {
            console.log(error)
            res.send({ "status": "error", "message": "Login error" });
        }
    }

    validateToken(req, res, next) {
        const token = req.headers['authorization'];
        if (!token) {
            return res.status(401).json({ "message": "The Token doesnt exists" });
        }
        const tokenWOBearer = token.startsWith("Bearer ") ? token.slice(7) : token;
        jwt.verify(tokenWOBearer, 'secreto', (err, decoded) => {
            if (err) {
                return res.status(401).json({ "message": "Invalid Token" });
            }
            req.userId = decoded.userId;
            next();
        })
    }
}

module.exports = AuthController;