import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Alert, Snackbar } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart, sendMe } from "../store/user";
import FavoriteIcon from '@mui/icons-material/Favorite';

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [openCart, setOpenCart] = useState(false);
  const [openFavorites, setOpenFavorites] = useState(false);
  const dispatch = useDispatch()


  useEffect(() => {
    axios
      .get(`/api/products/${id}`)
      .then((res) => res.data)
      .then((data) => setProduct(data));
  }, []);

  const handleAddCart = () => {
    setOpenCart(true)
    dispatch(addToCart({ pid: product[0]._id, amount: 1 })).then(() => dispatch(sendMe()))
  }
  const handleAddFavorites = () => {
    setOpenFavorites(true)
    dispatch(addToCart({ pid: product[0]._id, amount: 1 })).then(() => dispatch(sendMe()))
  }

  const handleClose = () => {
    setOpenCart(false);
    setOpenFavorites(false)
  };

  return (
    <>
      {product[0] ? (
        <div
          className="product-details container px-0"
          style={{
            backgroundImage: `url("https://escuelamarianomoreno.com.ar/wp-content/uploads/2021/06/bandera-argentina_1401-57.jpg")`,
          }}
        >
          <div className="product-det ">
            <Row>
              <Col sm={3}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={product[0].img} />
                </Card>
              </Col>

              <Col sm={9}>
                <div className="fuente-detaills">
                  <h2>{product[0].name} </h2>
                  <br></br>
                  <h3>descripción:</h3>
                  <p>{product[0].description}</p>
                  <div class="d-flex justify-content-around">
                    <h4>Stock:{product[0].stock}</h4>
                  </div>
                  <div class="d-flex flex-row-reverse">
                    <h4>
                      Precio : ${product[0].price}{" "}
                      <span>
                        <IconButton
                          onClick={handleAddCart}
                          color="primary"
                          aria-label="add to shopping cart"
                        >
                          <AddShoppingCartIcon fontSize="large" />

                        </IconButton >
                        <IconButton onClick={handleAddFavorites}
                          color="primary"
                          aria-label="add to shopping cart"
                        >
                          <FavoriteIcon fontSize="large" />
                        </IconButton >

                
                      </span>
                    </h4>
                  </div>
                </div>
                <div></div>
              </Col>
            </Row>
          </div>
        </div>
      ) : (
        <></>
      )}
      <Snackbar
        open={openCart}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert severity="success">Product added to Cart</Alert>
      </Snackbar>
      <Snackbar
        open={openFavorites}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert severity="success">Product added to Favorites</Alert>
        </Snackbar>

    </>
  );
};
