const db = require('../config/mysqlConnecion');
const Person = require('../models/Person');

class PersonService {
    static async createPerson(person) {
        const persona = new Person(
            person.documento,
            person.tipo_documento,
            person.nombres,
            person.apellidos,
            person.direccion,
            person.telefono,
            person.estado
        )
        const query = `INSERT INTO persona (
        documento,
        tipo_documento_id,
        nombres,
        apellidos,
        direccion,
        telefono,
        estado
        ) VALUES (?,?,?,?,?,?,?)`;

        return db.promise().query(query, [
            persona.documento,
            persona.tipo_documento,
            persona.nombres,
            persona.apellidos,
            persona.direccion,
            persona.telefono,
            persona.estado
        ])
    }

    static async editPerson(id, person) {
        const persona = new Person(
            person.documento,
            person.tipo_documento_id,
            person.nombres,
            person.apellidos,
            person.direccion,
            person.telefono,
            person.estado
        )
        const query = `UPDATE Persona SET tipo_documento = ?, nombres = ?, apellidos = ?, direccion = ?, telefono = ?, estado = ?
                       WHERE id = ${id}`;

        return db.promise().query(query, [
            persona.documento,
            persona.tipo_documento,
            persona.nombres,
            persona.apellidos,
            persona.direccion,
            persona.telefono,
            persona.estado
        ])
    }

    static async disablePerson(id){
        const query = `UPDATE Persona SET estado = 1
                       WHERE id = ${id}`;

        return db.promise().query(query);
    }

    static async findPersons(){
        const[results] = await db.promise().query('SELECT * FROM persona')
        return results.map(row => new Person(
            row.documento,
            row.tipo_documento,
            row.nombres,
            row.apellidos,
            row.direccion,
            row.telefono,
            row.estado
        ))
    }
}

module.exports = PersonService;