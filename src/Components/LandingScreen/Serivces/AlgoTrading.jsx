import { Box, Typography } from "@mui/material";
import React from "react";

const AlgoTrading = ({ serviceName }) => {
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
          📘 Stock SIP (Algo-Based) Automated SIP into hand-picked stocks.
        </Typography>
        <Typography sx={{ mt: 1 }}>Custom frequency & amount.</Typography>
        <Typography sx={{ mt: 1 }}>Eliminates emotional bias.</Typography>
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
          📘 Stock Bag for Lumpsum (Like Smallcase) Themed portfolios (value,
          growth, sectoral).
        </Typography>
        <Typography sx={{ mt: 1 }}>
          Lumpsum investment, algorithmically selected.
        </Typography>
        <Typography sx={{ mt: 1 }}>One-click rebalancing and exit.</Typography>
        <Box sx={{ mt: 2, maxWidth: 300 }}>
          <img
            src="/images/pro-trader-setup.png"
            alt="Portfolio dashboard UI with smallcase-style stock groups."
            style={{ width: "100%", borderRadius: 8 }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AlgoTrading;
