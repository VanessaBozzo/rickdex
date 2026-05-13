import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchForm from "./components/SearchForm";
import CharacterSection from "./components/CharacterSection";
import FavoritesSection from "./components/FavoritesSection";
import FavoriteModal from "./components/FavoriteModal";
import Footer from "./components/Footer";
import FloatingTopButton from "./components/FloatingTopButton";
import ProjectSection from "./components/ProjectSection";

import {
  obtenerNombresPersonajes,
  buscarPersonajesApi,
} from "./services/rickMortyApi";

import {
  obtenerFavoritos,
  guardarFavoritos,
  obtenerCategorias,
  guardarCategorias,
} from "./utils/localStorage";

import { sanitizeText } from "./utils/sanitizeText";

import heroImage from "./assets/img/01.jpg";
import logoRick from "./assets/img/02.png";
import portalImage from "./assets/img/03.jpg";

function App() {
  const [characterNames, setCharacterNames] = useState([]);
  const [characters, setCharacters] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 12;

  const [currentFavoritesPage, setCurrentFavoritesPage] = useState(1);
  const favoritesPerPage = 12;

  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const [filters, setFilters] = useState({
    name: "",
    status: "",
    gender: "",
  });

  const [favorites, setFavorites] = useState(() => obtenerFavoritos());
  const [categories, setCategories] = useState(() => obtenerCategorias());

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [editingFavoriteId, setEditingFavoriteId] = useState(null);

  const [favoriteForm, setFavoriteForm] = useState({
    category: "",
    rating: 0,
    note: "",
  });

  useEffect(() => {
    guardarFavoritos(favorites);
  }, [favorites]);

  useEffect(() => {
    guardarCategorias(categories);
  }, [categories]);

  useEffect(() => {
    const cargarNombresPersonajes = async () => {
      try {
        const nombres = await obtenerNombresPersonajes();
        setCharacterNames(nombres);
      } catch (error) {
        console.error("Error al cargar nombres:", error);
      }
    };

    cargarNombresPersonajes();
  }, []);

  useEffect(() => {
    const totalPaginasFavoritos =
      Math.ceil(favorites.length / favoritesPerPage) || 1;

    if (currentFavoritesPage > totalPaginasFavoritos) {
      setCurrentFavoritesPage(totalPaginasFavoritos);
    }
  }, [favorites.length, currentFavoritesPage]);

  const desplazarASeccion = (idSeccion) => {
    const seccion = document.getElementById(idSeccion);
    const navbar = document.querySelector(".rickdex-navbar");

    if (seccion && navbar) {
      const altoNavbar = navbar.offsetHeight;
      const posicionSeccion =
        seccion.getBoundingClientRect().top + window.scrollY;
      const posicionFinal = posicionSeccion - altoNavbar - 12;

      window.scrollTo({
        top: posicionFinal,
        behavior: "smooth",
      });
    }
  };

  const irASeccion = (event, idSeccion) => {
    event.preventDefault();
    desplazarASeccion(idSeccion);
  };

  const actualizarFiltro = (event) => {
    const { name, value } = event.target;

    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const buscarPersonajes = async (event) => {
    event.preventDefault();

    setHasSearched(true);
    setCurrentPage(1);
    setLoading(true);
    setApiError("");

    try {
      const personajesEncontrados = await buscarPersonajesApi(filters);

      setCharacters(personajesEncontrados);

      if (personajesEncontrados.length === 0) {
        setApiError("No se encontraron personajes con esos filtros.");
        return;
      }

      setTimeout(() => {
        desplazarASeccion("personajes");
      }, 100);
    } catch (error) {
      console.error("Error al buscar personajes:", error);
      setCharacters([]);
      setApiError("Ocurrió un error al cargar los personajes.");
    } finally {
      setLoading(false);
    }
  };

  const limpiarBusqueda = () => {
    setFilters({
      name: "",
      status: "",
      gender: "",
    });

    setCharacters([]);
    setCurrentPage(1);
    setHasSearched(false);
    setApiError("");
  };

  const estaEnFavoritos = (idPersonaje) => {
    return favorites.some((favorito) => favorito.id === idPersonaje);
  };

  const abrirModalAgregar = (character) => {
    if (estaEnFavoritos(character.id)) {
      return;
    }

    setSelectedCharacter(character);
    setEditingFavoriteId(null);

    setFavoriteForm({
      category: "",
      rating: 0,
      note: "",
    });

    setModalOpen(true);
  };

  const abrirModalEditar = (favorite) => {
    setSelectedCharacter(favorite);
    setEditingFavoriteId(favorite.id);

    setFavoriteForm({
      category: favorite.category || "",
      rating: favorite.rating || 0,
      note: favorite.note || "",
    });

    setModalOpen(true);
  };

  const cerrarModal = () => {
    setModalOpen(false);
    setSelectedCharacter(null);
    setEditingFavoriteId(null);

    setFavoriteForm({
      category: "",
      rating: 0,
      note: "",
    });
  };

  const actualizarFormularioFavorito = (event) => {
    const { name, value } = event.target;

    setFavoriteForm({
      ...favoriteForm,
      [name]: value,
    });
  };

  const guardarFavorito = () => {
    if (!selectedCharacter) {
      return;
    }

    const categoriaLimpia = sanitizeText(favoriteForm.category, 30);
    const notaLimpia = sanitizeText(favoriteForm.note, 60);

    if (categoriaLimpia && !categories.includes(categoriaLimpia)) {
      setCategories([...categories, categoriaLimpia]);
    }

    if (editingFavoriteId) {
      const favoritosActualizados = favorites.map((favorito) =>
        favorito.id === editingFavoriteId
          ? {
              ...favorito,
              category: categoriaLimpia,
              rating: favoriteForm.rating,
              note: notaLimpia,
            }
          : favorito
      );

      setFavorites(favoritosActualizados);
    } else {
      const nuevoFavorito = {
        id: selectedCharacter.id,
        name: selectedCharacter.name,
        image: selectedCharacter.image,
        status: selectedCharacter.status,
        species: selectedCharacter.species,
        gender: selectedCharacter.gender,
        origin: selectedCharacter.origin?.name || "Sin información",
        location: selectedCharacter.location?.name || "Sin información",
        category: categoriaLimpia,
        rating: favoriteForm.rating,
        note: notaLimpia,
        addedAt: new Date().toISOString(),
      };

      setFavorites([...favorites, nuevoFavorito]);
    }

    cerrarModal();
  };

  const eliminarFavorito = (idPersonaje) => {
    const confirmar = window.confirm(
      "¿Seguro que deseas eliminar este personaje de favoritos?"
    );

    if (confirmar) {
      const favoritosFiltrados = favorites.filter(
        (favorito) => favorito.id !== idPersonaje
      );

      setFavorites(favoritosFiltrados);
    }
  };

  const mostrarCalificacion = (rating) => {
    if (!rating || rating === 0) {
      return "Sin calificación";
    }

    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  const totalPages = Math.ceil(characters.length / charactersPerPage) || 1;

  const startIndex = (currentPage - 1) * charactersPerPage;
  const endIndex = startIndex + charactersPerPage;

  const personajesVisibles = characters.slice(startIndex, endIndex);

  const totalFavoritesPages =
    Math.ceil(favorites.length / favoritesPerPage) || 1;

  const startFavoriteIndex = (currentFavoritesPage - 1) * favoritesPerPage;
  const endFavoriteIndex = startFavoriteIndex + favoritesPerPage;

  const favoritosVisibles = favorites.slice(
    startFavoriteIndex,
    endFavoriteIndex
  );

  const irAPagina = (pageNumber) => {
    const validPage = Math.min(Math.max(pageNumber, 1), totalPages);

    setCurrentPage(validPage);

    setTimeout(() => {
      desplazarASeccion("personajes");
    }, 100);
  };

  const irAPaginaFavoritos = (pageNumber) => {
    const validPage = Math.min(Math.max(pageNumber, 1), totalFavoritesPages);

    setCurrentFavoritesPage(validPage);

    setTimeout(() => {
      desplazarASeccion("favoritos");
    }, 100);
  };

  return (
    <main className="rickdex-app">
      {/* NAVBAR */}
      <Navbar
        logoRick={logoRick}
        favoritesCount={favorites.length}
        irASeccion={irASeccion}
      />

      {/* HERO */}
      <Hero
        heroImage={heroImage}
        portalImage={portalImage}
        irASeccion={irASeccion}
      />

      {/* BUSCADOR */}
      <SearchForm
        filters={filters}
        characterNames={characterNames}
        loading={loading}
        actualizarFiltro={actualizarFiltro}
        buscarPersonajes={buscarPersonajes}
        limpiarBusqueda={limpiarBusqueda}
      />

      {/* PERSONAJES */}
      <CharacterSection
        hasSearched={hasSearched}
        loading={loading}
        apiError={apiError}
        characters={characters}
        personajesVisibles={personajesVisibles}
        estaEnFavoritos={estaEnFavoritos}
        logoRick={logoRick}
        abrirModalAgregar={abrirModalAgregar}
        startIndex={startIndex}
        endIndex={endIndex}
        currentPage={currentPage}
        totalPages={totalPages}
        irAPagina={irAPagina}
      />

      {/* FAVORITOS */}
      <FavoritesSection
        favorites={favorites}
        favoritosVisibles={favoritosVisibles}
        logoRick={logoRick}
        mostrarCalificacion={mostrarCalificacion}
        abrirModalEditar={abrirModalEditar}
        eliminarFavorito={eliminarFavorito}
        startFavoriteIndex={startFavoriteIndex}
        endFavoriteIndex={endFavoriteIndex}
        currentFavoritesPage={currentFavoritesPage}
        totalFavoritesPages={totalFavoritesPages}
        irAPaginaFavoritos={irAPaginaFavoritos}
      />

      {/* PROYECTO */}
      <ProjectSection />

      {/* FOOTER */}
      <Footer />

      {/* BOTÓN FLOTANTE VOLVER AL INICIO */}
      <FloatingTopButton desplazarASeccion={desplazarASeccion} />

      {/* MODAL FAVORITO */}
      {modalOpen && selectedCharacter && (
        <FavoriteModal
          selectedCharacter={selectedCharacter}
          editingFavoriteId={editingFavoriteId}
          favoriteForm={favoriteForm}
          categories={categories}
          logoRick={logoRick}
          cerrarModal={cerrarModal}
          actualizarFormularioFavorito={actualizarFormularioFavorito}
          setFavoriteForm={setFavoriteForm}
          guardarFavorito={guardarFavorito}
        />
      )}
    </main>
  );
}

export default App;