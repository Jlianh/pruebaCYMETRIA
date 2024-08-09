# pruebaCYMETRIA

Antes que todo debes clonar todo el proyecto ya que ahi se encuentran todos los recursos de la prueba

Base de datos

1. Descarga Laragon en el siguiente link https://github.com/leokhoa/laragon/releases/download/6.0.0/laragon-wamp.exe
2. Instala Laragon
3. Cuando ya lo instales le das a la opcion Star All ![image](https://github.com/user-attachments/assets/18e1b41a-9d09-4535-aab6-f35bf66fecb7)
4. Instala MySQL Workbench en el siguiente link https://dev.mysql.com/downloads/file/?id=528765
5. Si te pregunta que necesitas una cuenta de Oracle le das a "No thanks, just start my download."
6. Instalas MySQL Workbench
7. Abres MySQL Workbench y seleccionas la primera instacia ![image](https://github.com/user-attachments/assets/140b3d88-6e06-4704-ba5e-2d259c5d7648)
8. Abres el script de la base de datos users.sql
9. Ejecutas el script con el rayo al lado del icono de guardar ![image](https://github.com/user-attachments/assets/222e8e13-4e5f-49b8-bf4e-61edd33cb2d4)
10. Listo ya tienes la base de datos para guardar usuarios

Back - end

1. Abres la carpeta Back - End y posteriormente la carpeta users-service
2. Das click derecho sobre cualquier parte y en caso de Windows 11 le das en Mas opciones y posteriormente "open git bash here"
3. Ejecutas el siguiente comando "npm install" esto hara que se instalen todas las dependecias necesarias
4. Ahora por ultimo ejecutas el siguiente comando nodemon ./index.js
5. Ya tienes el Back - End de autentificacion de usuarios

ANTES DE EJECUTAR EL FRONT - END

1. Instala Postman para hacer peticiones a la api de users-service en este link https://dl.pstmn.io/download/latest/win64
2. Cuando lo instales vamos a ejecutar dos acciones en postman, una es insertar una persona y un usuario ![image](https://github.com/user-attachments/assets/96b5fe5c-22a7-43a4-8e8d-510e4caf8c24) ![image](https://github.com/user-attachments/assets/52851207-f856-495b-810d-6c0b2b40dcca)
    {
    "documento": "12342345",
    "tipo_documento": 1,
    "nombres": "Julian Santiago",
    "apellidos": "Cristancho Valencia",
    "direccion": "Calle 10",
    "telefono": "310345345",
    "estado": 1
    }

    {
    "id_persona": 1,
    "email": "julian@email.com",
    "password": "julian123",
    "estado": 1
    }
3. Cuando ya los tengas ya podemos pasar al Front - End

Front - End

1. Lo mismo que en el Back - End, abrimos la carpeta Front - End y posteriormente students-search-app
2. Das click derecho sobre cualquier parte y en caso de Windows 11 le das en Mas opciones y posteriormente "open git bash here"
3. Ejecutas el siguiente comando "npm install" esto hara que se instalen todas las dependecias necesarias
4. Ahora por ultimo ejecutas el siguiente comando "npm run dev"
5. Ya tienes el Front - End corriendo

PARA INGRESAR AL BUSCADOR

1. Como se mostro antes en las peticiones de postman tienes que ingresar con los siguientes datos: email: julian@email.com y la contraseña es julian123
2. Le das al boton de iniciar sesion
3. Ya puedes buscar los estudiantes que fueron aprobados por CYMETRYA
4. Si no los encuentras te aparecera un error

