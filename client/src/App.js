
import { Col, Container, Row } from "react-bootstrap";
import { Routes, Route } from 'react-router'
import LogIn from "./components/LogIn";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import Register from "./components/SignUp";
import  Grid  from "./components/Grid";
import { ProductDetails } from "./commons/ProductDetails";
import Cart from "./components/Cart";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LogInRequest, sendMe, setUser, signUpRequest } from "./store/user";





function App() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  useEffect(()=>{
    // let token= localStorage.getItem("token")
    // let userLocal = JSON.parse(localStorage.getItem("user"))
    // dispatch(setUser(userLocal));
    dispatch(sendMe())
  }, [])

  return (    
    <div>
        <Navbar/>
        <Routes>
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path='/' element={<Grid />} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/profile' element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
   );
}

export default App;
