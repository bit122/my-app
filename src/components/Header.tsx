import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  background-color: #fff;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Header: React.FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <HeaderContainer>
      <Logo>Home</Logo>
      <nav>
        <a href="/">Home</a> | <a href="/about">About</a> | <a href="/downloads">Downloads | <a href="/opensource">open source</a> </a>
      </nav>
    </HeaderContainer>
  </motion.div>
);

export default Header;
