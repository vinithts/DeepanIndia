import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";

export default function Footer() {
  return (
    <Footermain>
      <Container>
        <Row>
          <Col md={3} lg={3} xl={3} xs={12}>
            <Foottitle>Who We Serve</Foottitle>
            <Links>
              <li>Investment Solutions</li>
              <li>Retirement Planning</li>
              <li>Wealth Management</li>
              <li>Educational Resources</li>
            </Links>
          </Col>
          <Col md={3} lg={3} xl={3} xs={12}>
            <Foottitle>What We Do</Foottitle>
            <Links>
              <li>Mutual Funds</li>
              <li>Life Insurance</li>
              <li>REITs</li>
              <li>Estate Planning</li>
              <li>Tax Optimization Strategies</li>
            </Links>
          </Col>
          <Col md={3} lg={3} xl={3} xs={12}>
            <Foottitle>How We Deliver</Foottitle>
            <Links>
              <li>Consulting</li>
              <li>Centers of Excellence</li>
              <li>Market Analysis</li>
              <li>Market Updates</li>
            </Links>
          </Col>
          <Col md={3} lg={3} xl={3} xs={12}>
            <Foottitle>What We Think</Foottitle>
            <Links>
              <li>Blogs</li>
              <li>Videos</li>
              <li>Reports</li>
              <li>Direct contact form</li>
              <li>Schedule consultation</li>
            </Links>
          </Col>
        </Row>
        <Row>
          <Col md={3} lg={3} xl={3} xs={12}>
            <Foottitle>Who We Are</Foottitle>
            <Links>
              <li>About Us</li>
              <li>Leadership</li>
              <li>Social Responsibility</li>
              <li>Recognition</li>
            </Links>
          </Col>
          <Col md={3} lg={3} xl={3} xs={12}>
            <Foottitle>Investor Relations</Foottitle>
            <Links>
              <li>News</li>
              <li>High-Net-Worth Advisory</li>
              <li>IRA/Roth IRA Management</li>
              <li>Business Insurance</li>
            </Links>
          </Col>
          <Col md={3} lg={3} xl={3} xs={12}>
            <Foottitle>Careers</Foottitle>
            <Links>
              <li>What We Value</li>
              <li>Opportunities</li>
              <li>For Employees</li>
            </Links>
          </Col>
          <Col md={3} lg={3} xl={3} xs={12}>
            <Links>
              <li>Contact</li>
              <Link to="/adminlogin">
                <li>Admin login</li>
              </Link>
              {/* <Link to="/login">
                            <li>Login</li>
                        </Link> */}
            </Links>
          </Col>
        </Row>
        <StyledDivider/>
        <Row>
          <Col md={10}>
            <Bottomlink>
              <li>© 2024 Deepan India. All Rights Reserved.</li>
              <li>Privacy Policy</li>
              <li>Other Policies</li>
              <li>Cookies</li>
            </Bottomlink>
          </Col>
          <Col md={2}>
            <Bottomlink>
              <li>
                <FaLinkedin />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaYoutube />{" "}
              </li>
              <li>
                <FaFacebookSquare />
              </li>
              <li>
                <FaInstagramSquare />
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
  background-color:  #23395d;
  @media screen and (max-width: 600px) {
    padding: 40px 0;
  }
`;
const Foottitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  padding: 5px 0;
  color:white;
  text-transform: capitalize;
`;
const Links = styled.ul`
  margin: 10px 0;
  list-style-type: none;
  padding: 0;
  color:white;

  li {
    padding: 5px 0;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover {
      color: #013396;
    }
  }
`;
const Bottomlink = styled.ul`
  margin: 20px 0 0 0;
  list-style-type: none;
  padding: 0;
 color:white;
  li {
    padding: 5px 10px;
    font-size: 13px;
    display: inline-block;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover {
      color: #013396;
    }
  }
`;
const StyledDivider = styled(Divider)`
  background-color: white;
  height: 6px;
  margin: 50px 0;
  width: 100%;
`;
