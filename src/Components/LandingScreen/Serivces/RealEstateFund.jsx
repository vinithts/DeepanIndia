import { Box, Typography } from "@mui/material";
import React from "react";

const RealEstateFund = ({ serviceName }) => {
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
  );
};

export default RealEstateFund;
