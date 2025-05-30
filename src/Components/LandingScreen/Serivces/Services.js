import { Box, Divider, Grid, Typography, Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
import pig from "../../../assets/pig.jpeg";
import laptop from "../../../assets/laptop.jpeg";
import coin from "../../../assets/coin.jpeg";
import typer from "../../../assets/typer.jpeg";
import umberla from "../../../assets/umberla.jpeg";
import trader from "../../../assets/trader.jpeg";
import tab from "../../../assets/tab.jpeg";
import house from "../../../assets/house.jpeg";
import Algo from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Mutual Funds",
    image: pig,
    path: "/service/mutual-funds",
  },
  {
    title: "Training in Financial Markets",
    image: tab,
    path: "/service/training-in-financial-markets",
  },
  {
    title: "Algo Trading",
    image: trader,
    path: "/service/algo-trading",
  },
  {
    title: " Advisory Services",
    image: laptop,
    path: "/service/advisory-services",
  },
  {
    title: "Fixed Deposits & Bonds",
    image: coin,
    path: "/service/fixed-deposits-&-bond",
  },
  {
    title: " Alternate Investment Funds (AIFs)",
    image: typer,
    path: "/service/alternate-investment-funds-(AIFS)",
  },

  {
    title: "Real Estate Funds",
    image: house,
    path: "/service/real-estate-funds",
  },
  {
    title: "Insurances",
    image: umberla,
    path: "/service/insurances",
  },
];

const Services = () => {
  const navigate = useNavigate();
  return (
    <MainBox id="offering" image={Algo}>
      <BackgroundPattern/>
        <Container maxWidth="lg">
      <ContentBox>
        <Typography
          sx={{
            padding: "20px 40px 0px 40px",
            textAlign: "center",
            fontWeight: 900,
           color:"white",
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
            <Grid item xs={12} sm={6} md={3} key={index}>
              <ServiceCard>
                <ServiceImage src={service.image} alt={service.title} />
                <IconBox onClick={() => navigate(service.path)}>
                  {/* <IconImage src={service.icon} alt={service.title} /> */}
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "20px",
                      ":hover": { color: "#49326b" },
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
      </Container>
    </MainBox>
  );
};

export default Services;

const MainBox = styled(Box)(({ theme, image }) => ({
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  padding: "20px 0px 20px 0px",

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
}));
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
  border-radius: 20px;
  padding-bottom: 10px;
  /* border-bottom:10px solid #e4d4fa ; */
  /* box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2); */
  &:hover {
    transform: translateY(-5px);
    /* box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25); */
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  /* height: 13rem; */
  border-radius: 20px;
   transition:
  transform 0.3s ease,
  box-shadow 0.3s ease;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
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
