import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Tabcontentbox from "./Tabcontentbox";
import Accordion from "react-bootstrap/Accordion";
import backImage from "../../../assets/top-view-piggy-bank-money.jpg";
import { Typography } from "@mui/material";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const tabData = [
  {
    label: "WISE INVESTOR",
    content: [
      { title: "Basic to Advanced Training – Recorded videos on value investing & smart trading" },
      { title: "Goal-Based & Time Horizon-Based Recommendations – Mutual funds, stocks, commodities" },
      { title: "Portfolio Tracker – Manage up to 5 family accounts with 360-degree analysis" },
      { title: "Robo-Advisor – AI-driven insights on stock trends and future price predictions" },
      { title: "Accounting Software – Track portfolio performance, auditing, and goal progress" },
      { title: "Trading Journal Software – Track live trades, verify P&L, and improve trading performance" },
    ],
  },
  {
    label: "SMART TRADER",
    content: [
      { title: "All Wise Investor features" },
      { title: "Advanced Charting Software – Spot profitable short-term investment & trading opportunities" },
      { title: "Algo Trading Software – Automate BUY/SELL decisions with customized option strategies" },
    ],
  },
  {
    label: "AGGRESSIVE WEALTH CREATION",
    content: [
      { title: "Fully Automated Rule-Based Trading with Proven Backtesting" },
      { title: "0% Fixed/Upfront Fees" },
      { title: "Performance-Based Pricing: Pay 20% on profit generated (monthly billing cycle)" },
      { title: "OR Pay 50% on profits above 18% per year (quarterly billing for 1st year, then monthly)" },
      { title: "Plan shift allowed once per year" },
    ],
  },
];
export default function Tabscontent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Maindiv image={backImage}>
      <Container>
        <Typography
          sx={{
            fontSize: { xs: "28px", md: "40px" },
            color: "#23395d",
            fontWeight: "900",
            textAlign: "center",
            padding:"20px"
          }}
        >
          Our Pricing Plans
        </Typography>
        <Largescreentabs>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              variant="scrollable"
              scrollButtons="auto"
            >
              {tabData.map((tab, index) => (
                <Tab
                  key={index}
                  label={tab.label}
                  {...a11yProps(index)}
                  sx={{
                    border: "1px solid #23395d",
                    padding: "5px 50px",
                    margin: "0 10px",
                    color: "#23395d",
                    backgroundColor: "transparent",
                    fontSize: "20px",
                    fontWeight: "800",
                    transition: "all 0.5s ease-in-out",
                    "&:hover": {
                      backgroundColor: "#23395d",
                      color: "#fff",
                    },
                    "&.Mui-selected": {
                      backgroundColor: "#23395d",
                      color: "#fff",
                    },
                  }}
                />
              ))}
            </Tabs>

            {tabData.map((tab, index) => (
              <CustomTabPanel key={index} value={value} index={index}>
                <Row>
                  {tab.content?.map((item, idx) => (
                    <Col key={idx} md={4} lg={4} xl={4}>
                      <Box
                        sx={{
                          padding: "10px",
                          backgroundColor: "#23395d",
                          margin: "10px",
                          color: "white",
                          borderRadius: "0px 50px",
                          ":hover": {
                            border: "10px solid #23395d",
                            backgroundColor: "white",
                            color: "#23395d",
                          },
                        }}
                      >
                        <Tabcontentbox title={item.title} />
                      </Box>
                    </Col>
                  ))}
                </Row>
              </CustomTabPanel>
            ))}
          </Box>
        </Largescreentabs>

        <Smallscreentabs>
          <Accordion defaultActiveKey="0">
            {tabData.map((tab, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>{tab.label}</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    {tab.content?.map((item, idx) => (
                      <Col key={idx} sm={12} xs={12}>
                        <Box
                          sx={{
                            padding: "10px",
                            backgroundColor: "#23395d",
                            margin: "10px",
                            color: "white",
                            borderRadius: "0px 50px",
                            ":hover": {
                              border: "10px solid #23395d",
                              backgroundColor: "white",
                              color: "#23395d",
                            },
                          }}
                        >
                          <Tabcontentbox title={item.title} />
                        </Box>
                      </Col>
                    ))}
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Smallscreentabs>
      </Container>
    </Maindiv>
  );
}

const Maindiv = styled.div`
  padding: 85px 0;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  @media screen and (max-width: 600px) {
    padding: 40px 0;
  }
`;

const Largescreentabs = styled.div`
  display: block;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const Smallscreentabs = styled.div`
  display: none;
  @media screen and (max-width: 600px) {
    display: block;
  }
`;
