import { Box, Container, Grid, Typography, Fade, Slide } from "@mui/material";
import React, { useEffect, useState } from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { styled, keyframes } from "@mui/material/styles";
import aboutImg from "../../../assets/WhatsApp Image 2025-05-24 at 11.31.47 AM (1).jpeg";
import aboutImg1 from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";

// Keyframe animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(245, 61, 37, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(245, 61, 37, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(245, 61, 37, 0);
  }
`;

const gradientShift = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const About = ({ data }) => {
  const { title, description } = data[0] || {};
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <MainBox id="About" image={aboutImg1}>
      {/* <BackgroundPattern /> */}

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <AnimatedTitle>About Us</AnimatedTitle>
        <Grid container spacing={6} alignItems="center">
          {/* Text Column */}
          <Grid item xs={12} md={6}>
            <Fade in={isVisible} timeout={1000}>
              <Box>
                {/* <StyledDivider /> */}

                <SubTitle>
                  {title ||
                    "Deepan India, we believe that wealth creation should be accessible to everyone. Our mission is to empower investors with financial education, strategic investment guidance, and risk management solutions"}
                </SubTitle>

                <DescriptionBox>
                  <Typography
                    sx={{
                      fontSize: { xs: "16px", md: "18px" },
                      fontWeight: 500,
                      color: "white",
                      textAlign: "left",
                      lineHeight: 1.8,
                      position: "relative",
                    }}
                  >
                    {description ||
                      "We offer personalized investment and trading strategies tailored for individual financial goals and risk appetites. Whether you're a beginner or an experienced investor, our technology-driven approach ensures transparent, data-backed and result-oriented wealth management solutions with lifetime support."}
                  </Typography>
                </DescriptionBox>
              </Box>
            </Fade>
          </Grid>

          {/* Image Column */}
          <Grid item xs={12} md={6}>
            <Slide direction="right" in={isVisible} timeout={1200}>
              {/* <ImageBox> */}
              {/* <ImageContainer> */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  // maxWidth: { xs: 300, md: 500, lg: 500 },
                  mx: "auto",
                }}
              >
                {/* <Box
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          width: { xs: 280, md: 380, lg: 420 },
                          height: { xs: 280, md: 380, lg: 420 },
                          borderRadius: "50%",
                          background: `linear-gradient(135deg, #49326b, #f9f3fe)`,
                          animation: "pulse 4s ease-in-out infinite",
                          "@keyframes pulse": {
                            "0%, 100%": {
                              transform: "translate(-50%, -50%) scale(1)",
                            },
                            "50%": {
                              transform: "translate(-50%, -50%) scale(1.05)",
                            },
                          },
                        }}
                      /> */}

                {/* Main Image */}
                {/* <Box
                        sx={{
                          position: "relative",
                          zIndex: 2,
                          "& img": {
                            width: "100%",
                            height: "auto",
                            filter: "drop-shadow(0 20px 40px #49326b)",
                            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                            "&:hover": {
                              transform: "scale(1.02) translateY(-5px)",
                              filter: "drop-shadow(0 30px 60px #49326b)",
                            },
                          },
                        }}
                      > */}
                <StyledImage src={aboutImg} alt="About Us" />
                {/* <Box
                          sx={{
                            position: "absolute",
                            top: "10%",
                            right: "-10%",
                            width: 60,
                            height: 60,
                            borderRadius: "50%",
                            background: `linear-gradient(45deg, #49326b,rgb(145, 123, 179))`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 8px 32px #49326b",
                            animation: "float 3s ease-in-out infinite",
                            "@keyframes float": {
                              "0%, 100%": { transform: "translateY(0px)" },
                              "50%": { transform: "translateY(-10px)" },
                            },
                          }}
                        >
                          <TrendingUpIcon
                            sx={{ color: "white", fontSize: "1.5rem" }}
                          />
                        </Box>
                        <Box
                          sx={{
                            position: "absolute",
                            bottom: "15%",
                            left: "-8%",
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            background: `#f9f3fe`,
                            border: `2px solid #49326b`,
                            animation: "float 4s ease-in-out infinite reverse",
                          }}
                        /> */}
                {/* </Box> */}
                <ImageOverlay />
              </Box>
              {/* </ImageContainer> */}
              {/* </ImageBox> */}
            </Slide>
          </Grid>
        </Grid>
      </Container>
    </MainBox>
  );
};

/* Styled Components */
const MainBox = styled(Box)(({ theme, image }) => ({
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  padding: "20px 0px 20px 0px",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
  },

  "& > *": {
    position: "relative",
    zIndex: 2,
  },
}));

const BackgroundPattern = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  opacity: 0.03,
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23DC143C' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
  zIndex: 1,
});

const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px 10px",
  width: "100%",
  maxWidth: "1400px",
  margin: "0 auto",

  [theme.breakpoints.down("md")]: {
    padding: "20px 10px",
  },
}));

const InsideBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  width: "100%",
});

// const TextBox = styled(Box)(({ theme }) => ({
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   textAlign: "left",
//   border: "10px solid #e4d4fa",
//   background: "#f9f3fe",
//   backdropFilter: "blur(10px)",
//   padding: "20px 40px 40px 40px",
//   borderRadius: "10px",
//   boxShadow: `
//     0 20px 40px #49326b,
//     0 0 0 1px #49326b,
//     inset 0 1px 0 rgba(245, 233, 253, 0.9)
//   `,
//   animation: `${slideInLeft} 1s ease-out`,
//   position: "relative",

//   [theme.breakpoints.down("md")]: {
//     padding: "30px 25px",
//   },
// }));

const AnimatedTitle = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(32px, 5vw, 48px)",
  fontWeight: 900,
  color: "white",
  backgroundSize: "200% 200%",
  textAlign: "left",
  // animation: `${gradientShift} 4s ease-in-out infinite, ${fadeInUp} 1s ease-out`,
  position: "relative",
  marginBottom: "50px",
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(18px, 3vw, 24px)",
  fontWeight: 700,
  color: "white",
  textAlign: "left",
  marginTop: "20px",
  marginBottom: "30px",
  lineHeight: 1.6,
  animation: `${fadeInUp} 1.4s ease-out`,
  position: "relative",
  [theme.breakpoints.down("md")]: {
    marginBottom: "25px",
  },
}));

const DescriptionBox = styled(Box)(({ theme }) => ({
  // background: `linear-gradient(135deg, #e4d4fa, #f9f3fe)`,
  border: `2px solid white`,
  borderRadius: "15px",
  padding: "25px",
  position: "relative",
  animation: `${fadeInUp} 1.6s ease-out`,
  transition: "all 0.3s ease",
}));

const ImageBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  animation: `${slideInRight} 1.2s ease-out`,

  [theme.breakpoints.down("md")]: {
    marginTop: "40px",
  },
}));

const ImageContainer = styled(Box)({
  position: "relative",
  borderRadius: "20px",
  overflow: "hidden",
  animation: `${float} 6s ease-in-out infinite`,
});

const StyledImage = styled("img")(({ theme }) => ({
  width: "100%",
  // maxWidth: "500px",
  height: "auto",
  borderRadius: "10px",
  transition: "transform 0.3s ease",
  position: "relative",
  zIndex: 2,

  "&:hover": {
    transform: "scale(1.05)",
  },

  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
}));

const ImageOverlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `linear-gradient(135deg, rgba(220, 20, 60, 0.1), rgba(245, 61, 37, 0.1))`,
  borderRadius: "20px",
  opacity: 0,
  transition: "opacity 0.3s ease",
  zIndex: 3,

  ".image-container:hover &": {
    opacity: 1,
  },
});
