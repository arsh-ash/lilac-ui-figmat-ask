import React from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import BestDealCard from "../../components/BestDealCard";
import fitBit from "../../assets/fitBand.svg";
import controller from "../../assets/controller.svg";
import headphones from "../../assets/headphones.svg";
import shoes from "../../assets/shoes.svg";
import watch from "../../assets/watch.svg";

const products = [
  {
    id: 1,
    name: "Fitness and activity Tracker",
    image: fitBit,
  },
  {
    id: 2,
    name: "XBOX controller for One X  ",
    image: controller,
  },
  {
    id: 3,
    name: "Super Boost Headphones",
    image: headphones,
  },
  {
    id: 4,
    name: "X-Ray 2 Square Pack",
    image: shoes,
  },
  {
    id: 5,
    name: "AX1326 Automatic Analog",
    image: watch,
  },
];

const BestDeals = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 6 }}>
      <Box display="flex" justifyContent="space-between" my={4}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>Best Deals</Typography>
        <Button>View All</Button>
      </Box>
      <Grid container spacing={5}>
        {products.map((product) => (
          <Grid item md={3}>
            <BestDealCard key={product.id} data={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BestDeals;
