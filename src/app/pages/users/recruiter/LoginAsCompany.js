import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
  Box,
  FormControlLabel,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
// import Axios from "../../../utils/Axios";



const heading = {
  fontWeight: "600",
  textAlign: "left",
  color: "#6973FE",
  marginTop: "30px",
  marginBottom: "10px",
  lineHeight: "70px",
};

const headingResponsive = {
  fontSize: "1.2rem",
};


const button = {
  width: "auto",
  fontSize: "18px",
  marginBottom: "10px",
  borderRadius: "30px",
  textTransform: "capitalize",
  backgroundColor: "#CCFFCC",
  color: "black",
  "&:hover": {
    color: "black",
    backgroundColor: "white",
  },
};

const LoginAsCompany = () => {
  // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]);

  // const fetchLoginAsCompany = async () => {
  //   try {
  //     const response = await Axios.get("/login");
  //     setData(response.data.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchLoginAsCompany();
  // }, []);

  const isSmallScreen = useMediaQuery("(max-width: 960px)");
  return (
    <Container maxWidth="md">
      <Typography
        variant="h4"
        sx={{ ...heading, ...(isSmallScreen && headingResponsive) }}
      >
        Recruiter/Company Profile
      </Typography>

      <Grid container rowSpacing={4} columnSpacing={8}>
        <Grid item xs={12} md={6}>
          <TextField
            label="First Name"
            id="fname"
            name="f name"
            variant="outlined"
            fullWidth
            InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Last Name"
            id="lname"
            name="l name"
            variant="outlined"
            fullWidth
            InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Email Address"
            id="email"
            name="email"
            variant="outlined"
            fullWidth
            InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Mobile Number"
            id="mobile"
            name="mobile"
            variant="outlined"
            fullWidth
            InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Choose Current Location"
            id="location"
            name="location"
            variant="outlined"
            fullWidth
            InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Upload Your Photo"
            id="photo"
            name="photo"
            variant="outlined"
            fullWidth
            InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
      </Grid>
      <Typography
        variant="h4"
        sx={{ ...heading, ...(isSmallScreen && headingResponsive) }}
      >
        Professional Details
      </Typography>

      <Grid container rowSpacing={4} columnSpacing={12}>
        <Grid item xs={12} md={6}>
          <TextField
            label="Current Company Name"
            id="compnay"
            name="current company"
            variant="outlined"
            fullWidth
            InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Current Designation"
            id="desigantion"
            name="designation"
            variant="outlined"
            fullWidth
            InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="From Year"
            id="fromyear"
            name="From Year"
            variant="outlined"
            fullWidth
            InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="To Year"
            id="toyear"
            name="to year"
            variant="outlined"
            fullWidth
            InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Address Line 1"
            id="addressline1"
            name="address line 1"
            variant="outlined"
            fullWidth
            InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Address Line 2"
            id="addressline2"
            name="address line 2"
            variant="outlined"
            fullWidth
            InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="City"
            id="city"
            name="city"
            variant="outlined"
            fullWidth
            InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="State/Province/Region"
            id="state"
            name="state"
            variant="outlined"
            fullWidth
            InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Zip Code"
            id="zip"
            name="zip"
            variant="outlined"
            fullWidth
            InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Country"
            id="country"
            name="country"
            variant="outlined"
            fullWidth
            InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
      </Grid>

      <Typography
        variant="h4"
        sx={{ ...heading, ...(isSmallScreen && headingResponsive) }}
      >
        + Add Previous Company
      </Typography>
      <Grid container rowSpacing={4} columnSpacing={12}>
        <Grid item xs={12} md={6}>
          <TextField
            label="Total Experience In Hiring"
            id="totalexp."
            name="total experience"
            variant="outlined"
            fullWidth
            InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Level I Hire For"
            id="level"
            name="level"
            variant="outlined"
            fullWidth
            InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Industry"
            id="industry"
            name="industry"
            variant="outlined"
            fullWidth
            InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Functions"
            id="fucntions"
            name="fucntions"
            variant="outlined"
            fullWidth
            InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Skills I Hire For"
            id="skills"
            name="skills"
            variant="outlined"
            fullWidth
            InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Referral Code"
            id="referral"
            name="referral"
            variant="outlined"
            fullWidth
            InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
      </Grid>

      <Typography
        variant="h4"
        sx={{ ...heading, ...(isSmallScreen && headingResponsive) }}
      >
        Achievement
      </Typography>
      <Grid container rowSpacing={4} columnSpacing={8}>
        <Grid item xs={12} md={12}>
          <TextField
            label="Description"
            id="description"
            name="description"
            variant="outlined"
            fullWidth
            InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Year"
            id="year"
            name="year"
            variant="outlined"
            fullWidth
            InputProps={{ sx: { borderRadius: "33px" } }}
          />
        </Grid>
      </Grid>

      {/* <Box sx={{marginTop:"10px"}}>
        <p>
          <Checkbox
            {...label}
            defaultChecked
            sx={{ backgroundColor: "#CCFFCC", color: "black" }}
          />{" "}
         
        </p>
      </Box> */}

      <Grid item xs={12}>
        <Grid container justifyContent="space-between" alignItems="center">
          <FormControlLabel
            control={
              <Checkbox
                // checked={checked}
                // onChange={handleChange}
                className="circular-checkbox"
                style={{
                  borderRadius: "50%",
                  background: "#CCFFCC",
                  "& .MuiSvgIcon-root": {
                    borderRadius: "50%",
                  },
                }}
                color="default"
              />
            }
            label={
              <Typography variant="body1" style={{ color: "black",margin:"10px" }}>
                I agree to use the aforesaid details to create my Recruiter
                Profile & display it on the <b>SmartJob</b> site and also agree
                to be bound by the{" "}
                <span style={{ color: "#6973FE" }}>Terms & conditions </span> &{" "}
                <span style={{ color: "#6973FE" }}>Privacy of SmartJob </span> .
              </Typography>
            }
          />
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button type="submit" variant="contained" sx={button}>
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default LoginAsCompany;