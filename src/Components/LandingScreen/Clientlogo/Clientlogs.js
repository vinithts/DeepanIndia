import React from "react";
import styled, { keyframes } from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
// Keyframes for sliding animation
const slides = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const LogosContainer = styled.div`
  overflow: hidden;
  padding: 30px 0px;
  white-space: nowrap;
  position: relative;
  cursor: pointer;
`;

const LogosGradient = styled.div`
  position: absolute;
  top: 0;
  content: "";
  width: 250px;
  height: 100%;
  z-index: 2;

  &:before {
    left: 0;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0),
      rgb(255, 255, 255)
    );
  }

  &:after {
    right: 0;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgb(255, 255, 255)
    );
  }
`;

const LogoItems = styled.div`
  display: inline-block;
  animation: ${slides} 35s infinite linear;

  &:hover {
    animation-play-state: paused;
  }
`;

const LogoImage = styled.img`
  height: 100px;
`;
const Mysec = styled.section`
  padding: 50px 0;
  background-color: #f9f9f9;
  @media screen and (max-width: 600px) {
    padding: 40px 0;
  }
`;

const LogoSlider = () => {
  return (
    <Mysec>
      <Container>
        <Row>
          <Col md={12}>
            <LogosContainer>
              <LogosGradient />
              <LogoItems>
                {[...Array(24)].map((_, index) => (
                  <LogoImage
                    key={index}
                    src="https://navneetdwivedi.github.io/Logo_Slider/logo.png"
                    alt={`Logo ${index + 1}`}
                  />
                ))}
              </LogoItems>
              <LogosGradient />
            </LogosContainer>
          </Col>
        </Row>
      </Container>
    </Mysec>
  );
};

export default LogoSlider;
