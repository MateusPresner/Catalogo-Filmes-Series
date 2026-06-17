import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import AddMovie from './pages/AddMovie'
import Favorites from './pages/Favorites'

function App() {
  const [catalogo, setCatalogo] = useState(() => {
  const dadosSalvos = localStorage.getItem('catalogo')
  return dadosSalvos ? JSON.parse(dadosSalvos) : []
})

  useEffect(() => {
    localStorage.setItem('catalogo', JSON.stringify(catalogo))
  }, [catalogo])

  function adicionarItem(item) {
    setCatalogo([...catalogo, item])
  }

  function excluirItem(id) {
    setCatalogo(catalogo.filter((item) => item.id !== id))
  }

  function favoritarItem(id) {
    setCatalogo(
      catalogo.map((item) =>
        item.id === id ? { ...item, favorito: !item.favorito } : item
      )
    )
  }

  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              catalogo={catalogo}
              excluirItem={excluirItem}
              favoritarItem={favoritarItem}
            />
          }
        />

        <Route
          path="/adicionar"
          element={<AddMovie adicionarItem={adicionarItem} />}
        />

        <Route
          path="/favoritos"
          element={
            <Favorites
              catalogo={catalogo}
              excluirItem={excluirItem}
              favoritarItem={favoritarItem}
            />
          }
        />
      </Routes>
    </>
  )
}

export default App