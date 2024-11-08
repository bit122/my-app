import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const SectionContainer = styled.section`
  padding: 50px;
  background-color: #333; /* Dark background for consistency */
  color: #f0f0f0;
  margin-bottom: 50px; /* Space below the section */
`;

const AboutSection: React.FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
  >
    <SectionContainer>
      <h2>About Us</h2>
      <p>We have worked hard and long for a stable operating system which will be constantly updated</p>
      <p>This will be a LTS OS so we can garentee stability and we listen to what you want inside</p>
    </SectionContainer>
    <SectionContainer>
      <h2>Contact us</h2>
      <p>Create an email to follow up with this</p>  
    </SectionContainer>
  </motion.div>
);

export default AboutSection;
