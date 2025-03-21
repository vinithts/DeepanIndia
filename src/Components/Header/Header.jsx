import React, { useState } from "react";
import "./Header.css";
import styled from "styled-components";
import Deepalogo from "../../assets/logos/logo-deepan1.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaSearch } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Header() {
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

  return (
    <HeaderContainer>
      <Topheader>
        <Navbar expand="lg" className="my-topheader">
          <Container>
            <h6 style={{color:"white"}}>#Deepan India</h6>
            <Topmenuitem>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto d-flex align-items-center">
                  <Nav.Link href="#About"  style={{color:"white"}}>Who We Are</Nav.Link>
                  <Nav.Link href="#card"  style={{color:"white"}}>Profile</Nav.Link>
                  {/* <NavDropdown title="Who We Are" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#about">Company history</NavDropdown.Item>
                  <NavDropdown.Item href="#leadership">Mission and vision</NavDropdown.Item>
                  <NavDropdown.Item href="#responsibility">Leadership team profiles</NavDropdown.Item>
                </NavDropdown> */}
                  <Nav.Link href="#investor"  style={{color:"white"}}>Investor Relationship</Nav.Link>
                  <Nav.Link href="#media"  style={{color:"white"}}>News</Nav.Link>
                  {/* <NavDropdown title="Career" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#what-we-do">What We Do</NavDropdown.Item>
                  <NavDropdown.Item href="#career">Career</NavDropdown.Item>
                  <NavDropdown.Item href="#openings">Openings</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
                </NavDropdown> */}
                  {/* <Nav.Link as={Link} to="/admin">
        Admin
      </Nav.Link>
      <Nav.Link as={Link} to="/slider">
        SLIDER
      </Nav.Link> */}
                  <Nav.Link href="#contact">
                    <Btntopheader>Contact</Btntopheader>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Topmenuitem>
          </Container>
        </Navbar>
      </Topheader>

      <HeaderBottom>
        <Container>
          <MyContainer>
            <LogoContainer className="sample">
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
                  Who We Serve <FaAngleDown />
                  <Dropdown show={visibleDropdown === 0}>
                    <ul>
                      <li>Investment Solutions</li>
                      <li>Retirement Planning</li>
                      <li>Wealth Management</li>
                      <li>Educational Resources</li>
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
                      <li>Mutual Funds</li>
                      <li>Life Insurance</li>
                      <li>REITs</li>
                      <li>Estate Planning</li>
                      <li>Tax Optimization Strategies</li>
                      <li>High-Net-Worth Advisory</li>
                      <li>IRA/Roth IRA Management</li>
                      <li>Business Insurance</li>
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
                      <li>Centers of Excellence</li>
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
                      <li>Blogs</li>
                      <li>Videos</li>
                      <li>Reports</li>
                      <li>Direct contact form</li>
                      <li>Schedule consultation</li>
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
              <Container>
                <LogoContainer>
                  <Logo src={Deepalogo} alt="Logo" />
                </LogoContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="">
                    <NavDropdown title="Who We Are" id="basic-nav-dropdown">
                      <NavDropdown.Item>Investment Solutions</NavDropdown.Item>
                      <NavDropdown.Item>Retirement Planning</NavDropdown.Item>
                      <NavDropdown.Item>Wealth Management</NavDropdown.Item>
                      <NavDropdown.Item>Educational Resources</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="What We Do" id="basic-nav-dropdown">
                      <NavDropdown.Item>Mutual Funds</NavDropdown.Item>
                      <NavDropdown.Item>
                        NavDropdown.Itemfe Insurance
                      </NavDropdown.Item>
                      <NavDropdown.Item>REITs</NavDropdown.Item>
                      <NavDropdown.Item>Estate Planning</NavDropdown.Item>
                      <NavDropdown.Item>
                        Tax Optimization Strategies
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        High-Net-Worth Advisory
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        IRA/Roth IRA Management
                      </NavDropdown.Item>
                      <NavDropdown.Item>Business Insurance</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="How We Deliver" id="basic-nav-dropdown">
                      <NavDropdown.Item>Investment Solutions</NavDropdown.Item>
                      <NavDropdown.Item>Retirement Planning</NavDropdown.Item>
                      <NavDropdown.Item>Wealth Management</NavDropdown.Item>
                      <NavDropdown.Item>Educational Resources</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Who We Are" id="basic-nav-dropdown">
                      <NavDropdown.Item>Consulting</NavDropdown.Item>
                      <NavDropdown.Item>Centers of Excellence</NavDropdown.Item>
                      <NavDropdown.Item>Market Analysis</NavDropdown.Item>
                      <NavDropdown.Item>Market Updates</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="What We Think" id="basic-nav-dropdown">
                      <NavDropdown.Item>Blogs</NavDropdown.Item>
                      <NavDropdown.Item>Videos</NavDropdown.Item>
                      <NavDropdown.Item>Reports</NavDropdown.Item>
                      <NavDropdown.Item>Direct contact form</NavDropdown.Item>
                      <NavDropdown.Item>Schedule consultation</NavDropdown.Item>
                    </NavDropdown>
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
  background-color: #23395d;
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
  border: 1px solid #013396;
  background-color: #fff;
  font-size: 14px;
`;

const HeaderBottom = styled.header`
  position: sticky;
  top: 0;
  z-index: 500;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional for better visibility */
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
  color: #000;
  padding: 0 0.8rem;
  letter-spacing: 1px;
  font-size: 1rem;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    transform: scale(1);
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
      color: #000;
      background: #f0f0f5;
      transition: 0.3s;

      &:hover {
        background: #d5d5d9;
        border-top: 5px solid #013396;
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
