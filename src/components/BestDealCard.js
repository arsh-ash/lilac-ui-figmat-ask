import React from "react";
import { Box, Container, Typography, Button, Rating } from "@mui/material";
import Image from "../assets/fitBand.svg";

const BestDealCard = ({ data }) => {
  const [value, setValue] = React.useState(5);
  return (
    <Box display="flex">
      <img src={data.image} alt="best" width="100px" />
      <Box ml={2}>
        <Typography variant="h5">{data.name}</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          $4
        </Typography>
        <Box display="flex">
          <Rating name="read-only" value={value} readOnly size="small" />
          <Typography variant="caption1">(12)</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BestDealCard;
