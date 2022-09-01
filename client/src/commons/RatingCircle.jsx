import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


function RatingCircle({ product }) {
  let average = 0;
  const findAverage = (product) => {
    const { length } = product;
    return product.reduce((acc, val) => {
      return acc + val.rating / length;
    }, 0);
  };
  Array.isArray(product) ? (average = findAverage(product)) : (average = 0);
  
  return (
    <>
      <Typography align="left" variant="h5" sx={{ fontWeight: "bold" }}>
        Opiniones de los usuarios:
      </Typography>
      <br />
      <Box sx={{ ml: 5,  position: "relative", display: "inline-flex" }}>
        <CircularProgress
          variant="determinate"
          value="100"
          color="secondary"
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
          <Typography variant="h4">{average.toFixed(1)}/5</Typography>
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
            {" "}
            <CircularProgress
              variant="determinate"
              value={(average * 20).toFixed(2)}
              color="info"
              size={150}
            />
          </Box>
        </Box>
      </Box>
      <Typography sx={{ ml:4, fontStyle: "italic" }}>
        Basado en {product.length} opiniones
      </Typography>
    </>
  );
}

export default RatingCircle;
