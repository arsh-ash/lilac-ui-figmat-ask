import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Box,
  Container,
  FormControl,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import {
  Search,
  FavoriteBorder,
  ShoppingBasket,
  AccountCircle,
} from "@mui/icons-material";
import Logo from "../assets/logo.svg";
const SubNav = () => {
  const [fields, setFields] = React.useState(10);
  const [categories, setCategory] = React.useState(10);

  const handleChange = (event) => {
    setFields(event.target.value);
  };
  const handleChange2 = (event) => {
    setCategory(event.target.value);
  };
  const navItems = [
    {
      id: "01",
      name: "Books",
    },
    {
      id: "02",
      name: "Electronics+",
    },
    {
      id: "03",
      name: "Real Estate",
    },
    {
      id: "04",
      name: "Cars-Bike",
    },
    {
      id: "05",
      name: "Dorm-furniture",
    },
    {
      id: "06",
      name: "Men",
    },
    {
      id: "07",
      name: "Women",
    },
    {
      id: "08",
      name: "Music",
    },
    {
      id: "09",
      name: "Hobbies",
    },
    {
      id: "10",
      name: "Games",
    },
    {
      id: "11",
      name: "Toys",
    },
    {
      id: "12",
      name: "Kids",
    },
  ];

  return (
    <Container maxWidth="xl">
      <Box my={2}>
        <Grid container spacing={2} alignItems="center">
          <Grid item md={1} sx={{ display: "flex", alignItems: "center" }}>
            {" "}
            <img src={Logo} alt="logo" width="100%" />
          </Grid>
          <Grid item md={2}>
            {" "}
            <FormControl fullWidth>
              
              <Select
                labelId="demo-simple-select-label"
                sx={{
                  backgroundColor: "#f7f7f7",
                  borderRadius: "8px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
                id="demo-simple-select"
                value={fields}
                label="Fields"
                onChange={handleChange}
              >
                <MenuItem value={10}>Classifieds</MenuItem>
                <MenuItem value={20}>Premium</MenuItem>
                <MenuItem value={30}>Diamond</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={3}>
            {" "}
            <TextField
              variant="outlined"
              fullWidth
              sx={{
                backgroundColor: "#f7f7f7",
                borderRadius: "8px",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
              placeholder="Search here..."
              inputProps={{ style: { border: "none" } }}
              InputProps={{
                style: { border: "none" },
                endAdornment: (
                  <InputAdornment position="end">
                    <Search color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={2}>
            <Box
              className="actions"
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="100%"
            >
              <FavoriteBorder />
              <ShoppingBasket sx={{ mx: 3 }} />
              <AccountCircle />
            </Box>
          </Grid>
          <Grid item md={1}>
            <Button
              className="cto"
              variant="contained"
              sx={{ py: 1.5, backgroundColor: "#37c6d7", fontSize: "12px" }}
            >
              Classifieds
            </Button>
          </Grid>
        </Grid>
        <Box className="list-menu" display="flex" alignItems="center" mt={2}>
          <FormControl>
            <Select
              labelId="demo-simple-select-label"
              sx={{
                // backgroundColor: "#f7f7f7",
                // borderRadius: "8px",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
              id="demo-simple-select"
              value={categories}
              label="categories"
              onChange={handleChange2}
            >
              <MenuItem value={10}>All Categories</MenuItem>
              <MenuItem value={20}>Category 2</MenuItem>
              <MenuItem value={30}>Category 3</MenuItem>
            </Select>
          </FormControl>
          {navItems.map((item) => (
            <Typography variant="body1" key={item.id} sx={{ ml: 2 }}>
              {item.name}
            </Typography>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default SubNav;
