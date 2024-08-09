import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Login from "./components/auth/Login";
import { useDispatch } from 'react-redux'
import { useEffect } from "react";
import { loginSuccess, logout } from "./features/authSlice";
import PrivateRoute from "./components/PrivateRoute";
import StudentFormConsult from "./components/user/StudentFormConsult";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const sessionData = localStorage.getItem('sessionData');
    if(sessionData) {
      dispatch(loginSuccess(JSON.parse(sessionData)))      
    } else {
      localStorage.removeItem('sessionData')
      dispatch(logout())
    }
  })

  return (
    <>      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/student" element={<PrivateRoute Component={StudentFormConsult} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
