import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import axios from "axios";
import { HorizontalScroll } from "../commons/HorizontalScroll";

const Grid = () => {
  const [products, setProducts] = useState([]);

  //pedido axios a tmdb para testear
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=ad0325fab1fe8e15694efd8d579ef42a&language=en-US&page=1"
      )
      .then((res) => {
        setProducts(res.data.results);
      });
  }, []);

  

  return (
    <div>

  <HorizontalScroll props={products} />
  
  </div>
  );
};

export default Grid;