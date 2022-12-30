import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ItemListContainer } from "../components/itemListContainer/itemListContainer";
import { consultaApi, API_Endpoints, API_Verbos } from "../services/ApiServices";
import { ItemDetalles } from "../components/itemDetalles/itemDetalles";

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
                <Route path="*" element={<Navigate to={"/itemListContainer"}/>} />
                <Route path="/itemListContainer" element={<ItemListContainer arregloItems={arregloItems}/>} />
                <Route path="/itemListContainer/:id" element={<ItemDetalles arregloItems={arregloItems}></ItemDetalles>} />
                <Route path="/Remeras" element={<ItemListContainer arregloItems={arregloItems.filter((item) => item.categoria == true)}/>} />
                <Route path="/Vestidos" element={<ItemListContainer arregloItems={arregloItems.filter((item) => item.categoria == false)}/>} />
                <Route path="/Remeras/:id" element={<ItemDetalles arregloItems={arregloItems}></ItemDetalles>} />
                <Route path="/Vestidos/:id" element={<ItemDetalles arregloItems={arregloItems}></ItemDetalles>} />
            </Routes>
        </div>
    );
};
