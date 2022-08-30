import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ProductsCards } from "../commons/ProductsCard";

const Favorites = () => {
    const user = useSelector((state) => state.user);

  return (
    <div >
        <h1>FAVORITOS</h1>
    <Container>
      <Row>
        {user.favorites.map((product, index) => (
          <Col style={{marginBottom:"20px"}} key={`product-${index}`}>
            <ProductsCards key={index} props={product} />
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
};

export default Favorites;
