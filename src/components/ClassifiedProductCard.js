import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { LocationOn } from "@mui/icons-material";
import Drone from "../assets/drone.svg";

const ClassifiedProductCard = () => {
  return (
    <Card sx={{ borderRadius: "30px" }}>
      <CardMedia
        component="img"
        // height="314px"
        // width="348px"
        image={Drone}
        alt="green iguana"
      />
      <CardContent>
        <Typography variant="body1">
          Holy Stone HS470 Foldable GPS RC Drone
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mt={1}
        >
          <Typography variant="h5">$300.98</Typography>
          <Box display="flex">
            <LocationOn />
            <Typography variant="caption">Cape Hadstone</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ClassifiedProductCard;
