function Navbar({ logoRick, favoritesCount, irASeccion }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark rickdex-navbar sticky-top">
      <div className="container">
        <a
          className="navbar-brand fw-bold d-flex align-items-center gap-2"
          href="#inicio"
          onClick={(event) => irASeccion(event, "inicio")}
        >
          <img src={logoRick} alt="Logo RickDex" className="navbar-logo" />
          <span>RickDex</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarRickDex"
          aria-controls="navbarRickDex"
          aria-expanded="false"
          aria-label="Abrir menú de navegación"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarRickDex">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#inicio"
                onClick={(event) => irASeccion(event, "inicio")}
              >
                Inicio
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#buscar"
                onClick={(event) => irASeccion(event, "buscar")}
              >
                Buscar personaje
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#personajes"
                onClick={(event) => irASeccion(event, "personajes")}
              >
                Personajes
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#favoritos"
                onClick={(event) => irASeccion(event, "favoritos")}
              >
                Favoritos
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#proyecto"
                onClick={(event) => irASeccion(event, "proyecto")}
              >
                Proyecto
              </a>
            </li>

            <li className="nav-item">
              <span className="badge bg-warning text-dark">
                Favoritos guardados: {favoritesCount}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;