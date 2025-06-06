import { Box, Typography, Grid, keyframes, Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Insurence from "../../../assets/insurancefromcanva.png";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import aboutImg1 from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";
import GetMoreButton from "../../Button/GetMoreButton";

const Insurance = ({ serviceName }) => {
  return (
    <Container maxWidth="lg">
      <QualificationBox >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #f9f3fe",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              sx={{
                alignItems: "left",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "self-start",
                  justifyContent: "left",
                  marginBottom:"8px"
                }}
              >
                <FiberManualRecordIcon sx={{ color: "#49326b", mt: "6px", mr: 1 }} />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#49326b",
                    fontSize: "1.5rem",
                  }}
                >
                Life, Health, and Term plans.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "self-start",
                  justifyContent: "left",
                  marginBottom:"8px"
                }}
              >
                <FiberManualRecordIcon sx={{ color: "#49326b", mt: "6px", mr: 1 }} />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#49326b",
                    fontSize: "1.5rem",
                  }}
                >
                  Secures family’s future and medical emergencies.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "self-start",
                  justifyContent: "left",
                }}
              >
                <FiberManualRecordIcon sx={{ color: "#49326b", mt: "6px", mr: 1 }} />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#49326b",
                    fontSize: "1.5rem",
                  }}
                >
                 Portfolio protection through smart cover allocation.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <img
                src={Insurence}
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
       <Box sx={{display:"flex", alignItems:"center",justifyContent:"center"}}><GetMoreButton/></Box>
    </Container>
  );
};

export default Insurance;

const fadeIn = keyframes`
  0% {
    transform: scale(1.02);
    /* opacity: 0.7; */
  }
  50% {
    transform: scale(1.03);
    /* opacity: 0.9; */
  }
  100% {
    transform: scale(1);
    /* opacity: 1; */
  }
`;
const QualificationBox = styled(Box)(({ image }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  // backgroundImage: `url(${image})`,
  // backgroundSize: "cover",
  // backgroundPosition: "center",
  border:"10px solid #e4d4fa",
  padding: "20px",
  borderRadius: "16px",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  animation: `${fadeIn} 6s ease-in-out infinite alternate`,

  "&:hover": {
    transition: "all 0.55s ease-in",
    boxShadow: `0 20px 40px #49326b`,
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  "& > *": {
    position: "relative",
    zIndex: 2,
  },
  "@media (max-width: 600px)": {
    padding: "20px 10px",
  },
}));


