import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  TextField,
  InputAdornment,
} from "@mui/material";
import newsMessage from "../../assets/newsMessage.svg";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const NewsLetter = () => {
  return (
    <Box mt={6}>
      <Box
        // height="50px"
        py={4}
        backgroundColor="#F8F8F8"
        display="flex"
        justifyContent="center"
      >
        <Typography variant="body1">Back to top</Typography>
        <KeyboardArrowUpIcon />
      </Box>
      <Box
        sx={{ backgroundColor: "primary.main", height: "200px" }}
        px={8}
        py={6}
        display="flex"
        alignItems="center"
      >
        <img src={newsMessage} alt="newsMessage" />
        <Box display="flex">
          <Box px={4}>
            <Typography variant="h4" color="white" sx={{ fontWeight: "bold" }}>
              Sign Up for Newsletter
            </Typography>
            <Typography variant="body1" color="white" sx={{ mt: 2 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
          <Box>
            <TextField
              variant="outlined"
              // fullWidth
              sx={{
                backgroundColor: "#f7f7f7",
                width: "600px",
                borderRadius: "8px",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
              placeholder="Enter yor email"
              inputProps={{ style: { border: "none" } }}
              InputProps={{
                style: { border: "none" },
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      sx={{ backgroundColor: "#4D4D4D" }}
                      variant="contained"
                    >
                      Subscribe
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NewsLetter;
