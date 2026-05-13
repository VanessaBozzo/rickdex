import FavoriteCard from "./FavoriteCard";
import EmptyState from "./EmptyState";
import Pagination from "./Pagination";

function FavoritesSection({
  favorites,
  favoritosVisibles,
  logoRick,
  mostrarCalificacion,
  abrirModalEditar,
  eliminarFavorito,
  startFavoriteIndex,
  endFavoriteIndex,
  currentFavoritesPage,
  totalFavoritesPages,
  irAPaginaFavoritos,
}) {
  return (
    <section id="favoritos" className="container section-spacing favoritos-section">
      <h2 className="section-title">⭐ Mis personajes favoritos</h2>

      {favorites.length === 0 && (
        <EmptyState message="Todavía no tienes personajes favoritos. Agrega uno desde la sección de personajes." />
      )}

      <div className="row g-4">
        {favoritosVisibles.map((favorite) => (
          <FavoriteCard
            key={favorite.id}
            favorite={favorite}
            logoRick={logoRick}
            mostrarCalificacion={mostrarCalificacion}
            abrirModalEditar={abrirModalEditar}
            eliminarFavorito={eliminarFavorito}
          />
        ))}
      </div>

      {favorites.length > 12 && (
        <Pagination
          startIndex={startFavoriteIndex}
          endIndex={endFavoriteIndex}
          totalItems={favorites.length}
          currentPage={currentFavoritesPage}
          totalPages={totalFavoritesPages}
          irAPagina={irAPaginaFavoritos}
          label="personajes favoritos"
        />
      )}
    </section>
  );
}

export default FavoritesSection;