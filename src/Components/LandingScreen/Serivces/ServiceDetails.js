import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import aboutImage from "../../../assets/about-us.jpg";
import backImage from "../../../assets/top-view-piggy-bank-money.jpg";

const services = {
  "mutual-funds": "Details about Mutual Funds.",
  "fixed-deposits": "Details about Fixed Deposits.",
  insurance: "Details about Insurance.",
  loans: "Details about Loans.",
  pms: "Details about PMS.",
};

// Animation for slide-in effect
const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ServiceDetails = () => {
  const { serviceName } = useParams();

  return (
    <>
      <MainBox image={aboutImage}>
        {/* Slide Content */}
        <ContentBox>
          <Typography variant="h2" className="subTitle">
            {serviceName.replace("-", " ").toUpperCase()}
          </Typography>
        </ContentBox>
      </MainBox>
      <Main2Box image={backImage}>
        <Content1Box>
          {serviceName === "fixed-deposits" && (
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* {services[serviceName] || "Service details not found."} */}
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                Fixed Deposits (FDs)
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                Explore Our Fixed Deposit Services
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                Guaranteed Returns for Your Investments
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                Fixed Deposits (FDs) are a reliable and straightforward
                investment option. They provide a safe harbour for your
                hard-earned money, offering guaranteed returns with minimal
                risk. In this era of financial uncertainty, FDs stand as a
                beacon of stability. FDs are financial instruments where you
                deposit a lump sum with a financial institution for a
                predetermined tenure. In return, you earn a fixed interest rate,
                making it an ideal choice for risk-averse investors.
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                Types of Fixed Deposits:
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                1.Regular Fixed Deposits: These are standard FDs with flexible
                tenure options. <br />
                2.Tax-saving Fixed Deposits: These FDs offer tax benefits under
                Section 80C of the Income Tax Act. <br />
                3.Senior Citizen Fixed Deposits: Exclusively for senior
                citizens, these FDs offer higher interest rates.
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                Features of Fixed Deposits:
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                1.Assured Returns: You'll earn a fixed interest rate, ensuring
                the safety of your principal amount. <br />
                2.Flexible Tenure Options: Choose a tenure that suits your
                financial goals. <br />
                3.Low to Zero Risk: FDs are one of the safest investment
                options. <br />
                4.High Liquidity: In case of an emergency, you can prematurely
                withdraw your FD with a slight penalty. <br />
                5.Loan against FD: You can avail of a loan against your FD,
                helping you in times of need. <br />
                6.Nomination Facility: Ensure a smooth transition of your
                investment to your loved ones.
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                Fixed Deposits are a secure investment option providing peace of
                mind and guaranteed returns. Whether you're looking to save for
                your future, plan for retirement, or save on taxes, FDs offer a
                reliable way to grow your wealth. Don't miss out on this
                opportunity
              </p>
            </Typography>
          )}
          {serviceName === "mutual-funds" && (
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* {services[serviceName] || "Service details not found."} */}
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                Mutual Funds Simplified
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                Invest Smart and Grow Your Wealth
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                Investing in mutual funds is a smart option to grow your wealth.
                Mutual funds pool money from various investors to buy a
                diversified portfolio of stocks, bonds, and other securities.
                This diversified approach reduces risk and allows you to benefit
                from professional fund management.
                <br />
                Mutual funds offer an easy entry point into the world of
                investing, making them an excellent choice for both beginners
                and experienced investors. With mutual funds, your money is
                managed by skilled fund managers who analyze the market and
                select the best investment opportunities.
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                Types of Mutual Funds
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                1.Equity Funds: These funds primarily invest in stocks and offer
                the potential for high returns.
                <br />
                2.Debt Funds: Debt funds focus on bonds and fixed-income
                securities, providing stability. benefits under Section 80C of
                the Income Tax Act. <br />
                3.Hybrid Funds: These combine equity and debt, striking a
                balance between risk and return.
                <br />
                4.Index Funds: Designed to replicate a specific market index,
                offering broad market exposure.
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                Key Features:
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                1.Professional Management: Skilled fund managers make investment
                decisions. <br />
                2.Diversification: Spread your risk across various assets.
                <br />
                3.Liquidity: Easily buy and sell fund units as per your needs.{" "}
                <br />
                4.Transparency: Regular updates on the fund's performance.
                <br />
                5.SIP Option: Invest a fixed amount regularly for financial
                discipline.
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                Mutual funds provide a flexible and convenient way to grow your
                money over time. Start your investment journey today for a
                brighter financial future.
              </p>
            </Typography>
          )}
          {serviceName === "loans" && (
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* {services[serviceName] || "Service details not found."} */}
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                Unlock Liquidity
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                Grow Your Wealth With Loan Against Securities
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                When you need quick access to funds without liquidating your
                investments, a Loan Against Securities is the smart choice. It
                allows you to leverage your holdings to meet your financial
                goals without selling them.
                <br />A Loan Against Securities is a secured loan that lets you
                pledge your stocks, mutual funds, or other financial instruments
                as collateral, ensuring you can continue to benefit from
                potential market gains.
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                Types of Loan Against Securities:
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                1.Equity Shares: Pledge your equity shares for instant funds.
                <br />
                2.Mutual Funds: Use your mutual fund units as collateral.
                <br />
                3.Hybrid Funds: These combine equity and debt, striking a
                balance between risk and return.
                <br />
                4.Index Funds: Designed to replicate a specific market index,
                offering broad market exposure.
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                Features of Loan Against Securities:
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                1.Competitive interest rates <br />
                2.Flexible repayment options
                <br />
                3.No need to liquidate your investments. <br />
                4.Quick approval and disbursal
                <br />
                5.Continue to receive dividends and interest.
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                Experience the power of your investments. Opt for a Loan Against
                Securities and secure your financial future. Take the first step
                today with a simple online application
              </p>
            </Typography>
          )}
          {serviceName === "pms" && (
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* {services[serviceName] || "Service details not found."} */}
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                Expert Portfolio Management
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                Maximize Your Wealth With Experts
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                Our Portfolio Management Services are designed to grow and
                protect your wealth. We offer a range of investment strategies
                tailored to your financial goals. Portfolio Management Services
                involve professionals making investment decisions on your
                behalf, aiming to deliver optimal returns.
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                Types of Portfolio Management Services:
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                Discretionary Portfolio Management: Let our experts manage your
                investments, making decisions based on your goals and risk
                tolerance. Advisory Portfolio Management: We provide guidance,
                but you have the final say in investment decisions.
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                Features of Portfolio Management Services:
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                1.Customized Investment Strategies: Tailored to your financial
                objectives. <br />
                2.Diversification: Spread your investments across various asset
                classes.
                <br />
                3.Risk Management: Proactive risk assessment and mitigation.{" "}
                <br />
                4.Regular Monitoring: Continuous oversight and adjustments.
                <br />
                5.Transparency: Access to real-time performance reports.
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                With our Portfolio Management Services, your wealth is in
                capable hands. Let us help you achieve your financial dreams.
                Start investing today
              </p>
            </Typography>
          )}
            {serviceName === "insurance" && (
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* {services[serviceName] || "Service details not found."} */}
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                Expert Isurance 
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                Maximize Your Wealth With Experts
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                Our Portfolio Management Services are designed to grow and
                protect your wealth. We offer a range of investment strategies
                tailored to your financial goals. Portfolio Management Services
                involve professionals making investment decisions on your
                behalf, aiming to deliver optimal returns.
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                Types of Portfolio Management Services:
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                Discretionary Portfolio Management: Let our experts manage your
                investments, making decisions based on your goals and risk
                tolerance. Advisory Portfolio Management: We provide guidance,
                but you have the final say in investment decisions.
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                Features of Portfolio Management Services:
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                1.Customized Investment Strategies: Tailored to your financial
                objectives. <br />
                2.Diversification: Spread your investments across various asset
                classes.
                <br />
                3.Risk Management: Proactive risk assessment and mitigation.{" "}
                <br />
                4.Regular Monitoring: Continuous oversight and adjustments.
                <br />
                5.Transparency: Access to real-time performance reports.
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#616161",
                }}
              >
                With our Portfolio Management Services, your wealth is in
                capable hands. Let us help you achieve your financial dreams.
                Start investing today
              </p>
            </Typography>
          )}
        </Content1Box>
      </Main2Box>
    </>
  );
};

export default ServiceDetails;

/* Styled Components */
const MainBox = styled(Box)`
  position: relative;
  width: 100%;
  height: 300px;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  animation: ${slideIn} 0.8s ease-in-out;

  @media (max-width: 900px) {
    height: 200px;
  }
`;
const Main2Box = styled(Box)`
  position: relative;
  width: 100%;
  height: 700px;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  animation: ${slideIn} 0.8s ease-in-out;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  /* filter: blur(8px); */
  /* -webkit-filter: blur(8px); */
  @media (max-width: 900px) {
    height: 1600px;
  }
`;
const ContentBox = styled(Box)`
  position: absolute;
  top: 40%;
  left: 10%;
  right: 10%;
  color: white;
  text-align: left;
  z-index: 1;

  .subTitle {
    font-size: 50px;
    font-weight: 900;
    margin-bottom: 8px;
    color: #23395d;
    @media (max-width: 600px) {
      font-size: 20px;
    }
  }

  .title {
    font-size: 12px;
    margin-bottom: 8px;
    color: black;
    @media (max-width: 600px) {
      font-size: 12px;
    }
  }
`;
const Content1Box = styled(Box)`
  position: absolute;
  color: white;
  text-align: left;
  z-index: 1;
  padding: 50px;
`;
