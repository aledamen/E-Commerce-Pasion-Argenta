import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";

function Reviews({ product }) {
  return (
    <div>
      <br />
      <Card
        style={{ backgroundColor: "white" }}
        variant="outlined"
        sx={{ minWidth: 275 }}
      >
        <CardContent>
          <Typography align="center" variant="h5">
            Opiniones de los usuarios:
          </Typography>
          <Typography align="center" variant="h5">
            Promedio: {average.toFixed(2)}
          </Typography>
          <Box sx={{ position: "relative", display: "inline-flex" }}>
            <CircularProgress
              variant="determinate"
              value={(average * 20).toFixed(2)}
              color="info"
              size={150}
            />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography>{average.toFixed(2)}</Typography>
            </Box>
          </Box>

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
    </div>
  );
}

export default Reviews;
