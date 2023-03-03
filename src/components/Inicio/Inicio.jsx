import React from "react";
import Contactos from "../Contactos/contactos";
import classes from "./Inicio.module.css"
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <div className={classes.inicio}>
      <h1>Bienvenidos al Restaurante ZEN WEI</h1>
      <p>Disfruta de la varidad de platos tipicos Ecuatorianos versión vegetariano</p>
      <button className={classes.boton} onClick={Contactos}><Link to="/contacto">CONTACTANOS</Link></button>

    </div>
  );
};

export default Inicio;
