import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  Grid,
  CardContent,
} from "@mui/material";
import ExClassifieds from "../../assets/exploreClass.jpg";
import AddClassifieds from "../../assets/addClass.jpg";
import ExProducts from "../../assets/exploreProd.jpg";
import Partner from "../../assets/partner.jpg";
import ExploreCard from "../../components/ExploreCard";

const Explore = () => {
  const data = [
    {
      id: 1,
      title: "Explore",
      name: "Classifieds",
      background: ExClassifieds,
      description: "Over 5000 + Products",
    },
    {
      id: 2,
      title: "Add",
      name: "Classifieds",
      background: AddClassifieds,
      description: "Ads,Event Ads",
    },
    {
      id: 3,
      title: "Explore",
      name: "Products",
      background: ExProducts,
      description: "Over 25000 + Products",
    },
    {
      id: 4,
      title: "Partner",
      name: "With Us",
      background: Partner,
      description: "Sell your Products",
    },
  ];
  return (
    <Container maxWidth="xl">
      {" "}
      <Grid container spacing={2}>
        {data.map((item) => (
          <Grid item md={6}>
            <ExploreCard data={item} />
            
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Explore;
