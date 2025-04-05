import React, { useState } from "react";
import styled from "styled-components";
import {
  TextField,
  TextareaAutosize,
  Checkbox,
  Button,
  Grid,
  Typography,
  Box,
  FormControlLabel,
  FormGroup,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Container,
} from "@mui/material";
import backImage from "../../../assets/top-view-piggy-bank-money.jpg";
import Joinus from "../../../assets/joinus.png";

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
  const [fund, setFund] = React.useState("");

  const handleChange = (event) => {
    setFund(event.target.value);
  };

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
    <MainDiv image={backImage} id="contact">
      <Container maxWidth="xl">
      <Typography
        sx={{
          padding: "30px",
          textAlign: "center",
          fontWeight: 900,
          color: "#23395d",
          fontSize: { xs: "26px", sm: "38px" },
        }}
      >
        Let’s partner for #Dream2Reach Deepan India
      </Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="center" px={{ xs: 2, md: 6 }}>
        {/* Left Panel */}
        <Grid item xs={12} md={6}>
          <Box display="flex" flexDirection="column" mb={3}>
            <Typography
              sx={{
                fontWeight: 900,
                color: "#630775",
                fontSize: { xs: "20px", sm: "30px" },
                mb: 2,
              }}
            >
              How to Get Started?
            </Typography>
            <Typography sx={{ color: "#122f5c", fontSize: "16px", fontWeight: "bold" }}>
              Speak with our experts.
            </Typography>
            <Typography sx={{ color: "#122f5c", fontSize: "16px", fontWeight: "bold" }}>
              Share your financial needs and expectations.
            </Typography>
            <Typography sx={{ color: "#122f5c", fontSize: "16px", fontWeight: "bold" }}>
              Get a personalized, detailed wealth creation plan designed just for you.
            </Typography>
          </Box>
          <Box
            component="img"
            src={Joinus}
            alt="joinus"
            sx={{
              width: "100%",
              maxWidth: 400,
              display: { xs: "none", md: "block" },
            }}
          />
        </Grid>

        {/* Right Panel - Form */}
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit}>
            <Box mb={2}>
              <TextField
                fullWidth
                label="Enter your Full Name"
                name="fullname"
                value={formData.fullname}
                onChange={handleFormChange}
                required
              />
            </Box>
            <Box mb={2}>
              <TextField
                fullWidth
                label="Enter your Email ID"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleFormChange}
                required
              />
            </Box>
            <Box mb={2}>
              <TextField
                fullWidth
                label="Enter your Mobile Number"
                name="companyName"
                value={formData.companyName}
                onChange={handleFormChange}
                required
              />
            </Box>
            <Box mb={2}>
              <FormControl fullWidth>
                <InputLabel id="interest-select">I am interested in</InputLabel>
                <Select
                  labelId="interest-select"
                  value={fund}
                  label="I am interested in"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Mutual funds</MenuItem>
                  <MenuItem value={20}>Training</MenuItem>
                  <MenuItem value={30}>Advisory Services</MenuItem>
                  <MenuItem value={40}>Algo Trading</MenuItem>
                  <MenuItem value={50}>Partnership</MenuItem>
                  <MenuItem value={60}>Others</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box mb={2}>
              <TextareaAutosize
                minRows={6}
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
            </Box>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.agreeToCommunication}
                    onChange={handleFormChange}
                    name="agreeToCommunication"
                  />
                }
                label="* I agree to receive communication from DeepanIndia."
              />
            </FormGroup>
            <Submitbtn type="submit">Get Started Today</Submitbtn>
          </form>
        </Grid>
      </Grid>
      </Container>
    </MainDiv>
  );
}

// Generates a 6-character CAPTCHA
const generateCaptcha = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from({ length: 6 }, () =>
    chars.charAt(Math.floor(Math.random() * chars.length))
  ).join("");
};

// Styled components
const MainDiv = styled.div`
  padding: 80px 0;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  @media (max-width: 600px) {
    padding: 40px 0;
  }
`;

const Submitbtn = styled.button`
  background-color: #fff;
  border: 1px solid #013396;
  padding: 10px 15px;
  margin-top: 20px;
  width: 100%;
  color: #013396;
  font-weight: 800;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #013396;
    color: #fff;
    border: 1px solid #fff;
  }
`;
