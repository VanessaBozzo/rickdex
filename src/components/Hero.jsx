function Hero({ heroImage, portalImage, irASeccion }) {
  return (
    <section
      id="inicio"
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 247, 240, 0.82), rgba(255, 243, 196, 0.88)), url(${heroImage})`,
      }}
    >
      <div className="container hero-content">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <h1>RickDex: Favoritos del Multiverso</h1>

            <p>
              Explora personajes de Rick and Morty desde una API pública y
              administra tus favoritos con notas, categorías y calificaciones
              guardadas en Local Storage.
            </p>

            <div className="d-flex gap-3 flex-wrap hero-buttons">
              <a
                href="#buscar"
                className="btn btn-rickdex-primary"
                onClick={(event) => irASeccion(event, "buscar")}
              >
                Explorar personajes
              </a>

              <a
                href="#favoritos"
                className="btn btn-rickdex-outline"
                onClick={(event) => irASeccion(event, "favoritos")}
              >
                Ver favoritos
              </a>
            </div>
          </div>

          <div className="col-lg-5 text-center">
            <div className="hero-card portal-card">
              <img
                src={portalImage}
                alt="Rick y Morty en portal"
                className="portal-image"
              />

              <h2>Gestor de favoritos</h2>

              <p>
                Agrega personajes, edita sus datos personalizados y evita
                registros duplicados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;