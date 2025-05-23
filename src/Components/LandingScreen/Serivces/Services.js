import { Box, Divider, Grid, Typography } from "@mui/material";
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
    title: "Algo Trading",
    image: Algo,
    icon: iconImage,
    path: "/service/algo-trading",
  },
  {
    title: " Advisory Services",
    image: pmsimage,
    icon: iconImage,
    path: "/service/advisory-services",
  },
  {
    title: "Fixed Deposits & Bonds",
    image: fixedimage,
    icon: iconImage,
    path: "/service/fixed-deposits-&-bond",
  },
  {
    title: " Alternate Investment Funds (AIFs)",
    image: Tree,
    icon: iconImage,
    path: "/service/alternate-investment-funds-(AIFS)",
  },

  {
    title: "Real Estate Funds",
    image: RealEstate,
    icon: iconImage,
    path: "/service/real-estate-funds",
  },
  {
    title: "Insurances",
    image: insurnanceimage,
    icon: iconImage,
    path: "/service/insurances",
  },
];

const Services = () => {
  const navigate = useNavigate();
  return (
    <MainBox id="offering">
      <BackgroundPattern/>
      <ContentBox>
        <Typography
          sx={{
            padding: "20px 40px 0px 40px",
            textAlign: "center",
            fontWeight: 900,
            background: `linear-gradient(135deg, #f33d25 0%,rgb(19, 18, 117) 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontSize: "50px",
            "@media (max-width: 600px)": {
              fontSize: "26px",
            },
          }}
        >
          Our Offerings
        </Typography>
        {/* <StyledDivider /> */}
        <Grid container spacing={4} justifyContent="center" padding={"40px"}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={2.4} key={index}>
              <ServiceCard>
                <ServiceImage src={service.image} alt={service.title} />
                <IconBox onClick={() => navigate(service.path)}>
                  <IconImage src={service.icon} alt={service.title} />
                  <Typography
                    sx={{
                      color: "#f33d25",
                      fontWeight: "bold",
                      fontSize: "20px",
                      ":hover": { color: "#52180b" },
                    }}
                  >
                    {service.title}
                  </Typography>
                </IconBox>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </ContentBox>
    </MainBox>
  );
};

export default Services;

const MainBox = styled(Box)`
  position: relative;
  width: 100%;
  height: auto;
 &::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: 1;
  background:
    linear-gradient(
      135deg,
rgb(240, 191, 179) 0%,
      rgba(255, 235, 235, 0.99) 50%,
      rgb(253, 246, 246) 100%
    ),
    radial-gradient(circle at 20% 80%, rgba(220, 20, 60, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(245, 61, 37, 0.1) 0%, transparent 50%);
}
  > * {
    position: relative;
    z-index: 2;
  }
`;
const BackgroundPattern = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  opacity: 0.03,
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23DC143C' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
  zIndex: 1,
});

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

const StyledDivider = styled(Divider)`
  background-color: white;
  height: 6px;
  /* margin: 50px 0; */
  width: 200px;
`;
const ServiceCard = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
   transition:
  transform 0.3s ease,
  box-shadow 0.3s ease;
  text-align: center;
  padding-bottom: 10px;
  border-bottom:10px solid #f33d25 ;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
  }
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
