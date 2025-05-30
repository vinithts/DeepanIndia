import React from "react";
import {
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Container,
  Grid,
  keyframes
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import GavelIcon from "@mui/icons-material/Gavel";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import { styled } from "styled-components";
import Handshake from "../../../assets/9-removebg-preview.png";
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

const steps = [
  {
    label: "Personalized financial planning across life stages.",
    icon: <StarIcon />,
  },
  {
    label: "Investment advisory and portfolio management.",
    icon: <AccountBalanceWalletIcon />,
  },
  { label: "Tax optimization and legal structuring.", icon: <GavelIcon /> },
  { label: "Estate and succession planning.", icon: <AccountBalanceIcon /> },
  { label: "Insurance and risk management.", icon: <VerifiedUserIcon /> },
  {
    label: "Family office services for legacy building.",
    icon: <FamilyRestroomIcon />,
  },
];

const GoldText = styled(Typography)({
  color: "#FFD700",
  fontWeight: "bold",
});

const WealthManagement = () => {
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
          Wealth Management
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
          Our comprehensive wealth management solutions are tailored for
          high-net-worth individuals and families. We offer:
          {/* <HighlightSpan>independent income opportunities</HighlightSpan> in the
              financial sector? */}
        </Typography>
        <QualificationBox image={aboutImg1}>
            <Grid container spacing={6}>
              <Grid item xs={12} sm={6} md={6}>
                 <Box
            sx={{
              border: "2px solid white",
              padding: "20px",
              borderRadius: "16px",
              animation: `${slideIn} 0.5s ease-in-out`,
            }}
          >
                <Stepper orientation="vertical" nonLinear>
                  {steps.map((step, index) => (
                    <Step key={index} active>
                      <StepLabel icon={step.icon} style={{ color: "yellow" }}>
                        <Typography sx={{ color: "white", fontWeight: "bold" }}>
                          {step.label}
                        </Typography>
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", height:"100%"}}>
                <img
                  src={Handshake}
                  alt="handshake"
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    height: "auto",
                    display: "block",
                    "@media (max-width: 600px)": { display: "none" },
                  }}
                />
                </Box>
              </Grid>
            </Grid>
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
              With a strategic and holistic approach, we protect and grow your
              wealth over generations.
            </HighlightSpan>
          </Typography>
        </QualificationBox>
      </Container>
    </MainBox>
  );
};

export default WealthManagement;

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
  padding: "40px 40px",
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
