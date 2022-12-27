import './App.css';
import { Router } from './Router/router';
import { NavBar } from './components/navbar/navbar';
import { ItemListContainer } from './components/itemListContainer/itemListContainer';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Router/>
    </>
  );
}

export default App;
