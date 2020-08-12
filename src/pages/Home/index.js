import React, { useEffect, useState } from 'react';
import Api from '../../services/api'

import Header from '../../components/Header'
import Product from '../../components/Product'

import './styles.css'
import api from '../../services/api';

function Home() {
  const [products, setProducts] = useState(null)
  useEffect(()=>{
    api.get('/products').then(response=> setProducts(response.data))
  })

  const renderProducts = ()=>{
    return products.map(p => <Product product={p}/>)
  }
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
          {products && renderProducts()}
        </div>
      </main>
    </div>
  )
}

export default Home;
