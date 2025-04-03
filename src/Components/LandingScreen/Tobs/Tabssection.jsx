import React from "react";
import styled from "styled-components";
import backImage from "../../../assets/top-view-piggy-bank-money.jpg";
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
      <Container >
        <Typography
          sx={{
            padding: "10px",
            textAlign: "center",
            fontWeight: 900,
            color: "#23395d",
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
            color: "#23395d",
            fontSize: "18px",
          }}
        >
          Unlock endless possibilities for your investments
        </Typography>

        <Grid container spacing={6} sx={{ marginBottom: "20px",marginTop:"20px"}}> 
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
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  @media screen and (max-width: 600px) {
    padding: 40px 0;
  }
`;
