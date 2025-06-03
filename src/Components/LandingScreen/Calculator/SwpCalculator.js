import React, { useState, useMemo } from "react";
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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
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
  from { opacity: 0; }
  to { opacity: 1; }
`;

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
  background-color: #49326b;
  height: 6px;
  width: 100%;
`;

const SWPCalculator = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [investment, setInvestment] = useState(100000); // Initial investment in ₹
  const [withdrawalAmount, setWithdrawalAmount] = useState(1000); // Fixed withdrawal per period
  const [interestRate, setInterestRate] = useState(12); // Annual interest rate in %
  const [years, setYears] = useState(10); // Time period in years
  const [frequency, setFrequency] = useState("monthly"); // Withdrawal frequency

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

  // Define periods per year based on frequency
  const periodsPerYear = { monthly: 12, quarterly: 4, annually: 1 };
  const n = years * periodsPerYear[frequency]; // Total number of withdrawal periods
  const periodicRate = interestRate / 100 / periodsPerYear[frequency]; // Periodic interest rate

  // Calculate total withdrawn
  const totalWithdrawn = withdrawalAmount * n;

  // Calculate remaining balance using the formula for future value with withdrawals
  // FV = P * (1 + r)^n - W * [((1 + r)^n - 1) / r]
  const remainingBalance =
    investment === 0 ||
    years === 0 ||
    withdrawalAmount === 0 ||
    interestRate === 0
      ? 0
      : periodicRate === 0
        ? investment - totalWithdrawn
        : investment * Math.pow(1 + periodicRate, n) -
          (withdrawalAmount * (Math.pow(1 + periodicRate, n) - 1)) /
            periodicRate;

  // Chart data for visualization
  const chartData = useMemo(
    () => ({
      labels: ["Total Withdrawn", "Remaining Balance"],
      datasets: [
        {
          data: [totalWithdrawn, remainingBalance > 0 ? remainingBalance : 0],
          backgroundColor: ["#d32f2f", "#17307a"],
          borderColor: ["#ffffff", "#ffffff"],
          borderWidth: 2,
        },
      ],
    }),
    [totalWithdrawn, remainingBalance]
  );

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: { size: 14, weight: "bold" },
          color: "#49326b",
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
            return `${label}: ₹${value.toLocaleString("en-IN", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })} (${percentage}%)`;
          },
        },
      },
    },
  };

  // Handlers for TextField input changes
  const handleInvestmentChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
    setInvestment(value === "" ? 0 : Number(value));
  };

  const handleWithdrawalAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
    setWithdrawalAmount(value === "" ? 0 : Number(value));
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
            padding: { xs: "20px 0", md: "10px 0 10px" },
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
          }}
        >
          <ArrowBackIosIcon
            value={frequency}
            style={{ cursor: "pointer", marginRight: "20px" }}
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
            Systematic Withdrawal Plan
          </Typography>
        </Box>
        <StyledDivider style={{ marginBottom: "40px" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            border: "1px solid rgb(220, 218, 221)",
            borderRadius: "8px",
            p: "40px",
          }}
        >
          <Grid container spacing={4}>
            {/* Controls */}
            <Grid item xs={12} md={6}>
              <CardContent sx={{ backgroundColor: "#f9f3fe", p: "20px" }}>
                {/* Investment Amount Input */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: "20px",
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#49326b" }}
                  >
                    Investment Amount
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <TextField
                      value={investment}
                      onChange={handleInvestmentChange}
                     size="small"
                      sx={{
                        width: "120px",
                        bgcolor: "#e4d4fa",
                        "& .MuiInputBase-input": {
                          color: "#49326b",
                          fontWeight: 900,
                          textAlign: "center",
                        },
                      }}
                      InputProps={{
                        startAdornment: (
                          <Typography sx={{ color: "#49326b", mr: 0.5 }}>
                            ₹
                          </Typography>
                        ),
                      }}
                    />
                    {investment === 0 && (
                      <Tooltip title="Minimum value is 10000">
                        <WarningAmberIcon sx={{ color: "red", ml: 1 }} />
                      </Tooltip>
                    )}
                  </Box>
                </Box>
                <Slider
                  value={investment}
                  onChange={(e, val) => setInvestment(val)}
                  min={0}
                  max={10000000}
                  step={10000}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(value) =>
                    `₹${value.toLocaleString("en-IN")}`
                  }
                />

                {/* Withdrawal Amount Input */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: "20px",
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#49326b" }}
                  >
                    {frequency.charAt(0).toUpperCase() + frequency.slice(1)}{" "}
                    Withdrawal
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <TextField
                      value={withdrawalAmount}
                      onChange={handleWithdrawalAmountChange}
                      size="small"
                      sx={{
                        width: "120px",
                        bgcolor: "#e4d4fa",
                        "& .MuiInputBase-input": {
                          color: "#49326b",
                          fontWeight: 900,
                          textAlign: "center",
                        },
                      }}
                      InputProps={{
                        startAdornment: (
                          <Typography sx={{ color: "#49326b", mr: 0.5 }}>
                            ₹
                          </Typography>
                        ),
                      }}
                    />
                    {withdrawalAmount === 0 && (
                      <Tooltip title="Minimum value is 100">
                        <WarningAmberIcon sx={{ color: "red", ml: 1 }} />
                      </Tooltip>
                    )}
                  </Box>
                </Box>
                <Slider
                  value={withdrawalAmount}
                  onChange={(e, val) => setWithdrawalAmount(val)}
                  min={0}
                  max={100000}
                  step={100}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(value) =>
                    `₹${value.toLocaleString("en-IN")}`
                  }
                />

                {/* Interest Rate Input */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: "20px",
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#49326b" }}
                  >
                    Expected Return Rate
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <TextField
                      value={interestRate}
                      onChange={handleInterestRateChange}
                     size="small"
                      sx={{
                        width: "120px",
                        bgcolor: "#e4d4fa",
                        "& .MuiInputBase-input": {
                          color: "#49326b",
                          fontWeight: 900,
                          textAlign: "center",
                        },
                      }}
                      InputProps={{
                        startAdornment: (
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

                {/* Years Input */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: "20px",
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#49326b" }}
                  >
                    Withdrawal Period
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <TextField
                      value={years}
                      onChange={handleYearsChange}
                     size="small"
                      sx={{
                        width: "120px",
                        bgcolor: "#e4d4fa",
                        "& .MuiInputBase-input": {
                          color: "#49326b",
                          fontWeight: 900,
                          textAlign: "center",
                        },
                      }}
                      InputProps={{
                        startAdornment: (
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

                {/* Frequency Selector */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: "20px",
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#49326b" }}
                  >
                    Withdrawal Frequency
                  </Typography>
                  <FormControl sx={{ width: "120px" }}>
                    <Select
                      value={frequency}
                      onChange={(e) => setFrequency(e.target.value)}
                      variant="standard"
                      sx={{
                        bgcolor: "#e4d4fa",
                        color: "#49326b",
                        fontWeight: 900,
                        "& .MuiSelect-select": {
                          textAlign: "center",
                          py: 0.5,
                        },
                      }}
                    >
                      <MenuItem value="monthly">Monthly</MenuItem>
                      <MenuItem value="quarterly">Quarterly</MenuItem>
                      <MenuItem value="annually">Annually</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </CardContent>
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

            {/* Summary Cards */}
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Card
                    sx={{
                      borderTop: "10px solid rgb(204, 8, 8)",
                      boxShadow: 4,
                      backgroundColor: "#f3f1f155",
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        align="center"
                        sx={{ fontWeight: 600, color: "#49326b" }}
                      >
                        {frequency.charAt(0).toUpperCase() + frequency.slice(1)}{" "}
                        Withdrawal
                      </Typography>
                      <Typography
                        variant="h5"
                        align="center"
                        sx={{ fontWeight: 700, color: "#49326b" }}
                      >
                        ₹
                        {Number(withdrawalAmount).toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card
                    sx={{
                      borderTop: "10px solid rgb(19, 20, 119)",
                      boxShadow: 4,
                      backgroundColor: "#f9f3fe",
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        align="center"
                        sx={{ fontWeight: 600, color: "#49326b" }}
                      >
                        Total Withdrawn
                      </Typography>
                      <Typography
                        variant="h5"
                        align="center"
                        sx={{ fontWeight: 700, color: "#49326b" }}
                      >
                        ₹
                        {Number(totalWithdrawn).toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card
                    sx={{
                      borderTop: "10px solid rgb(40, 128, 40)",
                      boxShadow: 4,
                      backgroundColor: "#f3f1f155",
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        align="center"
                        sx={{ fontWeight: 600, color: "#49326b" }}
                      >
                        Remaining Balance
                      </Typography>
                      <Typography
                        variant="h5"
                        align="center"
                        sx={{ fontWeight: 700, color: "#49326b" }}
                      >
                        ₹
                        {Number(remainingBalance).toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
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

export default SWPCalculator;
