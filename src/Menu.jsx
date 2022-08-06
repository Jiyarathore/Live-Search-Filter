import React from 'react';
import {NavLink } from 'react-router-dom';

function Menu() {
  return (
    <>
    <div className='menu_style'>

    <NavLink exact activeClassName="active_class" to='/'>About</NavLink>
    <NavLink exact activeClassName="active_class" to = '/contact'>Contact</NavLink>
    <NavLink exact activeClassName="active_class" to = '/service'>Service</NavLink>


        {/* <a href='/'>About </a>
        <a href='/contact'>Contact </a> */}
    </div>
    </>
  )
}

export default Menu