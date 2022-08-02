import React from 'react';
import {NavLink } from 'react-router-dom';

function Menu() {
  return (
    <>
    <NavLink exact activeClassName="active_class" to = '/contact'>Contact</NavLink>
    <NavLink exact activeClassName="active_class" to='/'>About</NavLink>


        {/* <a href='/'>About </a>
        <a href='/contact'>Contact </a> */}
    </>
  )
}

export default Menu