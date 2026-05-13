function ProjectSection() {
  return (
    <section id="proyecto" className="container section-spacing project-section">
      <h2 className="section-title">📌 Acerca del proyecto</h2>

      <div className="row g-4">
        <div className="col-12 col-lg-4">
          <div className="project-card">
            <h3>Objetivo</h3>
            <p>
              RickDex permite buscar personajes de Rick and Morty desde una API
              pública y administrar una colección personalizada de personajes
              favoritos.
            </p>
          </div>
        </div>

        <div className="col-12 col-lg-4">
          <div className="project-card">
            <h3>Funcionalidades</h3>
            <p>
              La aplicación permite buscar personajes, aplicar filtros,
              agregar favoritos, editar datos personalizados, eliminar registros
              y guardar la información en Local Storage.
            </p>
          </div>
        </div>

        <div className="col-12 col-lg-4">
          <div className="project-card">
            <h3>Tecnologías</h3>
            <p>
              Proyecto desarrollado con React, Vite, Bootstrap 5, JavaScript,
              consumo de API pública, componentes reutilizables y persistencia
              local.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;