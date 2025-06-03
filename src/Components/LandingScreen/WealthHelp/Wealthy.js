import { Box, Container, Grid, Tooltip, Typography } from "@mui/material";
import React from "react";
import styled, { keyframes } from "styled-components";
import { Url } from "../../../utils/api";
import BlogImg from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";
import solar3 from "../../../assets/Images2.png";
import solar2 from "../../../assets/Images3.png";
import solar1 from "../../../assets/27.png";


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
      "Leverage Your Assets – Pledge your holding for addtional income using automated rule-based option trading strategies.",
    icon: solar3,
  },
];
const Wealthy = ({ data }) => {
  const itemsToRender =
    Array.isArray(data) && data.length > 0
      ? data.map((item) => ({
          title: item.title,
          icon: item.image, // Adjust path if needed
        }))
      : products;

  return (
    <MainBox image={BlogImg}>
      <Container>
      <Box
        justifyContent="left"
        alignItems="left"
        display={"flex"}
        flexDirection="column"
      >
        <TextBox>
          <Title>
            How{" "}
            <span
              style={{ color: "#f33d25", fontSize: "32px", fontWeight: 900 }}
            >
              {" "}
              Deepan
            </span>{" "}
            <span
              style={{ color: "#e4d4fa", fontSize: "32px", fontWeight: 900 }}
            >
              India
            </span>{" "}
            <br />
            Helps You Build Wealth?
          </Title>
          <br />
        </TextBox>

        <Grid container spacing={4} >
          {itemsToRender.map((product, index) => (
            <Grid item xs={12} sm={4} md={4} key={index}>
              <ProductCard>
                <IconWrapper
                  src={
                    product.icon.startsWith("/Docs")
                      ? `${Url}${product.icon}`
                      : product.icon
                  }
                  alt={product.title}
                />
                <Tooltip title={product.title} arrow>
                  <ProductTitle>{product.title}</ProductTitle>
                </Tooltip>
              </ProductCard>
            </Grid>
          ))}
        </Grid>
      </Box>
      </Container>
    </MainBox>
  );
};

export default Wealthy;

const MainBox = styled(Box)`
  position: relative;
  width: 100%;
  height: 600px;
  padding-bottom: 30px;
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
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border-top: 10px solid #e4d4fa;
  padding: 20px 20px 10px 20px;
  text-align: center;
  overflow: hidden;
  transition: 0.3s;
  background-color:#f9f3fe;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const IconWrapper = styled.img`
  width: 50%;
  height: 50%;
  margin-bottom: 10px;
  color: #49326b;
  transition:
    transform 0.3s ease-in-out,
    filter 0.3s ease-in-out;
`;

const ProductTitle = styled(Typography)`
  && {
    font-size: 18px;
    color:  #49326b;
    font-weight: bold;
    /* border:2px solidrgb(253, 252, 253); */
    border-radius: 10px;
    padding:10px 10px 5px 10px;
    background-color:rgb(248, 248, 248);
    /* display: -webkit-box; */
    /* -webkit-line-clamp: 4; */
    /* -webkit-box-orient: vertical; */
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
