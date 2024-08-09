class User {
    constructor(
        id_usuario,
        email,
        password,
        estado
    ) {
        this.usuario = id_usuario;
        this.email = email;
        this.password = password;
        this.estado = estado;
    }
}

module.exports = User;