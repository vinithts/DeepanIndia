import React from "react";
import { useParams } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import aboutImage from "../../../assets/about-us.jpg";
import MutualFundsSection from "./Mutualfund";
import FixedDepost from "./FixedDepost";
import TrainingInFinancialMarketing from "./TrainingInFinancialMarketing";
import AlternativeInvestMentFunt from "./AlternativeInvestMentFunt";
import Insurance from "./Insurance";
import AdvisoryService from "./AdvisoryService";
import RealEstateFund from "./RealEstateFund";
import AlgoTrading from "./AlgoTrading";

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

const ServiceDetails = () => {
  const { serviceName } = useParams();

  return (
    <>
      <MainBox image={aboutImage}>
        {/* Slide Content */}
        <ContentBox>
          <Typography variant="h2" className="subTitle">
            {serviceName.replace(/-/g, " ").toUpperCase()}
          </Typography>
        </ContentBox>
      </MainBox>
      <Main2Box>
        <Content1Box>
          {serviceName === "fixed-deposits-&-bond" && (
          <FixedDepost serviceName={serviceName} />
          )}
          {serviceName === "mutual-funds" && (
           <MutualFundsSection serviceName={serviceName}/>
          )}
          {serviceName === "training-in-financial-markets" && (
          <TrainingInFinancialMarketing serviceName={serviceName} />
          )}
          {serviceName === "alternate-investment-funds-(AIFS)" && (
          <AlternativeInvestMentFunt serviceName={serviceName} />
          )}
          {serviceName === "insurances" && (
           <Insurance serviceName={serviceName} />
          )}
          {serviceName === "advisory-services" && (
           <AdvisoryService serviceName={serviceName} />
          )}
          {serviceName === "real-estate-funds" && (
           <RealEstateFund serviceName={serviceName} />
          )}
          {serviceName === "algo-trading" && (
         <AlgoTrading serviceName={serviceName} />
          )}
        </Content1Box>
      </Main2Box>
    </>
  );
};

export default ServiceDetails;

/* Styled Components */
const MainBox = styled(Box)`
  position: relative;
  width: 100%;
  height: 300px;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  animation: ${slideIn} 0.8s ease-in-out;

  @media (max-width: 900px) {
    height: 200px;
  }
`;
const Main2Box = styled(Box)`
   padding: 60px 0;
  background-color: #f9f3fe;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    padding: 30px 0;
  }
`;
const ContentBox = styled(Box)`
  position: absolute;
  top: 40%;
  left: 10%;
  right: 10%;
  color: white;
  text-align: left;
  z-index: 1;

  .subTitle {
    font-size: 50px;
    font-weight: 900;
    margin-bottom: 8px;
    color: #49326b;
    @media (max-width: 600px) {
      font-size: 20px;
    }
  }

  .title {
    font-size: 12px;
    margin-bottom: 8px;
    color: black;
    @media (max-width: 600px) {
      font-size: 12px;
    }
  }
`;
const Content1Box = styled(Box)`
  /* position: absolute;
  color: white;
  text-align: left;
  z-index: 1;
  padding: 50px; */
  display: flex;
  align-items: center;
  justify-content: center;
`;


