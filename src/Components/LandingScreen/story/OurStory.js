import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Slide,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import backImage from "../../../assets/top-view-piggy-bank-money.jpg";
import aboutImage from "../../../assets/4066151-removebg-preview.png";
import { Url } from "../../../utils/api";

const OurStory = ({ data }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        // minHeight: "100vh",
        background: `linear-gradient(135deg, #f3f1f155 0%, #ffffff 100%)`,
        position: "relative",
        overflow: "hidden",
        padding: { xs: 4, md: 8 },
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
        radial-gradient(circle at 20% 50%, #f33d2510 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, #f3f1f120 0%, transparent 50%),
        radial-gradient(circle at 40% 80%, #f33d2508 0%, transparent 50%)
      `,
          zIndex: 0,
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 1,
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            sx={{
              order: { xs: 1, md: 2 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ mb: { xs: 4, md: 6 } }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: {
                    xs: "2rem",
                    sm: "2.5rem",
                    md: "3rem",
                    lg: "3.5rem",
                  },
                  marginBottom: "20px",
                  fontWeight: 900,
                  background: `linear-gradient(135deg, #f33d25 0%,rgb(19, 18, 117) 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Our Story
              </Typography>
              <Box sx={{backgroundColor:"#fcf6f5",padding:"20px"}}>
              <Typography
                variant="h6"
                sx={{
                  color: "#f33d25",
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  fontWeight: 400,
                  maxWidth: "600px",
                  lineHeight: 1.6,
                }}
              >
                <Box
                  component="span"
                  sx={{ color: "#bf3a1d", display: "inline", fontWeight: 700 }}
                >
                  Deepan{" "}
                </Box>
                <Box
                  component="span"
                  sx={{ color: "black", display: "inline", fontWeight: 700 }}
                >
                  India
                </Box>{" "}
                was founded under the leadership of Mr. Raja Yogi, a veteran
                with 24 years of experience in financial markets. Starting his
                career as a Floor Assistant at the Madras Stock Exchange, he
                later became an Authorized Partner for reputed NSE brokers. Over
                the years, he witnessed the challenges investors are facing lack
                of genuine trainers/advisors, high fees, and one-size-fits-all
                strategies.
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "#f33d25 ",
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  fontWeight: 400,
                  maxWidth: "600px",
                  lineHeight: 1.6,
                }}
              >
                <Divider
                  style={{
                    backgroundColor: "gray",
                    width: "100%",
                    margin: "20px 0",
                  }}
                />
                {data && data[0]?.subTitle
                  ? data[0].subTitle
                  : "Determined to bridge this gap, he established *Deepan India* with a vision to provide customized, performance-driven investment solutions that truly benefit clients. Today, he leads our research and trading desk, ensuring investors receive expert guidance, innovative strategies, and lifelong financial support."}
              </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} sx={{ order: { xs: 1, md: 2 } }}>
            <Slide in timeout={1000}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: { xs: 300, md: 400, lg: 450 },
                  mx: "auto",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: { xs: 280, md: 380, lg: 420 },
                    height: { xs: 280, md: 380, lg: 420 },
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, #f33d2520, #f3f1f130)`,
                    animation: "pulse 4s ease-in-out infinite",
                    "@keyframes pulse": {
                      "0%, 100%": {
                        transform: "translate(-50%, -50%) scale(1)",
                      },
                      "50%": {
                        transform: "translate(-50%, -50%) scale(1.05)",
                      },
                    },
                  }}
                />

                {/* Main Image */}
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 2,
                    "& img": {
                      width: "100%",
                      height: "auto",
                      filter: "drop-shadow(0 20px 40px rgba(243, 61, 37, 0.2))",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        transform: "scale(1.02) translateY(-5px)",
                        filter:
                          "drop-shadow(0 30px 60px rgba(243, 61, 37, 0.3))",
                      },
                    },
                  }}
                >
                  <img src={aboutImage} alt="Financial Services" />
                </Box>

                {/* Floating Elements */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "10%",
                    right: "-10%",
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background: `linear-gradient(45deg, #f33d25, #ff6b4a)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 32px rgba(243, 61, 37, 0.3)",
                    animation: "float 3s ease-in-out infinite",
                    "@keyframes float": {
                      "0%, 100%": { transform: "translateY(0px)" },
                      "50%": { transform: "translateY(-10px)" },
                    },
                  }}
                >
                  <TrendingUpIcon sx={{ color: "white", fontSize: "1.5rem" }} />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "15%",
                    left: "-8%",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: `#f3f1f1cc`,
                    border: `2px solid #f33d25`,
                    animation: "float 4s ease-in-out infinite reverse",
                  }}
                />
              </Box>
            </Slide>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurStory;
