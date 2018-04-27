import React from 'react';
import '../styles/Header.css'

function Header (props) {
  return (
    <div className='header'>
      <div className='header-each'>20 EAST 42ND ST</div>
      <div className='header-each'>TABLETIMENYC@GMAIL.COM</div>
      <div className='header-each'>(212) 682-4242</div>
    </div>
  )
}

export default Header;
