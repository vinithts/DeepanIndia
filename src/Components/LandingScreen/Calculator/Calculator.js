import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Grid,
  Slider,
  Card,
  CardContent,
  Chip,
  useMediaQuery,
  useTheme,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { PieChart, Pie, Cell, Legend } from "recharts";
import styled from "styled-components";

// Create a custom dark theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#d32f2f",
    },
    background: {
      default: "#23395d",
      paper: "#1e3151",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
    h1: {
      fontWeight: 900,
    },
  },
  components: {
    MuiSlider: {
      styleOverrides: {
        root: {
          height: 8,
        },
        track: {
          backgroundColor: "#78fa78",
          border: "none",
        },
        rail: {
          backgroundColor: "#c2c0c0",
          opacity: 0.6,
        },
        thumb: {
          backgroundColor: "#ffffff",
          height: 20,
          width: 20,
          "&:hover": {
            boxShadow: "0 0 0 8px rgba(255, 255, 255, 0.16)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: 16,
          fontWeight: 600,
        },
      },
    },
  },
});

const FinancialCalculatorsMUI = () => {
  const [activeTab, setActiveTab] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:600px)");
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        id="calculator"
        sx={{
          // minHeight: "100vh",
          background: `linear-gradient(135deg, #f3f1f155 0%, #ffffff 100%)`,
          position: "relative",
          overflow: "hidden",
          padding: { xs: 4, md: 8 },
        }}
      >
        {/* Background Pattern */}
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
        <Container maxWidth="xl">
          <Typography
            variant="h1"
            align="center"
            gutterBottom
            sx={{
              background: `linear-gradient(135deg, #f33d25 0%,rgb(19, 18, 117) 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              // padding:"40px",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              mb: 5,
            }}
          >
            Investment Calculators
          </Typography>

          <Box sx={{ width: "100%", mb: 5 }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              centered={!isMobile}
              textColor="inherit"
              indicatorColor="secondary"
              sx={{
                bgcolor: "#f3f1f155",
                borderRadius: 2,
                overflowX: "auto",
                "& .MuiTabs-indicator": {
                  backgroundColor: "#d60b0b", // Red indicator
                },
                "& .MuiTab-root": {
                  fontSize: { xs: "0.875rem", md: "1rem" },
                  fontWeight: 900,
                  textTransform: "none",
                  py: 2,
                  minWidth: { xs: "auto", sm: 160 },
                  color: "#8c0d0d", // Red tab text
                  "&.Mui-selected": {
                    color: "#d60b0b", // Highlight selected tab
                  },
                },
              }}
            >
              <Tab label="SIP Calculator" />
              <Tab label="Lumpsum Calculator" />
              <Tab label="SWP Calculator" />
            </Tabs>
          </Box>

          {/* Tab Panels */}
          <TabPanel value={activeTab} index={0}>
            <SIPCalculator />
          </TabPanel>
          <TabPanel value={activeTab} index={1}>
            <LumpsumCalculator />
          </TabPanel>
          <TabPanel value={activeTab} index={2}>
            <GoalCalculator />
          </TabPanel>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

// TabPanel component for tab switching
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`calculator-tabpanel-${index}`}
      aria-labelledby={`calculator-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

// SIP Calculator Component
const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [interestRate, setInterestRate] = useState(12);
  const [years, setYears] = useState(10);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
    { name: "Returns", value: Number(totalReturns), color: "#1976d2" },
  ];

  return (
    <Card sx={{ bgcolor: "#f7f7f7", boxShadow: 4, p: 5 }}>
      <Grid container spacing={1} width={"100%"}>
        {/* Inputs */}
        <Grid item xs={12} md={6}>
          <CardContent style={{ backgroundColor: "#f5f0f0", padding: "20px" }}>
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
                sx={{ fontWeight: 600, color: "#b30c0c" }}
              >
                Monthly Investment (₹)
              </Typography>
              <Chip
                label={`₹${monthlyInvestment.toLocaleString()}`}
                sx={{
                  bgcolor: "#e8ffe8",
                  color: "#60b561",
                  fontWeight: 900,
                }}
              />
            </Box>
            <Slider
              value={monthlyInvestment}
              onChange={(e, val) => setMonthlyInvestment(val)}
              min={1000}
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
                width: "100%",
                marginTop: "20px",
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: 600, color: "#b30c0c" }}
              >
                Expected Return Rate (%)
              </Typography>
              <Chip
                label={`${interestRate}%`}
                sx={{
                  bgcolor: "#e8ffe8",
                  color: "#60b561",
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
                sx={{ fontWeight: 600, color: "#b30c0c" }}
              >
                Time Period (Years)
              </Typography>
              <Chip
                label={`${years} years`}
                sx={{
                  bgcolor: "#e8ffe8",
                  color: "#60b561",
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
          <PieChart width={isMobile ? 300 : 400} height={isMobile ? 200 : 300}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={isMobile ? 40 : 50}
              outerRadius={isMobile ? 100 : 100}
              paddingAngle={2}
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </Grid>

        {/* Summary */}
        <Grid item xs={12}>
          <Grid container spacing={3} marginTop={2}>
            <Grid item xs={12} md={4}>
              <Card sx={{ borderTop: "10px solid rgb(204, 8, 8)", boxShadow: 4 ,backgroundColor:"#f3f1f155" }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    align="center"
                    gutterBottom
                    sx={{ fontWeight: 600, color: "red" }}
                  >
                    Invested Amount
                  </Typography>
                  <Typography
                    variant="h5"
                    align="center"
                    sx={{ fontWeight: 700, color: "#691616" }}
                  >
                    ₹{totalInvested.toLocaleString()}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ borderTop: "10px solid rgb(22, 5, 85)", boxShadow: 4 ,backgroundColor:"#f3f1f155" }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    align="center"
                    gutterBottom
                    sx={{ fontWeight: 600, color: "red" }}
                  >
                    Est. Returns
                  </Typography>
                  <Typography
                    variant="h5"
                    align="center"
                    sx={{ fontWeight: 700, color: "#691616" }}
                  >
                    ₹{Number(totalReturns).toLocaleString()}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ borderTop: "10px solid rgb(20, 94, 42)", boxShadow: 4 ,backgroundColor:"#f3f1f155" }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    align="center"
                    gutterBottom
                    sx={{ fontWeight: 600, color: "red" }}
                  >
                    Total Value
                  </Typography>
                  <Typography
                    variant="h5"
                    align="center"
                    sx={{ fontWeight: 700, color: "#691616" }}
                  >
                    ₹{Number(maturityAmount).toLocaleString()}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

// Lumpsum Calculator Component
const LumpsumCalculator = () => {
  const [investment, setInvestment] = useState(100000);
  const [interestRate, setInterestRate] = useState(12);
  const [years, setYears] = useState(10);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const rate = interestRate / 100;
  const totalInvested = investment;
  const maturityAmount = (investment * Math.pow(1 + rate, years)).toFixed(2);
  const totalReturns = (maturityAmount - totalInvested).toFixed(2);

  const data = [
    { name: "Invested", value: totalInvested, color: "#d32f2f" },
    { name: "Returns", value: Number(totalReturns), color: "#1976d2" },
  ];

  return (
    <Card sx={{ bgcolor: "#f7f7f7", boxShadow: 4, p: 5 }}>
      <Grid container spacing={4}>
        {/* Inputs */}
        <Grid item xs={12} md={6}>
          <CardContent style={{ backgroundColor: "#f5f0f0", padding: "20px" }}>
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
                sx={{ fontWeight: 600, color: "#b30c0c" }}
              >
                One-time Investment (₹)
              </Typography>
              <Chip
                label={`₹${investment.toLocaleString()}`}
                sx={{
                  bgcolor: "#e8ffe8",
                  color: "#60b561",
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
                sx={{ fontWeight: 600, color: "#b30c0c" }}
              >
                Expected Return Rate (%)
              </Typography>
              <Chip
                label={`${interestRate}%`}
                sx={{
                  bgcolor: "#e8ffe8",
                  color: "#60b561",
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
                sx={{ fontWeight: 600, color: "#b30c0c" }}
              >
                Time Period (Years)
              </Typography>
              <Chip
                label={`${years} years`}
                sx={{
                  bgcolor: "#e8ffe8",
                  color: "#60b561",
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
          <PieChart width={isMobile ? 300 : 400} height={isMobile ? 200 : 300}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={isMobile ? 40 : 50}
              outerRadius={isMobile ? 100 : 100}
              paddingAngle={2}
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </Grid>

        {/* Summary */}
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card sx={{ borderTop: "10px solid rgb(204, 8, 8)", boxShadow: 4 ,backgroundColor:"#f3f1f155" }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    align="center"
                    gutterBottom
                    sx={{ fontWeight: 600,color:"red" }}
                  >
                    Invested Amount
                  </Typography>
                  <Typography
                    variant="h5"
                    align="center"
                    sx={{ fontWeight: 700,color:"#691616" }}
                  >
                    ₹{totalInvested.toLocaleString()}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ borderTop: "10px solid rgb(19, 20, 119)", boxShadow: 4 ,backgroundColor:"#f3f1f155" }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    align="center"
                    gutterBottom
                    sx={{ fontWeight: 600,color:"red" }}
                  >
                    Est. Returns
                  </Typography>
                  <Typography
                    variant="h5"
                    align="center"
                    sx={{ fontWeight: 700,color:"#691616" }}
                  >
                    ₹{Number(totalReturns).toLocaleString()}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ borderTop: "10px solid rgb(40, 128, 40)", boxShadow: 4 ,backgroundColor:"#f3f1f155" }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    align="center"
                    gutterBottom
                    sx={{ fontWeight: 600,color:"red" }}
                  >
                    Total Value
                  </Typography>
                  <Typography
                    variant="h5"
                    align="center"
                    sx={{ fontWeight: 700, color:"#691616" }}
                  >
                    ₹{Number(maturityAmount).toLocaleString()}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

// Goal Calculator Component
const GoalCalculator = () => {
  const [targetAmount, setTargetAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(12);
  const [years, setYears] = useState(10);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const rate = interestRate / 100 / 12;
  const months = years * 12;

  // Calculate monthly SIP required to reach goal
  const monthlyInvestment = (
    targetAmount /
    ((Math.pow(1 + rate, months) - 1) / rate) /
    (1 + rate)
  ).toFixed(0);

  const totalInvested = monthlyInvestment * months;
  const totalReturns = targetAmount - totalInvested;

  const data = [
    { name: "Invested", value: Number(totalInvested), color: "#d32f2f" },
    { name: "Returns", value: Number(totalReturns), color: "#1976d2" },
  ];

  return (
    <Card sx={{ bgcolor: "#f7f7f7", boxShadow: 4, p: 5 }}>
      <Grid container spacing={4}>
        {/* Inputs */}
        <Grid item xs={12} md={6}>
          <CardContent style={{ backgroundColor: "#f5f0f0", padding: "20px" }}>
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
                sx={{ fontWeight: 600,color: "#b30c0c" }}
              >
                Target Amount (₹)
              </Typography>
              <Chip
                label={`₹${targetAmount.toLocaleString()}`}
                sx={{
                  bgcolor: "#e8ffe8",
                  color: "#60b561",
                  fontWeight: 900,
                }}
              />
            </Box>
            <Slider
              value={targetAmount}
              onChange={(e, val) => setTargetAmount(val)}
              min={100000}
              max={10000000}
              step={100000}
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
                sx={{ fontWeight: 600,color: "#b30c0c" }}
              >
                Expected Return Rate (%)
              </Typography>
              <Chip
                label={`${interestRate}%`}
                sx={{
                  bgcolor: "#e8ffe8",
                  color: "#60b561",
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
                sx={{ fontWeight: 600,color: "#b30c0c" }}
              >
                Time Period (Years)
              </Typography>
              <Chip
                label={`${years} years`}
                sx={{
                  bgcolor: "#e8ffe8",
                  color: "#60b561",
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
          <PieChart width={isMobile ? 300 : 400} height={isMobile ? 200 : 300}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
               innerRadius={isMobile ? 40 : 50}
              outerRadius={isMobile ? 100 : 100}
              paddingAngle={2}
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </Grid>

        {/* Summary */}
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card sx={{ borderTop: "10px solid rgb(204, 8, 8)", boxShadow: 4 ,backgroundColor:"#f3f1f155" }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    align="center"
                    gutterBottom
                    sx={{ fontWeight: 600,color:"red" }}
                  >
                    Monthly SIP Required
                  </Typography>
                  <Typography
                    variant="h5"
                    align="center"
                    sx={{ fontWeight: 700,color: "#b30c0c" }}
                  >
                    ₹{Number(monthlyInvestment).toLocaleString()}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ borderTop: "10px solid rgb(15, 24, 105)", boxShadow: 4 ,backgroundColor:"#f3f1f155" }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    align="center"
                    gutterBottom
                    sx={{ fontWeight: 600, color:"red" }}
                  >
                    Est. Returns
                  </Typography>
                  <Typography
                    variant="h5"
                    align="center"
                    sx={{ fontWeight: 700, color: "#b30c0c" }}
                  >
                    ₹{Number(totalReturns).toLocaleString()}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ borderTop: "10px solid rgb(59, 121, 35)", boxShadow: 4 ,backgroundColor:"#f3f1f155" }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    align="center"
                    gutterBottom
                    sx={{ fontWeight: 600,color:"red" }}
                  >
                    Total Investment
                  </Typography>
                  <Typography
                    variant="h5"
                    align="center"
                    sx={{ fontWeight: 700,color: "#b30c0c" }}
                  >
                    ₹{Number(totalInvested).toLocaleString()}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default FinancialCalculatorsMUI;

const MainBox = styled(Box)`
  position: relative;
  width: 100%;
  padding-bottom: 50px;
  height: auto;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        135deg,
        rgb(245, 227, 223) 0%,
        rgba(250, 244, 244, 0.99) 50%,
        rgb(255, 255, 255) 100%
      ),
      radial-gradient(
        circle at 20% 80%,
        rgba(220, 20, 60, 0.1) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 20%,
        rgba(245, 61, 37, 0.1) 0%,
        transparent 50%
      );
    /* opacity: 0.5; */
    z-index: 1;
  }
  > * {
    position: relative;
    z-index: 2;
  }
`;
