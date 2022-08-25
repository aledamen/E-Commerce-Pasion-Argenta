import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const ProductsCards = ({ props }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Link to={`/products/${props._id}`} style={{ textDecoration: "none" }}>
          <Card.Img variant="top" src={props.img} />
        </Link>
        <Card.Body>
          <Card.Title
            style={{
              width: "250px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {props.name}
          </Card.Title>

          <div class="d-flex flex-row-reverse">
            <h5 style={{ color: "black" }}>
              {" "}
              ${props.price}
              <span>
                <IconButton
                  onClick={() => {
                    alert("agregado al carrito");
                  }}
                  color="default"
                  aria-label="add to shopping cart"
                >
                  <AddShoppingCartIcon fontSize="medium" />
                </IconButton>
              </span>
            </h5>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
