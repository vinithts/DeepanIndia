import React, { useState, useMemo } from "react";
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
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    interested_in: "",
    message: "",
  });

  // Validation rules
  const validateName = (value) => {
    if (!value) return "Name is required";
    if (!/^[A-Za-z\s]+$/.test(value)) return "Name can only contain letters and spaces";
    if (value.length < 2) return "Name must be at least 2 characters";
    if (value.length > 50) return "Name cannot exceed 50 characters";
    return "";
  };

  const validateEmail = (value) => {
    if (!value) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Invalid email format";
    if (value.length > 100) return "Email cannot exceed 100 characters";
    return "";
  };

  const validatePhone = (value) => {
    if (!value) return "Phone number is required";
    if (!/^[6-9]\d{9}$/.test(value)) return "Invalid Indian mobile number (10 digits, starting with 6, 7, 8, or 9)";
    return "";
  };

  const validateInterestedIn = (value) => {
    if (!value) return "Please select an option";
    return "";
  };

  const validateMessage = (value) => {
    if (value.length > 500) return "Message cannot exceed 500 characters";
    return "";
  };

  // Handle form input changes and validate
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate the changed field
    let error = "";
    switch (name) {
      case "name":
        error = validateName(value);
        break;
      case "email":
        error = validateEmail(value);
        break;
      case "phone":
        error = validatePhone(value);
        break;
      case "message":
        error = validateMessage(value);
        break;
      default:
        break;
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // Handle Select change
  const handleChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, interested_in: value }));
    setErrors((prev) => ({ ...prev, interested_in: validateInterestedIn(value) }));
  };

  // Handle Checkbox change
  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
  };

  // Memoized validation check
  const isFormValid = useMemo(() => {
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);
    const interestedInError = validateInterestedIn(formData.interested_in);
    const messageError = validateMessage(formData.message);

    return (
      !nameError &&
      !emailError &&
      !phoneError &&
      !interestedInError &&
      !messageError &&
      checked
    );
  }, [formData, checked]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields before submission
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);
    const interestedInError = validateInterestedIn(formData.interested_in);
    const messageError = validateMessage(formData.message);

    if (nameError || emailError || phoneError || interestedInError || messageError) {
      setErrors({
        name: nameError,
        email: emailError,
        phone: phoneError,
        interested_in: interestedInError,
        message: messageError,
      });
      return;
    }

    if (!checked) {
      alert("You must agree to the Privacy Policy.");
      return;
    }

    try {
      const response = await instance.post(`/landing/customer/CustomerDetails`, {
        name: formData.name,
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
        setErrors({
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
            color: "#49326b",
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
                  color: "#49326b",
                  fontSize: { xs: "20px", sm: "30px" },
                  mb: 2,
                }}
              >
                How to Get Started?
              </Typography>
              <Typography
                sx={{ color: "#49326b", fontSize: "16px", fontWeight: "bold" }}
              >
                Speak with our experts.
              </Typography>
              <Typography
                sx={{ color: "#49326b", fontSize: "16px", fontWeight: "bold" }}
              >
                Share your financial needs and expectations.
              </Typography>
              <Typography
                sx={{ color: "#49326b", fontSize: "16px", fontWeight: "bold" }}
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
                  error={!!errors.name}
                  helperText={errors.name || `${formData.name.length}/50`}
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
                  error={!!errors.email}
                  helperText={errors.email || `${formData.email.length}/100`}
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
                  error={!!errors.phone}
                  helperText={errors.phone}
                  inputProps={{ maxLength: 10 }}
                />
              </Box>
              <Box mb={2}>
                <FormControl fullWidth error={!!errors.interested_in}>
                  <InputLabel id="interest-select">I am interested in</InputLabel>
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
                  {!!errors.interested_in && (
                    <Typography variant="caption" color="error">
                      {errors.interested_in}
                    </Typography>
                  )}
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
                    border: `1px solid ${errors.message ? "red" : "#ccc"}`,
                    borderRadius: "4px",
                  }}
                />
                <Typography
                  variant="caption"
                  color={errors.message ? "error" : "textSecondary"}
                  sx={{ display: "block", mt: 1 }}
                >
                  {errors.message || `${formData.message.length}/500`}
                </Typography>
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
              <Submitbtn type="submit" disabled={!isFormValid}>
                Get Started Today
              </Submitbtn>
            </form>
          </Grid>
        </Grid>
      </Container>
    </MainDiv>
  );
}

// Styled components
const MainDiv = styled.div`
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
  border: 1px solid #49326b;
  padding: 10px 15px;
  margin-top: 20px;
  width: 100%;
  color: #49326b;
  font-weight: 800;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: red;
    color: #f9f3fe;
    border: 1px solid #fff;
  }

  &:disabled {
    background-color: #ccc;
    color: #666;
    border: 1px solid #ccc;
    cursor: not-allowed;
  }
`;