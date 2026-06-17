import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <h1>Catálogo de Filmes e Séries</h1>

      <nav>
        <Link to="/">Início</Link>
        <Link to="/adicionar">Adicionar</Link>
        <Link to="/favoritos">Favoritos</Link>
      </nav>
    </header>
  )
}

export default Header