import {React} from 'react';
import "../sidebar.css";
import { Link } from "react-router-dom";

const SidebarItem = ({ icono, texto, ruta }) => {
  return (
    <Link className="logo" to={ruta}>
      <li>
        <i className={icono}></i>
        <small>{texto}</small>
      </li>{" "}
    </Link>
  );
};

export default SidebarItem;