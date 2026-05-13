const API_BASE_URL = "https://rickandmortyapi.com/api/character";

export const obtenerNombresPersonajes = async () => {
  let url = API_BASE_URL;
  const nombres = [];

  while (url) {
    const respuesta = await fetch(url);

    if (!respuesta.ok) {
      throw new Error("No se pudieron cargar los nombres");
    }

    const datos = await respuesta.json();

    datos.results.forEach((personaje) => {
      nombres.push(personaje.name);
    });

    url = datos.info.next;
  }

  return [...new Set(nombres)].sort();
};

export const buscarPersonajesApi = async (filters) => {
  const parametros = new URLSearchParams();

  if (filters.name.trim() !== "") {
    parametros.append("name", filters.name.trim());
  }

  if (filters.status !== "") {
    parametros.append("status", filters.status);
  }

  if (filters.gender !== "") {
    parametros.append("gender", filters.gender);
  }

  let url = parametros.toString()
    ? `${API_BASE_URL}/?${parametros.toString()}`
    : API_BASE_URL;

  const personajesEncontrados = [];

  while (url) {
    const respuesta = await fetch(url);

    if (respuesta.status === 404) {
      return [];
    }

    if (!respuesta.ok) {
      throw new Error("No se pudo conectar con la API.");
    }

    const datos = await respuesta.json();

    personajesEncontrados.push(...datos.results);

    url = datos.info.next;
  }

  return personajesEncontrados;
};