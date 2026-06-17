import MovieCard from '../components/MovieCard'

function Favorites({ catalogo, excluirItem, favoritarItem }) {
  const favoritos = catalogo.filter((item) => item.favorito)

  return (
    <main className="container">
      <section className="intro">
        <h2>Favoritos</h2>
        <p>Lista de filmes e séries marcados como favoritos.</p>
      </section>

      <section className="grid">
        {favoritos.length === 0 ? (
          <p>Nenhum favorito adicionado ainda.</p>
        ) : (
          favoritos.map((item) => (
            <MovieCard
              key={item.id}
              item={item}
              excluirItem={excluirItem}
              favoritarItem={favoritarItem}
            />
          ))
        )}
      </section>
    </main>
  )
}

export default Favorites