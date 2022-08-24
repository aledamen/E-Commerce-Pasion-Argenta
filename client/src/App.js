
import { Col, Container, Row } from "react-bootstrap";
import { Routes, Route } from 'react-router'
import LogIn from "./components/LogIn";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import Register from "./components/SignUp";
import  Grid  from "./components/Grid";
import { ProductDetails } from "./commons/ProductDetails";





function App() {
  return (

    <div>
        <Navbar/>
        <Routes>
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path='/' element={<Grid />} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>

   );
}

export default App;
