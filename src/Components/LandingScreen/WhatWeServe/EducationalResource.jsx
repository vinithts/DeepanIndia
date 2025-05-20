import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Paper,
   List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Button
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CalculateIcon from "@mui/icons-material/Calculate";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import DownloadIcon from "@mui/icons-material/Download";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import {styled, keyframes} from "styled-components";
import Handshake from "../../../assets/2466548-removebg-preview.png";
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


const resources = [
  {
    icon: <MenuBookIcon />,
    title: "Simple Financial Articles",
    desc: "Easy-to-understand articles on finance and investing.",
  },
  {
    icon: <CalculateIcon />,
    title: "Planning Tools & Calculators",
    desc: "Tools and calculators for retirement, SIPs, and goal planning.",
  },
  {
    icon: <LiveTvIcon />,
    title: "Webinars & Expert Videos",
    desc: "Webinars, videos, and expert tips to stay informed.",
  },
  {
    icon: <DownloadIcon />,
    title: "Guides & E-books",
    desc: "Downloadable guides and e-books for every stage of your financial journey.",
  },
];

const EducationalResource = () => {
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
          Educational Resources
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
          Knowledge is the foundation of sound financial decisions. Our platform
          offers:
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
                  {resources.map((res, index) => (
                    <ListItem key={index} sx={{ paddingY: "8px" }}>
                      <ListItemIcon sx={{ minWidth: "40px" }}>
                        <Avatar sx={{ bgcolor: "#2c1a4e", mr: 2 }}>
                          {res.icon}
                        </Avatar>
                      </ListItemIcon>
                      <Box sx={{display:"flex", flexDirection:"column"}}>
                      <Typography variant="h6" sx={{fontWeight:"bold"}}>{res.title}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {res.desc}
                      </Typography>
                      </Box>
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
              Empower yourself with insights that help you take control of your
              finances.
            </HighlightSpan>
          </Typography>
        </QualificationBox>
      </Container>
    </MainBox>
  );
};

export default EducationalResource;

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

