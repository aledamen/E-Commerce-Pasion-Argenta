import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { ProductsCards } from "../commons/ProductsCard";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const Grid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/products/all")
      .then((res) => res.data)
      .then((data) => setProducts(data));
  }, []);

  const handleIndumentaria = () => {
    axios
      .post("api/products/category", { cat: "Indumentaria" })
      .then((res) => res.data)
      .then((data) => setProducts(data));
  };

  const handleAccesorios = () => {
    axios
      .post("api/products/category", { cat: "Accesorios" })
      .then((res) => res.data)
      .then((data) => setProducts(data));
  };

  const handleBazar = () => {
    axios
      .post("api/products/category", { cat: "Bazar" })
      .then((res) => res.data)
      .then((data) => setProducts(data));
  };
  const handleProductos = () => {
    axios
      .get("/api/products/all")
      .then((res) => res.data)
      .then((data) => setProducts(data));
  };

  return (
    <div>
      <Container>
        <Grid2
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          
        >
          <ButtonGroup 
            variant="contained"
            aria-label="outlined primary button group"
            style={{ marginBottom: "20px" }}
          >
            <Button size="large" onClick={handleProductos}>Productos</Button>
            <Button onClick={handleIndumentaria}>Indumentaria</Button>
            <Button onClick={handleAccesorios}>Accesorios</Button>
            <Button onClick={handleBazar}>Bazar</Button>
          </ButtonGroup>
        </Grid2>

        <Row>
          {products.map((product, index) => (
            <Col style={{ marginBottom: "20px" }} key={`product-${index}`}>
              <ProductsCards key={index} props={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Grid;
