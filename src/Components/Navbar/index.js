import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon } from './NavbarStyledComponent'
import { DiTerminalBadge } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../Data/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <Nav> 
       <NavbarContainer>
          <NavLogo>
           <span style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' } }>
             <DiTerminalBadge size="3rem" /> <Span>Personal Portfolio</Span>
           </span>
         </NavLogo>
         <MobileIcon>
           <FaBars onClick={() => {
             setIsOpen(!isOpen)
           }} />
         </MobileIcon>
         <NavItems>
           <NavLink href="#about">About</NavLink>
           <NavLink href='#projects'>Projects</NavLink>
         </NavItems>
         <ButtonContainer>
           <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
         </ButtonContainer>
         {/* * {
          isOpen &&
           <MobileMenu isOpen={isOpen}>
             <MobileLink href="#about" onClick={() => {
               setIsOpen(!isOpen)
             }}>About</MobileLink>
             <MobileLink href='#skills' onClick={() => {
               setIsOpen(!isOpen)
             }}>Skills</MobileLink>
             <MobileLink href='#projects' onClick={() => {
               setIsOpen(!isOpen)
             }}>Projects</MobileLink>
             <MobileLink href='#education' onClick={() => {
               setIsOpen(!isOpen)
             }}>Education</MobileLink>
             <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
           </MobileMenu>
         }  */}
       </NavbarContainer> 
    
    </Nav>
    
  )
}

export default Navbar