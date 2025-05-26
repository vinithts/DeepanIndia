import { Box, Typography } from "@mui/material";
import React from "react";

const TrainingInFinancialMarketing = ({ serviceName }) => {
  return (
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
          Beginner-friendly course covering savings, budgeting, mutual funds,
          and basic stock investing.
        </Typography>
        <Typography sx={{ mt: 1 }}>
          Perfect for: Students, Working Professionals, Housewives, Retirees
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
          Advanced training in professional trading systems, trader psychology,
          capital management, and option strategies.
        </Typography>
        <Typography sx={{ mt: 1 }}>
          Covers derivatives, intraday/swing trading, and includes mentorship &
          placement support.
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
  );
};

export default TrainingInFinancialMarketing;
