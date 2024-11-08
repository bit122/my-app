// Step 1: Move all imports to the top of the file
import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import styled from "styled-components"; // Only keep necessary imports

// Step 2: Define styled components
const MainContent = styled.main`
  margin-left: 250px;
  padding: 50px;
  background-color: #1a1a1a;
  color: #f0f0f0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ContactContainer = styled.section`
  background-color: #333;
  padding: 40px;
  border-radius: 6px;
  text-align: center;
  margin-top: 40px;
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const InfoText = styled.p`
  color: #ccc;
  font-size: 18px;
`;

const Contact: React.FC = () => {
  return (
    <div>
      <Sidebar />
      <MainContent>
        <h1>Contact Us</h1>
        <ContactContainer>
          <h2>We're here to help!</h2>
          <InfoText>
            If you have any questions or need support, feel free to reach out
            to us. We're always available to assist you!
          </InfoText>
        </ContactContainer>
      </MainContent>
      <Footer />
    </div>
  );
};

export default Contact;
