import React, { useState, useMemo } from "react";
import {
  Box,
  Container,
  Typography,
  Slider,
  Grid,
  Chip,
  useMediaQuery,
  useTheme,
  Card,
  CardContent,
  keyframes,
    Divider,
} from "@mui/material";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useLocation, useNavigate } from "react-router-dom";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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
  margin: 50px;
  width: 100%;
`;
const LumpsumCalculator = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [investment, setInvestment] = useState(100000);
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
  // Calculations
  const rate = interestRate / 100;
  const totalInvested = investment;
  const maturityAmount = (investment * Math.pow(1 + rate, years)).toFixed(2);
  const totalReturns = (maturityAmount - totalInvested).toFixed(2);

  // Memoized chart data to prevent unnecessary re-renders
  const chartData = useMemo(
    () => ({
      labels: ["Invested", "Returns"],
      datasets: [
        {
          data: [totalInvested, totalReturns],
          backgroundColor: ["#d32f2f", "#17307a"],
          borderColor: ["#ffffff", "#ffffff"],
          borderWidth: 2,
        },
      ],
    }),
    [totalInvested, totalReturns]
  );

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
            weight: "bold",
          },
          color: "#49326b",
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.raw || 0;
            return `${label}: ₹${value.toLocaleString()}`;
          },
        },
      },
    },
  };

  return (
    <Main2Box>
      <Container maxWidth="lg">
        <Box
          sx={{
            padding: { xs: "20px 0", md: "10px 0 10px 0" },
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
            Lumpsum Investment Calculator
          </Typography>
        </Box>
      <StyledDivider style={{marginBottom:"40px"}}/>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            border: "1px solid rgb(220, 218, 221)",
            borderRadius: "8px",
            padding: "40px",
          }}
        >
          <Grid container spacing={4}>
            {/* Inputs */}
            <Grid item xs={12} md={6}>
              <CardContent sx={{ backgroundColor: "#f9f3fe", padding: "20px" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    marginTop: "20px",
                  }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600, color: "#49326b" }}
                  >
                    One-time Investment (₹)
                  </Typography>
                  <Chip
                    label={`₹${investment.toLocaleString()}`}
                    sx={{
                      bgcolor: "#e4d4fa",
                      color: "#49326b",
                      fontWeight: 900,
                    }}
                  />
                </Box>
                <Slider
                  value={investment}
                  onChange={(e, val) => setInvestment(val)}
                  min={10000}
                  max={10000000}
                  step={10000}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(value) => `₹${value.toLocaleString()}`}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    marginTop: "20px",
                  }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600, color: "#49326b" }}
                  >
                    Expected Return Rate (%)
                  </Typography>
                  <Chip
                    label={`${interestRate}%`}
                    sx={{
                      bgcolor: "#e4d4fa",
                      color: "#49326b",
                      fontWeight: 900,
                    }}
                  />
                </Box>
                <Slider
                  value={interestRate}
                  onChange={(e, val) => setInterestRate(val)}
                  min={1}
                  max={30}
                  step={0.1}
                  valueLabelDisplay="auto"
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    marginTop: "20px",
                  }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600, color: "#49326b" }}
                  >
                    Time Period (Years)
                  </Typography>
                  <Chip
                    label={`${years} years`}
                    sx={{
                      bgcolor: "#e4d4fa",
                      color: "#49326b",
                      fontWeight: 900,
                    }}
                  />
                </Box>
                <Slider
                  value={years}
                  onChange={(e, val) => setYears(val)}
                  min={1}
                  max={30}
                  step={1}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(value) => `${value} years`}
                />
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

            {/* Summary */}
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
                        ₹{Number(totalInvested).toLocaleString()}
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
                      borderTop: "10px solid rgb(40, 128, 40)",
                      boxShadow: 4,
                      backgroundColor: "#f3f1f155",
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

export default LumpsumCalculator;