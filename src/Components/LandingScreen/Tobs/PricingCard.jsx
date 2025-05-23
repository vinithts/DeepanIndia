import { Box, Dialog, DialogContent, DialogTitle,Button  } from "@mui/material";
import React, { useState }  from "react";
import styled from "styled-components";
import { keyframes } from "@mui/material/styles";
import VerifiedIcon from "@mui/icons-material/Verified";

const PricingCard = ({
  index,
  title,
  price,
  description,
  icon,
  subtitle,
  features,
}) => {
    const isCenterCard = index === 1;
    const visibleFeatures = index === 0 ? 2 : 3;
    const [open, setOpen] = useState(false);

  return (
    <CardContainer isCenterCard={isCenterCard}>
      <img src={icon} alt="icon" style={{ width: "50px", height: "50px" }} />
      <Title>{title}</Title>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "baseline",
            margin: "10px 0",
        }}
      >
        <PricePara>{price}</PricePara>&nbsp;
        <Para1>/{description}</Para1>
      </Box>

      <Para>{subtitle}</Para>
      <DivederBox />
      <FeatureList>
      {features.slice(0, visibleFeatures).map((feature, i) => (
          <FeatureItem key={i}>
            <VerifiedIcon sx={{ color: "#65749e", fontSize: 20 }} />
            <FeatureText>{feature}</FeatureText>
          </FeatureItem>
        ))}
      </FeatureList>
      {features.length > visibleFeatures  && (
        <Box sx={{ display: "flex", justifyContent: "center",width:"100%"}}>
        <Button 
        variant="outlined" 
        sx={{
            width:"100%",
            // backgroundColor: "#12114b",
            border: "1px solid #f33d25",
            color: "#828285",
            fontWeight: "bold",
            padding: "10px 20px",
            borderRadius: "10px",
            cursor: "pointer",
            marginTop: "10px",
             textDecoration:"none",
            "&:hover": {
              color: "white",
              backgroundColor: "#f33d25",
            },
          }}
        onClick={() => setOpen(true)}>Read More</Button>
        </Box>
      )}

      {/* Popup Dialog for More Features */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle style={{color:"#131f3f",fontWeight:"bold"}}>More Features</DialogTitle>
        <DialogContent>
          <FeatureList>
            {features.slice(3).map((feature, i) => (
              <FeatureItem key={i}>
                <VerifiedIcon sx={{ color: "#c53856", fontSize: 20 }} />
                <FeatureText>{feature}</FeatureText>
              </FeatureItem>
            ))}
          </FeatureList>
          <Button variant="outlined" onClick={() => setOpen(false)} sx={{ marginTop: 2 }}>Close</Button>
        </DialogContent>
      </Dialog>
    </CardContainer>
  );
};

export default PricingCard;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px) scale(1);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
  50% {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.4);
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  animation: ${({ isCenterCard }) => (isCenterCard ? `${float} 6s ease-in-out infinite` : 'none')};
  padding: ${({ isCenterCard }) => (isCenterCard ? "50px 25px" : "40px 20px 20px 20px")};
  border-radius: 20px;
  background: #f3f1f155;
  backdrop-filter: blur(10px);
  box-shadow: ${({ isCenterCard }) =>
    isCenterCard
      ? "0 8px 20px rgba(0, 0, 0, 0.3), 0 0 15px rgba(255, 255, 255, 0.5)"
      : "0 4px 10px rgba(0, 0, 0, 0.2)"};
  border: 2px solid rgb(255, 255, 255);
  color: white;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform: ${({ isCenterCard }) => (isCenterCard ? "scale(1.1)" : "scale(1)")};

  &:hover {
    transform: ${({ isCenterCard }) => (isCenterCard ? "scale(1.15)" : "scale(1.05)")};
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }
  @media screen and (max-width: 900px) {
    padding: 40px 20px 20px 20px;
    transform: scale(1); 
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 900;
  color: #f33d25;
  padding: 20px 0px 0px 0px;
  text-align: left;
`;

const PricePara = styled.h1`
  font-size: 30px;
  font-weight: 900;
  color: #b52805;
  text-align: left;
`;

const Para1 = styled.p`
  color: #f55f3b;
  font-weight: 600;
  text-align: left;
  font-size:14px;
`;

const Para = styled.p`
  color: #f2441b;
  font-weight: 600;
  text-align: left;
`;

const DivederBox = styled.div`
  background-color: #f33d25;
  width: 100%;
  height: 4px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: normal;
  margin: 10px 0;
`;

const FeatureText = styled.span`
  margin-left: 10px;
  color: #c55308;
  font-weight: 600;
  text-align: left;
`;