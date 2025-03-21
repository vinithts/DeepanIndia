import React, { useState } from "react";
import {
  Grid,
  Slider,
  TextField,
  Typography,
  Card,
  CardContent,
  useMediaQuery,
  Box,
  Chip,
} from "@mui/material";
import { PieChart, Pie, Cell, Legend } from "recharts";
import styled from "styled-components";

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [interestRate, setInterestRate] = useState(10);
  const [years, setYears] = useState(10);
  const isMobile = useMediaQuery("(max-width:600px)");

  const months = years * 12;
  const rate = interestRate / 100 / 12;
  const totalInvested = monthlyInvestment * months;
  const maturityAmount = (
    monthlyInvestment *
    ((Math.pow(1 + rate, months) - 1) / rate) *
    (1 + rate)
  ).toFixed(2);
  const totalReturns = (maturityAmount - totalInvested).toFixed(2);

  const data = [
    { name: "Invested", value: totalInvested, color: "#d32f2f" },
    { name: "Returns", value: totalReturns, color: "#1976d2" },
  ];

  return (
    <MainDiv>
      <Typography
        sx={{
          padding: "20px",
          textAlign: "center",
          fontWeight: 900,
          color: "white",
          fontSize: "50px",
          "@media (max-width: 600px)": {
            fontSize: "26px",
          },
        }}
      >
        Power Of Sip
      </Typography>
      <Grid container spacing={3} padding={3} justifyContent="center">
        {/* Inputs */}
        <Grid item xs={12} md={6}>
          <Main2Box>
            <CardContent>
              <Typography
                sx={{ fontSize: "20px", color: "white", fontWeight: 600 }}
              >
                Money Per Month (₹)
              </Typography>
              <Slider
                color="white"
                value={monthlyInvestment}
                onChange={(e, val) => setMonthlyInvestment(val)}
                min={1000}
                max={200000}
                step={1000}
              />
              {/* <TextField
                fullWidth
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
              /> */}
              <ChipBox>
                <Chip
                  label={monthlyInvestment}
                  component="a"
                  href="#basic-chip"
                  sx={{
                    backgroundColor: "#261b90",
                    fontWeight: 900,
                    color: "rgb(40 231 29 / 87%)",
                    fontSize:"16px"
                  }}
                  onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                />
              </ChipBox>
              <Typography
                sx={{ fontSize: "20px", color: "white", fontWeight: 600 }}
              >
                Interest Rate (%)
              </Typography>
              <Slider
                value={interestRate}
                onChange={(e, val) => setInterestRate(val)}
                min={1}
                max={20}
                step={0.1}
              />
              <ChipBox>
                <Chip
                  label={interestRate}
                  component="a"
                  href="#basic-chip"
                  sx={{
                    backgroundColor: "#261b90",
                    fontWeight: 900,
                    color: "rgb(40 231 29 / 87%)",
                    fontSize:"16px"
                  }}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                />
              </ChipBox>
              <Typography
                sx={{ fontSize: "20px", color: "white", fontWeight: 600 }}
              >
                Year (s)
              </Typography>
              <Slider
                value={years}
                onChange={(e, val) => setYears(val)}
                min={1}
                max={30}
                step={1}
              />
              <ChipBox>
                <Chip
                  label={years}
                  component="a"
                  href="#basic-chip"
                  sx={{
                    backgroundColor: "#261b90",
                    fontWeight: 900,
                    color: "rgb(40 231 29 / 87%)",
                    fontSize:"16px"
                  }}
                  onChange={(e) => setYears(Number(e.target.value))}
                />
              </ChipBox>
            </CardContent>
          </Main2Box>
        </Grid>

        {/* Pie Chart */}
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <PieChart width={isMobile ? 400 : 500} height={isMobile ? 300 : 400}>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={isMobile ? 80 : 150}
              innerRadius={isMobile ? 50 : 80}
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </Grid>

        {/* Summary */}
        <Grid item xs={12} md={4}>
          <Card sx={{ bgcolor: "rgb(82, 4, 4)", color: "white" }}>
            <CardContent>
              <Typography align="center" sx={{fontSize:"16px",fontWeight:"600"}}>Invested</Typography>
              <Typography align="center" variant="h6">
                ₹{totalInvested}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ bgcolor: "rgb(16, 39, 102)", color: "white" }}>
            <CardContent>
              <Typography align="center" sx={{fontSize:"16px",fontWeight:"600"}}>Returns</Typography>
              <Typography align="center" variant="h6">
                ₹{totalReturns}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ bgcolor: "black", color: "white" }}>
            <CardContent>
              <Typography align="center" sx={{fontSize:"16px",fontWeight:"600"}}>Total</Typography>
              <Typography align="center" variant="h6">
                ₹{maturityAmount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </MainDiv>
  );
};

export default SIPCalculator;

const MainDiv = styled.div`
  padding: 80px 0px;
  position: relative;
  width: 100%;
  height: auto;
  background-color: #23395d;

  @media screen and (max-width: 600px) {
    padding: 40px 0;
  }
`;

const Main2Box = styled(Box)`
  .css-n6hak3-MuiSlider-root {
    border-radius: 12px;
    box-sizing: content-box;
    display: inline-block;
    position: relative;
    cursor: pointer;
    touch-action: none;
    -webkit-tap-highlight-color: transparent;
    height: 10px;
    width: 100%;
    padding: 13px 0;
  }
  .css-13vpke-MuiSlider-root {
    border-radius: 12px;
    box-sizing: content-box;
    display: inline-block;
    position: relative;
    cursor: pointer;
    touch-action: none;
    -webkit-tap-highlight-color: transparent;
    color:rgb(16, 39, 102);
    height: 10px;
    width: 100%;
    padding: 13px 0;
}
  .css-r64h58-MuiSlider-rail {
    display: block;
    position: absolute;
    border-radius: inherit;
    background-color: rgb(82, 4, 4);
    opacity: 0.38;
    width: 100%;
    height: inherit;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}
.css-xvk2i-MuiSlider-track {
    display: block;
    position: absolute;
    border-radius: inherit;
    border: 1px solid currentColor;
    background-color:rgb(82, 4, 4);
    ;
    -webkit-transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, width 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, bottom 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, height 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, width 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, bottom 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, height 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    height: inherit;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}
`;

const ChipBox = styled(Box)`
  display: flex;
  justify-content: flex-end;
`;
