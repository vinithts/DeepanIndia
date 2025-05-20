import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Button,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SavingsIcon from "@mui/icons-material/Savings";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import { styled, keyframes } from "styled-components";
import Handshake from "../../../assets/18985-removebg-preview.png";
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

const points = [
  "Setting short, medium, and long-term financial goals.",
  "Assessing your risk tolerance and return expectations.",
  "Selecting the right mix of investment avenues – equity, debt, mutual funds, etc.",
  "Creating a diversified portfolio aligned with your life goals.",
  "Regular monitoring and rebalancing to stay on track.",
];

const InvestmentSolution = () => {
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
          Investment Solution
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
          We help you grow and secure your wealth through goal-oriented
          investment strategies. Our approach includes:
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
                <List>
                  {points.map((point, index) => (
                    <ListItem key={index} sx={{ paddingY: "8px" }}>
                      <ListItemIcon sx={{ minWidth: "40px" }}>
                        <CheckCircleIcon
                          sx={{ color: "#388e3c", mt: "4px", mr: 1 }}
                        />
                      </ListItemIcon>
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {point}
                      </Typography>
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
            <HighlightSpan>
              {" "}
              Whether you’re planning for a home, child’s education, or wealth
              creation, we ensure your investments work smarter.
            </HighlightSpan>
          </Typography>
        </QualificationBox>
      </Container>
    </MainBox>
  );
};

export default InvestmentSolution;

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
