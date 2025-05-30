import React from "react";
import styled from "styled-components";
import { Container, Typography, Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";
import { defaultCards } from "./DefaultCard";

export default function Cardpart({ data = [] }) {
  const sliderData = data.length > 0 ? data : defaultCards;

  const settings = {
    dots: true,
    infinite: sliderData.length > 1, 
    speed: 500,
    slidesToShow: Math.min(sliderData.length, 3), 
    slidesToScroll: 1,
    arrows: sliderData.length > 1, 
    autoplay: sliderData.length > 1, 
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: Math.min(sliderData.length, 2), 
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Maindiv id="card">
      <Container maxWidth="lg">
        <Typography
          align="center"
          gutterBottom
          sx={{
            color: "#49326b",
            fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
            fontWeight: 900,
            mb: 5,
          }}
        >
          Popular Blogs
        </Typography>
        <Box sx={{ padding: { xs: "20px 0", md: "40px 0" } }}>
          <Slider {...settings}>
            {sliderData.map((e) => (
              <Box key={e.id} sx={{ padding: "0 10px" }}>
                <Cards e={e} />
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Maindiv>
  );
}

const Maindiv = styled.section`
  padding: 60px 0;
  background: linear-gradient(135deg, #f9f3fe 0%, #e6e0fa 100%);
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    padding: 40px 0;
  }

  .slick-prev,
  .slick-next {
    z-index: 1;
    width: 40px;
    height: 40px;
    background: rgba(73, 50, 107, 0.8);
    border-radius: 50%;
    transition: background 0.3s ease;

    &:hover {
      background: #49326b;
    }
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 24px;
    color: #fff;
  }

  .slick-dots {
    bottom: -40px;
  }

  .slick-dots li button:before {
    font-size: 12px;
    color: #49326b;
    opacity: 0.5;
  }

  .slick-dots li.slick-active button:before {
    color: #49326b;
    opacity: 1;
  }
`;