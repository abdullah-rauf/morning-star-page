import BlogPosts from "./components/blog-post/BlogPost";
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";
import MainPage from "./components/mainpage/Mainpage";
import Morningstar from "./components/morning-star/Morningstar";
import Navbar from "./components/navbar/navbar";
import RelatedProducts from "./components/related-products/Relatedproducts";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <>
      <Morningstar />
      <RelatedProducts />
      <MainPage />
      <BlogPosts />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Box
        sx={{
          padding: { sm: "0px 120px", xs: "0px", md: "0px 120px" },
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
