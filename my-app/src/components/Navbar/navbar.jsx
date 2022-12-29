import {React} from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar/sidebar';


export const NavBar = () => {
    return(
        <div className='navbar d-flex container align-items-center justify-content-between'>
            <Link to="/ItemListContainer">
            <div className='d-flex align-items-center'>
                <img src='https://www.freeiconspng.com/uploads/description-textmateicon-png-31.png' alt='icono' width="90px"/>
                <h2>Chiquita</h2>
            </div>
            </Link>
            <ul className='d-flex listas justify-content-around'>
                <Link to={"/Remeras"}>
                    <li className='ms-3 me-3 listas '>Remeras</li>
                </Link>
                <Link to={"/Vestidos"}>
                    <li className='ms-3 me-3 listas'>Vestidos</li>
                </Link>
            </ul>               
            <img className='carrito' src="https://cdn-icons-png.flaticon.com/512/107/107831.png?w=740&t=st=1672284509~exp=1672285109~hmac=ca3ebf5d2380c00cdf0f297d0b0fd359e1e2ee4209e82cac40ecf86440fd9e8d" alt="carrito" width="50px"/>
            <Sidebar></Sidebar>
        </div>
        
    );
};