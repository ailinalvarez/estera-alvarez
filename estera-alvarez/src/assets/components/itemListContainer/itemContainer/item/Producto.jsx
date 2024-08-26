import React from "react";
import ProductoImg from "./productoImg/productoImg";
import ProductoBoton from "../../../productoBoton/productoBoton";
import ProductoInf from "../../../productoInf/productoInf";
import "./Producto.css";

const Producto = () => {
  return (
    <div className="producto">
      <ProductoImg />
      <ProductoBoton />
      <ProductoInf />
    </div>
  );
};

export default Producto;
