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
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SchoolIcon from "@mui/icons-material/School";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Handshake from "../../../assets/30758-removebg-preview-removebg-preview.png";

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
            color: "rgb(5, 4, 59)",
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
            color: "#fff",
            fontSize: "22px",
            marginBottom: "40px",
            fontWeight: 300,
            "@media (max-width: 600px)": {
              fontSize: "18px",
              marginBottom: "30px",
            },
          }}
        >
          Are you looking for an{" "}
          <HighlightSpan>independent income opportunities</HighlightSpan> in the
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
            <Grid container spacing={6}>
              <Grid item xs={12} sm={6} md={6}>
                <List>
                  {[
                    "Do you have a strong network?",
                    "Do you want to help others grow their wealth?",
                    "Are you an Insurance Agent, Mutual Fund Advisor, Real Estate Agent, or Sub-Broker?",
                    "Do you want to earn passive income?",
                  ].map((item, index) => (
                    <ListItem key={index} sx={{ paddingY: "8px" }}>
                      <ListItemIcon sx={{ minWidth: "40px" }}>
                        <CheckCircleIcon sx={{ color: "#4caf50" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{
                          sx: {
                            color: "#fff",
                            fontSize: "18px",
                            "@media (max-width: 600px)": {
                              fontSize: "16px",
                            },
                          },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
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
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "28px",
              fontWeight: "900",
              color: "white",
              marginTop: "20px",
              padding: "10px",
              "@media (max-width: 600px)": {
                fontSize: "18px",
              },
            }}
          >
            If so,{" "}
            <a href="#contact">
              <HighlightSpan>partner with Deepan India today!</HighlightSpan>
            </a>
          </Typography>
        </QualificationBox>

        <Typography
          sx={{
            padding: "30px 0 20px",
            textAlign: "center",
            fontWeight: 700,
            color: "rgb(5, 4, 59)",
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
                <CardContent>
                  <IconContainer>{benefit.icon}</IconContainer>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontWeight: 700,
                      marginBottom: "8px",
                      color: "#23395d",
                    }}
                  >
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
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
    background: rgba(0, 0, 0, 0.7);
    opacity: 0.5;
    z-index: 1;
  }
  > * {
    position: relative;
    z-index: 2;
  }
`;

const customBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const QualificationBox = styled(Box)`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 40px;
  margin-bottom: 40px;
  backdrop-filter: blur(10px);
`;

// const CtaText = styled(Typography)`
//   text-align: center;
//   font-size: 28px;
//   font-weight: 900;
//   color: white;
//   margin-top: 20px;
//   padding: 10px;

//   @media (max-width: 600px) {
//     font-size: 18px;
//   }
// `;

const HighlightSpan = styled.span`
  color: #f33d25;
  font-weight: 700;
  &:hover {
    color: red;
  }
`;

const BenefitCard = styled(Card)`
  height: 100%;
  transition:
  transform 0.3s ease,
  box-shadow 0.3s ease;
  text-align: center;
  border-top:10px solid #f33d25 ;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  background-color: #f3f1f155;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
  }
`;

const IconContainer = styled(Box)`
  color: #828285;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled(Button)`
  background-color: #ffc107;
  color: #23395d;
  padding: 12px 40px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 50px;
  text-transform: none;
  box-shadow: 0 4px 12px rgba(255, 193, 7, 0.3);

  &:hover {
    background-color: #ffca28;
    box-shadow: 0 6px 16px rgba(255, 193, 7, 0.4);
  }
`;
