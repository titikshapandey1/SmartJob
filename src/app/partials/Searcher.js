
import React, { useState } from "react";
import {
  Button,
 useMediaQuery,
  //useTheme,
  Box,
  Divider,
  Grid,
  TextField,

} from "@mui/material";
import { LocationOn, WorkOutline, Search } from "@mui/icons-material";


const searchBarStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: "black",
  borderRadius: "25px",
  margin: "100px",
  padding: "8px 16px",
  border: "1px solid #6973FE",
  height: "60px",
};

const searchBarStylesResponsive = {
  height: "auto",
  width: "auto",
};

const iconContainerStyles = {
  display: "flex",
  alignItems: "center",
};

const buttonStyles = {
  width: { xs: "100%", md: "200px" },
  height: "40px",
  borderRadius: "50px",
  backgroundColor: "#CCFFCC",
  fontSize: "18px",
  color: "black",
  marginRight: "10px",
  "&:hover": {
    color: "white",
    backgroundColor: "#7797FE",
  },
  textTransform: "capitalize ",
  fontWeight: "600",
};

const dividerStyles = {
  backgroundColor: "#6973FE",
  height: "100%",
};

const Searcher = () => {
  const [value, setValue] = useState();
  //const theme = useTheme();
  //const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery("(max-width: 960px)");


  return (
   <>

<Box
        component="form" // Form element to handle form submission
        sx={{
          ...searchBarStyles,
          ...(isSmallScreen && searchBarStylesResponsive),
          flexDirection: isSmallScreen ? "column" : "row",
          margin:'10px'
        }}
      >
        {/* Search Input */}
        <Grid item style={{ marginRight: isSmallScreen ? "0" : "16px" }}>
          <Box sx={iconContainerStyles}>
            <Search />
            <TextField
              label="Skill/Designations/Companies"
              variant="outlined"
              size="small"
              fullWidth={!isSmallScreen}
              sx={{
                "& fieldset": { border: "none" },
              }}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </Box>
        </Grid>
        {!isSmallScreen && (
          <Divider orientation="vertical" sx={dividerStyles} />
        )}
        {/* Location Input */}
        <Grid item style={{ marginRight: isSmallScreen ? "0" : "16px" }}>
          <Box sx={iconContainerStyles}>
            <LocationOn />
            <TextField
              label="Location"
              variant="outlined"
              size="small"
              fullWidth={!isSmallScreen}
              sx={{
                "& fieldset": { border: "none" },
              }}
            />
          </Box>
        </Grid>
        {!isSmallScreen && (
          <Divider orientation="vertical" sx={dividerStyles} />
        )}
        {/* Experience Input */}
        <Grid item>
          <Box sx={iconContainerStyles}>
            <WorkOutline />
            <TextField
              label="Experience"
              variant="outlined"
              size="small"
              fullWidth={!isSmallScreen}
              sx={{
                "& fieldset": { border: "none" },
              }}
            />
          </Box>
        </Grid>
        {!isSmallScreen && (
          <Divider orientation="vertical" sx={dividerStyles} />
        )}
        {/* Submit Button */}
        <Button type="submit" variant="contained" sx={buttonStyles}>
          Search
        </Button>
      </Box>

   </>
  )
}

export default Searcher