function FavoriteCard({
  favorite,
  logoRick,
  mostrarCalificacion,
  abrirModalEditar,
  eliminarFavorito,
}) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card favorite-card">
        <img
          src={favorite.image}
          className="card-img-top"
          alt={favorite.name}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.src = logoRick;
            event.currentTarget.alt = "Imagen no disponible";
          }}
        />

        <div className="card-body">
          <h3>{favorite.name}</h3>

          <p className="mb-1">
            <strong>Estado:</strong> {favorite.status}
          </p>

          <p className="mb-1">
            <strong>Especie:</strong> {favorite.species}
          </p>

          <p className="mb-1">
            <strong>Categoría:</strong>{" "}
            {favorite.category || "Sin categoría"}
          </p>

          <p className="mb-1">
            <strong>Calificación:</strong>{" "}
            {mostrarCalificacion(favorite.rating)}
          </p>

          <p className="mb-3">
            <strong>Nota:</strong> {favorite.note || "Sin nota personal"}
          </p>

          <div className="d-flex gap-2">

            <button
              type="button"
              className="btn btn-warning w-50"
              onClick={() => abrirModalEditar(favorite)}
            >
              Editar
            </button>

            <button
              type="button"
              className="btn btn-danger w-50"
              onClick={() => eliminarFavorito(favorite.id)}
            >
              Eliminar
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default FavoriteCard;