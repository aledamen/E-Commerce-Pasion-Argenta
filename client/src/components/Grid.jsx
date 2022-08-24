import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import axios from "axios";
import { HorizontalScroll } from "../commons/HorizontalScroll";

export const Grid = () => {
  const [products, setProducts] = useState([]);

  //pedido axios a tmdb para testear
  useEffect(() => {
    axios
      .get("/api/products/all")
      .then((res) => res.data)
      .then((data)=> setProducts(data))
  }, []);

  
 
  return (
    <div>

  <HorizontalScroll props={products} />
  
  </div>
  );
};
