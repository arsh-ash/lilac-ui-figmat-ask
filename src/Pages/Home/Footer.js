import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  IconButton,
} from "@mui/material";
import Logo from "../../assets/logo.svg";
import YT from "../../assets/Yt.svg";
import fb from "../../assets/fb.svg";
import In from "../../assets/In.svg";
import Twitter from "../../assets/twitter.svg";
import Ig from "../../assets/ig.svg";
import Headphones from "../../assets/headphoneIcon.svg";

const NavLogo = ({ logo }) => (
  <IconButton
    sx={{
      ml: 2,
      width: "38px",
      height: "38px",
      backgroundColor: "#F8F8F8",
      borderRadius: "12px",
    }}
  >
    <img src={logo} alt="icon" />
  </IconButton>
);

const FootItems = ({ heading, items }) => (
  <Box>
    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
      {heading}
    </Typography>
    <Box mt={2}>
      {items.map((navItem) => (
        <>
          <Typography variant="body1" sx={{ color: "#8D8D8D" }}>
            {navItem}
          </Typography>
        </>
      ))}
    </Box>
  </Box>
);

const Contact = () => (
  <Box>
    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
      Contact
    </Typography>

    <Typography variant="body1" sx={{ mt: 2 }} sx={{ color: "#8D8D8D" }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut
    </Typography>
    <Box display="flex" alignItems="center" mt={2}>
      <img src={Headphones} alt="headphones" />
      <Box mx={3}>
        <Typography variant="body1">Have any question?</Typography>
        <Typography variant="h6" color="primary">
          + 123 456 789
        </Typography>
      </Box>
      <Button variant="outlined" color="primary">
        <strong>Chat</strong>
      </Button>
    </Box>
  </Box>
);
const Footer = () => {
  const icons = [
    {
      id: 1,
      logo: YT,
    },
    {
      id: 2,
      logo: In,
    },
    {
      id: 3,
      logo: Twitter,
    },
    {
      id: 4,
      logo: fb,
    },
    {
      id: 5,
      logo: Ig,
    },
  ];

  const quick = ["Products", "Classifieds", "Contact Us", "Login", "Sign Up"];
  const customerArea = [
    "My Account",
    "Orders",
    "Tracking List",
    "Terms",
    "Privacy Policy",
    "Privacy Policy",
    "Return Policy",
    "My Cart",
  ];
  const vendorArea = [
    "Partner With Us",
    "Training",
    "Procedures",
    "Terms",
    "Privacy Policy",
  ];
  return (
    <Container maxWidth="xl">
      <Box py={6}>
        <Grid container spacing={4}>
          <Grid item md={3}>
            <img src={Logo} alt="bott-logo" />
            <Typography variant="body1" sx={{ color: "#8D8D8D" ,mt:2}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </Typography>
            <Box display="flex" mt={2}>
              {icons.map((item) => (
                <NavLogo logo={item.logo} key={item.id} />
              ))}
            </Box>
          </Grid>
          <Grid item md={2}>
            <FootItems heading="QUICK LINKS" items={quick} />
          </Grid>
          <Grid item md={2}>
            <FootItems heading="CUSTOMER AREA" items={customerArea} />
          </Grid>
          <Grid item md={2}>
            <FootItems heading="VENDOR AREA" items={vendorArea} />
          </Grid>
          <Grid item md={3}>
            <Contact />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Footer;
