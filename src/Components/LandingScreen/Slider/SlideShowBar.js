import React, { useEffect, useState } from "react";
import { IoArrowForwardSharp } from "react-icons/io5";
import styled, { keyframes } from "styled-components";
import { Box, Button, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import BackGroundImage1 from "../../../assets/tree-grows-coin-glass-jar-with-copy-space.jpg";
import BackGroundImage2 from "../../../assets/human-hand-inserting-coin-piggybank.jpg";

export const SlideShowBar = ({ data = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [showButton, setShowButton] = useState(false);
  const backgroundImages = [BackGroundImage1, BackGroundImage2];
  const backgroundUrl =
    backgroundImages[currentIndex % backgroundImages.length];
  const currentSlide = data.length > 0 ? data[currentIndex] : {};
  const {
    subTitle = "Your Trusted Wealth Creation Partner",
    title = "Dream Rich! Dare to Reach!",
    description = "Everything for Everyone!",
    button_name = "Get Started",
  } = currentSlide;

  useEffect(() => {
    let text = title;
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [data]);

  return (
    <MainBox BackGroundImage1={BackGroundImage1}>
      {/* <BackgroundImage style={{ backgroundImage: `url(${backgroundUrl})` }} /> */}
      {/* <Overlay /> */}
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

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  opacity: 0.4;
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0px); }
`;

const MainBox = styled(Box)`
  background-image: ${({ BackGroundImage1 }) => `url(${BackGroundImage1})`};
  position: relative;
  width: 100%;
  height: 600px;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  @media (max-width: 900px) {
    height: 400px;
  }

  @media (max-width: 600px) {
    height: 300px;
  }
`;

const ContentBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-90%, -50%);
  color: #49326b;
  text-align: left;
  z-index: 1;

  .subTitle {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 8px;
    color: #49326b;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
    animation: ${float} 3s ease-in-out infinite;

    @media (max-width: 600px) {
      font-size: 14px;
    }
  }

  .title {
    font-size: 50px;
    font-weight: 900;
    margin-bottom: 8px;
    color: #49326b;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
    animation: float 3s ease-in-out infinite;
    padding: 10px;
    border-radius: 10px;

    @media (max-width: 600px) {
      font-size: 24px;
    }
  }

  .description {
    font-size: 24px;
    max-width: 800px;
    margin-bottom: 16px;
    /* text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7); */
    color: #49326b;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
    animation: ${float} 3s ease-in-out infinite;
    @media (max-width: 600px) {
      font-size: 16px;
    }
  }

  .ctaButton {
    padding: 10px 50px;
    border: 1px solid red;
    text-transform: none;
    color: white;
    font-size: 20px;
    background-color: red;
    font-weight: bold;
    z-index: 1;
    margin-top: 8px;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
    animation: ${float} 3s ease-in-out infinite;

    &:hover {
      background-color: transparent;
      color: white;
    }

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

export default SlideShowBar;
