import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import imageOne from "../../images/Group 23.jpg";
import imageTwo from "../../images/Group 24.jpg";
import imageThree from "../../images/Group 25.jpg";

const blogPosts = [
  {
    date: "18 Apr, 2023",
    title: "Natural Wonders: Public Relations For The Great Outdoors",
    image: imageOne,
  },
  {
    date: "18 Apr, 2023",
    title: "Natural Wonders: Public Relations For The Great Outdoors",
    image: imageTwo,
  },
  {
    date: "18 Apr, 2023",
    title: "Natural Wonders: Public Relations For The Great Outdoors",
    image: imageThree,
  },
];

const BlogPosts = () => {
  return (
    <Box sx={{ mt: { lg: "30px" } }}>
      <Typography variant="h4" align="center" gutterBottom>
        Blog Posts
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{}}>
        {blogPosts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <img
                src={post.image}
                alt=""
                style={{ width: "100%", cursor: "pointer" }}
              />
              <CardContent>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ cursor: "pointer" }}
                >
                  {post.date}
                </Typography>
                <Typography variant="h6" sx={{ cursor: "pointer" }}>
                  {post.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogPosts;
