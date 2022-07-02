import React from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import ClassifiedProductCard from "../../components/ClassifiedProductCard";

const HotSale = () => {
  return (
    <Container maxWidth="xl">
      <Box
        height="70vh"
        //   display="flex"
        alignItems="center"
        mt={4}
        //   sx={{ backgroundColor: "#E5E5E5" }}
      >
        <Box>
          {" "}
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Hot Sale!
          </Typography>
        </Box>

        <Grid container spacing={5} sx={{ mt: 3 }}>
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
    </Container>
  );
};

export default HotSale;
