import React from 'react';
import { useDispatch } from 'react-redux';

import {Creators as ProductActions} from '../../store/ducks/cart'

import * as Styled from './styles'

function Product({product}) {
  const dispatch = useDispatch()

  const handleAddProductToCart = () => {
    dispatch(ProductActions.asyncAddProduct(product))
  }

  return(
    <Styled.Product>
      <Styled.Productimage>
        <Styled.Image src={product.picture} alt="imagem do produto"/>
      </Styled.Productimage>
      <h2>{product.name}</h2>
      <footer>
        <Styled.Button type="button" onClick={handleAddProductToCart}>
          Adicionar ao carrinho
        </Styled.Button>
        <Styled.PriceInfo>
          <Styled.Price>R$ {product.price.to.integers},{product.price.to.decimals}
            <span> {product.unit}</span>
          </Styled.Price>
          {product.installments && <p>{product.installments.amount}X de R${product.installments.value} s/ juros</p>}
        </Styled.PriceInfo>
      </footer>
    </Styled.Product>
  )
}

export default Product;
