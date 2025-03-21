import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Card } from "@mui/material";
import styled from "styled-components";
import Rating from "@mui/material/Rating";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const Reviews = ({ data }) => {
  const reviews = data?.reviewData || [];
  const [slideIndex, setSlideIndex] = useState(0);
  const [progress, setProgress] = useState([]);

  // Initialize progress bars
  useEffect(() => {
    if (reviews.length) {
      setProgress(new Array(reviews.length).fill(0));
    }
  }, [reviews.length]);

  // Handle progress bar animation
  useEffect(() => {
    if (!reviews.length) return;

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = [...prevProgress];
        newProgress[slideIndex] += 1;

        if (newProgress[slideIndex] >= 100) {
          const resetProgress = new Array(reviews.length).fill(0);
          const nextIndex = (slideIndex + 1) % reviews.length;
          setSlideIndex(nextIndex);
          return resetProgress;
        }
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [slideIndex, reviews.length]);

  const handleProgressClick = (index) => {
    setSlideIndex(index);
    setProgress(new Array(reviews.length).fill(0));
  };

  return (
    <Maindiv id="investor">
      <Container>
        <Row>
          <Col md={12}>
            <Carousel activeIndex={slideIndex} onSelect={setSlideIndex}>
              {reviews.map((review, key) => (
                <Carousel.Item key={key}>
                  <Grid
                    container
                    spacing={5}
                    sx={{
                      width: "100%",
                      overflow: "hidden",
                      transition: "0.9s",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Grid item xs={12} md={3}>
                      <CardBox>
                        <Typography
                          sx={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            color: "#231f20",
                            marginBottom: "8px",
                            whiteSpace: "pre-line",
                            paddingLeft: "40px",
                          }}
                        >
                          {review.title || "Title not found"}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontWeight: "bold",
                            color: "#231f20",
                            marginBottom: "8px",
                            whiteSpace: "pre-line",
                            paddingLeft: "40px",
                          }}
                        >
                          {review.subTitle || "Subtitle not found"}
                        </Typography>
                        <Rating
                          name="half-rating"
                          defaultValue={2.5}
                          precision={0.5}
                          sx={{ padding: "10px 0px 10px 0px" }}
                        />
                        <CustomTypography3>
                          {review.description || "Description not found"}
                        </CustomTypography3>
                        <CustomTypography4>Read More</CustomTypography4>
                      </CardBox>
                    </Grid>
                  </Grid>
                </Carousel.Item>
              ))}
            </Carousel>

            {/* Progress Bars */}
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
          </Col>
        </Row>
      </Container>
    </Maindiv>
  );
};

export default Reviews;

/* Styled Components */
const Maindiv = styled.section`
  padding: 75px 0;
  background-color: #f9f9f9;

  @media screen and (max-width: 600px) {
    padding: 40px 0;
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

const CardBox = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  align-items: flex-start;
  width: 250px;
`;

const CustomTypography3 = styled(Typography)`
  && {
    font-size: 12px;
    font-weight: 400;
    color: #0c0c0c;
    text-align: left;
    margin-top: 10px;
  }
`;

const CustomTypography4 = styled(Typography)`
  && {
    margin-top: 10px;
    font-size: 12px;
    font-weight: 400;
    color: #807777;
    text-align: left;
    cursor: pointer;
  }
`;
