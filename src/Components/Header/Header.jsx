import React, { useState } from "react";
import "./Header.css";
import styled from "styled-components";
import Deepalogo from "../../assets/Deepan-India_Logo-removebg-preview.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaSearch } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [visibleDropdown, setVisibleDropdown] = useState(null);
  let hoverTimeout;

  const handleMouseEnter = (index) => {
    clearTimeout(hoverTimeout);
    setVisibleDropdown(index);
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      setVisibleDropdown(null);
    }, 300);
  };
  const handleNavigation = (href) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href.startsWith("/#")) {
      const currentPath = location.pathname;

      if (currentPath === "/") {
        const anchorId = href.substring(2);
        const element = document.querySelector(`#${anchorId}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
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
      navigate(href);
    }
  };
  return (
    <HeaderContainer>
      <Topheader>
        <Navbar expand="lg" className="my-topheader">
          <Container>
            <h6 style={{ color: "#201b69" }}>#
              <span style={{ color: "#f33d25" }}>Deepan </span>India</h6>
            <Topmenuitem>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto d-flex align-items-center">
                  <StyledNavLink onClick={() => handleNavigation("/#ourstory")}>
                    Profile
                  </StyledNavLink>
                  <StyledNavLink onClick={() => handleNavigation("/#About")}>
                    Who We Are
                  </StyledNavLink>
                  <Nav.Link
                    onClick={() => handleNavigation("/")}
                    style={{
                      color: "white",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "#16155e",
                      },
                      backgroundColor: "#260b57",
                      padding: "8px 16px",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontWeight: "bold",
                      animation: "blink 1s infinite",
                      textAlign: "center",
                      display: "inline-block",
                      textDecoration: "none",
                    }}
                  >
                    Algo Trading
                  </Nav.Link>

                  <style>
                    {`
                 @keyframes blink {
                    0% { opacity: 1; }
                    50% { opacity: 0.3; }
                    100% { opacity: 1; }
                                  }
                  `}
                  </style>

                  <StyledNavLink onClick={() => handleNavigation("/#partner")}>
                    Partner with us
                  </StyledNavLink>
                  <StyledNavLink onClick={() => handleNavigation("/#media")}>
                    News
                  </StyledNavLink>
                  <Nav.Link onClick={() => handleNavigation("/#contact")}>
                    <Btntopheader>Contact</Btntopheader>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Topmenuitem>
          </Container>
        </Navbar>
      </Topheader>
     <StyledDivider/>
      <HeaderBottom>
        <Container>
          <MyContainer>
            <LogoContainer
              className="sample"
              onClick={() => handleNavigation("/")}
            >
              <Logo src={Deepalogo} alt="Logo" />
            </LogoContainer>
            <Hamburger
              className="sample"
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <div />
              <div />
              <div />
            </Hamburger>
            <NavBtn isOpen={isOpen}>
              <NavLinks>
                <NavLink
                  onMouseEnter={() => handleMouseEnter(0)}
                  onMouseLeave={handleMouseLeave}
                >
                  What We Serve <FaAngleDown />
                  <Dropdown show={visibleDropdown === 0}>
                    <ul>
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
                    </ul>
                  </Dropdown>
                </NavLink>
                <NavLink
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={handleMouseLeave}
                >
                  What We Do <FaAngleDown />
                  <Dropdown show={visibleDropdown === 1}>
                    <ul>
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
                      <li
                        onClick={() => navigate("/service/advisory-services")}
                      >
                        Advisory Services
                      </li>
                      <li
                        onClick={() =>
                          navigate("/service/fixed-deposits-&-bond")
                        }
                      >
                        Fixed Deposits & Bonds
                      </li>
                      <li
                        onClick={() =>
                          navigate("/service/alternate-investment-funds-(AIFS)")
                        }
                      >
                        Alternative Investment funds
                      </li>

                      <li
                        onClick={() => navigate("/service/real-estate-funds")}
                      >
                        Real Estate funds
                      </li>
                      <li onClick={() => navigate("/service/insurances")}>
                        Insurances{" "}
                      </li>
                    </ul>
                  </Dropdown>
                </NavLink>
                <NavLink
                  onMouseEnter={() => handleMouseEnter(2)}
                  onMouseLeave={handleMouseLeave}
                >
                  How We Deliver <FaAngleDown />
                  <Dropdown show={visibleDropdown === 2}>
                    <ul>
                      <li>Consulting</li>
                      <li>Market Analysis</li>
                      <li>Market Updates</li>
                    </ul>
                  </Dropdown>
                </NavLink>
                <NavLink
                  onMouseEnter={() => handleMouseEnter(3)}
                  onMouseLeave={handleMouseLeave}
                >
                  What We Think <FaAngleDown />
                  <Dropdown show={visibleDropdown === 3}>
                    <ul>
                      <li onClick={() => handleNavigation("/#card")}>Blogs</li>
                      <li onClick={() => handleNavigation("/#media")}>Videos</li>
                      <li onClick={() => handleNavigation("/#media")}>Reports</li>
                    </ul>
                  </Dropdown>
                </NavLink>
                <NavLink
                  onMouseEnter={() => handleMouseEnter(2)}
                  onMouseLeave={handleMouseLeave}
                >
                  Calculator <FaAngleDown />
                  <Dropdown show={visibleDropdown === 2}>
                    <ul>
                      <li onClick={() => handleNavigation("/#calculator")}>
                        SIP Calculator
                      </li>
                      <li onClick={() => handleNavigation("/#calculator")}>
                        Lumpsum
                      </li>
                      <li onClick={() => handleNavigation("/#calculator")}>
                        SIP combined with Lumpsum
                      </li>
                      <li onClick={() => handleNavigation("/#calculator")}>
                        SWP
                      </li>
                    </ul>
                  </Dropdown>
                </NavLink>
                <NavLink className="search">
                  <FaSearch />
                </NavLink>
              </NavLinks>
            </NavBtn>
          </MyContainer>

          <div className="mobile-menus">
            <Navbar expand="lg" className="my-topheader">
              <Container maxWidth={"xl"}>
                <LogoContainer>
                  <Logo src={Deepalogo} alt="Logo" />
                </LogoContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="">
                    <NavDropdown title="Who We Are" id="basic-nav-dropdown">
                      <NavDropdown.Item
                        onClick={() => navigate("/investment-solution")}
                      >
                        Investment Solutions
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => navigate("/retirement-planning")}
                      >
                        Retirement Planning
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => navigate("/wealth-management")}
                      >
                        Wealth Management
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => navigate("/educational-resource")}
                      >
                        Educational Resources
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="What We Do" id="basic-nav-dropdown">
                      <NavDropdown.Item
                        onClick={() => navigate("/service/mutual-funds")}
                      >
                        Mutual Funds
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() =>
                          navigate("/service/training-in-financial-markets")
                        }
                      >
                        Training in Financial Markets
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => navigate("/service/algo-trading")}
                      >
                        Algo Trading
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => navigate("/service/advisory-services")}
                      >
                        Advisory Services
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() =>
                          navigate("/service/fixed-deposits-&-bond")
                        }
                      >
                        Fixed Deposits & Bonds
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() =>
                          navigate("/service/alternate-investment-funds-(AIFS)")
                        }
                      >
                        Alternative Investment funds
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => navigate("/service/real-estate-funds")}
                      >
                        Real Estate funds
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => navigate("/service/insurances")}
                      >
                        Insurances
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="How We Deliver" id="basic-nav-dropdown">
                      <NavDropdown.Item>Consulting</NavDropdown.Item>
                      <NavDropdown.Item>Market Analysis</NavDropdown.Item>
                      <NavDropdown.Item>arket Updates</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="What We Think" id="basic-nav-dropdown">
                      <NavDropdown.Item onClick={() => handleNavigation("/#card")}>Blogs</NavDropdown.Item>
                      <NavDropdown.Item onClick={() => handleNavigation("/#media")}>Videos</NavDropdown.Item>
                      <NavDropdown.Item onClick={() => handleNavigation("/#media")}>Reports</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Calculator" id="basic-nav-dropdown">
                      <NavDropdown.Item
                        onClick={() => handleNavigation("/#calculator")}
                      >
                        SIP Calculator
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => handleNavigation("/#calculator")}
                      >
                        Lumpsum
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => handleNavigation("/#calculator")}
                      >
                        SIP combined with Lumpsum
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => handleNavigation("/#calculator")}
                      >
                        SWP
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link
                      onClick={() => handleNavigation("/")}
                      style={{
                        color: "white",
                        transition: "color 0.3s ease",
                        "&:hover": {
                          color: "#16155e",
                        },
                        backgroundColor: "#260b57",
                        padding: "8px 16px",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontWeight: "bold",
                        animation: "blink 1s infinite",
                        textAlign: "center",
                        display: "inline-block",
                        textDecoration: "none",
                      }}
                    >
                      Algo Trading
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </Container>
      </HeaderBottom>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.section`
  .mobile-menus {
    display: none;
    @media screen and (max-width: 600px) {
      .sample {
        display: none;
      }
      display: block;
      transition: all 0.5s ease-in-out;
      .navbar-toggler,
      .dropdown-menu {
        border: none;
      }
      .navbar-toggler {
        color: #013396;
      }
    }
  }
`;

const Topmenuitem = styled.div``;

const Topheader = styled.div`
  background-color: #f3f1f155;
  border-bottom: #16151553;
  h6 {
    font-weight: 800;
    margin: 0;
  }
  a {
    font-size: 14px;
    padding: 0;
  }
  .dropdown-menu {
    padding: 10px 15px;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
const Btntopheader = styled.button`
  padding: 6px 15px;
  border-radius:5px;
  border: 1px solid #f33d25;
  background-color: #fff;
  color:#f33d25;
  font-size: 14px;
  &:hover {
    background-color: #33197a;
    color: #fff;
     border: 1px solid #33197a;
  }
`;

const HeaderBottom = styled.header`
  position: sticky;
  top: 0;
  z-index: 500;
  background-color: #f3f1f155;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
`;

const MyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  @media screen and (max-width: 600px) {
    .sample {
      display: none;
    }
  }
`;

const LogoContainer = styled.div`
  flex: 1;
`;

const Logo = styled.img`
  // width: 40%;
  height: 100px;
  cursor: pointer;
`;

const Hamburger = styled.div`
  display: none;
  @media (max-width: 920px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 25px;
    height: 15px;
    cursor: pointer;

    div {
      width: 100%;
      height: 3px;
      background-color: #07319f;
      transition: all 0.3s;

      &:nth-child(1) {
        transform: ${({ isOpen }) =>
          isOpen ? "rotate(45deg) translateY(8px)" : "none"};
      }
      &:nth-child(2) {
        opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
      }
      &:nth-child(3) {
        transform: ${({ isOpen }) =>
          isOpen ? "rotate(-45deg) translateY(-8px)" : "none"};
      }
    }
  }
`;

const StyledNavLink = styled(Nav.Link)`
  color: #f33d25 !important;
  transition: color 0.3s ease;

  &:hover {
    color: #16155e !important;
  }
`;

const NavBtn = styled.div`
  display: flex;

  @media (max-width: 920px) {
    position: fixed;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 3rem);
    top: 7rem;
    left: 0;
    width: 100%;
    background-color: #fff;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.5s ease-in-out;
    z-index: 9999; /* Ensure it appears above all elements */
  }

  @media screen and (max-width: 600px) {
    top: 4rem;
    height: calc(75vh - 3rem);
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 920px) {
    flex-direction: column;
    align-items: center;
    z-index: 900; /* Lower than NavBtn but high enough */
    position: relative;
  }
`;
const NavLink = styled.li`
  position: relative; /* This ensures the dropdown aligns to this parent */
  color: #f33d25;
  padding: 0 0.8rem;
  letter-spacing: 1px;
  font-size: 16px;
  transition: 0.5s;
  cursor: pointer;
  padding: 10px;
  &:hover {
    transform: scale(1);
    background-color: #d3d0d0;  
  }

  @media screen and (max-width: 600px) {
    padding: 10px 0.8rem;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 20rem;
  background-color: #fff;
  opacity: 0;
  transform: translateY(10px);
  pointer-events: none;
  transition:
    opacity 0.5s,
    transform 0.5s;
  z-index: 9999; /* Higher than other elements */
  visibility: hidden; /* Initially hidden */

  ${NavLink}:hover & {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
    visibility: visible; /* Make it visible on hover */
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: block;
      padding: 0.5rem 1rem;
      color: #f33d25;
      background: #f0f0f5;
      transition: 0.3s;
      border-bottom: 1px solid white;
      &:hover {
        background: #d5d5d9;
        border-top: 5px solid #f33d25;
      }
    }
  }

  @media screen and (max-width: 600px) {
    width: 90vw;
    left: 5%;
    top: 100%;

    display: none;
  }
`;
const StyledDivider = styled(Divider)`
  background-color: #e9e3e3;
  /* height: 6px; */
  /* margin: 50px 0; */
  width: 100%;
`;