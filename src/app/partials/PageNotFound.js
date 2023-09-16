import React from "react";
import {
  Button,
  Typography,
  useMediaQuery,
  Box,
  Container,
} from "@mui/material";
import Footer from "./Footer";
import Navbar from "./Navbar";
import error from "../assets/img/users/error.jpg";
// import "./PageNotfound.css";
// import Axios from "../../../../utils/axios";

const heading = {
  fontWeight: "500",
  textAlign: "center",
  color: "#6973FE",
  marginTop: "30px",
  marginBottom: "10px",
  lineHeight: "70px",
};

const headingResponsive = {
  fontSize:"14px",
}

const imageStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // width: "100%",
};

const imageStylesResponsive = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "100%",
};

const btnStyles = {
  marginTop: "20px",
  display: "flex",
  justifyContent: "space-around",
};

const button = {
  width: "auto",
  fontSize: "18px",
  marginBottom: "20px",
  borderRadius: "30px",
  boxShadow: "none",
  border: "1px solid #7797FE",
  textTransform: "capitalize",
  backgroundColor: "white",
  color: "#7797FE",
  "&:hover": {
    color: "black",
    backgroundColor: "#7797FE",
  },
};

const buttonResponsive = {
  width: "auto",
  fontSize: "10px",
};

const PageNotFound = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  // const [loading, setLoading] = useState(false);
  //   const [data, setData] = useState([]);

  //   const fetchPageNotFound = async () => {
  //     try {
  //       const response = await Axios.get("/");
  //       setData(response.data.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchPageNotFound();
  //   }, []);

  return (
    <>
      <Navbar />
      <Box component="main">
        <Container>
          <Typography variant="h4" sx={{ ...heading, ...(isSmallScreen && headingResponsive) }}>
            Page You Are Looking For Is Not Found!
          </Typography>
          <Typography
            style={{ ...imageStyles, ...(isSmallScreen && imageStylesResponsive) }}
          >
            <img src={error} alt="No Preview" style={{ width: "100%" }}/>
          </Typography>

          <Box sx={btnStyles}>
            <Button type="submit" variant="contained" 
            sx={button}
            style={{ ...button, ...(isSmallScreen && buttonResponsive) }}
            >
              Go To Previous Page
            </Button>
            <Button type="submit" variant="contained" 
            sx={button}
            style={{ ...button, ...(isSmallScreen && buttonResponsive) }}
            >
              Go To Home Page
            </Button>
          </Box>
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default PageNotFound;