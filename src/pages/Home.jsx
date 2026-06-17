import { useState } from 'react'
import MovieCard from '../components/MovieCard'

function Home({ catalogo, excluirItem, favoritarItem }) {
  const [busca, setBusca] = useState('')
  const [filtro, setFiltro] = useState('Todos')

  const listaFiltrada = catalogo.filter((item) => {
    const buscaTitulo = item.titulo.toLowerCase().includes(busca.toLowerCase())
    const filtroTipo = filtro === 'Todos' || item.tipo === filtro

    return buscaTitulo && filtroTipo
  })

  return (
    <main className="container">
      <section className="intro">
        <h2>Meus Filmes e Séries</h2>
        <p>Cadastre, pesquise e organize seus filmes e séries favoritos.</p>
      </section>

      <section className="filtros">
        <input
          type="text"
          placeholder="Pesquisar por título..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />

        <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
          <option>Todos</option>
          <option>Filme</option>
          <option>Série</option>
        </select>
      </section>

      <section className="grid">
        {listaFiltrada.length === 0 ? (
          <p>Nenhum filme ou série cadastrado.</p>
        ) : (
          listaFiltrada.map((item) => (
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

export default Home