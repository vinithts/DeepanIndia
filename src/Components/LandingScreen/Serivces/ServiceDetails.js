import React from "react";
import { useParams } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { styled, keyframes } from "@mui/material/styles";
import aboutImage from "../../../assets/about-us.jpg";
import backImage from "../../../assets/top-view-piggy-bank-money.jpg";
import fixed from "../../../assets/4454526-removebg-preview.png";

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
const cards = [
  {
    id: "overview",
    title: "Mutual Funds",
    icon: "💼",
    color: "bg-blue-100",
    border: "border-blue-500",
    shadow: "shadow-blue-200",
    benefits: [
      "Diversification across sectors/assets",
      "Professional fund management",
      "Suitable for every risk profile",
      "Liquidity and transparency",
    ],
  },
  {
    id: "sip",
    title: "SIP (Systematic Investment Plan)",
    icon: "📊",
    color: "bg-green-100",
    border: "border-green-500",
    shadow: "shadow-green-200",
    benefits: [
      "Small, regular investments (monthly/weekly)",
      "Builds discipline and long-term wealth",
      "Rupee cost averaging benefit",
      "Great for salaried individuals",
    ],
  },
  {
    id: "lumpsum",
    title: "Lumpsum Investment",
    icon: "💰",
    color: "bg-purple-100",
    border: "border-purple-500",
    shadow: "shadow-purple-200",
    benefits: [
      "One-time bulk investment (when you have surplus)",
      "Best suited during market dips or windfalls",
      "Potential for higher returns in long-term bull phases",
    ],
  },
  {
    id: "swp",
    title: "SWP (Systematic Withdrawal Plan)",
    icon: "💸",
    color: "bg-amber-100",
    border: "border-amber-500",
    shadow: "shadow-amber-200",
    benefits: [
      "Regular income from invested funds",
      "Ideal for retirees or passive income seekers",
      "Capital remains invested while income is generated",
    ],
  },
];

