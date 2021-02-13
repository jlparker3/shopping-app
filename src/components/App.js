
import '../App.css';
import { productData } from "../data/shoppingData";
import Welcome from "./Welcome";
import Product from "./Product";
import ProductList from "./ProductList";
import React, { useState } from 'react';

  


function App() {

  return (
    <div className="container">
      <Welcome />
      <ProductList products ={productData} />
      

    </div>
  );
}

export default App;
