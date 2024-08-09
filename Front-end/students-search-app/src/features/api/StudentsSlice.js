import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const studentsSlice = createApi({
    reducerPath: "studentsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.talentotech.cymetria.com/api/v1/blockchain/',
    }),
    endpoints: (builder) => ({
        getStudent: builder.query({
            query: () => 'obtener-estudiantes-aprobados',
            providesTags: ['Users'],
            transformResponse: (response, meta, arg) => {
                return response.estudiantes_aprobados.find(student => student.estudiante.num_documento === arg);
            }
        }),
    })
})

export const { useGetStudentQuery,
} = studentsSlice
