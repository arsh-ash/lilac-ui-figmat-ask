import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  Grid,
  LinearProgress,
  CardContent,
} from "@mui/material";

const FlashCard = ({ data }) => {
  return (
    <Card sx={{borderRadius: "10px"}}>
      <CardContent
        sx={{ display: "flex", height: "200px" }}
      >
        <img src={data.image} alt="cardimg" />
        <Box px={2}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {data.name}
          </Typography>
          <Box mt={2} display="flex" justifyContent="space-between">
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold" }}
              color="primary"
            >
              ${data.price}
            </Typography>
            <Typography variant="body1">{data.remaining} left</Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={data.progress}
            sx={{ height: "6px", borderRadius: "10px", mt: 1 }}
            // color="secondaryś"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default FlashCard;
