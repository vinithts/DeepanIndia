import React, { useState } from "react";
import styled from "styled-components";
import {
  TextField,
  TextareaAutosize,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormGroup,
  Checkbox,
  Button,
} from "@mui/material";
import { IoIosRefresh } from "react-icons/io";
import { GiSpeaker } from "react-icons/gi";
import { Container, Row, Col } from "react-bootstrap";
import backImage from "../../../assets/top-view-piggy-bank-money.jpg";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    companyName: "",
    message: "",
    opportunityType: "Media Opportunity",
    agreeToPrivacy: false,
    agreeToCommunication: false,
  });

  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleCaptchaRefresh = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
  };

  const handleCaptchaSpeak = () => {
    const speech = new SpeechSynthesisUtterance(captcha);
    window.speechSynthesis.speak(speech);
  };

  const handleCaptchaInputChange = (e) => {
    setCaptchaInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaInput !== captcha) {
      alert("CAPTCHA Mismatch. Please try again.");
      handleCaptchaRefresh();
      return;
    }

    if (!formData.agreeToPrivacy) {
      alert("You must agree to the Privacy Policy.");
      return;
    }

    alert("Form submitted successfully!");
    console.log(formData);
    // Reset form
    setFormData({
      fullname: "",
      email: "",
      companyName: "",
      message: "",
      opportunityType: "Media Opportunity",
      agreeToPrivacy: false,
      agreeToCommunication: false,
    });
    handleCaptchaRefresh();
  };

  return (
    <MainDiv id="contact" image={backImage}>
      <Container>
        <Row>
          <Col md={12}>
            <Heading>Let’s partner for #FutureReady Deepan India</Heading>
          </Col>
        </Row>
        <form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <TextField
                className="my-3"
                fullWidth
                label="Enter your Full Name"
                name="fullname"
                value={formData.fullname}
                onChange={handleFormChange}
                required
              />
              <TextField
                className="my-3"
                fullWidth
                label="Enter your Email ID"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleFormChange}
                required
              />
              <TextField
                className="my-3"
                fullWidth
                label="Enter your Mobie Number"
                name="companyName"
                value={formData.companyName}
                onChange={handleFormChange}
              />
              <TextField
                className="my-3"
                fullWidth
                label="Enter your intrested Company Name"
                name="companyName"
                value={formData.companyName}
                onChange={handleFormChange}
              />
            </Col>
            <Col md={6}>
              <TextareaAutosize
                className="my-3"
                minRows={12}
                placeholder="Your message"
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  fontSize: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormControl>
                <RadioGroup
                  className="my-3"
                  name="opportunityType"
                  value={formData.opportunityType}
                  onChange={handleFormChange}
                >
                  <FormControlLabel
                    className="my-2"
                    value="Business Opportunity"
                    control={<Radio />}
                    label="Business Opportunity"
                  />
                  <FormControlLabel
                    className="my-2"
                    value="Self Investments"
                    control={<Radio />}
                    label="Self Investments"
                  />
                  <FormControlLabel
                    className="my-2"
                    value="Mutual Funds"
                    control={<Radio />}
                    label="Mutual Funds"
                  />
                </RadioGroup>
              </FormControl>
            </Col>
            <Col md={6}>
              <CaptchaWrapper>
                <CaptchaBox>
                  <CaptchaText>{captcha}</CaptchaText>
                  <IconButton
                    onClick={handleCaptchaRefresh}
                    title="Refresh CAPTCHA"
                  >
                    <IoIosRefresh size={24} />
                  </IconButton>
                  <IconButton
                    onClick={handleCaptchaSpeak}
                    title="Speak CAPTCHA"
                  >
                    <GiSpeaker size={24} />
                  </IconButton>
                </CaptchaBox>
                <Input
                  type="text"
                  placeholder="Enter CAPTCHA"
                  value={captchaInput}
                  onChange={handleCaptchaInputChange}
                  required
                />
              </CaptchaWrapper>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.agreeToPrivacy}
                      className="p-2"
                      onChange={handleFormChange}
                      name="agreeToPrivacy"
                    />
                  }
                  label="* I agree to share my information with Indegene and understand it will be used as described in its Privacy Policy"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.agreeToCommunication}
                      onChange={handleFormChange}
                      name="agreeToCommunication"
                    />
                  }
                  label="* I agree to receive communication from Indegene."
                />
              </FormGroup>
            </Col>
          </Row>
          <Row className="my-5">
            <Col md={4}>
              <Submitbtn type="submit">Get Started Today</Submitbtn>
            </Col>
          </Row>
        </form>
      </Container>
    </MainDiv>
  );
}

const generateCaptcha = () => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
};

const MainDiv = styled.div`
  padding: 80px 0px;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  @media screen and (max-width: 600px) {
    padding: 40px 0;
  }
`;

const Heading = styled.h1`
  text-align: left;
  font-size: 34px;
  font-weight: bold;
  font-family: 'Nunito Sans', sans-serif;
  margin-bottom: 20px;

  @media screen and (max-width: 600px) {
    font-size: 24px;
  }
`;

const CaptchaWrapper = styled.div`
  margin: 20px 0;
`;

const CaptchaBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
`;

const CaptchaText = styled.div`
  font-size: 18px;
  font-weight: bold;
  font-family: 'Nunito Sans', sans-serif;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
  &:hover {
    color: #007bff;
  }
`;

const Input = styled.input`
   font-family: 'Nunito Sans', sans-serif;
  width: 100%;
  height: 45px;
  padding: 10px;
  font-size: 16px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Submitbtn = styled.button`
  background-color: #fff;
  border: 1px solid #013396;
  padding: 10px 15px;
  margin: 10px 0;
  width: 100%;
  color: blue;
  font-weight: 800;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: #013396;
    color: #fff;
    border: 1px solid #fff;
  }
`;
