import React, { useEffect, useState } from "react";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import { styled } from "@mui/material/styles";
import { Box, Button, Typography, IconButton } from "@mui/material";
import Link from "@mui/material/Link";
import BackGroundImage2 from "../../../assets/increase-coins-stacking-with-pink-piggy-bank-web-banner-design-growth-deposit-money-saving-business-investment-concept-by-3d-render-illustration.jpg";
import BackGroundImage1 from "../../../assets/tree-grows-coin-glass-jar-with-copy-space.jpg";

const backgroundImages = [BackGroundImage1, BackGroundImage2];

const SlideShowBar = ({ data = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [direction, setDirection] = useState("next")

  const currentSlide = data.length > 0 ? data[currentIndex] : {};
  const {
    subTitle = "Your Trusted Wealth Creation Partner",
    title = "Dream Big, Achieve More!",
    description = "Empower your future with smart investments.",
    button_name = "Get Started",
  } = currentSlide;

  useEffect(() => {
    setDisplayText("");
    setShowButton(false);

    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 300);

    const textTimer = setTimeout(() => {
      title.split("").forEach((char, index) => {
        setTimeout(() => {
          setDisplayText((prev) => prev + char);
        }, index * 100);
      });
    }, 1000);

    return () => {
      clearTimeout(buttonTimer);
      clearTimeout(textTimer);
    };
  }, [currentIndex, title]);

  // Auto-slide interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? backgroundImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setDirection("next");
    setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
  };

  return (
    <MainBox>
      <BackgroundImage backgroundImage={backgroundImages[currentIndex]} direction={direction}/>
      <Overlay />
      <HoverWrapper>
        <NavigationBox>
          <IconButton onClick={handlePrev} className="navButton">
            <IoArrowBackSharp />
          </IconButton>
          <IconButton onClick={handleNext} className="navButton">
            <IoArrowForwardSharp />
          </IconButton>
        </NavigationBox>
      </HoverWrapper>
      <ContentBox>
        <Typography variant="h6" className="subTitle">
          {subTitle}
        </Typography>
        <Typography
          className="title"
          dangerouslySetInnerHTML={{ __html: displayText }}
        />
        <Typography
          className="description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        {showButton && (
          <Link href="#contact" passHref>
            <Button
              variant="contained"
              className="ctaButton"
              endIcon={<IoArrowForwardSharp className="arrowIcon" />}
            >
              {button_name}
            </Button>
          </Link>
        )}
       
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
  @keyframes slideOutToLeft {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(-100%);
      opacity: 0.8;
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
  @keyframes slideOutToRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0.8;
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
  [theme.breakpoints.down("md")]: {
    height: "400px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "300px",
  },
}));
const HoverWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  "&:hover .navButton": {
    opacity: 1,
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
  // background: "rgba(0, 0, 0, 0.5)",
  zIndex: 1,
}));

const ContentBox = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  textAlign: "left",
  color: "#49326b",
  maxWidth: "800px",
  padding: theme.spacing(2),
  "& .subTitle": {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
    // textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    animation: `float 3s ease-in-out infinite`,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  "& .title": {
    fontSize: "3rem",
    fontWeight: 900,
    marginBottom: theme.spacing(1),
    // textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    animation: `float 3s ease-in-out infinite`,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  "& .description": {
    fontSize: "1.25rem",
    marginBottom: theme.spacing(2),
    // textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    animation: `float 3s ease-in-out infinite`,
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.875rem",
    },
  },
  "& .ctaButton": {
    padding: theme.spacing(1.5, 4),
    fontSize: "1.25rem",
    fontWeight: "bold",
    backgroundColor: "red",
    textTransform: "none",
    borderRadius: "10px",
    transition: "all 0.3s ease",
    animation: `float 3s ease-in-out infinite`,
    "&:hover": {
      backgroundColor: "#49326b",
      transform: "scale(1.05)",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.875rem",
      padding: theme.spacing(1, 2),
    },
  },
  "& .arrowIcon": {
    fontSize: "1rem",
  },
}));

const NavigationBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  zIndex: 3,
  padding: theme.spacing(0, 2),
  pointerEvents: "none", 
  "& .navButton": {
    pointerEvents: "auto",
    opacity: 0,
    transition: "opacity 0.3s ease",
    color: "#fff",
    backgroundColor: "rgba(189, 185, 185, 0.5)",
    "&:hover": {
      backgroundColor: "rgba(189, 185, 185, 0.5)",
    },
  },
}));

export default SlideShowBar;
