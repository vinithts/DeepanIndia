import React, { useState, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import styled from "styled-components";
import { Url } from "../../../utils/api";
import backImage from "../../../assets/top-view-piggy-bank-money.jpg";

const MediaContent = ({ data }) => {
  const caseStudyData = data?.caseStudyData || [];
  const [slideIndex, setSlideIndex] = useState(0);
  const [progress, setProgress] = useState([]);

  // Initialize progress bars
  useEffect(() => {
    if (caseStudyData.length) {
      setProgress(new Array(caseStudyData.length).fill(0));
    }
  }, [caseStudyData.length]);

  // Handle progress bar animation
  useEffect(() => {
    if (!caseStudyData.length) return;

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = [...prevProgress];
        newProgress[slideIndex] += 1;

        if (newProgress[slideIndex] >= 100) {
          const resetProgress = new Array(caseStudyData.length).fill(0);
          const nextIndex = (slideIndex + 1) % caseStudyData.length;
          setSlideIndex(nextIndex);
          return resetProgress;
        }
        return newProgress;
      });
    }, 50); // Slightly faster transition than original

    return () => clearInterval(interval);
  }, [slideIndex, caseStudyData.length]);

  const handleProgressClick = (index) => {
    setSlideIndex(index);
    setProgress(new Array(caseStudyData.length).fill(0));
  };

  return (
    <StyledSection id="media" image={backImage}>
      <Typography
        sx={{
          fontSize: "50px",
          fontWeight: "900",
          color: "#231f20",
          textAlign: "center",
          marginBottom: "40px",
          "@media (max-width: 600px)": {
            fontSize: "26px",
          },
        }}
      >
        Finance Leaders Trust Us
      </Typography>

      <Box sx={{ maxWidth: "1200px", margin: "0 auto" }}>
        {caseStudyData.map((item, index) => (
          <SlideContainer
            key={index}
            style={{ display: index === slideIndex ? "block" : "none" }}
          >
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={6}>
                <LeftBorderContainer>
                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      color: "#fa0001",
                      textTransform: "uppercase",
                      fontFamily: "Nunito Sans",
                      marginBottom: "8px",
                    }}
                  >
                    {item.subTitle}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "1.8rem",
                      fontWeight: "bold",
                      color: "#231f20",
                      fontFamily: "Nunito Sans",
                      marginBottom: "16px",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "1rem",
                      color: "#666",
                      fontFamily: "Nunito Sans",
                      marginBottom: "24px",
                    }}
                  >
                    {item.description}
                  </Typography>
                </LeftBorderContainer>
              </Grid>
              <Grid item xs={12} md={6}>
                <ImageContainer>
                  <StyledImage src={`${Url}${item.image}`} alt={item.title} />
                  <OverlayContainer>
                    <YouTubeIcon
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
                        alt="YouTube"
                      />
                    </YouTubeIcon>
                  </OverlayContainer>
                </ImageContainer>
              </Grid>
            </Grid>
          </SlideContainer>
        ))}

        <ProgressContainer>
          {progress.map((value, index) => (
            <ProgressBar
              key={index}
              onClick={() => handleProgressClick(index)}
              active={index === slideIndex}
              progress={index === slideIndex ? `${value}%` : "0%"}
            />
          ))}
        </ProgressContainer>
      </Box>
    </StyledSection>
  );
};

export default MediaContent;

// Styled Components
const StyledSection = styled.section`
  padding: 60px 20px;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    padding: 40px 20px;
  }
`;

const SlideContainer = styled.div`
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const OverlayContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px; /* Spacing between YouTube logo and red line */
`;

const YouTubeIcon = styled.a`
  display: inline-block;
  text-decoration: none;

  img {
    height: 48px; /* Adjust size as needed */
    width: 68px;
  }
`;

const ProgressContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 24px;
`;

const ProgressBar = styled.div`
  width: 64px;
  height: 4px;
  background-color: #d1d3d4;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${(props) => props.progress};
    background-color: ${(props) => (props.active ? "#034EA2" : "transparent")};
    transition: width 0.05s linear;
  }
`;

// Add this new component for the left border
const LeftBorderContainer = styled.div`
  position: relative;
  padding-left: 16px; /* Space between text and the line */
  border-left: 8px solid #fa0001; /* Pink left border */
  margin-bottom: 16px;

  @media (max-width: 600px) {
    border-left: 3px solid #fa0001; /* Adjust thickness for smaller screens */
    padding-left: 12px;
  }
`;
