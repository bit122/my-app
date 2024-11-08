import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.png"; // Import the logo image

// Style for the main content
const MainContent = styled.main`
  margin-left: 250px;
  padding: 50px;
  background-color: #1a1a1a;
  color: #f0f0f0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

// Style for the logo image
const LogoImage = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 20px;
`;

// Download button styled as a Link for internal navigation
const DownloadButton = styled(Link)`
  padding: 15px 30px;
  background-color: #66ccff;
  color: #fff;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3399cc;
  }
`;

const Home: React.FC = () => {
  return (
    <div>
      <Sidebar />
      <MainContent>
        <LogoImage src={Logo} alt="Logo" /> {/* Logo Image */}
        <h1>Welcome to Our Project</h1>
        <p>Experience a new level of performance with our custom OS.</p>
        <DownloadButton to="/downloads">
          Download Now
        </DownloadButton>
      </MainContent>
      <Footer />
    </div>
  );
};

export default Home;
