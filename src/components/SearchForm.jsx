function SearchForm({
  filters,
  characterNames,
  loading,
  actualizarFiltro,
  buscarPersonajes,
  limpiarBusqueda,
}) {
  return (
    <section id="buscar" className="container search-section">
      <div className="card custom-card">
        <div className="card-body">
          <h2 className="section-title">🔎 Buscar personaje</h2>

          <form onSubmit={buscarPersonajes}>
            <div className="row g-3 align-items-end">
              <div className="col-md-4">
                <label className="form-label">Nombre</label>

                <input
                  type="text"
                  className="form-control"
                  name="name"
                  list="listaPersonajes"
                  placeholder="Ej: Rick Sanchez"
                  value={filters.name}
                  onChange={actualizarFiltro}
                />

                <datalist id="listaPersonajes">
                  {characterNames.map((nombre) => (
                    <option key={nombre} value={nombre} />
                  ))}
                </datalist>
              </div>

              <div className="col-md-3">
                <label className="form-label">Estado</label>

                <select
                  className="form-select"
                  name="status"
                  value={filters.status}
                  onChange={actualizarFiltro}
                >
                  <option value="">Todos</option>
                  <option value="alive">Alive</option>
                  <option value="dead">Dead</option>
                  <option value="unknown">Unknown</option>
                </select>
              </div>

              <div className="col-md-3">
                <label className="form-label">Género</label>

                <select
                  className="form-select"
                  name="gender"
                  value={filters.gender}
                  onChange={actualizarFiltro}
                >
                  <option value="">Todos</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="genderless">Genderless</option>
                  <option value="unknown">Unknown</option>
                </select>
              </div>

              <div className="col-md-2">
                <button
                  type="submit"
                  className="btn btn-rickdex-primary w-100"
                  disabled={loading}
                >
                  {loading ? "Buscando..." : "Buscar"}
                </button>
              </div>

              <div className="col-12">
                <button
                  type="button"
                  className="btn btn-link text-decoration-none p-0"
                  onClick={limpiarBusqueda}
                >
                  Limpiar búsqueda
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;