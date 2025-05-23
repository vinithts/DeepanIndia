import React from "react";
import styled from "styled-components";
import { Grid, Container, Typography, Divider, Box } from "@mui/material";
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
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
                    radial-gradient(circle at 20% 50%, #f33d2510 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, #f3f1f120 0%, transparent 50%),
                    radial-gradient(circle at 40% 80%, #f33d2508 0%, transparent 50%)
                  `,
          zIndex: 0,
        }}
      />
      <Container maxWidth="xl">
        <Heading>Popular Blogs</Heading>
        {/* <StyledDivider/> */}
        {/* <Box> */}
        <Slider {...settings}>
          {sliderData.map((e, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Cards e={e} />
            </Grid>
          ))}
        </Slider>
        {/* </Box> */}
      </Container>
    </Maindiv>
  );
}

// Styled Components
const Maindiv = styled.section`
  padding: 50px 0;
  /* background-image: ${({ image }) => `url(${image})`}; */
  background: linear-gradient(135deg, #f3f1f155 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
  /* background-size: cover; */
  /* background-position: center; */
  /* background-attachment: fixed; */

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
    background: `linear-gradient(135deg, #f33d25 0%,rgb(19, 18, 117) 100%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    fontSize: { xs: "26px", sm: "50px" },
  },
})``;

const StyledDivider = styled(Divider)`
  background-color: #bcbec2;
  height: 8px;
  margin: 50px 0;
  width: 200px;
`;
