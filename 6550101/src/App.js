import './App.css';
import React from 'react';
import ListProduct from './components/listProduct/listProduct';
import products from './source/products.json';

function App() {
  console.log(products[0]);
  return (
    <ListProduct />
  );
}

export default App;
