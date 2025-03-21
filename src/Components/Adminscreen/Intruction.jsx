import React from "react";
import styled from "styled-components";
// import { FaAngleRight } from "react-icons/fa";
// <FaAngleRight className='icon' />

export default function Instruction() {
  return (
    <Admininstruction>
      <h1>Welcome to the Admin Dashboard</h1>
      <ul>
        <li>Upload content that is clear and necessary only.</li>
        <li>Use images in JPG, JPEG, or PNG formats.</li>
        <li>Ensure image size and quality are optimized for better output.</li>
        <li>Provide short and unique titles.</li>
        <li>Keep paragraphs concise and to the point.</li>
        <li>
          Before submission or making changes, review everything carefully
          before clicking the update button.
        </li>
        <li>Avoid leaving any sections blank unless intentional.</li>
        <li>
          Double-check for any spelling or grammatical errors in your content.
        </li>
        <li>Ensure links, if any, are functional and relevant.</li>
        <li>Maintain consistency in formatting across all uploaded content.</li>
      </ul>
    </Admininstruction>
  );
}

const Admininstruction = styled.div`
  padding: 50px 0;

  h1 {
    font-size: 26px;
    padding: 15px 0;
    font-wieght: 900;
  }
  ul li {
    list-style-type: number;
    padding: 6px 0;
  }
  .icon {
    color: #013396;
  }
`;
