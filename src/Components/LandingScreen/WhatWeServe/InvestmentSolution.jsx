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
  keyframes,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Handshake from "../../../assets/3-removebg-preview.png";
import aboutImg1 from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";
import styled from "styled-components";

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
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
    <MainBox>
      <Container maxWidth="lg">
        <Typography
          sx={{
            padding: { xs: "20px 0", md: "20px 0" },
            textAlign: "left",
            fontWeight: 900,
            color: "#49326b",
            fontSize: { xs: "28px", sm: "36px", md: "48px" },
            animation: `${fadeIn} 1s ease-in-out`,
          }}
        >
          Investment Solutions
        </Typography>

        <Typography
          sx={{
            textAlign: "left",
            color: "#49326b",
            fontSize: { xs: "16px", sm: "16px", md: "16px" },
            marginBottom: { xs: "20px", md: "40px" },
            fontWeight: 400,
            lineHeight: 1.6,
            animation: `${fadeIn} 1.2s ease-in-out`,
          }}
        >
          We help you grow and secure your wealth through goal-oriented investment strategies.
        </Typography>

        <QualificationBox image={aboutImg1}>
          <Card
            sx={{
              background: "rgba(255, 255, 255, 0.95)",
              borderRadius: "16px",
              border: "10px solid #e4d4fa",
              boxShadow: "0 8px 24px rgba(73, 50, 107, 0.1)",
              padding: { xs: "20px", md: "40px" },
              animation: `${slideIn} 1s ease-in-out`,
            }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} sm={6}>
                <List>
                  {points.map((point, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        paddingY: "12px",
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "translateX(8px)",
                          background: "#e4d4fa",
                          borderRadius: "8px",
                        },
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: "40px" }}>
                        <CheckCircleIcon
                          sx={{ color: "#49326b", fontSize: "28px" }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={point}
                        primaryTypographyProps={{
                          fontSize: { xs: "16px", md: "18px" },
                          fontWeight: 600,
                          color: "#49326b",
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    display: { xs: "none", sm: "block" },
                    textAlign: "center",
                  }}
                >
                  <img
                    src={Handshake}
                    alt="Handshake"
                    style={{
                      width: "100%",
                      maxWidth: "400px",
                      height: "auto",
                      animation: `${slideIn} 1.2s ease-in-out`,
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Card>

          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xs: "20px", sm: "24px", md: "28px" },
              fontWeight: 700,
              color: "#ffffff",
              marginTop: "40px",
              padding: "20px",
              animation: `${fadeIn} 1.4s ease-in-out`,
            }}
          >
            Whether you’re planning for a home, child’s education, or wealth creation, we ensure your investments work smarter.
          </Typography>

          <Box sx={{ textAlign: "center", mt: 4 }}>
            {/* <StyledButton
              variant="contained"
              size="large"
              onClick={() => alert("Get Started Clicked!")} // Replace with actual navigation or action
            >
              Get Started
            </StyledButton> */}
          </Box>
        </QualificationBox>
      </Container>
    </MainBox>
  );
};

export default InvestmentSolution;

const MainBox = styled(Box)`
  padding: 60px 0;
  background-color: #f9f3fe;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    padding: 30px 0;
  }
`;

const QualificationBox = styled(Box)(({ image }) => ({
  position: "relative",
  width: "100%",
  backgroundImage: `linear-gradient(rgba(73, 50, 107, 0.7), rgba(73, 50, 107, 0.7)), url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "40px 20px",
  borderRadius: "16px",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(73, 50, 107, 0.3)",
    zIndex: 1,
  },
  "& > *": {
    position: "relative",
    zIndex: 2,
  },
  "@media (max-width: 600px)": {
    padding: "20px 10px",
  },
}));

const StyledButton = styled(Button)`
  background-color: #49326b;
  color: #ffffff;
  font-weight: 600;
  padding: 12px 32px;
  border-radius: 8px;
  text-transform: none;
  font-size: 18px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #e4d4fa;
    color: #49326b;
    transform: scale(1.05);
  }
`;

const HighlightSpan = styled.span`
  color: #e4d4fa;
  font-weight: 700;
  transition: color 0.3s ease;
  &:hover {
    color: #ffffff;
  }
`;