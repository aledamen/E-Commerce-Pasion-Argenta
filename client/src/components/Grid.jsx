import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { ProductsCards } from "../commons/ProductsCard";
import { useParams } from "react-router";

const Grid = () => {
  const [products, setProducts] = useState([]);
  const params = useParams()
  
  useEffect(() => {
    axios
      .get("/api/products/all")
      .then((res) => res.data)
      .then((data) => setProducts(data));
  }, []);

  return (
    <div >
    <Container>
      <Row>
        {products.map((product, index) => (
          <Col style={{marginBottom:"20px"}} key={`product-${index}`}>
            <ProductsCards key={index} props={product} />
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
};

export default Grid;
