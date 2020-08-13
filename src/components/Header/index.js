import React from 'react';

import CartHeader from '../CartHeader'
import './styles.css'

function Header({title}) {
  return(
    <div id="header-container">
      <div className="header-content">
        <h2>{title}</h2>
        <CartHeader />
      </div>
    </div>
  )
}

export default Header;
