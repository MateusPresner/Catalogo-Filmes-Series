function MovieCard({ item, excluirItem, favoritarItem }) {
  return (
    <article className="card">
      <div className="card-topo">
        <span className="tipo">{item.tipo}</span>

        <button
          className="favorito"
          onClick={() => favoritarItem(item.id)}
        >
          {item.favorito ? '★' : '☆'}
        </button>
      </div>

      <h3>{item.titulo}</h3>

      <p><strong>Gênero:</strong> {item.genero}</p>
      <p><strong>Ano:</strong> {item.ano}</p>
      <p><strong>Nota:</strong> {item.nota}</p>
      <p>{item.sinopse}</p>

      <button
        className="btn-excluir"
        onClick={() => excluirItem(item.id)}
      >
        Excluir
      </button>
    </article>
  )
}

export default MovieCard