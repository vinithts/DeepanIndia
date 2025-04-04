import React from "react";
import styled from "styled-components";
import { Grid, Container, Typography } from "@mui/material";
import Cards from "./Cards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import backImage from "../../../assets/top-view-piggy-bank-money.jpg";
import LandingImage1 from "../../../assets/landingImage1.jpg";
import LandingImage2 from "../../../assets/landingImage2.jpg";
import LandingImage3 from "../../../assets/landingImage3.jpg";
import LandingImage4 from "../../../assets/credit-4516068_640.jpg";

// Default cards for fallback
const defaultCards = [
  {
    title: "Investment Strategies",
    subTitle: "Smart Wealth Planning",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    image: LandingImage1,
  },
  {
    title: "Retirement Solutions",
    subTitle: "Plan Your Future",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    image: LandingImage2,
  },
  {
    title: "Wealth Management",
    subTitle: "Grow Your Assets",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    image: LandingImage3,
  },
  {
    title: "Financial Advisory",
    subTitle: "Expert Insights",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    image: LandingImage4,
  },
];

export default function Cardpart({ data = [] }) {
  const sliderData = data.length > 0 ? data : defaultCards;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <Maindiv id="card" image={backImage}>
      <Container maxWidth="xl">
        <Heading>Investor Relations</Heading>
        <Slider {...settings}>
          {sliderData.map((e, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Cards e={e} />
            </Grid>
          ))}
        </Slider>
      </Container>
    </Maindiv>
  );
}

// Styled Components
const Maindiv = styled.section`
  padding: 50px 0;
  background-image: ${({ image }) => `url(${image})`};
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

  .slick-prev:before,
  .slick-next:before {
    color: rgba(28, 10, 48, 0.12);
    font-size: 30px;
  }
`;

const Heading = styled(Typography).attrs({
  sx: {
    padding: "40px",
    textAlign: "center",
    fontWeight: 900,
    color: "#23395d",
    fontSize: { xs: "26px", sm: "50px" },
  },
})``;
