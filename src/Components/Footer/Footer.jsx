import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Instagram, Linkedin, Mail, Youtube } from "lucide-react";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { Divider, Typography, Container, Box } from "@mui/material";

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
          <Col md={2} lg={2} xl={2} xs={12}>
            <Foottitle>How We Deliver</Foottitle>
            <Links>
              <li>Consulting</li>
              <li>Market Analysis</li>
              <li>Market Updates</li>
            </Links>
          </Col>
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
              <li onClick={() => handleNavigation("/#calculator")}>Sip</li>
              <li onClick={() => handleNavigation("/#calculator")}>Lumpsum</li>
              <li onClick={() => handleNavigation("/#calculator")}>
                Sip combined with lumbsum
              </li>
              <li onClick={() => handleNavigation("/#calculator")}>Swap</li>
            </Links>
          </Col>
          {/* <Col md={2} lg={2} xl={2} xs={12}>
            <Foottitle>Address</Foottitle>
            <Links> */}
          {/* <Link to="/adminlogin">
                <li>Admin LogIn</li> */}
          {/* No 145, 102, Gollavar Agraharam Rd, above ICICI bank, Kanniyappan
              Colony, Sanjeevarayanpet, Washermanpet, Chennai, Tamil Nadu 600021 */}
          {/* </Link> */}
          {/* </Links>
          </Col> */}
        </Row>
        <StyledDivider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginTop: "20px",
            width: "100%",
            gap: 4,
            flexWrap: "wrap", // ensures responsiveness
          }}
        >
          {/* Address Section */}
          <Box
            sx={{ display: "flex", flexDirection: "column", maxWidth: "45%" }}
          >
            <Foottitle>Address</Foottitle>
            <Links>
              <p style={{ width: "100%" }}>
                No 145, 102, Gollavar Agraharam Rd, above ICICI bank,
                Kanniyappan Colony, Sanjeevarayanpet, Washermanpet, Chennai,
                Tamil Nadu 600021
              </p>
            </Links>
          </Box>

          {/* Google Map Section */}
          <Box sx={{ width: "100%", maxWidth: "50%" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62249.37912285897!2d80.2465766!3d13.1145724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f93a8d6f9fd%3A0x3f1c6d83a234b0a7!2sICICI%20Bank%20Chennai%20-%20Washermanpet!5e0!3m2!1sen!2sin!4v1716544359872!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Deepan India Office Location"
            ></iframe>
          </Box>
        </Box>

        <Row style={{ justifyContent: "space-evenly", alignItems: "center" }}>
          <Col md={3}>
            <Bottomlink>
              <li>
                <a
                  href="https://www.instagram.com/deepanindia?igsh=MXNyNXh3a256NGNneg=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/deepan-india-financial-services-private-limited/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
              </li>
              <li>
                <a href="mailto:Deepanindiafinancialservices@gmail.com">
                  <Mail />
                </a>
              </li>
              <li>
                <a
                  href="http://www.youtube.com/@deepanindiafinancialservices"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube />
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
      color: #23395d;
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
      color: #23395d;
    }
  }
`;
const StyledDivider = styled(Divider)`
  background-color: #49326b;
  height: 6px;
  margin: 50px;
  width: 100%;
`;
