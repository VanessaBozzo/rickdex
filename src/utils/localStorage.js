const FAVORITES_KEY = "rickdex-favoritos";
const CATEGORIES_KEY = "rickdex-categorias";

export const obtenerFavoritos = () => {
  const favoritosGuardados = localStorage.getItem(FAVORITES_KEY);
  return favoritosGuardados ? JSON.parse(favoritosGuardados) : [];
};

export const guardarFavoritos = (favoritos) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoritos));
};

export const obtenerCategorias = () => {
  const categoriasGuardadas = localStorage.getItem(CATEGORIES_KEY);
  return categoriasGuardadas ? JSON.parse(categoriasGuardadas) : [];
};

export const guardarCategorias = (categorias) => {
  localStorage.setItem(CATEGORIES_KEY, JSON.stringify(categorias));
};