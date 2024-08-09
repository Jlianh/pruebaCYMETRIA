const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',  
    user: 'root', 
    password: '',
    database: 'mydb'
})

connection.connect((err) => {
    if(err){
        console.error('Error al conectar', err.stack);
        return;
    }
    console.log('Conexion exitosa');
})

module.exports = connection