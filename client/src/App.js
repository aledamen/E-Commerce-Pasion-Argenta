<<<<<<< HEAD
import { Col, Container, Row } from "react-bootstrap";
import { Routes, Route } from 'react-router'
import  Grid  from "./components/Grid";
import LogIn from "./components/LogIn";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import Register from "./components/SignUp";
=======
import { Grid } from "./components/Grid";
import { Route, Routes } from "react-router";
import { ProductDetails } from "./commons/ProductDetails";

>>>>>>> 37ca9ab (importe redux)



function App() {
  return (
<<<<<<< HEAD
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Grid />} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
=======
    <>
     

      <Routes>
      <Route path="/" element={<Grid/>} />
      <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </>
>>>>>>> 37ca9ab (importe redux)
  );
}

export default App;
