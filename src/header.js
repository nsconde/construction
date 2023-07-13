import React from 'react';
import './header.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';




const Header = () => {
    const navigation = useNavigate()
    const navigateToHome =()=>{
        navigation('/');
    }
    return(            
        <Navbar id="navigator" expand="lg"> 
            <Navbar.Brand id="brand" >A&M Construction, LLC</Navbar.Brand>
            
            <Nav id="links">
                <Nav.Link id="home" href='/'>HOME</Nav.Link>
                <Nav.Link id="about" href="about">ABOUT</Nav.Link>
                <Nav.Link id="services" href="services">SERVICES</Nav.Link>
                <Nav.Link id="contact" href="contact">CONTACT</Nav.Link>
                <SocialIcon id="facebook" url="https://www.facebook.com/"></SocialIcon>
            </Nav>
        
        </Navbar> 
     
    );
}

export default Header;