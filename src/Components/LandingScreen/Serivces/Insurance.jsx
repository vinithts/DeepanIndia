import { Box, Typography } from "@mui/material";
import React from "react";

const Insurance = ({ serviceName }) => {
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
  );
};

export default Insurance;
