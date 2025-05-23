import React from "react";
import styled from "styled-components";
import backImage from "../../../assets/2211.w026.n002.2690B.p1.2690.jpg";
import { Box, Container, Grid, Typography } from "@mui/material";
import PricingCard from "./PricingCard";
import Investor from "../../../assets/investor.png";
import Trader from "../../../assets/trader.png";
import Wealth from "../../../assets/wealth-management.png";

const plans = [
  {
    title: "WISE INVESTOR",
    price: "₹1200",
    description: "+ GST per annum per-investor",
    icon: Investor,
    subtitle: "(For long-term value investors)",
    features: [
      "Basic to Advanced Training – Recorded videos on value investing & smart trading",
      "Goal-Based & Time Horizon-Based Recommendations – Mutual funds, stocks, commodities",
      "Portfolio Tracker – Manage up to 5 family accounts with 360-degree analysis",
      "Robo-Advisor – AI-driven insights on stock trends and future price predictions",
      "Accounting Software – Track portfolio performance, auditing, and goal progress",
      "Trading Journal Software – Track live trades, verify P&L, and improve trading performance",
    ],
  },
  {
    title: "SMART TRADER",
    price: "₹12,000",
    description: "+ GST per annum",
    icon: Trader,
    subtitle: "(For traders looks to generate a 2nd income)",
    features: [
      "All WISE INVESTOR features PLUS:",
      "Advanced Charting Software – Spot profitable short-term investment & trading opportunities",
      "Algo Trading Software – Automate BUY/SELL decisions with customized option strategies",
    ],
  },
  {
    title: "AGGRESSIVE WEALTH CREATION",
    subtitle: "(Algo Trading in Options)",
    price: "0%",
    icon: Wealth,
    description: "Fixed/Upfront Fees",
    features: [
      "Fully Automated Rule-Based Trading with Proven Backtesting",
      "Performance-Based Pricing:",
      "Pay 20% on profit generated (monthly billing cycle)",
      "OR Pay 50% on profits above 18% per year (quarterly billing for 1st year, then monthly)",
      "Plan shift allowed once per year",
    ],
  },
];
export default function Tabscontent() {
  return (
    <Maindiv image={backImage}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
              radial-gradient(circle at 20% 50%, #f33d2510 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, #f3f1f120 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, #f33d2508 0%, transparent 50%)
            `,
          zIndex: 0,
        }}
      />
      <Container>
        <Typography
          sx={{
            padding: "10px",
            textAlign: "center",
            fontWeight: 900,
            background: `linear-gradient(135deg, #f33d25 0%,rgb(19, 18, 117) 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontSize: "50px",
            "@media (max-width: 600px)": {
              fontSize: "26px",
            },
          }}
        >
          Our Pricing Plans
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 600,
            color: "#9c432d",
            fontSize: "18px",
          }}
        >
          Unlock endless possibilities for your investments
        </Typography>

        <Grid
          container
          spacing={6}
          sx={{ marginBottom: "20px", marginTop: "20px" }}
        >
          {plans.map((plan, index) => (
            <Grid item xs={12} sm={4} md={4} key={index}>
              <PricingCard
                key={index}
                index={index}
                title={plan.title}
                price={plan.price}
                description={plan.description}
                subtitle={plan.subtitle}
                features={plan.features}
                buttonText={plan.buttonText}
                popular={plan.popular}
                colorClass={plan.colorClass}
                icon={plan.icon}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Maindiv>
  );
}

const Maindiv = styled.div`
  padding: 85px 0;
  background: linear-gradient(135deg, #f3f1f155 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    padding: 40px 0;
  }
`;
