import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import { usersSlice } from './features/api/usersSlice';
import { studentsSlice } from './features/api/StudentsSlice';


/** Agrupamos los estados en una sola ubicacion */

const store = configureStore({
    reducer: {
        [usersSlice.reducerPath]: usersSlice.reducer,
        [studentsSlice.reducerPath]: studentsSlice.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(usersSlice.middleware)
    .concat(studentsSlice.middleware)
})

export default store;