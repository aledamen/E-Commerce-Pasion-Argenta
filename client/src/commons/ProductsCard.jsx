import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const ProductsCards = ({ props }) => {

  
  return (
    <>
    <Link to={`/products/${props._id}`}>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={props.img}
        />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
         
        </Card.Body>
      </Card>
      </Link>
    </>
  );
};
