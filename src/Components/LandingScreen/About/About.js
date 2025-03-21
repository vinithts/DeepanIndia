import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import aboutImg from "../../../assets/about-us_24.png";

export const About = ({ data }) => {
  const { title, description } = data[0] || {};

  return (
    <MainBox>
      <ContentBox>
        <InsideBox>
          <Grid container spacing={10} alignItems="center">
            {/* Text Column */}
            <Grid item xs={12} md={6}>
              <TextBox>
                <Typography
                  sx={{
                    fontSize: { xs: "32px", md: "40px" },
                    fontWeight: 900,
                    color: "white",
                    textAlign: "left",
                  }}
                >
                  About Us
                </Typography>
                <StyledDivider />
                <Typography
                  sx={{
                    fontSize: { xs: "18px", md: "20px" },
                    fontWeight: 600,
                    color: "white",
                    textAlign: "left",
                    marginTop: "20px",
                  }}
                >
                  {title || "Deepan India, we believe that wealth creation should be accessible to everyone. Our mission is to empower investors with financial education, strategic investment guidance, and risk management solutions"}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "14px", md: "16px" },
                    fontWeight: 400,
                    color: "white",
                    textAlign: "left",
                  }}
                >
                  {description || "We offer personalized investment and trading strategies tailored to individual financial goals and risk appetites. Whether you're a beginner or an experienced investor, our technology-driven approach ensures transparent, data-backed, and result-oriented wealth management.With a performance-based fee model, we succeed only when you do. Our commitment is simple: Zero fixed fees, 100% transparency, and lifetime support."}
                </Typography>
              </TextBox>
            </Grid>

            {/* Image Column (Hidden on extra small screens) */}
            <Grid item xs={12} md={6}>
              <ImageBox>
                <StyledImage src={aboutImg} alt="About Us" />
              </ImageBox>
            </Grid>
          </Grid>
        </InsideBox>
      </ContentBox>
    </MainBox>
  );
};

/* Styled Components */
const MainBox = styled(Box)`
  position: relative;
  width: 100%;
  height: auto;
  background-color: #23395d;
`;

const ContentBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 40px;

  @media (max-width: 900px) {
    padding: 40px 20px;
  }
`;

const InsideBox = styled(Box)`
  display: flex;
  justify-content: center;
`;

const TextBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  color: white;
`;

const StyledDivider = styled(Divider)`
  background-color: white;
  height: 6px;
  margin: 50px 0;
  width: 200px;
`;

const ImageBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  @media (min-width: 600px) {
    margin-top: 0;
  }
`;

const StyledImage = styled.img`
  width: 500px;
  height: 500px; 
  /* object-fit: cover; */

  @media (max-width: 600px) {
    height: auto; 
    width:100%;
  }
`;
