import './App.css';
import React from 'react';
import ListProduct from './components/listProduct/listProduct';
import products from './source/products.json';

function App() {
  return (
    <ListProduct products={products}/>
  );
}

export default App;
