import React from "react";

const Footer = () => {
  return (
    <>
      {/*  RRSS 
        Programas
        Contacto
        Todos los derechos reservados */}

      <footer>
        <div
          className="d-flex justify-content-center text-center p-2 pt-4"
          style={{
            backgroundColor: "white",
          }}
        >
          <p
            className="footer-copy-paragraph ps-2"
            style={{ color: "#0d6efd" }}
          >
            Radio Eclipse 107.7 FM © 2022. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
