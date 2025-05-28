import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import Instagram from "../../../src/assets/instagram_3938036.png";
import LinkedIn from "../../../src/assets/linkedin_3992606.png";
import Youtube from "../../../src/assets/play_10090287.png";
import Mail from "../../../src/assets/mail-icon_11720354.png";
import { Divider, Typography, Container, Box } from "@mui/material";
import Deepalogo from "../../assets/EditedLogo-removebg-preview.png";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (href) => {
    if (href.startsWith("#")) {
      // Handle anchor links on the same page
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href.startsWith("/#")) {
      // Handle anchor links from other pages
      const currentPath = location.pathname;

      if (currentPath === "/") {
        // Already on home page, just scroll to the section
        const anchorId = href.substring(2);
        const element = document.querySelector(`#${anchorId}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate to home page and then scroll to section
        navigate("/");
        setTimeout(() => {
          const anchorId = href.substring(2);
          const element = document.querySelector(`#${anchorId}`);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    } else {
      // Handle regular page navigation
      navigate(href);
    }
  };

  return (
    <Footermain>
      <Container maxWidth="xl">
        <Row>
          <LogoContainer onClick={() => navigate("/")}>
            <Logo src={Deepalogo} alt="Logo" />
          </LogoContainer>
          <Col md={2} lg={2} xl={2} xs={12}>
            <Foottitle>What We Serve</Foottitle>
            <Links>
              <li onClick={() => navigate("/investment-solution")}>
                Investment Solutions
              </li>
              <li onClick={() => navigate("/retirement-planning")}>
                Retirement Planning
              </li>
              <li onClick={() => navigate("/wealth-management")}>
                Wealth Management
              </li>
              <li onClick={() => navigate("/educational-resource")}>
                Educational Resources
              </li>
            </Links>
          </Col>
          <Col md={2} lg={2} xl={2} xs={12}>
            <Foottitle>What We Do</Foottitle>
            <Links>
              {/* <ul style={{ listStyle: "none" }}>
                <li>
                  <a href="#offering" style={{ color: "white" }}>
                    Mutual Funds
                  </a>
                </li>
                <li>
                  <a href="#offering" style={{ color: "white" }}>
                    Training
                  </a>
                </li>
                <li>
                  <a href="#offering" style={{ color: "white" }}>
                    Advisory Services
                  </a>
                </li>
                <li>
                  <a href="#offering" style={{ color: "white" }}>
                    Algo Trading Solutions
                  </a>
                </li>
                <li>
                  <a href="#offering" style={{ color: "white" }}>
                    Alternative Investment funds
                  </a>
                </li>
                <li>
                  <a href="#offering" style={{ color: "white" }}>
                    Fixed Deposits & Bonds
                  </a>
                </li>
                <li>
                  <a href="#offering" style={{ color: "white" }}>
                    Real Estate funds
                  </a>
                </li>
                <li>
                  <a href="#offering" style={{ color: "white" }}>
                    Insurances{" "}
                  </a>
                </li>
              </ul> */}
              <li onClick={() => navigate("/service/mutual-funds")}>
                Mutual Funds
              </li>
              <li
                onClick={() =>
                  navigate("/service/training-in-financial-markets")
                }
              >
                Training in Financial Markets
              </li>
              <li onClick={() => navigate("/service/algo-trading")}>
                Algo Trading Solutions
              </li>
              <li onClick={() => navigate("/service/advisory-services")}>
                Advisory Services
              </li>
              <li onClick={() => navigate("/service/fixed-deposits-&-bond")}>
                Fixed Deposits & Bonds
              </li>
              <li
                onClick={() =>
                  navigate("/service/alternate-investment-funds-(AIFS)")
                }
              >
                Alternative Investment Funds
              </li>

              <li onClick={() => navigate("/service/real-estate-funds")}>
                Real Estate Funds
              </li>
              <li onClick={() => navigate("/service/insurances")}>
                Insurances
              </li>
            </Links>
          </Col>
          {/* <Col md={2} lg={2} xl={2} xs={12}>
            <Foottitle>How We Deliver</Foottitle>
            <Links>
              <li>Consulting</li>
              <li>Market Analysis</li>
              <li>Market Updates</li>
            </Links>
          </Col> */}
          <Col md={2} lg={2} xl={2} xs={12}>
            <Foottitle>What We Think</Foottitle>
            <Links>
              <li onClick={() => handleNavigation("/#card")}>Blogs</li>
              <li onClick={() => handleNavigation("/#media")}>Videos</li>
              <li onClick={() => handleNavigation("/#media")}>Reports</li>
            </Links>
          </Col>
          <Col md={2} lg={2} xl={2} xs={12}>
            <Foottitle>Calculator</Foottitle>
            <Links>
              <li onClick={() => navigate("/sip-calculator")}>Sip</li>
              <li onClick={() => navigate("/lumpsum-calculator")}>Lumpsum</li>
              <li onClick={() => navigate("/swp-calculator")}>
                Sip combined with lumbsum
              </li>
              <li onClick={() => navigate("/swp-calculator")}>Swap</li>
            </Links>
          </Col>
          <Col md={2} lg={2} xl={2} xs={12}>
            <Foottitle>Address</Foottitle>

            {/* <Link to="/adminlogin"> */}
            {/* <li>Admin LogIn</li> */}
            <Links>
              <p>
                No 145, 102, Gollavar Agraharam Rd, above ICICI bank,
                Kanniyappan Colony, Sanjeevarayanpet, Washermanpet, Chennai,
                Tamil Nadu 600021
              </p>
            </Links>
           
          </Col>
           <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.6682900232054!2d80.29056200000001!3d13.120187999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52670a343aef1d%3A0x89acc915e36fd6e6!2sFirst%20Choice%20Investment!5e0!3m2!1sen!2sin!4v1748239450808!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Deepan India Office Location"
            ></iframe>
        </Row>
        <StyledDivider  style={{marginTop:"20px"}}/>
        <Row style={{ justifyContent: "space-evenly", alignItems: "center" }}>
          <Col md={3}>
            <Bottomlink>
              <li>
                <a
                  href="https://www.instagram.com/deepanindia?igsh=MXNyNXh3a256NGNneg=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconIamge src={Instagram} alt={"img"} />
                </a>
              </li>
              <li>
                <a
                  href="http://www.youtube.com/@deepanindiafinancialservices"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconIamge src={Youtube} alt={"img"} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/deepan-india-financial-services-private-limited/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconIamge src={LinkedIn} alt={"img"} />
                </a>
              </li>
              <li>
                <a href="mailto:Deepanindiafinancialservices@gmail.com">
                  <IconIamge src={Mail} alt={"img"} />
                </a>
              </li>
            </Bottomlink>
          </Col>

          <Col md={6}>
            <Bottomlink style={{ justifyContent: "center" }}>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                &copy; {new Date().getFullYear()} Deepan India. All rights
                reserved.
              </Typography>
            </Bottomlink>
          </Col>

          <Col md={3}>
            <Bottomlink style={{ justifyContent: "flex-end" }}>
              <li onClick={() => navigate("/privacy-policy")}>
                Privacy Policy
              </li>
              <li onClick={() => navigate("/terms-of-service")}>
                Terms of Service
              </li>
            </Bottomlink>
          </Col>
        </Row>
      </Container>
    </Footermain>
  );
}
const Footermain = styled.section`
  padding: 70px 0 30px 0;
  border-top: 5px solid #49326b;
  background-color: #f9f3fe;
  @media screen and (max-width: 600px) {
    padding: 40px 0;
  }
`;
const Foottitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  padding: 5px 0;
  color: #49326b;
  text-transform: capitalize;
`;
const Links = styled.ul`
  margin: 10px 0;
  list-style-type: none;
  padding: 0;
  color: #49326b;
  li {
    padding: 5px 0;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover {
      color: #e91313;
    }
  }
`;
const Bottomlink = styled.ul`
  margin: 20px 0 0 0;
  list-style-type: none;
  padding: 0;
  color: #49326b;
  li {
    padding: 5px 10px;
    font-size: 13px;
    display: inline-block;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover {
      color: #df1414;
    }
  }
`;
const StyledDivider = styled(Divider)`
  background-color: #49326b;
  height: 6px;
  margin: 50px;
  width: 100%;
`;
const LogoContainer = styled.div`
  flex: 1;
`;

const Logo = styled.img`
  /* width: 0%; */
  height: 100px;
  cursor: pointer;
`;
const IconIamge = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
    filter: brightness(0.8);
  }
`;
