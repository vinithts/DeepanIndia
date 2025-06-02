import { useState, useEffect } from "react";
import { Box, Fab } from "@mui/material";
import WhatsAppIcon from "../../assets/whatsapp-removebg-preview.png"; 

const WhatsAppButton = () => {
  const [visible, setVisible] = useState(true); 

  
  useEffect(() => {
    const handleScroll = () => {
      
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(true); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/9884411611?text=Hello!%20I%20need%20help";

  return (
    <Box
        sx={{
        position: "fixed",
        bottom: { xs: 16, md: 24 },
        left: { xs: 16, md: 24 },
        zIndex: 1000,
      }}
    >
      {visible && (
         <Fab
          color="success"
          aria-label="WhatsApp"
          href={whatsappLink}
          target="_blank"
          sx={{
            width: 56,
            height: 56,
            boxShadow: "0px 4px 20px rgba(72, 194, 120, 0.5)",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <img
            src={WhatsAppIcon}
            alt="WhatsApp"
            style={{ width: "100%", height: "auto" }} 
          />
        </Fab>
      )}
    </Box>
  );
};

export default WhatsAppButton;