import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ItemListContainer } from "../components/itemListContainer/itemListContainer";
import { consultaApi, API_Endpoints, API_Verbos } from "../services/ApiServices";

export const Router = () => {

    const [arregloItems, setArregloItems] = useState([]);

    useEffect(() => {
        consultaApi(API_Endpoints.ITEMS, API_Endpoints.GET).then((respuesta) => {
            setArregloItems(respuesta.data);
        })
    },[])

    return (
        <div className="">
            <Routes>
                <Route path="/itemListContainer" element={<ItemListContainer arregloItems={arregloItems}/>} />
                <Route path="/Remeras" element={<ItemListContainer arregloItems={arregloItems.filter((item) => item.categoria == true)}/>} />
                <Route path="/Vestidos" element={<ItemListContainer arregloItems={arregloItems.filter((item) => item.categoria == false)}/>} />
            </Routes>
        </div>
    );
};