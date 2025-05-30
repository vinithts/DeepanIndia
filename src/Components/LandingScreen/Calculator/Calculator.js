import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardActions,
  CardContent,
  Button,
} from "@mui/material";
import styled from "styled-components";
import background from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";

const calculators = [
  {
    title: "SIP Calculator",
    description: "Calculate returns on your Systematic Investment Plan.",
    icon: "https://cdn-icons-png.flaticon.com/512/3063/3063144.png",
    link: "/sip-calculator",
  },
  {
    title: "Lumpsum Calculator",
    description: "Estimate returns on your one-time investment.",
    icon: "https://cdn-icons-png.flaticon.com/512/3063/3063147.png",
    link: "/lumpsum-calculator",
  },
  {
    title: "SWP Calculator",
    description: "Plan your Systematic Withdrawal Plan effectively.",
    icon: "https://cdn-icons-png.flaticon.com/512/3063/3063150.png",
    link: "/swp-calculator",
  },
];


const FinancialCalculatorsMUI = () => {
  return (
    <MainBox id="calculator" image={background}>
      <Container maxWidth="lg">
        <Typography
          align="center"
          gutterBottom
          sx={{
            color: "white",
            fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
            fontWeight: 900,
            mb: 5,
          }}
        >
          Investment Calculators
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
            gap: 3,
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {calculators.map((calc, index) => (
            <StyledCard key={index} style={{ borderRadius: "20px" }}>
              <CardContent>
                <Icon src={calc.icon} alt={`${calc.title} icon`} />
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ color: "#49326b", fontWeight: 700 }}
                >
                  {calc.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#49326b", fontWeight: 700 }}
                >
                  {calc.description}
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "center",display: "flex",alignItems: "center" }}> 
                <Button
                  variant="outlined"
                  href={calc.link}
                  sx={{
                    textTransform: "none",
                    color: "#3b2752",
                    animation: "blink 1s infinite",
                    "&:hover": { backgroundColor: "#3b2752", color: "white" },
                    borderColor: "#3b2752",
                  }}
                >
                  Go to Calculator
                </Button>
              </CardActions>
            </StyledCard>
          ))}
        </Box>
      </Container>
    </MainBox>
  );
};

export default FinancialCalculatorsMUI;

const MainBox = styled(Box)(({ theme, image }) => ({
  position: "relative",
  width: "100%",
  minHeight: "auto",
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  padding: "50px 0px 50px 0px",

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

const StyledCard = styled(Card)(() => ({
  background: "#f9f3fe",
  border: "10px solid #e4d4fa",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  textAlign: "center",
  height: "100%",
}));

const Icon = styled.img(() => ({
  width: "60px",
  height: "60px",
  marginBottom: "15px",
}));
