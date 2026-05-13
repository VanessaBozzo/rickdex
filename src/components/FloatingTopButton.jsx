function FloatingTopButton({ desplazarASeccion }) {
  return (
    <button
      type="button"
      className="floating-top-button"
      onClick={() => desplazarASeccion("inicio")}
      aria-label="Volver al inicio de la página"
    >
      ↑ Inicio
    </button>
  );
}

export default FloatingTopButton;