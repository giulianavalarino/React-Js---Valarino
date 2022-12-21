import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Sidebar from './components/Sidebar';
import Button from './components/Button';
import {PRODUCTS} from './components/constants/data/products';
import Card from './components/Card';

function App() {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const[showProducts, setShowProducts] = useState(false);
  const[buttonText, setButtonText] = useState('');
  const onHandlerClick = () => {
    setIsOpen(!isOpen);
    setShowProducts(!showProducts);
  }

  useEffect(()=>{
    setButtonText(isOpen ? 'Hide' : 'Show');
  }, [isOpen]);

  const onHandlerCart = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    fetch('https://63a0f68224d74f9fe845248b.mockapi.io/users')
    .then((response) => response.json())
    .then((data) => setUser(data[0])); 
  }, [])


  return (
    <div className="App">
        <Navbar user={user}/>
        <Sidebar onClose={onHandlerClick} isOpen={isOpen}>
        </Sidebar>
        <ItemListContainer/>
        <Button text={buttonText} onHandlerClick={onHandlerClick}/>
        {showProducts}
        <div className='products-container'>
        {PRODUCTS.map((product) =>(
          <Card product={product} key={product.name}/>
        ))}
        </div>
    </div>
  );
}

export default App;
