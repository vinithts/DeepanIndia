import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import mutualimage from "../../../assets/business-plan-concept-3d-rendering.jpg";
import Training from "../../../assets/training.jpg";
import fixedimage from "../../../assets/hand-adding-coins-stack-covered-dirt-plants.jpg";
import insurnanceimage from "../../../assets/1099.jpg";
import loanimage from "../../../assets/housing-loan-4385135_640.jpg";
import pmsimage from "../../../assets/business-people-working-with-ipad-high-angle.jpg";
import iconImage from "../../../assets/mf-icon.jpg";
import Tree from "../../../assets/tree-grows-coin-glass-jar-with-copy-space.jpg";
import RealEstate from "../../../assets/front-view-arrangement-economy-elements.jpg";
import Algo from "../../../assets/business-person-futuristic-business-environment.jpg";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Mutual Funds",
    image: mutualimage,
    icon: iconImage,
    path: "/service/mutual-funds",
  },
  {
    title: "Training in Financial Markets",
    image: Training,
    icon: iconImage,
    path: "/service/training-in-financial-markets",
  },
  {
    title:
      " Alternate Investment Funds (AIFs)",
    image: Tree,
    icon: iconImage,
    path: "/service/alternate-investment-funds-(AIFS)",
  },
   {
    title:
      " Advisory Services",
    image: pmsimage,
    icon: iconImage,
    path: "/service/advisory-services",
  },
   {
    title:
      "Real Estate Funds",
    image: RealEstate,
    icon: iconImage,
    path: "/service/real-estate-funds",
  },
   {
    title: "Fixed Deposits & Bonds",
    image: fixedimage,
    icon: iconImage,
    path: "/service/fixed-deposits-&-bond",
  },
    {
    title:
      "Insurances",
    image: insurnanceimage,
    icon: iconImage,
    path: "/service/insurances",
  },
   {
    title:
      "Algo Trading",
    image: Algo,
    icon: iconImage,
    path: "/service/algo-trading",
  }
];

const Services = () => {
  const navigate = useNavigate();
  return (
    <MainBox id="offering">
      <Typography
        sx={{
          padding: "40px",
          textAlign: "center",
          fontWeight: 900,
          color: "white",
          fontSize: "50px",
          "@media (max-width: 600px)": {
            fontSize: "26px",
          },
        }}
      >
        Our Offerings
      </Typography>

      <Grid container spacing={4} justifyContent="center" padding={"30px"}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={2.4} key={index}>
            <ServiceCard>
              <ServiceImage src={service.image} alt={service.title} />
              <IconBox onClick={() => navigate(service.path)}>
                <IconImage src={service.icon} alt={service.title} />
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "20px",
                    ":hover": { color: "black" },
                  }}
                >
                  {service.title}
                </Typography>
              </IconBox>
            </ServiceCard>
          </Grid>
        ))}
      </Grid>
    </MainBox>
  );
};

export default Services;

const MainBox = styled(Box)`
  background-color: #23395d;
  padding: 50px 0;
`;

const ServiceCard = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 13rem;
`;

const IconBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
`;

const IconImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin-right: 10px;
`;
