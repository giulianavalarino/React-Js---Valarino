import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Sidebar from './components/Sidebar';
import Button from './components/Button';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const onHandlerClick = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="App">
        <Navbar/>
        <Sidebar onClose={onHandlerClick} isOpen={isOpen}>
          <h2>Item</h2>
        </Sidebar>
        <Button text='Click' onHandlerClick={onHandlerClick}/>
        <ItemListContainer/>
    </div>
  );
}

export default App;
