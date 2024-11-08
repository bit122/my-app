import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import styled from "styled-components";

// Main content area styling
const MainContent = styled.main`
  margin-left: 250px; /* Space for sidebar */
  padding: 50px;
  background-color: #1a1a1a;
  color: #f0f0f0;
  min-height: 100vh; /* Ensure content takes full height */
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Ensure content is spaced correctly */
`;

// Container for download section
const DownloadSectionContainer = styled.section`
  background-color: #333;
  padding: 40px;
  border-radius: 6px;
  text-align: center;
  margin-top: 40px;
`;

// Instruction paragraph styling
const DownloadInstructions = styled.p`
  font-size: 18px;
  color: #aaa;
  margin-top: 20px;
  line-height: 1.6;
`;

// Styled download button
const DownloadButton = styled.button`
  padding: 15px 30px;
  background-color: #333;
  color: #fff;
  border: none;
  font-size: 18px;
  border-radius: 6px;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #66ccff;
  }
`;

const Downloads: React.FC = () => (
  <div>
    <Sidebar />
    <MainContent>
      <h1>Downloads</h1>
      <DownloadSectionContainer>
        <h2>Download the Latest ISO</h2>
        <p>Get the latest version of TOS</p>

        {/* Download instructions */}
        <DownloadInstructions>
          Click the download button below and use <strong>Rufus</strong> to burn it to a USB drive.
        </DownloadInstructions>

        {/* Download button */}
        <a href="/path-to-your-iso-file.iso" download>
          <DownloadButton>Download TOS</DownloadButton>
        </a>
      </DownloadSectionContainer>
    </MainContent>
    <Footer />
  </div>
);

export default Downloads;
