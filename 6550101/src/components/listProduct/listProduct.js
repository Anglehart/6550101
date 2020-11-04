import React from 'react';
import Product from '../product/product';

function ListProduct(props) {
  const listItems = props.products.map((item) =>
    <Product key={item.productId} product={item}/>
  )
  return (
    <div className="products-list">
      {listItems}
    </div>
  )
}

export default ListProduct;