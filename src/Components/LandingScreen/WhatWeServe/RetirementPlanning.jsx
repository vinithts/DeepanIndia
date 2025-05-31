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
  Card,
  keyframes
} from "@mui/material";
import ElderlyIcon from "@mui/icons-material/Elderly";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import UpdateIcon from "@mui/icons-material/Update";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { styled } from "styled-components";
import Handshake from "../../../assets/8-removebg-preview.png";
import aboutImg1 from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";

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
    <MainBox>
      <Container maxWidth="lg">
        <Typography
          sx={{
            padding: "30px 0",
            textAlign: "left",
            fontWeight: 900,
            color: "#49326b",
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
            textAlign: "left",
            color: "#49326b",
            fontSize: "22px",
            marginBottom: "40px",
            fontWeight: 300,
            "@media (max-width: 600px)": {
              fontSize: "16px",
              marginBottom: "30px",
            },
          }}
        >
          Secure your future with a retirement plan that supports the lifestyle
          you deserve. Our services include:
          {/* <HighlightSpan>independent income opportunities</HighlightSpan> in the
              financial sector? */}
        </Typography>
        <QualificationBox image={aboutImg1}>
          <Card
            sx={{
              background: "rgba(255, 255, 255, 0.95)",
              borderRadius: "16px",
              border: "10px solid #e4d4fa",
              boxShadow: "0 8px 24px rgba(73, 50, 107, 0.1)",
              padding: { xs: "20px", md: "20px" },
              animation: `${slideIn} 1s ease-in-out`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid container spacing={6}>
              <Grid item xs={12} sm={6} md={6}>
                <List>
                  {items.map((item, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        // paddingY: "12px",
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
                          sx={{ color: "#49326b", fontSize: "22px" }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={item.text}
                        primaryTypographyProps={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "#49326b",
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <img
                    src={Handshake}
                    alt="handshake"
                    style={{
                      width: "100%",
                      maxWidth: "400px",
                      height: "auto",
                      display: "block",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Card>
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
const HighlightSpan = styled.span`
  color: white;
  font-weight: 700;
  &:hover {
    color: #e73ed1;
  }
`;
