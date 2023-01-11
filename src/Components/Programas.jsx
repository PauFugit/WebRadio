import React from "react";
import "../styles/Programas.css";
import CarouselPrograms from "./CaroulsePrograms";

const Programas = () => {
  return (
    <>
      {/*  banner 
        Publicidad 
        Nuestros programas 
        ordenados por horario? 
        imagen/descripcion/conductor */}

      <div className="main">
        <div className="banner-programas">
          <img
            src="https://cdn-profiles.tunein.com/s161857/images/bannerx.jpg?t=636445940788300000"
            alt="quienessomos"
            className="banner-programas w-100"
          />
        </div>
        <div className="col-sm-12">
          <CarouselPrograms />
        </div>
      </div>
    </>
  );
};

export default Programas;
