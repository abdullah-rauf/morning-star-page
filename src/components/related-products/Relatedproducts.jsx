import React from "react";
import { Grid, Typography, Card, CardContent, Box } from "@mui/material";
import forbes from "../../images/3 1.svg";
import midtire from "../../images/download 1.svg";
import market from "../../images/2 1.svg";
import crypto from "../../images/1 1.svg";

const products = [
  {
    title: "Forbes",
    description: "Full Feature",
    price: "$7,500.00",
    deliveryTime: "2 Weeks",
    image: forbes,
  },
  {
    title: "Forbes",
    description: "Full Feature",
    price: "$7,500.00",
    deliveryTime: "2 Weeks",
    image: midtire,
  },
  {
    title: "Forbes",
    description: "Full Feature",
    price: "$7,500.00",
    deliveryTime: "2 Weeks",
    image: market,
  },
  {
    title: "Forbes",
    description: "Profile",
    price: "$7,500.00",
    deliveryTime: "2 Weeks",
    image: crypto,
  },
];

const RelatedProducts = () => {
  return (
    <Box sx={{ marginTop: { sm: "50px" }, marginTop: { xs: "50px" } }}>
      <Typography variant="h4" align="center" gutterBottom>
        Related Products
      </Typography>
      <Grid container spacing={3} sx={{}}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box style={{ textAlign: "center", padding: "20px" }}>
              <>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: "100%", height: "220px" }}
                />
                <Typography variant="h6">{product.title}</Typography>
                <Typography variant="h6" color="primary">
                  {product.price}
                </Typography>
                <Typography variant="body2">
                  Est. Delivery Time: {product.deliveryTime}
                </Typography>
              </>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RelatedProducts;
