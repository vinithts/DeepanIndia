import React, { useState } from "react";
import styled from "styled-components";
import {
  TextField,
  TextareaAutosize,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
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
      <Typography
        sx={{
          padding: "30px",
          textAlign: "center",
          fontWeight: 900,
          color: "#23395d",
          fontSize: "30px",
          "@media (max-width: 600px)": {
            fontSize: "26px",
          },
        }}
      >
        Let’s partner for #Dream2Reach Deepan India
      </Typography>
      <Container>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6}>
            <Row>
              <Col md={12}>
                <Typography
                  sx={{
                    fontWeight: 900,
                    textAlign: "left",
                    color: "#0a1930",
                    fontSize: "25px",
                    marginBottom: "20px",
                    "@media (max-width: 600px)": {
                      fontSize: "20px",
                    },
                  }}
                >
                  How to Get Started?{" "}
                </Typography>
                <ul style={{ color: "#040a13", fontSize: "16px" }}>
                  <li style={{ color: "#040a13", fontSize: "16px" }}>
                    Speak with our experts.
                  </li>
                  <li style={{ color: "#040a13", fontSize: "16px" }}>
                    Share your financial needs and expectations.
                  </li>
                  <li style={{ color: "#040a13", fontSize: "16px" }}>
                    Get a personalized, detailed wealth creation plan designed
                    just for you.
                  </li>
                </ul>
              </Col>
            </Row>
          </Grid>
          <Grid item xs={12} md={6}>
            <form onSubmit={handleSubmit}>
              <Row>
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
                  required
                />
                <FormControl fullWidth>
                  <InputLabel id="demo-select-small-label">I am interested in</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={fund}
                    label="I am interested in"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}> Mutual funds</MenuItem>
                    <MenuItem value={20}>Training</MenuItem>
                    <MenuItem value={30}>Advisory Services</MenuItem>
                    <MenuItem value={40}>Algo Trading </MenuItem>
                    <MenuItem value={50}>Partnership</MenuItem>
                    <MenuItem value={60}>Others</MenuItem>
                  </Select>
                </FormControl>
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
              </Row>
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
  font-family: "Nunito Sans", sans-serif;
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
