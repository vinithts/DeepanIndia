import React, { useEffect, useState, useRef } from "react";
import { styled } from "@mui/material/styles";
import { Box, Button, Typography, Link } from "@mui/material";
import { IoArrowForwardSharp } from "react-icons/io5";
import BackGroundImage1 from "../../../assets/tree-grows-coin-glass-jar-with-copy-space.jpg";
import BackGroundImage2 from "../../../assets/still-life-green-grapes-vineyard.jpg";

const backgroundImages = [BackGroundImage1, BackGroundImage2];

const SlideShowBar = ({ data = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [direction, setDirection] = useState("next");
  const [animationType, setAnimationType] = useState("typewriter");
  const isManualNavigation = useRef(false);
  const [hover, setIsHover] = useState(false);
  const typewriterTimeouts = useRef([]);

  const currentSlide = data.length > 0 ? data[currentIndex] : {};
  const {
    subTitle = "Your Trusted Wealth Creation Partner",
    title = "Dream Rich, Dare to Reach!",
    description = "Empower your future with smart investments.",
    button_name = "Get Started",
  } = currentSlide;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isManualNavigation.current) {
        setAnimationType("typewriter");
        setDirection("next");
        setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
      }
      isManualNavigation.current = false;
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    isManualNavigation.current = true;
    setAnimationType("fade");
    setDirection(index > currentIndex ? "next" : "prev");
    setCurrentIndex(index);
  };

  return (
    <MainBox
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <BackgroundImage
        backgroundImage={backgroundImages[currentIndex]}
        direction={direction}
      />
      <Overlay />
      <NavigationDots>
        {backgroundImages.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </NavigationDots>
      <ContentBox>
        <Typography variant="h6" className="subTitle">
          {subTitle}
        </Typography>
        <Typography className="title" component="h1">
          {title}
        </Typography>
        <Typography className="description">{description}</Typography>
        <Link href="#contact" passHref>
          <Button
            variant="contained"
            className="ctaButton"
            endIcon={<IoArrowForwardSharp className="arrowIcon" />}
          >
            {button_name}
          </Button>
        </Link>
      </ContentBox>
    </MainBox>
  );
};

const slideIn = `
  @keyframes slideInFromRight {
    from {
      transform: translateX(100%);
      opacity: 0.8;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slideInFromLeft {
    from {
      transform: translateX(-100%);
      opacity: 0.8;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

const MainBox = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "600px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  paddingLeft: theme.spacing(4),
  overflow: "hidden",
  boxSizing: "border-box",
  [theme.breakpoints.down("md")]: {
    height: "450px",
    paddingLeft: theme.spacing(2),
  },
  [theme.breakpoints.down("sm")]: {
    height: "350px",
    paddingLeft: theme.spacing(1),
  },
}));

const BackgroundImage = styled(Box)(({ backgroundImage, direction }) => ({
  width: "100%",
  height: "100%",
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
  animation:
    direction === "next"
      ? "slideInFromRight 0.6s ease-in-out forwards"
      : "slideInFromLeft 0.6s ease-in-out forwards",
}));

const Overlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background:
    "linear-gradient(to right, rgba(73, 50, 107, 0.8), rgba(73, 50, 107, 0.4))",
  zIndex: 2,
}));

const ContentBox = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 4,
  textAlign: "left",
  color: "#fff",
  padding: theme.spacing(4),
  boxSizing: "border-box",
  "& .title": {
    fontSize: "3.5rem",
    fontWeight: 700,
    lineHeight: 1.2,
    color: "#e4d4fa",
    marginBottom: theme.spacing(2),
    position: "relative",
    zIndex: 5,
    [theme.breakpoints.down("lg")]: {
      fontSize: "2.8rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "2.2rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.6rem",
    },
  },
  "& .subTitle": {
    fontSize: "1.5rem",
    fontWeight: 600,
    marginBottom: theme.spacing(1.5),
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.25rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  "& .description": {
    fontSize: "1.25rem",
    marginBottom: theme.spacing(3),
    lineHeight: 1.6,
    fontWeight: 600,
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.1rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.875rem",
    },
  },
  "& .ctaButton": {
    padding: theme.spacing(1.5, 4),
    fontSize: "1.25rem",
    fontWeight: 600,
    backgroundColor: "#ff4d4f",
    textTransform: "none",
    borderRadius: "8px",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#e63946",
      transform: "scale(1.05)",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.1rem",
      padding: theme.spacing(1.2, 3),
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.875rem",
      padding: theme.spacing(1, 2),
    },
  },
  "& .arrowIcon": {
    fontSize: "1.25rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.875rem",
    },
  },
}));

const NavigationDots = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: theme.spacing(2),
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  gap: theme.spacing(1),
  zIndex: 5,
}));

const Dot = styled(Box)(({ theme, active }) => ({
  width:"40px",
  height: "4px",
  backgroundColor: active ? "white" : "rgba(255, 255, 255, 0.5)",
  // borderRadius: active ? "12px" : "50%",
  cursor: "pointer",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: active ? "#e63946" : "rgba(255, 255, 255, 0.8)",
  },
}));

export default SlideShowBar;