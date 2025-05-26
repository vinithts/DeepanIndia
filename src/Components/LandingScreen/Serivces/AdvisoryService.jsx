import { Box, Typography } from "@mui/material";
import React from "react";

const AdvisoryService = ({ serviceName }) => {
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
          📘 Short & Medium-Term Stock Bags SIP & Lumpsum options from ₹5,000 to
          ₹50,000.
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
          📘 Long-Term Stock Bags for HNIs Starting from ₹10,000 to any amount.
        </Typography>
        <Typography sx={{ mt: 1 }}>Blue-chip and growth picks.</Typography>
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
          📘 Swing Trading – Index & Futures (With Hedges) 3–10 day trading
          strategies.
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
  );
};

export default AdvisoryService;
