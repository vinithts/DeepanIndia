import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Button,
} from "@mui/material";
import ElderlyIcon from "@mui/icons-material/Elderly";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import UpdateIcon from "@mui/icons-material/Update";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { styled, keyframes } from "styled-components";
import Handshake from "../../../assets/wealth.png";
import backImage from "../../../assets/top-view-piggy-bank-money.jpg";

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

const items = [
  {
    icon: <MonetizationOnIcon />,
    text: "Estimating your retirement corpus and monthly needs.",
  },
  {
    icon: <AccountBalanceIcon />,
    text: "Identifying income sources: pensions, NPS, provident funds, annuities.",
  },
  {
    icon: <ElderlyIcon />,
    text: "Structuring long-term investments for steady income and inflation protection.",
  },
  {
    icon: <HealthAndSafetyIcon />,
    text: "Planning healthcare and emergency reserves.",
  },
  {
    icon: <UpdateIcon />,
    text: "Ensuring your plan evolves with life’s changes.",
  },
];

const RetirementPlanning = () => {
  return (
    <MainBox image={backImage}>
      <Container maxWidth="xl">
        <Typography
          sx={{
            padding: "30px 0",
            textAlign: "center",
            fontWeight: 900,
            color: "#181515",
            fontSize: "50px",
            "@media (max-width: 600px)": {
              fontSize: "26px",
              padding: "20px 0 5px 0",
            },
          }}
        >
          Retirement Planning
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#5a5757",
            fontSize: "22px",
            marginBottom: "40px",
            fontWeight: 300,
            "@media (max-width: 600px)": {
              fontSize: "18px",
              marginBottom: "30px",
            },
          }}
        >
          Secure your future with a retirement plan that supports the lifestyle
          you deserve. Our services include:
          {/* <HighlightSpan>independent income opportunities</HighlightSpan> in the
              financial sector? */}
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
                <Grid container spacing={3}>
                  {items.map((item, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Paper
                        elevation={3}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          p: 2,
                          borderRadius: 3,
                        }}
                      >
                        <Avatar sx={{ bgcolor: "#8d6e63", mr: 2 }}>
                          {item.icon}
                        </Avatar>
                        <Typography sx={{fontWeight:"bold"}}>{item.text}</Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
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
            <HighlightSpan>
              {" "}
              We help you retire with confidence and independence.
            </HighlightSpan>
          </Typography>
        </QualificationBox>
      </Container>
    </MainBox>
  );
};

export default RetirementPlanning;

const MainBox = styled(Box)`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  animation: ${slideIn} 0.8s ease-in-out;
  background-attachment: fixed;
`;

const QualificationBox = styled(Box)`
  background-color: rgba(12, 12, 12, 0.1);
  border-radius: 10px;
  padding: 40px;
  margin-bottom: 40px;
  backdrop-filter: blur(10px);
`;

const HighlightSpan = styled.span`
  color: #100842;
  font-weight: 700;
  &:hover {
    color: #e73ed1;
  }
`;
