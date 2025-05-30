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
// import Joinus from "../../../assets/joinus.png";
import Joinus from "../../../assets/1-removebg-preview.png";

import { instance } from "../../../utils/api";

export default function Contact() {
  const [checked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interested_in: "",
    message: "",
  });


  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      interested_in: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!checked) {
      alert("You must agree to the Privacy Policy.");
      return;
    }

    try {
      const response = await instance.post(`/landing/customer/CustomerDetails`,
        {   name: formData.name,
            email: formData.email,
            phone: formData.phone,
            interested_in: formData.interested_in,
            message: formData.message,
          });
      if (response.status === 200) {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          interested_in: "",
          message: "",
        });
        setChecked(false);
      } 
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <MainDiv image={backImage} id="contact">
      <Container maxWidth="lg">
        <Typography
          sx={{
            padding: "30px",
            textAlign: "center",
            fontWeight: 900,
            color:" #49326b",
            fontSize: { xs: "26px", sm: "38px" },
          }}
        >
          Let’s partner for #Dream2Reach Deepan India
        </Typography>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          px={{ xs: 2, md: 6 }}
        >
          {/* Left Panel */}
          <Grid item xs={12} md={6}>
            <Box display="flex" flexDirection="column" mb={3}>
              <Typography
                sx={{
                  fontWeight: 900,
                  color: " #49326b",
                  fontSize: { xs: "20px", sm: "30px" },
                  mb: 2,
                }}
              >
                How to Get Started?
              </Typography>
              <Typography
                sx={{ color: " #49326b", fontSize: "16px", fontWeight: "bold" }}
              >
                Speak with our experts.
              </Typography>
              <Typography
                sx={{ color: " #49326b", fontSize: "16px", fontWeight: "bold" }}
              >
                Share your financial needs and expectations.
              </Typography>
              <Typography
                sx={{ color: " #49326b", fontSize: "16px", fontWeight: "bold" }}
              >
                Get a personalized, detailed wealth creation plan designed just
                for you.
              </Typography>
            </Box>
            <Box
              component="img"
              src={Joinus}
              alt="joinus"
              sx={{
                width: "100%",
                maxWidth: 500,
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
                  name="name"
                  value={formData.name}
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
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                />
              </Box>
              <Box mb={2}>
              <FormControl fullWidth>
                  <InputLabel id="interest-select">
                    I am interested in
                  </InputLabel>
                  <Select
                    labelId="interest-select"
                    name="interested_in"
                    value={formData.interested_in}
                    label="I am interested in"
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value="Mutual funds">Mutual funds</MenuItem>
                    <MenuItem value="Training">Training</MenuItem>
                    <MenuItem value="Advisory Services">Advisory Services</MenuItem>
                    <MenuItem value="Algo Trading">Algo Trading</MenuItem>
                    <MenuItem value="Partnership">Partnership</MenuItem>
                    <MenuItem value="Others">Others</MenuItem>
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
                      checked={checked}
                      onChange={handleCheckboxChange}
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

// Styled components
const MainDiv = styled.div`
  /* padding: 80px 0; */
  /* background-image: ${({ image }) => `url(${image})`}; */
  /* background-size: cover; */
  /* background-position: center; */
  /* background-attachment: fixed; */
  position: relative;
  width: 100%;
  padding-bottom: 50px;
  background-color: #f9f3fe;
  height: auto;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* opacity: 0.5; */
    z-index: 1;
  }
  > * {
    position: relative;
    z-index: 2;
  }
  @media (max-width: 600px) {
    padding: 40px 0;
  }
`;

const Submitbtn = styled.button`
  background-color: #fff;
  border: 1px solid  #49326b;
  padding: 10px 15px;
  margin-top: 20px;
  width: 100%;
  color:  #49326b;
  font-weight: 800;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color:  red;
    color: #f9f3fe;
    border: 1px solid #fff;
  }
`;
