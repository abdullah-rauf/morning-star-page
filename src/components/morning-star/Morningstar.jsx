import React, { useState } from "react";
import {
  Grid,
  Card,
  Typography,
  Button,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import morningstar from "../../images/wed-apr-12-2023-1222-pm37703 1.png";
import { WrapText } from "@mui/icons-material";

export default function Morningstar() {
  const [age, setAge] = useState(950);
  const handleChange = (e) => {
    setAge(e.target.value);
  };

  const listItems = [
    { item: "Place The Order!" },
    { item: "Fill out the questionnaire" },
    { item: "We write the content" },
    { item: "Articles are published" },
    { item: "You approve the content" },
  ];

  const [isReadMore, setIsReadMore] = useState(false);

  const readMore = () => {
    setIsReadMore((prevState) => !prevState);
  };

  let arr = [1, 2, 3, 4, 5, 6];

  return (
    <Box p={{ xs: "0px" }} sx={{ display: "flex", gap: "32px", mt: "40px" }}>
      <Grid
        container
        sx={{
          display: { xl: "flex" },
          justifyContent: { xl: "center" },
          alignItems: { xl: "center" },
          width: { xl: "1500px" },
          margin: { xl: "0 auto" },
          display: "flex",
          // gap: "32px",
        }}
      >
        <Grid
          item
          xs={12}
          md={5}
          sx={{ paddingRight: "40px", padding: { xs: "0px" } }}
        >
          <Box sx={{ width: "100%", height: "300px" }} fullWidth>
            <img
              src={morningstar}
              alt="Morningstar"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Typography variant="h6" mt={2}>
            Delivery
          </Typography>
          <Typography variant="h4" color="primary">
            ${age.toFixed(2)}
          </Typography>
          <Typography
            variant="body2"
            mt={1}
            sx={{ lineHeight: "1.7", width: "70%" }}
          >
            Guaranteed Placement Or A Full Refund FREE Content Creation. Draft
            By 5 Days Unlimited Revisions. <br />2 Pictures, 2 Backlinks
          </Typography>

          <FormControl sx={{ mt: "25px", width: "100%" }} fullWidth>
            <InputLabel id="demo-simple-select-label">Price</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Price"
              onChange={handleChange}
            >
              {arr.map((num) => (
                <MenuItem key={num} value={num * 950}>
                  {num}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Box mt={2} display="flex" gap={2}>
            <Button
              variant="contained"
              color="primary"
              sx={{ bgcolor: "#FFD814" }}
              fullWidth
            >
              Add to Cart
            </Button>
            <Button
              variant="contained"
              color="warning"
              sx={{ bgcolor: "#FFA41C" }}
              fullWidth
            >
              Buy Now
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            marginTop: { sm: "50px" },
            marginTop: { xs: "30px" },
            marginTop: { md: "0" },
            marginTop: { lg: "0px" },
            pl: { lg: "50px", md: "30px" },
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Button variant="contained" sx={{ mr: 2, width: { xs: "42%" } }}>
              This Product
            </Button>
            <Button
              variant="outlined"
              sx={{ bgcolor: "#292930", color: "#FFFFFF" }}
            >
              About This Publication
            </Button>
          </Box>

          <Typography variant="h4" mt={2}>
            Morningstar
          </Typography>
          <Typography variant="h6" color="#292930">
            $950.00
          </Typography>

          <Box mt={2}>
            <Typography variant="body1">
              <ul
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  margin: "0",
                  padding: "15px",
                  gap: "23px",
                }}
              >
                {listItems.map((name, index) => (
                  <li key={index}>{name.item}</li>
                ))}
              </ul>
            </Typography>
          </Box>
          <Typography variant="body2" mt={2} sx={{ lineHeight: "1.7" }}>
            Once the order is placed, our artificial intelligence system pairs
            you with a project manager and a copywriter in house. You will also
            receive an automated questionnaire which will ask you five to ten
            questions about your brand, the company, etc. Once we receive this
            questionnaire back, it takes us three to four business days to write
            the article. After you approve the article, we push it out for
            publication. The entire process from the time the order is placed to
            the time the article is published takes seven business days.
          </Typography>

          <Typography variant="h6" mt={2}>
            Topic:
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: "1.7" }}>
            The article will tell a unique story that’ll further the purpose of
            your career, your brand, as well as your overall brand image. We
            pair you up with a copywriter in-house, who will go over strategy
            and the angles of the article The article will tell a unique story
            that’ll further the purpose of your career, your brand, as well as
            your thanks.
          </Typography>

          <Box mt={2}>
            {isReadMore && (
              <Typography variant="body2">
                Brand image. We pair you up with a copywriter in-house, who will
                go over strategyand the angles of the article The article will
                tell a unique story thatll further the purpose of your career,
                your brand, as well as your thanks.
              </Typography>
            )}
            <Button variant="contained" color="primary" onClick={readMore}>
              Read {isReadMore ? "Less" : "More"}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
