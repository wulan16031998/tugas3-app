import React from 'react'
import Products from '../components/Products'
import productList_DUMMY from '../utils/constant'

const ProductPage = () => {
    const products = productList_DUMMY


  return (
  <div>
    {products.map((products)=> {
        return <Products key={products.id} product = {products} />;
    })}
    </div>
  );
}

export default ProductPage