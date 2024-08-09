/** Componente reutilizable para Crear y Actualizar un Usuario */
export default function StudentForm({ props }) {
    const { handleSubmit, submittedDocument, handleChange, errorMessage, isLoading, error, student  } = props

    return (
        <div className="max-w-md w-full mx-auto px-5 py-5 h-screen">
            <h1 className="font-bold text-center text-lg">Buscador de estudiantes</h1>
            <form onSubmit={handleSubmit} className="shadow-md rounded pt-6 pb-10 mb-4 px-10 mt-3 h-1/2">
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Documento</label>
                    <input type="text"
                        required
                        name="identification"
                        placeholder="Ingrese documento del estudiante"
                        minLength="6"
                        maxLength="11"
                        onChange={handleChange}
                        pattern="\d{6,10}"
                        className="shadow appearance-none border-gray-400 rounded-lg p-2 w-full focus:shadow-outline" />
                    {errorMessage && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
                </div>
                <div className="flex justify-center">
                    <button className="bg-blue-500 hover:bg-blue-700 rounded text-blue-50 font-bold py-2 px-4">Buscar</button>
                </div>
                {student && (
                    <div className="border border-gray-300 rounded-lg p-2 my-3 shadow-md">
                        <h1 className="text-center font-bold">Informacion del estudiante</h1>
                        <p className="my-5"><strong>Nombres: </strong> {student.estudiante.nombres} </p>
                        <p className="my-5"><strong>Apellidos: </strong> {student.estudiante.apellidos} </p>
                        <p className="my-5"><strong>N° Documento: </strong> {student.estudiante.tipo_documento} - {student.estudiante.num_documento}</p>
                        <p className="my-5"><strong>Email: </strong> {student.estudiante.email} </p>
                        <p className="my-5"><strong>Curso: </strong> {student.curso.nombreCurso} </p>
                    </div>
                )}
                {!isLoading && !error && !student && submittedDocument &&(
                <h1 className="font-bold text-red-400">No se encontro ningun estudiante</h1>
                )}
            </form>
        </div>
    );
}