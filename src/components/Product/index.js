import React from 'react';
import { useDispatch } from 'react-redux';

import {Creators as ProductActions} from '../../store/ducks/Cart'

import './styles.css'


function Product({product}) {
  const dispatch = useDispatch()

  const handleAddProductToCart = () => {
    dispatch(ProductActions.asyncAddProduct(product))
    alert('produto adicionado ao carrinho')
  }

  return(
    <div id="product">
      <img src={product.picture} alt="imagem do produto"/>
      <h2>{product.name}</h2>
      <footer>
        <button type="button" onClick={handleAddProductToCart}>
          <p>Adicionar ao carrinho</p>
        </button>
        <div className="product-prices">
          <strong>R$ {product.price.to.integers},{product.price.to.decimals}
            <span> {product.unit}</span>
          </strong>
          {product.installments && <p className="product-installment">{product.installments.amount}X de R${product.installments.value} s/ juros</p>}
        </div>
      </footer>
    </div>
  )
}

export default Product;
