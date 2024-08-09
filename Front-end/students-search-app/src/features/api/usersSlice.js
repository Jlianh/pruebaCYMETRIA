import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersSlice = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/',
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => ({
                url: 'auth/login',
                method: 'POST',
                body: body
            })
        })
    })
})

export const {
    useLoginMutation
} = usersSlice
