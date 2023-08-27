import './App.css';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './Utils/Themes';
import styled from 'styled-components';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import DescSection from './Components/DescSection';
import Projects from "./Components/Projects";
import ProjectDetails from "./Components/ProjectDetails";
import { useState, useEffect } from "react";
import Education from "./Components/Education"
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  `;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <DescSection />
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Education />
          </Body>

        </Router>
        {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
    </ThemeProvider>
  );
}

export default App;
