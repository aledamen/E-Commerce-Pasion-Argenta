import { Routes, Route } from "react-router";
import LogIn from "./components/LogIn";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import { ProductDetails } from "./commons/ProductDetails";
import { Home } from "./pages/Home";
import Cart from "./components/Cart";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMe } from "./store/user";
import CheckOutMessagge from "./components/CheckOutMessagge";
import Search from "./components/Search";
import Favorites from "./components/Favorites";
import Orders from "./components/Orders"



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
      <Navbar />
      <Routes>

      <Route path="/orders" element={<Orders />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/profile' element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/checkoutmessagge' element={<CheckOutMessagge />} />
        <Route path='/search/:search' element={<Search />} />
        <Route path='/favorites' element={<Favorites/>} />
      </Routes>
    </div>
   );
}

export default App;
