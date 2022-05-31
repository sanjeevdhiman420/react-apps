import React from 'react'
import {  NavLink } from 'react-router-dom'

import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { BsWhatsapp } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
const Header = () => {
 
  return (
  
<Navbar className='__nav_bar_main common'>
  <Container fluid>
      <Row>
<img className='mx-img' src='./Images/riki.svg' />
    </Row>
    <Row>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <NavLink className='menu-item p-2' to='/'  >Home</NavLink>
      <NavLink className='menu-item p-2' to='/Contact'>Contact</NavLink>    
      <NavLink className='menu-item p-2' to='/About'>About</NavLink>    
    
      </Nav>

      
    </Navbar.Collapse>
    </Row>  
    <Row className='__social_icons'>
        <div className='d-flex'>
    <span className='__social_icons_items p-3'><BsWhatsapp /></span>
    <span className='__social_icons_items p-3' ><BsInstagram /></span>
    <span className='__social_icons_items p-3'><BsTwitter /></span>
    </div>
    </Row>
  </Container>
</Navbar>

  );
}

export default Header
