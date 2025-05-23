import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Container,
  Divider,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SchoolIcon from "@mui/icons-material/School";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Handshake from "../../../assets/5454062-removebg-preview.png";

const Partner = () => {
  const benefits = [
    {
      icon: <WorkOutlineIcon fontSize="large" />,
      title: "Zero Office Expenses",
      description: "Work independently, from anywhere.",
    },
    {
      icon: <MonetizationOnIcon fontSize="large" />,
      title: "High Revenue Sharing",
      description: "Earn a substantial commission on referrals.",
    },
    {
      icon: <SchoolIcon fontSize="large" />,
      title: "Training & Customer Support",
      description: "We equip you with all the necessary tools and knowledge.",
    },
    {
      icon: <BrandingWatermarkIcon fontSize="large" />,
      title: "Marketing & Branding Support",
      description: "We help you establish credibility.",
    },
    {
      icon: <DashboardIcon fontSize="large" />,
      title: "Personal Dashboard",
      description:
        "Get a dedicated login with detailed reports on clients, revenue, and AUM.",
    },
  ];

  return (
    <MainBox id="partner">
      <Container maxWidth="xl">
        <Typography
          sx={{
            padding: "30px 0",
            textAlign: "center",
            fontWeight: 900,
            background: `linear-gradient(135deg, #f33d25 0%,rgb(19, 18, 117) 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontSize: "50px",
            "@media (max-width: 600px)": {
              fontSize: "26px",
              padding: "20px 0",
            },
          }}
        >
          Become Our Affiliate Partner
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#f20707",
            fontSize: "22px",
            marginBottom: "40px",
            fontWeight: 600,
            "@media (max-width: 600px)": {
              fontSize: "18px",
              marginBottom: "30px",
            },
          }}
        >
          Are you looking for an{" "}
          <HighlightSpan>Independent income opportunities</HighlightSpan> in the
          financial sector?
        </Typography>
        <QualificationBox>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid container spacing={12}>
              <Grid item xs={12} sm={6} md={6}>
                <Box sx={{backgroundColor:"#f5ebeb", padding:"20px",marginBottom:"20px"}}>
                <List>
                  {[
                    "Do you have a strong network?",
                    "Do you want to help others grow their wealth?",
                    "Are you an Insurance Agent, Mutual Fund Advisor, Real Estate Agent, or Sub-Broker?",
                    "Do you want to earn passive income?",
                  ].map((item, index) => (
                    <ListItem key={index} sx={{ paddingY: "8px" }}>
                      <ListItemIcon sx={{ minWidth: "40px" }}>
                        <CheckCircleIcon sx={{ color: "#9e0808" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{
                          sx: {
                            color: "#f00202",
                            fontSize: "18px",
                            fontWeight: 600,
                            "@media (max-width: 600px)": {
                              fontSize: "16px",
                            },
                          },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <img
                  src={Handshake}
                  alt="handshake"
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    display: "block",
                    "@media (max-width: 600px)": { display: "none" },
                  }}
                />
              </Grid>
            </Grid>
          </Box>
          <StyledDivider/>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "28px",
              fontWeight: "900",
              color: "#520909",
              marginTop: "20px",
              padding: "10px",
              "@media (max-width: 600px)": {
                fontSize: "18px",
              },
            }}
          >
            If so,{" "}
            <a href="#contact">
              <HighlightSpan>
                partner with
                <span style={{ fontWeight:900, color: "#f20707" }}>
                  {" "}
                  Deepan
                </span>{" "}
                <span style={{ fontWeight:900, color: "rgb(5, 4, 59)" }}>
                  India
                </span>{" "}
                today!
              </HighlightSpan>
            </a>
          </Typography>
        </QualificationBox>

        <Typography
          sx={{
            padding: "30px 0 20px",
            textAlign: "center",
            fontWeight: 700,
            color: "#991717",
            fontSize: "32px",
            "@media (max-width: 600px)": {
              fontSize: "22px",
              padding: "20px 0 10px",
            },
          }}
        >
          Benefits of Our Affiliate Program:
        </Typography>
        {/* <customBox> */}
        <Grid
          container
          spacing={3}
          sx={{
            marginBottom: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <BenefitCard>
                <CardContent style={{backgroundColor:"#fcfcfc"}}>
                  <IconContainer>{benefit.icon}</IconContainer>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontWeight: 700,
                      marginBottom: "8px",
                      color: "#d60b0b",
                    }}
                  >
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" sx={{color:"#9c5959"}}>
                    {benefit.description}
                  </Typography>
                </CardContent>
              </BenefitCard>
            </Grid>
          ))}
        </Grid>
        {/* </customBox> */}
      </Container>
    </MainBox>
  );
};

export default Partner;

const MainBox = styled(Box)`
  position: relative;
  width: 100%;
  padding-bottom: 50px;
  height: auto;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        135deg,
        rgb(245, 227, 223) 0%,
        rgba(250, 244, 244, 0.99) 50%,
        rgb(255, 255, 255) 100%
      ),
      radial-gradient(
        circle at 20% 80%,
        rgba(220, 20, 60, 0.1) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 20%,
        rgba(245, 61, 37, 0.1) 0%,
        transparent 50%
      );
    /* opacity: 0.5; */
    z-index: 1;
  }
  > * {
    position: relative;
    z-index: 2;
  }
`;

const QualificationBox = styled(Box)`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  /* border: 1px solid red; */
  padding: 40px 40px 20px 40px;
  margin-bottom: 40px;
  backdrop-filter: blur(10px);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
`;

const HighlightSpan = styled.span`
  color: #520909;
  font-weight: 700;
  font-size: 24px;
  &:hover {
    color: red;
  }
`;

const BenefitCard = styled(Box)`
  position: relative;
  width: 100%;
  height: 250px;
  padding: 20px;
  color: #000;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  clip-path: polygon(
    50% 0%,
    93% 25%,
    93% 75%,
    50% 100%,
    7% 75%,
    7% 25%
  );
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  z-index: 1;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip-path: inherit;
    background: #fcfcfc;
    border: 14px solid red;
    z-index: -1;
  }
`;


const IconContainer = styled(Box)`
  color: #8c0d0d;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDivider = styled(Divider)`
  background-color: gray;
  height: 2px;
  /* margin: 20px; */
  width: 100%;
`;