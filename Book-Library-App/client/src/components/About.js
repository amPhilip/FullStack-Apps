import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "Poppins" }} variant="h3">
          CRUD MERN Application
        </Typography>
        <Typography sx={{ fontFamily: "Montserrat" }} variant="h5">
          made with ❤ by amPhilip
        </Typography>
      </Box>
    </div>
  );
};

export default About;