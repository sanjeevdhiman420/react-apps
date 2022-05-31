import React from 'react'
import { Container } from 'react-bootstrap';
import {  NavLink } from 'react-router-dom'
import {  Row } from 'react-bootstrap'


const Footer = () => {
  return (
    <footer className='__footer common'>
      <Container className='__footer_container' fluid>

    
            <Row className='col-md-4'>
          
            <img className='mx-img' src='./Images/riki.svg' />
            
          </Row>
          <Row className='col-md-4'>
              </Row>
          <Row className='col-md-4'>
          
            <ul className='footer-menus d-flex '>
              <li><NavLink className='menu-item p-3 ' to='/'  >Home</NavLink>

              </li>
              <li>      <NavLink className='menu-item p-3' to='/About'>About</NavLink> </li>
              <li><NavLink className='menu-item p-3' to='/Contact'>Contact</NavLink> </li>
            </ul>
          
          </Row>

      </Container>
  </footer>
  )
};
export default Footer;