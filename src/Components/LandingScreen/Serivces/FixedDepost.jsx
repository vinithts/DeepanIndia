import { Box,Typography,Grid, } from "@mui/material";
import React from "react";
import styled from "styled-components";
import fixed from "../../../assets/4454526-removebg-preview.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


const FixedDepost = ({ serviceName }) => {
  return (
    <QualificationBox>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "black" }}
            >
              <CheckCircleIcon sx={{ color: "#388e3c", mt: "4px", mr: 1 }} />{" "}
              Safe, stable returns.
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "black" }}
            >
              <CheckCircleIcon sx={{ color: "#388e3c", mt: "4px", mr: 1 }} />{" "}
              Ideal for conservative investors.
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "black" }}
            >
              <CheckCircleIcon sx={{ color: "#388e3c", mt: "4px", mr: 1 }} />{" "}
              Includes corporate FDs, government & tax-saving bonds.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <img
              src={fixed}
              alt="img"
              style={{
                width: "100%",
                maxWidth: "400px",
                display: "block",
                "@media (max-width: 600px)": { display: "none" },
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </QualificationBox>
  );
};

export default FixedDepost;

const QualificationBox = styled(Box)`
  background-color: rgba(131, 129, 129, 0.1);
  border-radius: 10px;
  padding: 40px;
  margin-bottom: 40px;
  backdrop-filter: blur(10px);
`;
