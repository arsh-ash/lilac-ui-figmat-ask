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
import arrow from "../assets/arrow.svg";

const ExploreCard = ({ data }) => {
  return (
    <Box
      p={3}
      height="250px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      sx={{ borderRadius: "15px", backgroundImage: `url(${data.background})` }}
    >
      <Box>
        <Typography variant="h4" color="white">
          {data.title}
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: "bold" }} color="white">
          {" "}
          {data.name}
        </Typography>
      </Box>

      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6" color="white">
          {data.description}
        </Typography>
        <img src={arrow} alt="arrow" />
      </Box>
    </Box>
  );
};

export default ExploreCard;
