import {React} from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

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
        </div>
    );
};