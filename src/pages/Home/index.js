import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Creators as CartActions} from '../../store/ducks/cart'
import {Creators as ProductsActions} from '../../store/ducks/products'

import Header from '../../components/Header'
import Product from '../../components/Product'

import './styles.css'

function Home() {
  const products = useSelector(state => state.Products)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(ProductsActions.asyncFillProductsList())
    dispatch(CartActions.asyncFillCartWithSavedItems())
  })

  const renderProducts = ()=>{
    return products.map(p => <Product product={p} key={p.id}/>)
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