const ServiceDetails = () => {
  const { serviceName } = useParams();

  return (
    <>
      <MainBox image={aboutImage}>
        {/* Slide Content */}
        <ContentBox>
          <Typography variant="h2" className="subTitle">
            {serviceName.replace(/-/g, " ").toUpperCase()}
          </Typography>
        </ContentBox>
      </MainBox>
      <Main2Box image={backImage}>
        <Content1Box>
          {serviceName === "fixed-deposits-&-bond" && (
            <QualificationBox>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={6}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      <CheckCircleIcon
                        sx={{ color: "#388e3c", mt: "4px", mr: 1 }}
                      />{" "}
                      Safe, stable returns.
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      <CheckCircleIcon
                        sx={{ color: "#388e3c", mt: "4px", mr: 1 }}
                      />{" "}
                      Ideal for conservative investors.
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      <CheckCircleIcon
                        sx={{ color: "#388e3c", mt: "4px", mr: 1 }}
                      />{" "}
                      Includes corporate FDs, government & tax-saving bonds.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <img
                      src={fixed}
                      alt="img"
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
            </QualificationBox>
          )}
          {serviceName === "mutual-funds" && (
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6}>
                  {/* Key Benefits */}
                  <Box
                    sx={{
                      backgroundColor: "#f9fbfc",
                      p: { xs: 2, md: 4 },
                      borderRadius: 2,
                      maxWidth: "900px",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: 4,
                    }}
                  >
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      ✅ Key Benefits
                    </Typography>
                    <Box sx={{ pl: 2, color: "text.secondary" }}>
                      <Typography>
                        - Diversification across sectors/assets.
                      </Typography>
                      <Typography>- Professional fund management.</Typography>
                      <Typography>
                        - Suitable for every risk profile.
                      </Typography>
                      <Typography>- Liquidity and transparency.</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  {/* SIP */}
                  <Box
                    sx={{
                      backgroundColor: "#f9fbfc",
                      p: { xs: 2, md: 4 },
                      borderRadius: 2,
                      maxWidth: "900px",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: 4,
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      color="secondary"
                      gutterBottom
                    >
                      📌 SIP (Systematic Investment Plan)
                    </Typography>
                    <Box sx={{ pl: 2, color: "text.secondary" }}>
                      <Typography>
                        - Small, regular investments (monthly/weekly).
                      </Typography>
                      <Typography>
                        - Builds discipline and long-term wealth.
                      </Typography>
                      <Typography>- Rupee cost averaging benefit.</Typography>
                      <Typography>- Great for salaried individuals.</Typography>
                    </Box>
                    <Box sx={{ mt: 2, maxWidth: 400 }}>
                      <img
                        src="/images/sip-vs-lumpsum.png"
                        alt="SIP vs Lumpsum"
                        style={{ width: "100%", borderRadius: 8 }}
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  {/* Lumpsum */}
                  <Box
                    sx={{
                      backgroundColor: "#f9fbfc",
                      p: { xs: 2, md: 4 },
                      borderRadius: 2,
                      maxWidth: "900px",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: 4,
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      color="secondary"
                      gutterBottom
                    >
                      📌 Lumpsum Investment
                    </Typography>
                    <Box sx={{ pl: 2, color: "text.secondary" }}>
                      <Typography>
                        - One-time bulk investment (as & when you get surplus).
                      </Typography>
                      <Typography>
                        - Best suited during market dips or windfalls.
                      </Typography>
                      <Typography>
                        - Potential for higher returns in long-term bull phases.
                      </Typography>
                    </Box>
                    <Box sx={{ mt: 2, maxWidth: 300 }}>
                      <img
                        src="/images/lumpsum-coin-jar.png"
                        alt="Lumpsum Investment"
                        style={{ width: "100%", borderRadius: 8 }}
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  {/* SWP */}
                  <Box
                    sx={{
                      backgroundColor: "#f9fbfc",
                      p: { xs: 2, md: 4 },
                      borderRadius: 2,
                      maxWidth: "900px",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: 4,
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      color="secondary"
                      gutterBottom
                    >
                      📌 SWP (Systematic Withdrawal Plan)
                    </Typography>
                    <Box sx={{ pl: 2, color: "text.secondary" }}>
                      <Typography>
                        - Regular income from invested funds.
                      </Typography>
                      <Typography>
                        - Ideal for retirees or passive income seekers.
                      </Typography>
                      <Typography>
                        - Capital remains invested while income is generated.
                      </Typography>
                    </Box>
                    <Box sx={{ mt: 2, maxWidth: 350 }}>
                      <img
                        src="/images/swp-cashflow.png"
                        alt="SWP Cash Flow"
                        style={{ width: "100%", borderRadius: 8 }}
                      />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          )}
          {serviceName === "training-in-financial-markets" && (
            <Box
              sx={{
                backgroundColor: "#f9fbfc",
                p: 4,
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                gap: 4,
                color: "#424242",
                maxWidth: "900px",
              }}
            >
              {/* Wise Investor Course */}
              <Box>
                <Typography variant="h5" fontWeight="bold" color="primary">
                  📘 Wise Investor Course
                </Typography>
                <Typography sx={{ mt: 1 }}>
                  Beginner-friendly course covering savings, budgeting, mutual
                  funds, and basic stock investing.
                </Typography>
                <Typography sx={{ mt: 1 }}>
                  Perfect for: Students, Working Professionals, Housewives,
                  Retirees
                </Typography>
                <Box sx={{ mt: 2, maxWidth: 300 }}>
                  <img
                    src="/images/student-learning-finance.png"
                    alt="Student at laptop learning finance"
                    style={{ width: "100%", borderRadius: 8 }}
                  />
                </Box>
              </Box>

              {/* Smart Trading for Wealth */}
              <Box>
                <Typography variant="h5" fontWeight="bold" color="primary">
                  📘 Smart Trading for Wealth
                </Typography>
                <Typography sx={{ mt: 1 }}>
                  Intermediate-level program focusing on stock & index trading,
                  technical analysis, charting tools, and risk management.
                </Typography>
                <Typography sx={{ mt: 1 }}>
                  Includes hands-on learning with live market sessions.
                </Typography>
                <Box sx={{ mt: 2, maxWidth: 300 }}>
                  <img
                    src="/images/candlestick-chart.png"
                    alt="Candlestick chart with annotations"
                    style={{ width: "100%", borderRadius: 8 }}
                  />
                </Box>
              </Box>

              {/* Pro Trader for Full-time Career */}
              <Box>
                <Typography variant="h5" fontWeight="bold" color="primary">
                  📘 Pro Trader for Full-time Career
                </Typography>
                <Typography sx={{ mt: 1 }}>
                  Advanced training in professional trading systems, trader
                  psychology, capital management, and option strategies.
                </Typography>
                <Typography sx={{ mt: 1 }}>
                  Covers derivatives, intraday/swing trading, and includes
                  mentorship & placement support.
                </Typography>
                <Box sx={{ mt: 2, maxWidth: 300 }}>
                  <img
                    src="/images/pro-trader-setup.png"
                    alt="Dual-screen setup, trader analyzing markets"
                    style={{ width: "100%", borderRadius: 8 }}
                  />
                </Box>
              </Box>
            </Box>
          )}
          {serviceName === "alternate-investment-funds-(AIFS)" && (
            <Box
              sx={{
                backgroundColor: "#f9fbfc",
                p: 4,
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                gap: 4,
                color: "#424242",
                maxWidth: "900px",
              }}
            >
              {/* Wise Investor Course */}
              <Box>
                <Typography variant="h5" fontWeight="bold" color="primary">
                  📘 Structured funds for HNIs.
                </Typography>
              </Box>

              {/* Smart Trading for Wealth */}
              <Box>
                <Typography variant="h5" fontWeight="bold" color="primary">
                  📘 Diversification beyond traditional assets.
                </Typography>
              </Box>

              {/* Pro Trader for Full-time Career */}
              <Box>
                <Typography variant="h5" fontWeight="bold" color="primary">
                  📘 Includes private equity, venture capital, hedge funds.
                </Typography>

                <Box sx={{ mt: 2, maxWidth: 300 }}>
                  <img
                    src="/images/pro-trader-setup.png"
                    alt="Puzzle of different investment assets forming a portfolio."
                    style={{ width: "100%", borderRadius: 8 }}
                  />
                </Box>
              </Box>
            </Box>
          )}
          {serviceName === "insurances" && (
            <Box
              sx={{
                backgroundColor: "#f9fbfc",
                p: 4,
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                gap: 4,
                color: "#424242",
                maxWidth: "900px",
              }}
            >
              {/* Wise Investor Course */}
              <Box>
                <Typography variant="h5" fontWeight="bold" color="primary">
                  📘 Life, Health, and Term plans.
                </Typography>
              </Box>

              {/* Smart Trading for Wealth */}
              <Box>
                <Typography variant="h5" fontWeight="bold" color="primary">
                  📘 Secures family’s future and medical emergencies.
                </Typography>
              </Box>

              {/* Pro Trader for Full-time Career */}
              <Box>
                <Typography variant="h5" fontWeight="bold" color="primary">
                  📘Portfolio protection through smart cover allocation.
                </Typography>
              </Box>
              <Box>
                <Box sx={{ mt: 2, maxWidth: 300 }}>
                  <img
                    src="/images/pro-trader-setup.png"
                    alt=" Umbrella over family or heart/health symbol"
                    style={{ width: "100%", borderRadius: 8 }}
                  />
                </Box>
              </Box>
            </Box>
          )}
          {serviceName === "advisory-services" && (
            <Box
              sx={{
                backgroundColor: "#f9fbfc",
                p: 4,
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                gap: 4,
                color: "#424242",
                maxWidth: "900px",
              }}
            >
              {/* Wise Investor Course */}
              <Box>
                <Typography variant="h5" fontWeight="bold" color="primary">
                  📘 Short & Medium-Term Stock Bags SIP & Lumpsum options from
                  ₹5,000 to ₹50,000.
                </Typography>
                <Typography sx={{ mt: 1 }}>
                  Actively managed with averaging & timely churning.
                </Typography>
                <Typography sx={{ mt: 1 }}>
                  Ideal for beginners and progressive investors.
                </Typography>
                <Box sx={{ mt: 2, maxWidth: 300 }}>
                  <img
                    src="/images/student-learning-finance.png"
                    alt="Stock bag with multiple logos and a SIP chart."
                    style={{ width: "100%", borderRadius: 8 }}
                  />
                </Box>
              </Box>

              {/* Smart Trading for Wealth */}
              <Box>
                <Typography variant="h5" fontWeight="bold" color="primary">
                  📘 Long-Term Stock Bags for HNIs Starting from ₹10,000 to any
                  amount.
                </Typography>
                <Typography sx={{ mt: 1 }}>
                  Blue-chip and growth picks.
                </Typography>
                <Typography sx={{ mt: 1 }}>
                  Managed with periodic review and realignment.
                </Typography>
                <Box sx={{ mt: 2, maxWidth: 300 }}>
                  <img
                    src="/images/candlestick-chart.png"
                    alt="Tree growing from coins with long-term tag."
                    style={{ width: "100%", borderRadius: 8 }}
                  />
                </Box>
              </Box>

              {/* Pro Trader for Full-time Career */}
              <Box>
                <Typography variant="h5" fontWeight="bold" color="primary">
                  📘 Momentum Delivery-Based Trading (e.g., MTF) Short-term
                  high-potential trades.
                </Typography>
                <Typography sx={{ mt: 1 }}>
                  Uses margin/leveraged funds with strong risk management.
                </Typography>
                <Typography sx={{ mt: 1 }}>
                  Regular alerts and exit strategies.
                </Typography>
                <Box sx={{ mt: 2, maxWidth: 300 }}>
                  <img
                    src="/images/pro-trader-setup.png"
                    alt=" Speedometer with “Momentum” label on dial"
                    style={{ width: "100%", borderRadius: 8 }}
                  />
                </Box>
              </Box>
              <Box>
                <Typography variant="h5" fontWeight="bold" color="primary">
                  📘 Swing Trading – Index & Futures (With Hedges) 3–10 day
                  trading strategies.
                </Typography>
                <Typography sx={{ mt: 1 }}>
                  Includes hedge-based risk reduction.
                </Typography>
                <Typography sx={{ mt: 1 }}>
                  Suits active traders seeking calculated exposure.
                </Typography>
                <Box sx={{ mt: 2, maxWidth: 300 }}>
                  <img
                    src="/images/pro-trader-setup.png"
                    alt="Swing graph with hedge overlay (put/call icons)"
                    style={{ width: "100%", borderRadius: 8 }}
                  />
                </Box>
              </Box>
            </Box>
          )}
          {serviceName === "real-estate-funds" && (
            <Box
              sx={{
                backgroundColor: "#f9fbfc",
                p: 4,
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                gap: 4,
                color: "#424242",
                maxWidth: "900px",
              }}
            >
              {/* Wise Investor Course */}
              <Box>
                <Typography variant="h5" fontWeight="bold" color="primary">
                  📘 Pooled investment in commercial/residential property.
                </Typography>
              </Box>

              {/* Smart Trading for Wealth */}
              <Box>
                <Typography variant="h5" fontWeight="bold" color="primary">
                  📘 Offers rental income & capital appreciation.
                </Typography>
              </Box>

              {/* Pro Trader for Full-time Career */}
              <Box>
                <Typography variant="h5" fontWeight="bold" color="primary">
                  📘 Lower ticket size compared to direct real estate.
                </Typography>
              </Box>
              <Box>
                <Box sx={{ mt: 2, maxWidth: 300 }}>
                  <img
                    src="/images/pro-trader-setup.png"
                    alt="City skyline with coin stacks or REIT tag"
                    style={{ width: "100%", borderRadius: 8 }}
                  />
                </Box>
              </Box>
            </Box>
          )}
          {serviceName === "algo-trading" && (
            <Box
              sx={{
                backgroundColor: "#f9fbfc",
                p: 4,
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                gap: 4,
                color: "#424242",
                maxWidth: "900px",
              }}
            >
              {/* Wise Investor Course */}
              <Box>
                <Typography variant="h5" fontWeight="bold" color="primary">
                  📘 Stock SIP (Algo-Based) Automated SIP into hand-picked
                  stocks.
                </Typography>
                <Typography sx={{ mt: 1 }}>
                  Custom frequency & amount.
                </Typography>
                <Typography sx={{ mt: 1 }}>
                  Eliminates emotional bias.
                </Typography>
                <Box sx={{ mt: 2, maxWidth: 300 }}>
                  <img
                    src="/images/pro-trader-setup.png"
                    alt=" Robot hand placing coins regularly into stocks."
                    style={{ width: "100%", borderRadius: 8 }}
                  />
                </Box>
              </Box>

              {/* Smart Trading for Wealth */}
              <Box>
                <Typography variant="h5" fontWeight="bold" color="primary">
                  📘 Stock Bag for Lumpsum (Like Smallcase) Themed portfolios
                  (value, growth, sectoral).
                </Typography>
                <Typography sx={{ mt: 1 }}>
                  Lumpsum investment, algorithmically selected.
                </Typography>
                <Typography sx={{ mt: 1 }}>
                  One-click rebalancing and exit.
                </Typography>
                <Box sx={{ mt: 2, maxWidth: 300 }}>
                  <img
                    src="/images/pro-trader-setup.png"
                    alt="Portfolio dashboard UI with smallcase-style stock groups."
                    style={{ width: "100%", borderRadius: 8 }}
                  />
                </Box>
              </Box>
            </Box>
          )}
        </Content1Box>
      </Main2Box>
    </>
  );
};

export default ServiceDetails;

/* Styled Components */
const MainBox = styled(Box)`
  position: relative;
  width: 100%;
  height: 300px;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  animation: ${slideIn} 0.8s ease-in-out;

  @media (max-width: 900px) {
    height: 200px;
  }
`;
const Main2Box = styled(Box)`
  position: relative;
  width: 100%;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  animation: ${slideIn} 0.8s ease-in-out;
  background-attachment: fixed;
  padding: 60px 0;

  @media (max-width: 900px) {
    padding: 40px 0;
  }
`;
const ContentBox = styled(Box)`
  position: absolute;
  top: 40%;
  left: 10%;
  right: 10%;
  color: white;
  text-align: left;
  z-index: 1;

  .subTitle {
    font-size: 50px;
    font-weight: 900;
    margin-bottom: 8px;
    color: #23395d;
    @media (max-width: 600px) {
      font-size: 20px;
    }
  }

  .title {
    font-size: 12px;
    margin-bottom: 8px;
    color: black;
    @media (max-width: 600px) {
      font-size: 12px;
    }
  }
`;
const Content1Box = styled(Box)`
  /* position: absolute;
  color: white;
  text-align: left;
  z-index: 1;
  padding: 50px; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const QualificationBox = styled(Box)`
  background-color: rgba(131, 129, 129, 0.1);
  border-radius: 10px;
  padding: 40px;
  margin-bottom: 40px;
  backdrop-filter: blur(10px);
`;
