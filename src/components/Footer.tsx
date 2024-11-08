import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #222;
  color: #aaa;
  text-align: center;
  padding: 20px;
  margin-top: auto; /* Ensure footer sticks to the bottom */
  width: 100%; /* Make sure it spans the full width */
`;

const Footer: React.FC = () => (
  <FooterContainer>
    <p>© 2024 TOS - All Rights Reserved</p>
  </FooterContainer>
);

export default Footer;
