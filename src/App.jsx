import { useState } from 'react'
import './App.css'
import TourList from './gallery';


const addProduct = (newProduct) => {
  setProducts([...products, { id: products.length + 1, ...newProduct }]);
};

return (
  <div>
    <h1>Tours</h1>
    <TourList/>
   
  </div>
);

export default App