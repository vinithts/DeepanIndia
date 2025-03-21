import React, { useEffect, useState } from "react";
import { IoArrowForwardSharp } from "react-icons/io5";
import styled, { keyframes } from "styled-components";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, IconButton, Button, Typography } from "@mui/material";
import backgroundImage from "../../../assets/close-up-coin-jar-with-tree.jpg";
import { Url } from "../../../utils/api";
import Link from '@mui/material/Link';

export const SlideShowBar = ({ data = [] }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [hover, setHover] = useState(false);

  // Get current slide data safely
  const currentSlide = data[currentIndex] || {};
  const { subTitle = "", title = "", description = "", button_name = "", image = "" } = currentSlide;

  // Function to navigate slides
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  // Handle text animation effect
  useEffect(() => {
    let text = currentSlide.title || "";
    setDisplayText("");
    setShowButton(false);

    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 300);

    const textTimer = setTimeout(() => {
      text.split("").forEach((char, index) => {
        setTimeout(() => {
          setDisplayText((prev) => prev + char);
        }, index * 100);
      });
    }, 1000);

    return () => {
      clearTimeout(buttonTimer);
      clearTimeout(textTimer);
    };
  }, [currentIndex, data]);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, data]);

  return (
    <MainBox
      image={`${Url}${image || backgroundImage}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Slide Content */}
      <ContentBox>
        <Typography variant="h6" className="subTitle">
          {subTitle || "Your Trusted Wealth Creation Partner"}
        </Typography>
        <Typography className="title" dangerouslySetInnerHTML={{ __html: title || "Dream Rich! Dare to Reach!"}} />
        <Typography className="description" dangerouslySetInnerHTML={{ __html: description  || "Everything for Everyone!"}} />
        <Link href="#contact" passHref>
        <Button
          variant="contained"
          className="ctaButton"
          endIcon={<IoArrowForwardSharp className="arrowIcon" />}
        >
          {button_name || "Get Started"}
        </Button>
        </Link>
      </ContentBox>

      {/* Navigation Arrows */}
      {hover && (
        <NavControls>
          <IconButton className="navButton" onClick={prevSlide}>
            <ArrowBackIos />
          </IconButton>
          <IconButton className="navButton" onClick={nextSlide}>
            <ArrowForwardIos />
          </IconButton>
        </NavControls>
      )}
    </MainBox>
  );
};

// Styled Components

const slideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const MainBox = styled(Box)`
  position: relative;
  width: 100%;
  height: 600px;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  animation: ${slideIn} 0.8s ease-in-out;

  @media (max-width: 900px) {
    height: 300px;
  }
`;

const ContentBox = styled(Box)`
  position: absolute;
  top: 30%;
  left: 15%;
  right: 15%;
  color: white;
  text-align: left;
  z-index: 1;

  .subTitle {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 8px;
    color:rgb(5, 4, 59);
    
    @media (max-width: 600px) {
      font-size: 12px;
    }
  }

  .title {
    font-size: 50px;
    font-weight: 900;
    margin-bottom: 8px;
    color:rgb(5, 4, 59);
    @media (max-width: 600px) {
      font-size: 24px;
    }
  }

  .description {
    font-size: 24px;
    max-width: 800px;
    margin-bottom: 16px;
    color:rgb(5, 4, 59);
    @media (max-width: 600px) {
      font-size: 16px;
    }
  }

  .ctaButton {
    padding: 10px 50px;
    background-color: #95151A;
    &:hover{
      background-color:rgb(5, 4, 59);
    }
    text-transform: none;
    color: white;
    font-size: 20px;
    font-weight: bold;
    z-index: 1;
    margin-top: 8px;

    @media (max-width: 600px) {
      font-size: 12px;
      padding: 6px 20px;
    }
  }

  .arrowIcon {
    color: white;
    font-size: 16px;
  }
`;

const NavControls = styled(Box)`
  display: flex;
  position: absolute;
  justify-content: space-between;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  align-items: center;
  padding: 0 20px;

  .navButton {
    border-radius: 50px;
    padding: 16px;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.5);

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }

  @media (max-width: 600px) {
    .navButton {
      padding: 12px;
    }
  }
`;

export default SlideShowBar;
