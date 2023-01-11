import React from "react";
import imguno from "../img/1.jpeg";
import imgdos from "../img/2.jpg";
import imgtres from "../img/33.jpg";
import "../styles/Home.css";

import imgpublicidad from "../img/3.jpeg";
import publicidaduno from "../img/publicidad1.jpg";
import publicidaddos from "../img/publicidad2.jpg";
import Conductores from "../Views/Conductores";
import BannerPrincipal from "./BannerPrincipal";

const Home = () => {
  return (
    <>
      {/*  banner 
        Publicidad 
        Locutores
        page inicio facebook
        testimonios
        fin home  */}
      <BannerPrincipal />
      <div className="main">
        <section className="banner-radio">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={imguno}
                  className="d-block img-responsive img-carousel"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={imgdos}
                  className="d-block img-responsive img-carousel"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={imgtres}
                  className="d-block img-responsive img-carousel"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Anterior</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Siguiente</span>
            </button>
          </div>
        </section>

        <br></br>

        <section className="programas">
          <div className="programs-section">
            <h1>Programas</h1>
          </div>
        </section>

        <section className="publicidad-empresas">
          <div className="row">
            <div className="col-sm-6">
              <img
                src={publicidaduno}
                className="img-empresas img-responsive w-100"
              />
            </div>
            <div className="col-sm-6">
              <img
                src={publicidaddos}
                className="img-empresas img-responsive w-100"
              />
            </div>
          </div>
        </section>
        <section className="homepage-facebook">
          <div className="row">
            <div className="col-sm-6">
              <iframe
                id="videohomefacebook"
                src="https://www.facebook.com/profile.php?id=100063747198400"
                width="600px"
                height="200px"
                className="video-facebook"
              ></iframe>
            </div>
            <div className="col-sm-6">
              <h3>Bienvenido a la página oficial de radio Eclipse FM 107.7</h3>
              <p>
                Radio Eclipse, ubicada en Av. O`Higgins #208 con Lo Bascuñán,
                Quilicura, cuenta con una trayectoria de 6 años en el rubro
                radial, y con más de 10.000 auditores diariamente, llegamos a
                toda la comuna y sus alrededores, y gracias a nuestra señal
                online nos puede escuchar todo el mundo. . . Don Richard Acuña
                Briceño es el fundador y creador de Radio Eclipse, con el
                propósito de ayudar a la comunidad Quilicurana con más
                información, entretención y alegría, la cual es entregada día a
                día por medio de nuestro dial 107.7FM. Hoy por hoy estamos
                presente en Bingos de beneficencia, eventos y en obras
                caritativas...{" "}
              </p>
            </div>
          </div>
        </section>

        <section className="banner-extra">
          <div
            id="carouselExampleControls1"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://images.pexels.com/photos/302871/pexels-photo-302871.jpeg"
                  className="d-block img-extra"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://images.pexels.com/photos/744321/pexels-photo-744321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="d-block img-extra"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://images.pexels.com/photos/2209315/pexels-photo-2209315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="d-block img-extra"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls1"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Anterior</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls1"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Siguiente</span>
            </button>
          </div>
        </section>

        <section className="testimonios-section">
          <div className="testimonios">
            <h1>testimonios</h1>
          </div>
        </section>

        <section className="publicidad">
          <img src={imgpublicidad} className="img-publicidad img-responsive" />
        </section>

        <h4>hahahah</h4>
      </div>
    </>
  );
};

export default Home;
