import React from "react";

const Inicio = () => {
  return (
    <>
            <h2 style={{textAlign: 'center', color:'white', margin:100}}>
                Bienvenidos al Restaurant ZEN WEI, estamos para darte el mejor servicio.  
            </h2>
            <div style={{width: '70%', margin: 'auto auto auto auto'}}>
              <p>Contactanos</p>
                <Searchbar/>
            </div>
        </>
  );
};

export default Inicio;
