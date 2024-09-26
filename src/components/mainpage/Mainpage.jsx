import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Grid, TextField, Button, Typography, Box } from "@mui/material";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      interestedIn: "",
      linkedIn: "",
      email: "",
      phone: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("First Name is required")
        .max(20, "This is more than 20 characters long"),
      lastName: Yup.string()
        .required("Last Name is required")
        .max(20, "This is more than 20 characters long"),
      interestedIn: Yup.string().required(
        "Interested In is required. Tell us what you're interested in."
      ),
      linkedIn: Yup.string().required("Please provide your LinkedIn username"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Please provide your email address"),
      phone: Yup.string().required("Phone number is required"),
    }),
    onSubmit: (values) => {
      console.log("Form values:", values);
      formik.resetForm(); //
      notify();
    },
  });

  // Toast
  const notify = () =>
    toast.success("Form Submitted", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "#000",
        color: "#fff",
        borderRadius: "12px",
      }}
    >
      <Typography
        variant="h4"
        sx={{ textAlign: "center", padding: "10px 0" }}
        gutterBottom
      >
        Contact Us Today!
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          name="firstName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          fullWidth
          label="First Name"
          variant="outlined"
          sx={{
            backgroundColor: "#fff",
            marginBottom: "20px",
            borderRadius: "12px",
          }}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />

        <TextField
          name="lastName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          fullWidth
          label="Last Name"
          variant="outlined"
          sx={{
            backgroundColor: "#fff",
            marginBottom: "20px",
            borderRadius: "12px",
          }}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />

        <TextField
          name="interestedIn"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.interestedIn}
          fullWidth
          label="Interested In..."
          variant="outlined"
          sx={{
            backgroundColor: "#fff",
            marginBottom: "20px",
            borderRadius: "12px",
          }}
          error={
            formik.touched.interestedIn && Boolean(formik.errors.interestedIn)
          }
          helperText={formik.touched.interestedIn && formik.errors.interestedIn}
        />

        <TextField
          name="linkedIn"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.linkedIn}
          fullWidth
          label="LinkedIn"
          variant="outlined"
          sx={{
            backgroundColor: "#fff",
            marginBottom: "20px",
            borderRadius: "12px",
          }}
          error={formik.touched.linkedIn && Boolean(formik.errors.linkedIn)}
          helperText={formik.touched.linkedIn && formik.errors.linkedIn}
        />

        <TextField
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          fullWidth
          label="Email Address"
          variant="outlined"
          sx={{
            backgroundColor: "#fff",
            marginBottom: "20px",
            borderRadius: "12px",
          }}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          name="phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
          fullWidth
          label="Phone Number"
          variant="outlined"
          sx={{
            backgroundColor: "#fff",
            marginBottom: "20px",
            borderRadius: "12px",
          }}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" gutterBottom>
            469-468-8828 OR
          </Typography>
          <Button
            type="submit" // Ensure the button has type="submit"
            variant="contained"
            color="primary"
            sx={{ padding: "10px 30px" }}
          >
            Submit
          </Button>
        </Box>
      </form>
      <Box mt={2}>
        <Typography variant="body2" sx={{ textAlign: "center" }}>
          YOUR CONTACT INFORMATION WILL NOT BE DISTRIBUTED
        </Typography>
      </Box>
      <ToastContainer />
    </Box>
  );
};

const MainPage = () => {
  const formArr = [
    "GOOGLE OUR CEO: Shazir Mucklai",
    "Amplify Your Coverage With Guaranteed Branding And PR Results",
    "Custom Written Press Releases",
    "Improve Conversion Rates By 300%. All Custom Content.",
    "We Utilize AI And SalesForce. We Create Pitches For You.",
    "#1 Customer Satisfaction Since 2002 - New Clients Save BIG!",
    "Guaranteed Placement Or A Full Refund FREE Content Creation. Draft By 5 Days Unlimited Revisions.",
    "2 Pictures, 2 Backlinks",
  ];
  return (
    <Grid container spacing={4} sx={{ mt: { lg: "30px" } }}>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" gutterBottom>
          Simple, Timely, And Cost Effective Press Release Distribution And Top
          Tier Media Placements
        </Typography>
        <Typography variant="body1" gutterBottom>
          Press Release Distribution To Over 1,200 Publications. Talk To Our
          In-House Journalists Today. America's Top Press Release Distribution
          Service. Results Guaranteed.
        </Typography>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            padding: "0 0 0 15px",
          }}
        >
          {formArr.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Grid>
      <Grid item xs={12} md={6}>
        <ContactForm />
      </Grid>
    </Grid>
  );
};

export default MainPage;
