import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import styled from "styled-components";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <CustomIconButton onClick={scroll}>
        <KeyboardArrowUpIcon />
      </CustomIconButton>
    )
  );
};

export default ScrollToTop;

const CustomIconButton = styled(Box)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #0d174e;
  color: white;
  border-radius: 50%;
  padding: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
  z-index: 1000;

  &:hover {
    background-color: #1a237e;
  }

  @media screen and (max-width: 600px) {
    bottom: 20px;
    right: 50px;
    padding: 10px;
  }
`;