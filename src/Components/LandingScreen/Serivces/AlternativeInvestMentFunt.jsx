import { Box, Container, Grid, Typography, keyframes } from "@mui/material";
import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import aboutImg1 from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";
import AlternativeImage from "../../../assets/11-removebg-preview.png";

const AlternativeInvestMentFunt = ({ serviceName }) => {
  return (
    <Box sx={{ px: 2, py: 4 }}>
      <Container maxWidth="lg">
        <InfoCard>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #f9f3fe",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={6}>
                 <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                    justifyContent: "center",
                    padding: "20px",
                  }}
                >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "left",
                  }}
                >
                  <FiberManualRecordIcon
                    sx={{ color: "#49326b", mt: "4px", mr: 1 }}
                  />
                  <Typography variant="h5" fontWeight="bold" color="#49326b">
                    {" "}
                    Structured funds for HNIs.
                  </Typography>
                </Box>

                {/* Smart Trading for Wealth */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "left",
                  }}
                >
                  <FiberManualRecordIcon
                    sx={{ color: "#49326b", mt: "4px", mr: 1 }}
                  />
                  <Typography variant="h5" fontWeight="bold"color="#49326b">
                    {" "}
                    Diversification beyond traditional assets.
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "left",
                  }}
                >
                  <FiberManualRecordIcon
                    sx={{ color: "#49326b", mt: "4px", mr: 1 }}
                  />
                  <Typography variant="h5" fontWeight="bold" color="#49326b">
                    {" "}
                    Includes private equity, venture capital, hedge funds.
                  </Typography>
                </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Box sx={{ mt: 2, maxWidth: 300 }}>
                  <img
                    src={AlternativeImage}
                    alt="Puzzle of different investment assets forming a portfolio."
                    style={{ width: "100%", borderRadius: 8 }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </InfoCard>
      </Container>
    </Box>
  );
};

export default AlternativeInvestMentFunt;

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

const imageFloat = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;
const InfoCard = styled(Box)(({ image }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  border:"10px solid #e4d4fa",
  padding: "40px",
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
