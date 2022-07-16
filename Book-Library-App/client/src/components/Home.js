import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 30, background: "#012049" }}
          variant="contained"
        >
          <Typography variant="h5" sx={{ fontFamily: "Poppins" }}>Check Available Books</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;
