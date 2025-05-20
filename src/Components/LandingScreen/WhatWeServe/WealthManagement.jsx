import React from "react";
import {
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Container,
  Grid
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import GavelIcon from "@mui/icons-material/Gavel";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import {styled, keyframes} from "styled-components";
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
          Wealth Management
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
          Our comprehensive wealth management solutions are tailored for
          high-net-worth individuals and families. We offer:
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
                <Stepper orientation="vertical" nonLinear>
                  {steps.map((step, index) => (
                    <Step key={index} active>
                      <StepLabel icon={step.icon} style={{ color: "yellow" }}>
                        <Typography sx={{ color: "#201f1f",fontWeight:"bold" }}>
                          {step.label}
                        </Typography>
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
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
               With a strategic and holistic approach, we protect and grow
                    your wealth over generations.
            </HighlightSpan>
          </Typography>
        </QualificationBox>
      </Container>
    </MainBox>
  );
};

export default WealthManagement;

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
