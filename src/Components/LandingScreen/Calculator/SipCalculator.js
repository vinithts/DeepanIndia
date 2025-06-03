import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Slider,
  Grid,
  TextField,
  useMediaQuery,
  useTheme,
  Card,
  CardContent,
  Divider,
  Tooltip,
} from "@mui/material";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip as ChartTooltip,
  Legend,
} from "chart.js";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { keyframes } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

// Register Chart.js components
ChartJS.register(ArcElement, ChartTooltip, Legend);

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SIPCalculator = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [interestRate, setInterestRate] = useState(12);
  const [years, setYears] = useState(10);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleNavigation = (href) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href.startsWith("/#")) {
      const currentPath = location.pathname;
      if (currentPath === "/") {
        const anchorId = href.substring(2);
        const element = document.querySelector(`#${anchorId}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate("/");
        setTimeout(() => {
          const anchorId = href.substring(2);
          const element = document.querySelector(`#${anchorId}`);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    } else {
      navigate(href);
    }
  };

  const months = years * 12;
  const rate = interestRate / 100 / 12;
  // Handle zero cases to avoid division by zero
  const totalInvested = monthlyInvestment * months;
  const maturityAmount =
    years === 0 || monthlyInvestment === 0 || interestRate === 0
      ? 0
      : (
          monthlyInvestment *
          ((Math.pow(1 + rate, months) - 1) / rate) *
          (1 + rate)
        ).toFixed(2);
  const totalReturns =
    years === 0 || monthlyInvestment === 0 || interestRate === 0
      ? 0
      : (maturityAmount - totalInvested).toFixed(2);

  // Chart.js data configuration
  const chartData = {
    labels: ["Invested", "Returns"],
    datasets: [
      {
        data: [totalInvested, Number(totalReturns)],
        backgroundColor: ["#d32f2f", "#17307a"],
        borderColor: ["#ffffff", "#ffffff"],
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: isMobile ? "bottom" : "right",
        labels: {
          color: "#49326b",
          font: {
            size: isMobile ? 12 : 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.raw || 0;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage =
              total === 0 ? 0 : ((value / total) * 100).toFixed(0);
            return `${label}: ₹${value.toLocaleString()} (${percentage}%)`;
          },
        },
      },
    },
  };

  const handleMonthlyInvestmentChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
    setMonthlyInvestment(value === "" ? 0 : Number(value));
  };

  const handleInterestRateChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, ""); // Allow numbers and decimal
    setInterestRate(value === "" ? 0 : Number(value));
  };

  const handleYearsChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
    setYears(value === "" ? 0 : Number(value));
  };

  return (
    <Main2Box>
      <Container maxWidth="lg">
        <Box
          sx={{
            padding: { xs: "20px 0", md: "10px 0 10px 0px" },
            fontSize: { xs: "28px", sm: "36px", md: "48px" },
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            justifyContent: "left",
          }}
        >
          <ArrowBackIosIcon
            style={{ cursor: "pointer", marginRight: "15px" }}
            onClick={() => handleNavigation("/#calculator")}
          />
          <Typography
            sx={{
              fontWeight: 400,
              color: "#49326b",
              fontSize: { xs: "28px", sm: "36px", md: "48px" },
              animation: `${fadeIn} 1s ease-in-out`,
              marginBottom: "20px",
            }}
          >
            Systematic Investment Plan Calculator
          </Typography>
        </Box>
        <StyledDivider style={{ marginBottom: "40px" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            border: "1px solid rgb(220, 218, 221)",
            borderRadius: "8px",
            padding: "40px",
          }}
        >
          <Grid container spacing={1} width={"100%"}>
            {/* Inputs */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600, color: "#49326b" }}
                >
                  Monthly Investment (₹)
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <TextField
                    value={monthlyInvestment}
                    onChange={handleMonthlyInvestmentChange}
                    // variant="outlined"
                    size="small"
                    sx={{
                      width: "120px",
                      bgcolor: "#e4d4fa",
                      "& .MuiInputBase-input": {
                        color: "#49326b",
                        fontWeight: 900,
                        textAlign: "center",
                      },
                      // "& .MuiOutlinedInput-root": {
                      //   borderRadius: "16px",
                      // },
                    }}
                    InputProps={{
                      startAdornment: (
                        <Typography sx={{ color: "#49326b", mr: 0.5 }}>
                          ₹
                        </Typography>
                      ),
                    }}
                  />
                  {monthlyInvestment === 0 && (
                    <Tooltip title="Minimum value is 1000">
                      <WarningAmberIcon sx={{ color: "red", ml: 1 }} />
                    </Tooltip>
                  )}
                </Box>
              </Box>
              <Slider
                value={monthlyInvestment}
                onChange={(e, val) => setMonthlyInvestment(val)}
                min={0}
                max={200000}
                step={1000}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => `₹${value.toLocaleString()}`}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600, color: "#49326b" }}
                >
                  Expected Return Rate (%)
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <TextField
                    value={interestRate}
                    onChange={handleInterestRateChange}
                    variant="outlined"
                    size="small"
                    sx={{
                      width: "120px",
                      bgcolor: "#e4d4fa",
                      "& .MuiInputBase-input": {
                        color: "#49326b",
                        fontWeight: 900,
                        textAlign: "center",
                      },
                      // "& .MuiOutlinedInput-root": {
                      //   borderRadius: "16px",
                      // },
                    }}
                    InputProps={{
                      endAdornment: (
                        <Typography sx={{ color: "#49326b", ml: 0.5 }}>
                          %
                        </Typography>
                      ),
                    }}
                  />
                  {interestRate === 0 && (
                    <Tooltip title="Minimum value is 1">
                      <WarningAmberIcon sx={{ color: "red", ml: 1 }} />
                    </Tooltip>
                  )}
                </Box>
              </Box>
              <Slider
                value={interestRate}
                onChange={(e, val) => setInterestRate(val)}
                min={0}
                max={30}
                step={0.1}
                valueLabelDisplay="auto"
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600, color: "#49326b" }}
                >
                  Time Period (Years)
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <TextField
                    value={years}
                    onChange={handleYearsChange}
                    variant="outlined"
                    size="small"
                    sx={{
                      width: "120px",
                      bgcolor: "#e4d4fa",
                      "& .MuiInputBase-input": {
                        color: "#49326b",
                        fontWeight: 900,
                        textAlign: "center",
                      },
                      // "& .MuiOutlinedInput-root": {
                      //   borderRadius: "16px",
                      // },
                    }}
                    InputProps={{
                      endAdornment: (
                        <Typography sx={{ color: "#49326b", ml: 0.5 }}>
                          years
                        </Typography>
                      ),
                    }}
                  />
                  {years === 0 && (
                    <Tooltip title="Minimum value is 1">
                      <WarningAmberIcon sx={{ color: "red", ml: 1 }} />
                    </Tooltip>
                  )}
                </Box>
              </Box>
              <Slider
                value={years}
                onChange={(e, val) => setYears(val)}
                min={0}
                max={30}
                step={1}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => `${value} years`}
              />
            </Grid>
            {/* Chart */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", sm: "80%", md: "400px" },
                  height: { xs: "250px", sm: "300px", md: "300px" },
                  maxWidth: "400px",
                }}
              >
                <Pie data={chartData} options={chartOptions} />
              </Box>
            </Grid>
            {/* Summary */}
            <Grid item xs={12}>
              <Grid container spacing={3} marginTop={2}>
                <Grid item xs={12} md={4}>
                  <Card
                    sx={{
                      borderTop: "10px solid rgb(204, 8, 8)",
                      boxShadow: 4,
                      backgroundColor: "#f9f3fe",
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        align="center"
                        gutterBottom
                        sx={{ fontWeight: 600, color: "#49326b" }}
                      >
                        Invested Amount
                      </Typography>
                      <Typography
                        variant="h5"
                        align="center"
                        sx={{ fontWeight: 700, color: "#49326b" }}
                      >
                        ₹{totalInvested.toLocaleString()}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card
                    sx={{
                      borderTop: "10px solid rgb(22, 5, 85)",
                      boxShadow: 4,
                      backgroundColor: "#f9f3fe",
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        align="center"
                        gutterBottom
                        sx={{ fontWeight: 600, color: "#49326b" }}
                      >
                        Est. Returns
                      </Typography>
                      <Typography
                        variant="h5"
                        align="center"
                        sx={{ fontWeight: 700, color: "#49326b" }}
                      >
                        ₹{Number(totalReturns).toLocaleString()}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card
                    sx={{
                      borderTop: "10px solid rgb(20, 94, 42)",
                      boxShadow: 4,
                      backgroundColor: "#f9f3fe",
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        align="center"
                        gutterBottom
                        sx={{ fontWeight: 600, color: "#49326b" }}
                      >
                        Total Value
                      </Typography>
                      <Typography
                        variant="h5"
                        align="center"
                        sx={{ fontWeight: 700, color: "#49326b" }}
                      >
                        ₹{Number(maturityAmount).toLocaleString()}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Main2Box>
  );
};

export default SIPCalculator;

const Main2Box = styled(Box)`
  padding: 60px 0;
  background-color: #f9f3fe;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    padding: 30px 0;
  }
`;

const StyledDivider = styled(Divider)`
  background-color: rgb(39, 20, 68);
  height: 6px;
  width: 100%;
`;
