import React from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import ClassifiedProductCard from "./ClassifiedProductCard";

const Classifieds = () => {
  return (
    <Box
      height="70vh"
      display="flex"
      alignItems="center"
      mt={4}
      sx={{ backgroundColor: "#E5E5E5" }}
    >
      <Box
        mr={2}
        p={3}
        display="flex"
        textAlign="center"
        // alignItems="center"
        justifuContent="center"
        flexDirection="column"
      >
        <Typography variant="h5">Classified Products on the week</Typography>
        <Box mt={3}>
          <Button variant="contained">Explore</Button>
        </Box>
      </Box>
      <Grid container spacing={5}>
        <Grid item md={3}>
          <ClassifiedProductCard />
        </Grid>
        <Grid item md={3}>
          <ClassifiedProductCard />
        </Grid>
        <Grid item md={3}>
          <ClassifiedProductCard />
        </Grid>
        <Grid item md={3}>
          <ClassifiedProductCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Classifieds;
