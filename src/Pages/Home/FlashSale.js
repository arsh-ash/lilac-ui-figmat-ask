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
import FlashCard from "../../components/FlashCard";
import Gshock from "../../assets/gShock.svg";
import printer from "../../assets/printer.svg";

const FlashSale = () => {
  const flasItems = [
    {
      id: 1,
      image: Gshock,
      name: "Casio G-Shock Ana-Digi Quartz World Time 200m Black",
      price: "33.3",
      remaining: 24,
      progress: 80,
    },
    {
      id: 2,
      image: printer,
      name: "Canon LBP113w imageCLASS WiFi Laser Printer",
      price: "33.3",
      remaining: 20,
      progress: 10,
    },
  ];
  return (
    <Container maxWidth="xl" sx={{my:10}}>
      <Card
        sx={{
          backgroundImage: "url(../../assets/saleBg.svg)",
          height: "271px",
          backgroundColor: "primary.main",
          borderRadius: "30px",
          py: 6,
        }}
      >
        <CardContent>
          <Box display="flex">
            <Box pl={4} width="25%">
              <Typography variant="h3" color="white" sx={{ mb: 2 }}>
                Flash Sale
              </Typography>
              <Typography variant="body1" color="white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </Typography>
              <Typography variant="h4" color="white" sx={{ mt: 3, mb: 2 }}>
                05 : 42 : 19 : 54
              </Typography>
            </Box>
            <Box>
              <Grid container spacing={4}>
                {flasItems.map((item) => (
                  <Grid item xs={12} md={6} key={item.id}>
                    <FlashCard data={item} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default FlashSale;
