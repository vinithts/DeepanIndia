import { Box, Typography } from "@mui/material";
import React from "react";

const AlternativeInvestMentFunt = ({ serviceName }) => {
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
  );
};

export default AlternativeInvestMentFunt;
