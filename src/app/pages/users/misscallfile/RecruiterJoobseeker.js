import { Box, Button, Typography } from "@mui/material";
import React from "react";
import vector2 from "../../../assets/img/Vector2.png";
import vector1 from "../../../assets/img/Vector1.png";
import recruiter from "../../../assets/img/recruiter/recruiter.jpg";
import jobseeker from "../../../assets/img/users/jobseeker.jpg";

const RecruiterJobSeeker = () => {
  return (
    <>
      <Box>
        <Box>
          <img src={vector1} alt="" style={{ height: "100%", width: "100%" }} />
        </Box>
        <Box
          sx={{
            textAlign: "center",
            gap: "2%",
            display: { xs: "block", sm: "flex" },
            margin: "10px",
            padding: "10px",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "48%", border: "1px solid #6973FE" },
              padding:"20px",
              marginBottom:"10px",
            }}
          >
            <Typography variant="h4" >
              <strong> I AM A Jobseeker </strong> <br />
            </Typography>
            <Typography sx={{ fontSize: "18px" }}>
              {" "}
              Find your dream job and get hired by India's top <br />{" "}
              companies...
            </Typography>{" "}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                size="large"
                sx={{
                  marginRight:"5px",
                  borderRadius: "20px",
                  background: "#6973FE",
                  color: "#FFF",
                  "&:hover": {
                    backgroundColor: "white",
                    color:"#6973FE",
                    border:"1px solid #6973FE"
                  },
                }}
              >
                Browser job !
              </Button>

              <Typography
                sx={{
                  display: { xs: "none", sm: "none", md: "block" },
                }}
              >
                <img
                  alt=""
                  src={jobseeker}
                  style={{ height: "auto", width: "auto" }}
                ></img>
              </Typography>

            </div>
          </Box>

          <Box
            sx={{
              width: { xs: "100%", sm: "48%", border: "1px solid #6973FE" },
              padding:"20px",
              marginBottom:"10px",
            }}
          >
            <Typography variant="h4" >
              <strong> I AM A Jobseeker </strong> <br />
            </Typography>
            <Typography sx={{ fontSize: "18px" }}>
              {" "}
              Find your dream job and get hired by India's top <br />{" "}
              companies...
            </Typography>{" "}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                size="large"
                sx={{
                  marginRight:"10px",
                  borderRadius: "20px",
                  background: "#6973FE",
                  color: "#FFF",
                  "&:hover": {
                    backgroundColor: "white",
                    color:"#6973FE",
                    border:"1px solid #6973FE"
                  },
                }}
              >
                Post job !
              </Button>
              <br />
              <Typography
                sx={{
                  display: { xs: "none", sm: "none", md: "block" },
                }}
              >
                <img
                  alt=""
                  src={recruiter}
                  style={{ height: "auto", width: "auto" }}
                ></img>
              </Typography>
            </div>
          </Box>
        </Box>
        <Box>
          <img src={vector2} alt="" style={{ height: "100%", width: "100%" }} />
        </Box>
      </Box>
    </>
  );
};

export default RecruiterJobSeeker;