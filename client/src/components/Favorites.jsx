import { Typography } from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ProductsCards } from "../commons/ProductsCard";


const Favorites = () => {
    const user = useSelector((state) => state.user);
  return (
    <div >
        <Typography sx={{ padding:"20px", fontWeight: '300', textAlign: 'center', fontSize: '30px' }}>Favoritos</Typography>
    <Container>
      <Row >
        {user.favorites?.map((product, index) => (
          <Col style={{marginBottom:"20px", display:"flex", justifyContent:"center"}} key={`product-${index}`}>
            <ProductsCards key={index} props={product} />
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
};

export default Favorites;
