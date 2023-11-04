import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">

        <div className="footer__redes-sociales">
          <h3>Siguenos en nuestras redes sociales</h3>
          <ul>
            <button><a href="https://facebook.com/AppleArgentina">Facebook</a></button>
            <button><a href="https://twitter.com/AppleArgentina">Twitter</a></button>
            <button><a href="https://instagram.com/AppleArg">Instagram</a></button>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <p>&copy; {new Date().getFullYear()} Apple Argentina. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;