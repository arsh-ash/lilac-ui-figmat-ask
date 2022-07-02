import React from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import ClassifiedProductCard from "../../components/ClassifiedProductCard";

const Recommended = () => {
  return (
    <Container maxWidth="xl">
      <Box
        // height="70vh"
        //   display="flex"
        alignItems="center"
        mt={4}
        //   sx={{ backgroundColor: "#E5E5E5" }}
      >
        <Box display="flex" justifyContent="space-between">
          {" "}
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Recommended
          </Typography>
          <Button>View All</Button>
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

export default Recommended;
