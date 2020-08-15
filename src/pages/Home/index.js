import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Creators as CartActions} from '../../store/ducks/cart'
import {Creators as ProductsActions} from '../../store/ducks/products'

import Header from '../../components/Header'
import CartHeader from '../../components/CartHeader'
import Product from '../../components/Product'

import * as Styled from './styles'

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
    <Styled.Home>
      <header>
        <Header title="Os melhores produtos">
          <CartHeader />
        </Header>
      </header>
      <Styled.HomeTitle>
        <div>
          <h1>Produtos</h1>
        </div>
      </Styled.HomeTitle>
      <main>
        <Styled.ProductsList>
          {products && renderProducts()}
        </Styled.ProductsList>
      </main>
    </Styled.Home>
  )
}

export default Home;
