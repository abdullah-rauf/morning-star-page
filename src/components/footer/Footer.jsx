import React from "react";
import { Grid, Typography, Link, Container, Box } from "@mui/material";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#f5f5f5",
        padding: "40px 0",
        cursor: "pointer",
      }}
    >
      <Box padding={1} sx={{}}>
        <Grid container spacing={4}>
          {/* Helpful Links */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: "flex",
              gap: "10px",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <Typography variant="h5" gutterBottom>
              Helpful Links
            </Typography>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              display="block"
              underline="none"
            >
              Search
            </Link>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              display="block"
              underline="none"
            >
              Home
            </Link>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              display="block"
              underline="none"
            >
              About Us
            </Link>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              display="block"
              underline="none"
            >
              Contact Us
            </Link>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              display="block"
              underline="none"
            >
              DM US
            </Link>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              display="block"
              underline="none"
            >
              Refund Policy
            </Link>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              display="block"
              underline="none"
            >
              Terms Of Service
            </Link>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              display="block"
              underline="none"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              display="block"
              underline="none"
            >
              Do Not Sell My Information
            </Link>
          </Grid>

          {/* About Us */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{ display: "flex", gap: "30px", flexDirection: "column" }}
          >
            <Typography variant="h5" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Imperium Group is an American public relations and marketing
              consultancy firm, founded in 2016 that specializes in guaranteed
              placements, creating utmost transparency for its clients.
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              style={{ marginTop: "10px" }}
            >
              Imperium Group generates over 15 million impressions a month for
              its clients. Currently consists of 25 team members based out of
              New York, Dallas, and Los Angeles.
            </Typography>
          </Grid>

          {/* Our Offices */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{ display: "flex", gap: "28px", flexDirection: "column" }}
          >
            <Typography variant="h5" gutterBottom>
              Our Offices
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <strong>Beverly Hills, CA:</strong> 407 N Maple Dr, Beverly Hills,
              CA 90210
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <strong>Palo Alto, CA:</strong> 3101 Park Blvd, Palo Alto, CA
              94306
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <strong>New York, NY:</strong> 437 Madison Ave, New York, NY 10022
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <strong>Dallas, TX:</strong> 7700 Windrose Ave, Plano, TX 75024
            </Typography>
          </Grid>

          {/* PR Resources */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{ display: "flex", gap: "22px", flexDirection: "column" }}
          >
            <Typography variant="h5" gutterBottom>
              PR Resources
            </Typography>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              display="block"
              underline="none"
            >
              Google My Business Benefits
            </Link>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              display="block"
              underline="none"
            >
              PR Resources
            </Link>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              display="block"
              underline="none"
            >
              Publicity, news, and news terms
            </Link>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              display="block"
              underline="none"
            >
              Public Relations Activities
            </Link>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              display="block"
              underline="none"
            >
              Communications: PR and Marketing
            </Link>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              display="block"
              underline="none"
            >
              Media Monitoring and Analysis Glossary
            </Link>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
};

export default Footer;
