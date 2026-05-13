function Pagination({
  startIndex,
  endIndex,
  totalItems,
  currentPage,
  totalPages,
  irAPagina,
  label = "personajes encontrados",
}) {
  return (
    <div className="pagination-container">
      <p>
        Mostrando {startIndex + 1} - {Math.min(endIndex, totalItems)} de{" "}
        {totalItems} {label}.
      </p>

      <div className="pagination-buttons">
        <button
          type="button"
          className="btn btn-rickdex-outline"
          disabled={currentPage === 1}
          onClick={() => irAPagina(1)}
        >
          Primera
        </button>

        <button
          type="button"
          className="btn btn-rickdex-outline"
          disabled={currentPage === 1}
          onClick={() => irAPagina(currentPage - 1)}
        >
          ← Anterior
        </button>

        <span className="pagination-current">
          Página {currentPage} de {totalPages}
        </span>

        <button
          type="button"
          className="btn btn-rickdex-outline"
          disabled={currentPage === totalPages}
          onClick={() => irAPagina(currentPage + 1)}
        >
          Siguiente →
        </button>

        <button
          type="button"
          className="btn btn-rickdex-outline"
          disabled={currentPage === totalPages}
          onClick={() => irAPagina(totalPages)}
        >
          Última
        </button>
      </div>
    </div>
  );
}

export default Pagination;