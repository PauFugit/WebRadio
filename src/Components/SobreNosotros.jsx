import React from "react";
import BannerPrincipal from "./BannerPrincipal";
import aboutus1 from "../img/aboutus1.jpg";
import aboutus2 from "../img/aboutus2.jpg";
import "../styles/SobreNosotros.css";

const SobreNosotros = () => {
  return (
    <>
      {/*  banner 
        presentacion texto
        imagen
        
        nuestro equipo*/}

      <div className="main">
        <div className="banner-aboutus">
          <img
            src="https://img.freepik.com/vector-premium/banner-radio-antiguo-retro_1419-2131.jpg?w=2000"
            alt="quienessomos"
            className="banner-aboutus w-100"
          />
        </div>

        <div className="row">
          <div className="col-sm-3">
            <img src={aboutus1} className="img-responsive img-aboutus1" />
          </div>
          <div className="col-sm-6 text-aboutus">
            <h1>Radio</h1>
            <p>
              Radio Eclipse, ubicada en Av. O`Higgins #208 con Lo Bascuñán,
              Quilicura, cuenta con una trayectoria de 6 años en el rubro
              radial, y con más de 10.000 auditores diariamente, llegamos a toda
              la comuna y sus alrededores, y gracias a nuestra señal online nos
              puede escuchar todo el mundo. .
            </p>
            <p>
              Don Richard Acuña Briceño es el fundador y creador de Radio
              Eclipse, con el propósito de ayudar a la comunidad Quilicurana con
              más información, entretención y alegría, la cual es entregada día
              a día por medio de nuestro dial 107.7FM. Hoy por hoy estamos
              presente en Bingos de beneficencia, eventos y en obras caritativas
              para nuestra comuna, lo cual nos deja orgullosos de ser un aporte
              para nuestra comuna y ser la voz del pueblo, la voz de Quilicura.{" "}
            </p>
          </div>
          <div className="col-sm-3">
            <img src={aboutus2} className="img-responsive img-aboutus2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SobreNosotros;
