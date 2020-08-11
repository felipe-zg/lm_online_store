import React from 'react';

import Header from '../../components/Header'
import Product from '../../components/Product'

import './styles.css'

function Home() {
  return(
    <div id="home-container">
      <header>
        <Header title="Os melhores produtos"/>
      </header>
      <div className="title">
        <div>
          <h1>Produtos</h1>
        </div>
      </div>
      <main>
        <div className="products-list">
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
        </div>
      </main>
    </div>
  )
}

export default Home;
