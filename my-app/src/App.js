import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Sidebar from './components/Sidebar';
import Button from './components/Button';
import {PRODUCTS} from './components/constants/data/products';
import Card from './components/Card';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const[showProducts, setShowProducts] = useState(false);
  const onHandlerClick = () => {
    setIsOpen(!isOpen);
    setShowProducts(!showProducts);
  }
  return (
    <div className="App">
        <Navbar/>
        <Sidebar onClose={onHandlerClick} isOpen={isOpen}>
        </Sidebar>
        <Button text='Click' onHandlerClick={onHandlerClick}/>
        {showProducts}
        <div className='products-container'>
        {PRODUCTS.map((product) =>(
          <Card product={product} key={product.name}/>
        ))}
        </div>
        <ItemListContainer/>
    </div>
  );
}

export default App;
