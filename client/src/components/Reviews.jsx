import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import RatingCircle from "../commons/RatingCircle";

function Reviews({ product }) {
  return (
    <div>
      <br />
      {product.length == 0 ? (
        <Typography align="left" variant="h5" sx={{ fontWeight: "bold" }}>
          Éste producto aún no tiene opiniones de los usuarios
        </Typography>
      ) : (
        <Card
          style={{ backgroundColor: "white" }}
          variant="outlined"
          sx={{ minWidth: 275 }}
        >
          <CardContent>
            <RatingCircle product={product} />
            {product.map(({ review, rating }) => {
              return (
                <Box sx={{ p: 2, mt: 1 }}>
                  <Card
                    style={{ backgroundColor: "white" }}
                    sx={{ minWidth: 300 }}
                  >
                    <CardContent>
                      <TextField
                        style={{ backgroundColor: "white" }}
                        label="Review"
                        color="primary"
                        id="outlined-size-small"
                        defaultValue={review}
                        size="normal  "
                        fullWidth
                        focused
                        inputProps={{ readOnly: true }}
                      />
                      <br />
                      <Rating value={rating} readOnly />
                    </CardContent>
                  </Card>
                </Box>
              );
            })}
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default Reviews;
