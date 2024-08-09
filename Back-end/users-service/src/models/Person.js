class Person {
    constructor(
        documento,
        tipo_documento,
        nombres,
        apellidos,
        direccion,
        telefono,
        estado
    ) {
        this.documento = documento;
        this.tipo_documento = tipo_documento;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.direccion = direccion;
        this.telefono = telefono;
        this.estado = estado;
    }
}

module.exports = Person;