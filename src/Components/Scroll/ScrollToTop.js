import { Box } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import styled from "styled-components";

const ScrollToTop = () => {
  const scroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <CustomIconButton onClick={scroll}>
      <KeyboardArrowUpIcon />
    </CustomIconButton>
  );
};

export default ScrollToTop;

const CustomIconButton = styled(Box)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #0d174e;
  color: white;
  border-radius: 50%;
  padding: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #1a237e;
  }
`;
