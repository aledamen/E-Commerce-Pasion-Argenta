import { Routes, Route } from "react-router";
import LogIn from "./components/LogIn";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import { ProductDetails } from "./commons/ProductDetails";
import { Main } from "./components/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
