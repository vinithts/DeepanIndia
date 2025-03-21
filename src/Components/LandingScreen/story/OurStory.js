import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import styled, { keyframes } from "styled-components";
import backImage from "../../../assets/top-view-piggy-bank-money.jpg";
import aboutImage from "../../../assets/landingImage1.jpg";

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const OurStory = () => {
  return (
    <MainBox image={backImage}>
      <ContentBox>
        <Typography
          sx={{
            fontSize: { xs: "32px", md: "40px" },
            fontWeight: 900,
            color: "rgb(5, 4, 59)",
            textAlign: "center",
          }}
        >
          Our Story
        </Typography>
        <TileBox>
          <Grid container spacing={6}>
            <Grid item xs={12} md={4} xl={4}>
              <img
                src={aboutImage}
                alt="About Us"
                style={{ width: "100%", borderRadius: "5px" }}
              />
            </Grid>
            <Grid item xs={12} md={4} xl={4}>
              <ParaBox>
                <Customtypography2>
                  Deepan India was founded under the leadership of Mr. Raja
                  Yogi, a veteran with 24 years of experience in financial
                  markets. Starting his career as a Floor Assistant at the
                  Madras Stock Exchange, he later became an Authorized Partner
                  for reputed NSE brokers. Over the years, he witnessed the
                  challenges investors faced—lack of genuine advisors, high
                  fees, and one-size-fits-all strategies.
                </Customtypography2>
                <Divider
                  style={{
                    backgroundColor: "#b0e8bf",
                    width: "100%",
                    margin: "20px 0",
                  }}
                />
                <Customtypography2>
                  Our product range includes Solar Home systems, Commercial
                  Solar power plants, Solar Inverters, Solar Panels, Solar water
                  pumps and Solar Street-lights.
                </Customtypography2>
              </ParaBox>
            </Grid>
            <Grid item xs={12} md={4} xl={4}>
              <ParaBox>
                <Customtypography2>
                  Determined to bridge this gap, he established *Deepan India*
                  with a vision to provide customized, performance-driven
                  investment solutions* that truly benefit clients. Today, he
                  leads our research and trading desk, ensuring investors
                  receive expert guidance, innovative strategies, and lifelong
                  financial support.
                </Customtypography2>
                <br />
                <br />
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "rgb(65, 20, 9)",
                    color: "#0e7164",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "rgb(5, 4, 59)",
                      color: "white",
                    },
                  }}
                >
                  Read More
                </Button>
              </ParaBox>
            </Grid>
          </Grid>
        </TileBox>
      </ContentBox>
    </MainBox>
  );
};

export default OurStory;

const MainBox = styled(Box)`
  position: relative;
  width: 100%;
  height: auto;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  animation: ${slideIn} 0.8s ease-in-out;
  background-attachment: fixed;
  @media (max-width: 900px) {
    height: auto;
    background-attachment: scroll;
  }
`;
const ContentBox = styled(Box)`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 50px;

  @media (max-width: 900px) {
    padding: 40px 20px;
  }
`;

const Customtypography2 = styled(Typography)`
  && {
    text-align: left;
    font-size: 15px;
    font-weight: 400;
    color: black;
    transition: color 0.3s ease;
    animation: ${slideUp} 0.4s ease-out;
  }
`;

const TileBox = styled(Box)`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
`;

const ParaBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

