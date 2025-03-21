import { Box, Grid, Tooltip, Typography } from "@mui/material";
import React from "react";
import styled, { keyframes } from "styled-components";
import BlogImg from "../../../assets/business-plan-concept-3d-rendering.jpg";
import solar1 from "../../../assets/solar1.png";
import solar2 from "../../../assets/solar2.png";
import solar3 from "../../../assets/solar3.png";
import solar4 from "../../../assets/solar4.png";
import solar5 from "../../../assets/solar5.png";
import solar6 from "../../../assets/solar6.png";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const products = [
  {
    title:
      "Start Investing – SIP or lump sum in our recommended mutual funds, stocks, or risk-free bonds",
    icon: solar1,
  },
  {
    title:
      "Short-Term Trading – Trade in qualified short-term equity delivery-based recommendations",
    icon: solar2,
  },
  {
    title:
      "Leverage Your Assets – Pledge your MF, stocks, or bonds to generate additional income using rule-based option trading strategies on our automated algorithmic platform.",
    icon: solar3,
  },
];
const Wealthy = () => {
  return (
    <MainBox image={BlogImg}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} md={3}>
          <TextBox>
            <Title>
              How <span style={{ color: "#95151A" }}> Deepan</span>{" "}
              <span style={{ color: "#23395d" }}>India</span> <br />
              Helps You Build Wealth?
            </Title>
            <br />
          </TextBox>
        </Grid>
        <Grid item xs={12} md={8} container>
          {products.map((product, index) => (
            <Grid item xs={12} sm={4} md={4} key={index}>
              <ProductCard>
                <IconWrapper src={product.icon} alt={product.title} />
                <Tooltip title={product.title} arrow>
                  <ProductTitle>{product.title}</ProductTitle>
                </Tooltip>
                {/* <ReadMore>Read More</ReadMore> */}
              </ProductCard>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </MainBox>
  );
};

export default Wealthy;

const MainBox = styled(Box)`
  position: relative;
  width: 100%;
  height: 500px;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    opacity: 0.9;
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 900px) {
    height: 100%;
  }
`;

const TextBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 40px;
`;

const Title = styled(Typography)`
  && {
    font-size: 28px;
    color: white;
    font-weight: bold;
  }
`;

const Description = styled(Typography)`
  && {
    font-size: 18px;
    color: white;
    text-align: left;
    max-width: 300px;
  }
`;

const ProductCard = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 0.5px solid rgba(185, 185, 184, 0.349);
  padding: 40px;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: 0.3s;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: rgb(5, 4, 59);
    transition: height 0.4s ease-in-out;
    z-index: -1;
  }

  &:hover::before {
    height: 100%;
  }
`;

const IconWrapper = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
  transition:
    transform 0.3s ease-in-out,
    filter 0.3s ease-in-out;

  ${ProductCard}:hover & {
    animation: ${slideIn} 0.5s ease-in-out forwards;
    filter: brightness(0) invert(1);
  }
`;

const ProductTitle = styled(Typography)`
  && {
    font-size: 20px;
    color: white;
    font-weight: bold;
    display: -webkit-box;
    -webkit-line-clamp: 4; /* Limits to 4 lines */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const ReadMore = styled(Typography)`
  && {
    font-size: 16px;
    font-weight: bold;
    color: white;
    margin-top: 20px;
    cursor: pointer;
  }
`;
