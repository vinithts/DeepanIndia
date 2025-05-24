import React from "react";
import styled from "styled-components";
import { Grid, Container, Typography, Divider, Box } from "@mui/material";
import Cards from "./Cards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import backImage from "../../../assets/top-view-piggy-bank-money.jpg";
import LandingImage1 from "../../../assets/Blog1.jpeg";
import LandingImage2 from "../../../assets/Blog2.jpeg";
import LandingImage3 from "../../../assets/landingImage3.jpg";
import LandingImage4 from "../../../assets/credit-4516068_640.jpg";

const defaultCards = [
  {
    id: 1,
    title: "What to Do After B.Com or B.Com (Finance)? Top Career and Study Options in Finance",
    metaDescription:
      "Confused about what to do after B.Com or B.Com Finance? Discover top career options, best finance courses, and study paths like MBA, CA, CFA, Stock Market Pro Trader e.t.c to build a successful career in finance.",
    intro:
      "Are you a B.Com or B.Com Finance graduate wondering what to do next? With the financial industry growing rapidly, there’s never been a better time to explore your career and study options in finance.",
   image: LandingImage1,
      content: [
      {
        heading: "Top Career Options After B.Com / B.Com Finance",
        items: [
          "Chartered Accountant (CA)",
          "Financial Analyst",
          "Certified Financial Planner (CFP)",
          "Investment Banker",
          "Stock Market Trader or Advisor",
          "Careers in Banking and Insurance",
        ],
      },
      {
        heading: "Best Higher Study Options After B.Com / B.Com Finance",
        items: [
          "MBA in Finance",
          "M.Com (Finance/Accounting)",
          "Chartered Financial Analyst (CFA)",
          "Short-term Finance Certifications",
        ],
      },
      {
        heading: "Skills You Need to Build a Successful Career in Finance",
        items: [
          "Financial Analysis & Reporting",
          "Excel & Data Visualization",
          "Communication & Presentation",
          "Knowledge of Equity, Mutual Funds & Derivatives",
          "Risk Management Techniques",
          "Market Research & Economic Trends",
        ],
      },
      {
        heading: "Why Choose a Career in Finance?",
        paragraph:
          "The finance sector is dynamic, evolving, and full of opportunities. Whether you want job security or entrepreneurial freedom, finance offers flexibility and growth.",
      },
      {
        heading: "Start Your Finance Journey with Deepan India",
        paragraph:
          "At Deepan India Financial Services Pvt. Ltd., we help students take their first confident steps into the world of finance with training, mentoring, and career guidance.",
      },
    ],
    author: {
      name: "SRV",
      linkedin: "https://www.linkedin.com/in/YOUR-LINKEDIN-ID", // Replace with actual link
      company: "Deepan India Financial Services Pvt Ltd",
    },
  },
  {
    id: 2,
    title: "Want to Kill Idle Time Productively? Try the Serious Game of Trading in Financial Markets",
    metaDescription:
      "Discover how to turn idle time into income by trading in financial markets. Learn stocks, forex, commodities & crypto's trading with the right mindset and strategy to join the top 1% of successful traders.",
    intro:
      "Are you looking to turn idle time into a powerful income-generating opportunity? Welcome to the world of trading in financial markets — a serious game where strategy, discipline, and mindset matter more than luck.",
   image: LandingImage2,
      content: [
      {
        heading: "Why Trading is the Ultimate Game of the Mind",
        items: [
          "100% Existence – As Long as Humans Exist, Financial Markets too",
          "100% Independent – You’re Your Own Boss",
          "0% Competition – Everyone Can Copy, But Not Think Like You",
        ],
      },
      {
        heading: "What Makes Trading So Powerful?",
        items: [
          "Only a Few Make Money in the Markets",
          "You Only Need a Stable Mind",
          "You Don’t Need All Day — Just the Right Minutes",
        ],
      },
      {
        heading: "Financial Markets You Can Trade In",
        items: [
          "Equity Markets (Listed companies like SBI)",
          "Commodities (Gold, Silver, Oil, etc.)",
          "Currencies (Forex Trading USDINR etc)",
          "Cryptocurrencies (Bitcoin, Ethereum, Ripple etc.)",
        ],
      },
      {
        heading: "Is Trading for You?",
        items: [
          "Do I have a calm and clear mindset for following rules set by me?",
          "Can I follow a strategy that suits my own personality?",
          "Do I want to be financially independent on my own terms?",
          "Do I wish to have more leisure time than earning time?",
          "Do I want to grow exponentially using leveraged or funded accounts?",
        ],
      },
      {
        heading: "Ready to Trade Smart with Deepan India?",
        paragraph:
          "At Deepan India Financial Services Pvt. Ltd., we train aspiring traders to master the market with real mentorship, practical strategy building, and disciplined execution.",
      },
    ],
    author: {
      name: "SRV",
      linkedin: "https://www.linkedin.com/in/YOUR-LINKEDIN-ID", // Replace with actual link
      company: "Deepan India Financial Services Pvt Ltd",
    },
  },
   {
    id: 3,
    title: "Are You Ready to Turn Your Contacts into Wealth? Start with SIP in Mutual Funds",
    metaDescription: "Start your journey to financial freedom with SIP in mutual funds. Discover how early investing, rupee cost averaging, and smart referrals can build long-term wealth for you and your loved ones.",
   image: LandingImage2,
    content: `
      <p>In a world where everyone is chasing financial freedom, very few know where to begin. The truth is — it’s not about earning more, but investing smarter. One of the easiest and most effective ways to build long-term wealth is through a Systematic Investment Plan (SIP) in mutual funds.</p>
      <p>If you’ve ever wished to help yourself or your loved ones reach financial goals with minimal risk and maximum discipline, this blog is for you.</p>

      <h2>Why Financial Freedom Should Be a Priority</h2>
      <p>Imagine a life where your money works for you — not the other way around. That’s what financial independence offers. Whether you are a student, salaried professional, entrepreneur, or homemaker, having consistent passive income through smart investing can change your life.</p>

      <h2>SIP in Mutual Funds: A Simple, Smart Start</h2>
      <p>A Systematic Investment Plan (SIP) allows you to invest a fixed amount every month into a mutual fund scheme. It’s like a monthly savings habit — but one that grows your money through market-linked returns.</p>
      <ul>
        <li>Low Investment Barrier – Start with as little as ₹500/month</li>
        <li>Rupee Cost Averaging – Invest regularly through market ups and downs</li>
        <li>Power of Compounding – Grow wealth exponentially over the years</li>
        <li>Flexibility – Choose plans based on your risk appetite: low, medium, or high</li>
        <li>Disciplined Wealth Building – No emotional trading, just automated investing</li>
      </ul>

      <h2>Early Investing = Early Freedom</h2>
      <ul>
        <li>You invest smaller amounts to achieve bigger goals</li>
        <li>You ride out market volatility easily</li>
        <li>You build a strong financial foundation before age 40</li>
        <li>You stay ahead of inflation without taking aggressive risks</li>
      </ul>
      <p><em>“Start early. Invest consistently. Retire peacefully.”</em></p>

      <h2>Convert Your Contacts into Wealth-Builders</h2>
      <p>It’s not just about your financial journey — it's about helping others too. If your friends, family, or colleagues are still unsure about how to start investing, you can become their guide.</p>
      <p>🤝 <strong>Refer Your Loved Ones to Start Their SIP Journey</strong></p>
      <p>At Deepan India Financial Services Pvt. Ltd., we offer expert guidance on choosing the right SIP mutual fund based on individual goals, income, and risk tolerance. Also we use technology to acquire, educate and rendering prompt services.</p>
      <ul>
        <li>Set up their first SIP</li>
        <li>Understand fund types (Equity, Debt, Hybrid, Index)</li>
        <li>Track and manage their investments online</li>
        <li>Build a retirement or child education corpus</li>
      </ul>

      <h2>Your Action Plan: Start, Grow & Refer</h2>
      <ul>
        <li>Step 1: Start your own SIP investment</li>
        <li>Step 2: Learn about your fund’s growth and tax benefits</li>
        <li>Step 3: Refer at least 3 contacts to start their SIPs</li>
        <li>Step 4: Watch wealth grow — not just yours, but theirs too</li>
      </ul>

      <h2>Final Words</h2>
      <p>Achieving financial freedom doesn’t require a lottery ticket. It requires consistency, time, and the right investment strategy. SIP in mutual funds is a proven path to long-term wealth creation — for you and the people you care about.</p>
      <p>At Deepan India Financial Services Pvt. Ltd., we’re committed to empowering individuals and families to reach their financial goals through smart SIP investments. Whether you're just starting out or guiding others, now is the time to act.</p>

      <p><strong>Let’s build a wealthier future — one SIP at a time.</strong></p>

      <p><em>Written by SRV <a href="https://www.linkedin.com/in/your-linkedin-id" target="_blank">@LinkedIn</a><br/>
      Deepan India Financial Services Pvt Ltd<br/>
      Everything for Everyone</em></p>
    `, 
  }
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
        <Heading>Popular Blogs</Heading>
        {/* <StyledDivider/> */}
        {/* <Box> */}
        <Slider {...settings}>
          {sliderData.map((e, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={e.id}>
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
  background-color:#f9f3fe;
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
   color:"#49326b",
    fontSize: { xs: "26px", sm: "50px" },
  },
})``;

const StyledDivider = styled(Divider)`
  background-color: #bcbec2;
  height: 8px;
  margin: 50px 0;
  width: 200px;
`;
