import CharacterCard from "./CharacterCard";
import Pagination from "./Pagination";
import EmptyState from "./EmptyState";

function CharacterSection({
  hasSearched,
  loading,
  apiError,
  characters,
  personajesVisibles,
  estaEnFavoritos,
  logoRick,
  abrirModalAgregar,
  startIndex,
  endIndex,
  currentPage,
  totalPages,
  irAPagina,
}) {
  return (
    <section id="personajes" className="container section-spacing">
      <h2 className="section-title">👽 Personajes encontrados</h2>

      {!hasSearched && (
        <EmptyState message="Todavía no hay personajes cargados. Usa el buscador para consultar personajes desde la API." />
      )}

      {apiError && (
        <div className="alert alert-warning" role="alert">
          {apiError}
        </div>
      )}

      {hasSearched && !loading && characters.length === 0 && !apiError && (
        <EmptyState message="No hay personajes para mostrar." />
      )}

      <div className="row g-4">
        {personajesVisibles.map((character) => {
          const agregado = estaEnFavoritos(character.id);

          return (
            <CharacterCard
              key={character.id}
              character={character}
              agregado={agregado}
              logoRick={logoRick}
              abrirModalAgregar={abrirModalAgregar}
            />
          );
        })}
      </div>

      {hasSearched && characters.length > 0 && (
        <Pagination
          startIndex={startIndex}
          endIndex={endIndex}
          totalItems={characters.length}
          currentPage={currentPage}
          totalPages={totalPages}
          irAPagina={irAPagina}
        />
      )}
    </section>
  );
}

export default CharacterSection;