import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import styled from "styled-components";

const MainContent = styled.main`
  margin-left: 250px; /* Space for sidebar */
  padding: 50px;
  background-color: #1a1a1a;
  color: #f0f0f0;
  min-height: 100vh; /* Ensure content takes full height */
`;

const About: React.FC = () => (
  <div>
    <Sidebar />
    <MainContent>
      <h1>About Us</h1>
      <AboutSection />
    </MainContent>
    <Footer />
  </div>
);

export default About;
