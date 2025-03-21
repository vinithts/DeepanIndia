import React from "react";
import styled from "styled-components";
import { Grid, Container, Typography } from "@mui/material";
import Cards from "./Cards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import backImage from "../../../assets/top-view-piggy-bank-money.jpg";

export default function Cardpart({ data }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Maindiv id="card" image={backImage}>
      <Container maxWidth="xl">
        <Typography  sx={{ padding: "40px",
          textAlign: "center",
          fontWeight: 900,
          color: "black",
          fontSize: "50px",
          "@media (max-width: 600px)": {
            fontSize: "26px",
          },}}>
          Investor Relations
        </Typography>
        <Slider {...settings}>
          {data.map((e, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Cards e={e} />
            </Grid>
          ))}
        </Slider>
      </Container>
    </Maindiv>
  );
}

const Maindiv = styled.section`
  padding: 50px 0;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  @media screen and (max-width: 600px) {
    padding: 40px 0;
  }

  .slick-prev,
  .slick-next {
    z-index: 1;
  }

  .slick-dots {
    bottom: -30px;
  }

  .slick-dots li button:before {
    font-size: 12px;
    color: rgba(28, 10, 48, 0.12);
  }
  .slick-prev:before{
    color: rgba(28, 10, 48, 0.12);
    font-size: 30px;
  }
  .slick-next:before{
    color: rgba(28, 10, 48, 0.12);
    font-size: 30px;
  }
`;


