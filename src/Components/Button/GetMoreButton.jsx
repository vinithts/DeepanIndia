import { Button, Typography } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoArrowForwardSharp } from "react-icons/io5";

const GetMoreButton = () => {
const navigate = useNavigate();
  const location = useLocation();


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
    <CustomButton
    //   endIcon={<IoArrowForwardSharp className="arrowIcon" />}
      onClick={()=>handleNavigation('/#contact')}
    >
      More Details Click me..
    </CustomButton>
  );
};

export default GetMoreButton;

const CustomButton = styled(Typography)`
    font-size: 2rem;
    padding: 50px 0px 20px 0px;
    animation:blink 1s infinite;
    font-weight: 600;
    color: red;
    transition: all 0.3s ease;
    cursor: pointer;
`;
