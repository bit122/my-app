import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import styled from "styled-components";

// Style for the main content
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

// Style for the open source content container
const OpenSourceContainer = styled.section`
  background-color: #333;
  padding: 40px;
  border-radius: 6px;
  text-align: center;
  margin-top: 40px;
  width: 100%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const ProjectList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
`;

const ProjectItem = styled.li`
  margin: 15px 0;
  background-color: #222;
  padding: 15px;
  border-radius: 6px;
  color: #66ccff;
  font-size: 18px;
`;

const ButtonLink = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #66ccff;
  color: #fff;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3399cc;
  }
`;

const OpenSource: React.FC = () => {
  return (
    <div>
      <Sidebar />
      <MainContent>
        <h1>Open Source Projects</h1>
        <OpenSourceContainer>
          <h2>Our Contributions to the Open Source Community</h2>
          <p>We are committed to supporting and contributing to open source software. Here are some of the projects we’re working on:</p>
          <ProjectList>
            <ProjectItem>
              <strong>OS code</strong>:
              <p>
              <ButtonLink href="https://github.com/yourorganization/project-a" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </ButtonLink>
              </p>
            </ProjectItem>
            <ProjectItem>
              <strong>Game code</strong>:
              <p>
              <ButtonLink href="https://github.com/yourorganization/project-b" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </ButtonLink>
              </p>
            </ProjectItem>
            <ProjectItem>
              <strong>Website code</strong>: 
              <p>
              <ButtonLink href="https://github.com/yourorganization/project-c" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </ButtonLink>
              </p>
            </ProjectItem>
          </ProjectList>
        </OpenSourceContainer>
      </MainContent>
      <Footer />
    </div>
  );
};

export default OpenSource;
