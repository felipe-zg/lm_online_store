import React from 'react';
import { Link } from 'react-router-dom';

import cartIcon from '../../assets/images/svgs/cart.svg'
import './styles.css'

function Header({title}) {
  return(
    <div id="header-container">
      <div className="header-content">
        <h2>{title}</h2>
        <div className="cart">
          <h4>Carrinho</h4>
          <div className="cart-link">
            <Link to="/cart">
              <img src={cartIcon} alt="icone de um carrinho de compras" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
