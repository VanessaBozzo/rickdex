function FavoriteModal({
  selectedCharacter,
  editingFavoriteId,
  favoriteForm,
  categories,
  logoRick,
  cerrarModal,
  actualizarFormularioFavorito,
  setFavoriteForm,
  guardarFavorito,
}) {
  return (
    <div className="modal-backdrop-custom">

      <div
        className="favorite-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="favorite-modal-title"
      >
        <div className="modal-header-custom">
          <h2 id="favorite-modal-title">
            {editingFavoriteId ? "Editar favorito" : "Agregar a favoritos"}
          </h2>

          <button
            type="button"
            className="btn-close"
            aria-label="Cerrar"
            onClick={cerrarModal}
          ></button>
        </div>

        <div className="modal-character-info">
          <img
            src={selectedCharacter.image}
            alt={selectedCharacter.name}
            onError={(event) => {
              event.currentTarget.src = logoRick;
              event.currentTarget.alt = "Imagen no disponible";
            }}
          />

          <div>
            <h3>{selectedCharacter.name}</h3>
            <p>
              {selectedCharacter.species} | {selectedCharacter.status}
            </p>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Categoría</label>

          <input
            type="text"
            className="form-control"
            name="category"
            list="listaCategorias"
            placeholder="Ej: Favorito, Villano, Principal"
            value={favoriteForm.category}
            onChange={actualizarFormularioFavorito}
          />

          <datalist id="listaCategorias">
            {categories.map((category) => (
              <option key={category} value={category} />
            ))}
          </datalist>

          <small className="text-muted">
            Este campo es opcional. Las categorías usadas antes aparecerán como
            sugerencias.
          </small>
        </div>

        <div className="mb-3">
          <label className="form-label d-block">Calificación</label>

          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                className={
                  star <= favoriteForm.rating
                    ? "star-button active"
                    : "star-button"
                }
                onClick={() =>
                  setFavoriteForm({
                    ...favoriteForm,
                    rating: star,
                  })
                }
              >
                ★
              </button>
            ))}

            <button
              type="button"
              className="btn btn-sm btn-outline-secondary ms-2"
              onClick={() =>
                setFavoriteForm({
                  ...favoriteForm,
                  rating: 0,
                })
              }
            >
              Sin calificación
            </button>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Nota personal</label>

          <textarea
            className="form-control"
            name="note"
            rows="3"
            maxLength="60"
            placeholder="Escribe una nota breve..."
            value={favoriteForm.note}
            onChange={actualizarFormularioFavorito}
          ></textarea>

          <small className="text-muted">
            {favoriteForm.note.length}/60 caracteres. Este campo es opcional.
          </small>
        </div>

        <div className="d-flex gap-2 justify-content-end">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={cerrarModal}
          >
            Cancelar
          </button>

          <button
            type="button"
            className="btn btn-rickdex-primary"
            onClick={guardarFavorito}
          >
            {editingFavoriteId ? "Guardar cambios" : "Guardar favorito"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default FavoriteModal;