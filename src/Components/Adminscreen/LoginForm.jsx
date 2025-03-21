import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Loginimg from "../../assets/logos/1000041623.jpg";
import Loginpg from "../../assets/login-background.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { instance } from "../../utils/api";
import { cookies } from "./Admin";
import SuccessPopup from "./Successpop";
import FailurePopup from "./Failurepop";

export default function Loginform() {
  const [formData, setFormData] = useState({
    email: "", // Use 'email' instead of 'username'
    password: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (location.pathname.toLowerCase() === "/adminlogin") {
      try {
        const response = await instance.post("/login", formData);
        cookies.set("user", JSON.stringify(response.data));
        SuccessPopup("Login successful!");
        navigate("/admin/slider");
      } catch (error) {
        const errorMsg = error.response?.data?.message || "Login failed!";
        FailurePopup(errorMsg);
      }
    }
  };

  return (
    <LoginContainer>
      <Container>
        <Row>
          <Col md={3}></Col>
          <Col md={6} xs={12}>
            <Rightimg>
              <img src={Loginimg} alt="login-img" />
              <form onSubmit={handleSubmit} className="login">
                <h2>Deepan Login</h2>
                <Input
                  type="email"
                  name="email" // Updated to 'email'
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <SubmitButton type="submit">Login</SubmitButton>
              </form>
              <Link to="/">Go To Home</Link>
            </Rightimg>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </LoginContainer>
  );
}

// Styled Components
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  // background-color: #f9f9f9;
  background: linear-gradient(
      90deg,
      rgba(250, 0, 1, 0.26) 1%,
      rgba(0, 0, 0, 0.52) 54%,
      rgba(7, 49, 159, 0.18) 97%
    ),
    url(${Loginpg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 10px 10px;
  border: 1px solid;
  margin: 10px 15px;
  text-align: center;
  width: 10rem;
  cursor: pointer;
  background: rgb(225, 35, 35);
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

const Rightimg = styled.div`
  background: linear-gradient(
    90deg,
    rgba(192, 2, 2, 1) 0%,
    rgba(2, 0, 36, 0.20211834733893552) 49%,
    rgba(5, 46, 138, 1) 100%
  );
  padding: 25px 20px;
  text-align: center;
  img {
    width: 40%;
    padding: 10px;
  }
  .login {
    margin: 20px auto;
    padding: 40px 30px;
    border-radius: 5px;
    background: #fff;
    box-shadow: 1px 1px 1px #666;
  }
  .login input {
    width: 100%;
    display: block;
    box-sizing: border-box;
    margin: 10px 0;
    padding: 14px 12px;
    font-size: 16px;
    border-radius: 2px;
  }

  .login input[type="text"],
  .login input[type="password"] {
    border: 1px solid #c0c0c0;
    transition: 0.2s;
  }

  .login input[type="text"]:hover,
  .login input[type="password"]:hover {
    border-color: #f44336;
    outline: none;
    transition: all 0.2s ease-in-out;
  }

  .login input[type="submit"] {
    border: none;
    background: #ef5350;
    color: white;
    font-weight: bold;
    transition: 0.2s;
    margin: 20px 0px;
  }

  .login input[type="submit"]:hover {
    background: #f44336;
  }

  .login h2 {
    margin: 20px 0 0;
    color: #ef5350;
    font-size: 28px;
  }

  .login h2,
  .login p,
  .login a {
    text-align: center;
  }
`;
