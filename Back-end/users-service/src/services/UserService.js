const db = require('../config/mysqlConnecion');
const User = require('../models/User');

const Utils = require('../Utils/Utils')

const utils = new Utils();

class UserService {
    static async createUser(user) {
        const password = await utils.base64Encrypt(user.password);
        const usuario = new User(
            user.id_persona,
            user.email,
            password.toString(),
            user.estado
        )
        const query = `INSERT INTO usuario (
        id_usuario,
        email,
        password,
        estado
        ) VALUES (?,?,?,?)`;

        return db.promise().query(query, [
            usuario.id_persona,
            usuario.email,
            usuario.password,
            usuario.estado
        ])
    }

    static async editUser(id, user) {
        const usuario = new User(
            user.email,
            await utils.base64Encrypt(user.contraseña),
            user.estado
        )
        const query = `UPDATE usuario SET email = ?, contraseña = ?, estado = ? 
                       WHERE id = ${id}`;

        return db.promise().query(query, [
            usuario.email,
            usuario.contraseña,
            usuario.estado
        ])
    }

    static async disableUser(id) {
        const query = `UPDATE usuario SET estado = 1
                       WHERE id = ${id}`;

        return db.promise().query(query);
    }

    static async findUsers() {
        const [results] = await db.promise().query('SELECT * FROM usuario')
        return results.map(row => new User(
            row.id_usuario,
            row.email,
            row.password,
            row.estado
        ))
    }
}

module.exports = UserService;