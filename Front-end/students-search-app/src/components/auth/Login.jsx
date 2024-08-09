import { useState } from "react";
import { useLoginMutation } from "../../features/api/usersSlice";
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginSuccess } from "../../features/authSlice";

export default function Login(){

    const [login] = useLoginMutation();
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();        
        try {
            setError(false)
            const user = {
                email: e.target.email.value,
                password: e.target.password.value,
            }
            const response = await login(user)
            console.log(response)
            if(response.error || response.data.status == 'error'){
                Swal.fire({
                    icon: "error",
                    title: "Authentication error",
                    text: response.data.message,
                  });
            }else{
                localStorage.setItem('sessionData', JSON.stringify(response.data))
                dispatch(loginSuccess(response.data))
                Swal.fire({
                    icon: "success",
                    title: "Bienvenido",
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    navigate('/student')
                });
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="max-w-lg w-full mx-auto px-5 py-5 h-screen flex flex-row items-center justify-center p-5">
            <form onSubmit={handleSubmit} className=" shadow-md rounded p-8 h-2/6 w-11/12">
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
                    <input type="email" 
                            required 
                            name="email" 
                            placeholder="Email" 
                            className="shadow appearance-none border-gray-400 rounded-lg p-2 w-full focus:shadow-outline disabled:bg-slate-50 disabled:text-slate-500 
                                    disabled:border-slate-200 disabled:shadow-none
                                    invalid:border-pink-500 invalid:text-pink-600
                                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="password">Password</label>
                    <input type="password" 
                            required 
                            minLength="3"
                            name="password" 
                            placeholder="Password" 
                            className="shadow appearance-none  border-gray-400 rounded-lg p-2 w-full focus:shadow-outline 
                                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                    invalid:border-pink-500 invalid:text-pink-600
                                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden
                     text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500
                    group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4
                     focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2">Iniciar Sesion</button>
                </div>
            </form>
        </div>
    );
}