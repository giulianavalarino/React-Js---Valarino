import React from "react";
import "./sidebar.css";
import SidebarItem from "./sidebarItem/sidebarItem";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <SidebarItem texto={"Inicio"} icono={"fa-solid "} ruta={"/home"}></SidebarItem>
        <SidebarItem texto={"Remeras"} icono={"fa-solid "} ruta={"/Remeras"}></SidebarItem>
        <SidebarItem texto={"Vestidos"} icono={"fa-solid "} ruta={"/Vestidos"}></SidebarItem>
      </ul>

      <ul>
        <SidebarItem texto={"Carrito (0)"} icono={"fa-solid fa-cart-shopping"} ruta={"/"}></SidebarItem>
        <SidebarItem texto={"Contacto"} icono={"fa-solid fa-comment"} ruta={"/"}></SidebarItem>
      </ul>
    </div>
  );
};

export default Sidebar;