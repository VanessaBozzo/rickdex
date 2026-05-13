function CharacterCard({ character, agregado, logoRick, abrirModalAgregar }) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card character-card">
        <img
          src={character.image}
          className="card-img-top"
          alt={character.name}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.src = logoRick;
            event.currentTarget.alt = "Imagen no disponible";
          }}
        />

        <div className="card-body">
          <h3>{character.name}</h3>

          <span
            className={`badge mb-2 ${
              character.status === "Alive"
                ? "bg-success"
                : character.status === "Dead"
                ? "bg-danger"
                : "bg-secondary"
            }`}
          >
            {character.status}
          </span>

          <p className="mb-1">
            <strong>Especie:</strong> {character.species}
          </p>

          <p className="mb-1">
            <strong>Género:</strong> {character.gender}
          </p>

          <p className="mb-3">
            <strong>Origen:</strong> {character.origin?.name}
          </p>

          <button
            type="button"
            className={`btn w-100 ${
              agregado ? "btn-secondary" : "btn-rickdex-primary"
            }`}
            disabled={agregado}
            onClick={() => abrirModalAgregar(character)}
          >
            {agregado ? "Ya agregado" : "Agregar a favoritos"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;