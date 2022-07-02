import React from "react";
import { Box } from "@mui/material";
const HeroSlides = ({ item }) => {
  return (
    <Box width="100%" sx={{ borderRadius: "8px" }} height="500px">
      <img
        src={item.image}
        width="100%"
        height="100%"
        style={{ borderRadius: "8px" }}
      />
    </Box>
  );
};

export default HeroSlides;
