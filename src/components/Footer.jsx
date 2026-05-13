function Footer() {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="mb-0 texto-footer">
        © {anioActual} RickDex - Todos los derechos reservados | 💛 Vanessa
        Bozzo 💛 - Front End - INACAP
      </p>
    </footer>
  );
}

export default Footer;