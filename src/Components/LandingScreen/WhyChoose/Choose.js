import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Container,
  useTheme,
  useMediaQuery,
  Fade,
  Slide,
  Chip,
} from "@mui/material";
import { Grid } from "@mui/system";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import back1Image from "../../../assets/website-faq-section-user-helpdesk-customer-support-frequently-asked-questions-problem-solution-quiz-game-confused-man-cartoon-character.png";

const Choose = ({ data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));

  const iconMap = {
    0: TrendingUpIcon,
    1: MonetizationOnIcon,
    2: SpeedIcon,
    3: SecurityIcon,
    4: VisibilityIcon,
    5: SmartToyIcon,
  };

  const defaultData = [
    {
      title: "Right Asset allocation",
      subTitle:
        "Deploying Right financial Solutions for each client after proper profiling.",
    },
    {
      title: "Zero Management Fees",
      subTitle: "No hidden charges, making our services cost-effective.",
    },
    {
      title: "Performance-Based Fees",
      subTitle:
        "Pay only when your portfolio crosses a predefined profit threshold.",
    },
    {
      title: "Strong Track Record",
      subTitle: "Monitor our past and present performance at any time.",
    },
    {
      title: "Transparent and Accessible",
      subTitle: "A user-friendly platform with clear reporting.",
    },
    {
      title: "Technology-Driven Approach",
      subTitle: "Enhancing investment processes through smart technology.",
    },
  ];

  const reviewData =
    data?.reviewData?.length > 0 ? data.reviewData : defaultData;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f9f3fe",
        position: "relative",
        overflow: "hidden",
        py: { xs: 4, md: 8 },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 1,
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            sx={{
              order: { xs: 1, md: 2 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ mb: { xs: 4, md: 6 } }}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: {
                    xs: "2rem",
                    sm: "2rem",
                    md: "2rem",
                    lg: "2rem",
                  },
                  fontWeight: 900,
                  color: "#49326b",
                }}
              >
                Why Choose Us
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontSize: {
                    xs: "2rem",
                    sm: "2.5rem",
                    md: "3rem",
                    lg: "3.5rem",
                  },
                  fontWeight: 900,
                  lineHeight: 1.2,
                  mb: 2,
                  color: "#f33d25 ",
                }}
              >
                Deepan <span style={{ color: "#49326b" }}>India</span>
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "#666666",
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  fontWeight: 400,
                  maxWidth: "600px",
                  lineHeight: 1.6,
                }}
              >
                Discover the advantages that set us apart in delivering
                exceptional financial solutions tailored just for you.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} sx={{ order: { xs: 1, md: 2 } }}>
            <Slide in timeout={1000}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: { xs: 300, md: 400, lg: 450 },
                  mx: "auto",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: { xs: 280, md: 380, lg: 420 },
                    height: { xs: 280, md: 380, lg: 420 },
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, #49326b,rgba(186, 157, 231, 0.19))`,
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
                />

                {/* Main Image */}
                <Box
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
                        filter:
                          "drop-shadow(0 30px 60px #49326b)",
                      },
                    },
                  }}
                >
                  <img src={back1Image} alt="Financial Services" />
                </Box>

                {/* Floating Elements */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "10%",
                    right: "-10%",
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background: `linear-gradient(45deg,rgb(71, 21, 136),rgb(213, 162, 243))`,
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
                  <TrendingUpIcon sx={{ color: "white", fontSize: "1.5rem" }} />
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    bottom: "15%",
                    left: "-8%",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: `#f3f1f1cc`,
                    border: `2px solid #49326b`,
                    animation: "float 4s ease-in-out infinite reverse",
                  }}
                />
              </Box>
            </Slide>
          </Grid>
        </Grid>
        <Fade in timeout={800}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Grid container spacing={{ xs: 2, md: 3 }}>
              {reviewData.map((item, index) => {
                const IconComponent = iconMap[index] || AdsClickIcon;
                return (
                  <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={index}>
                    {/* <Slide in timeout={1000 + index * 100}> */}
                    <Card
                      sx={{
                        height: "100%",
                        width: "100%",
                        backgroundColor: "#ffffff",
                        borderRadius: "10px",
                        borderTop: "10px solid #49326b",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        position: "relative",
                        overflow: "hidden",
                        "&:hover": {
                          transform: "translateY(-8px)",
                          boxShadow: `0 20px 40px #49326b`,
                          background: `linear-gradient(135deg, #49326b 0%, #rgba(210, 152, 228, 0.25)00%)`,
                          "& .feature-icon": {
                            transform: "scale(1.1)",
                            background: `linear-gradient(45deg, #49326b,rgb(167, 103, 180))`,
                          },
                        },
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "3px",
                          // background: `linear-gradient(90deg, #f33d25, #ff6b4a)`,
                        },
                      }}
                    >
                      <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            // mb: 2,
                          }}
                        >
                          <Box
                            className="feature-icon"
                            sx={{
                              width: 48,
                              height: 48,
                              borderRadius: "50px",
                              backgroundColor: " #49326b",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              mr: 2,
                              transition: "all 0.3s ease",
                              boxShadow: "0 4px 12px rgba(223, 125, 69, 0.1)",
                              flexShrink: 0,
                            }}
                          >
                            <IconComponent
                              sx={{
                                fontSize: "1.5rem",
                                color: "white",
                              }}
                            />
                          </Box>

                          <Box sx={{ flex: 1 }}>
                            <Typography
                              className="feature-title"
                              variant="h6"
                              sx={{
                                fontWeight: "bold",
                                fontSize: { xs: "1rem", md: "1.1rem" },
                                color: " #49326b",
                                mb: 1,
                                transition: "color 0.3s ease",
                                lineHeight: 1.3,
                              }}
                            >
                              {item.title}
                            </Typography>

                            <Typography
                              variant="body2"
                              sx={{
                                color: "#49326b",
                                lineHeight: 1.6,
                                fontSize: "0.9rem",
                              }}
                            >
                              {item.subTitle.split(" ").map((word, index) => (
                                <React.Fragment key={index}>
                                  {word}
                                  {(index + 1) % 8 === 0 ? <br /> : " "}
                                </React.Fragment>
                              ))}
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                    {/* </Slide> */}
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default Choose;
