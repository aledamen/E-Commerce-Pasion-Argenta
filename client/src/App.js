import { Grid } from "./components/Grid";
import { Route, Routes } from "react-router";
import { ProductDetails } from "./commons/ProductDetails";




function App() {
  return (
    <>
     

      <Routes>
      <Route path="/" element={<Grid/>} />
      <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
