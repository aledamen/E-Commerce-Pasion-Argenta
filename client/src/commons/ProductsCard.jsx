import React from "react";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, sendMe } from "../store/user";
import { Alert, Snackbar } from "@mui/material";

export const ProductsCards = ({ props }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleAddCart = () => {
    setOpen(true)
    dispatch(addToCart({pid: props._id, amount:1})).then(()=>dispatch(sendMe()))
  }
  const handleCloseAlert = () => {
    setOpen(false);
  };

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

          <div className="d-flex flex-row-reverse">
            <h5 style={{ color: "black" }}>
              {" "}
              ${props.price}
              <span>
                <IconButton
                  onClick={handleAddCart}
                  color="default"
                  aria-label="add to shopping cart"
                >
                  <AddShoppingCartIcon fontSize="medium" />
                </IconButton>
              </span>
            </h5>
          </div>
        </Card.Body>
        <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleCloseAlert}
      >
        <Alert severity="success">Product added to cart</Alert>
        </Snackbar>
      </Card>
    </>
  );
};
