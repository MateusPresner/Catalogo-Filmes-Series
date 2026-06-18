import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddMovie({ adicionarItem }) {
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [tipo, setTipo] = useState('Filme')
  const [genero, setGenero] = useState('')
  const [ano, setAno] = useState('')
  const [nota, setNota] = useState('')
  const [sinopse, setSinopse] = useState('')
  const [imagem, setImagem] = useState('')
  const [mensagem, setMensagem] = useState('')

  async function buscarSugestao() {
    if (titulo.trim() === '') {
      setMensagem('Digite um título para buscar informações.')
      return
    }

    try {
      const resposta = await fetch(`https://api.tvmaze.com/search/shows?q=${titulo}`)
      const dados = await resposta.json()

      if (dados.length > 0) {
        const serie = dados[0].show

        setTitulo(serie.name || titulo)
        setTipo('Série')
        setGenero(serie.genres?.join(', ') || '')
        setAno(serie.premiered ? serie.premiered.substring(0, 4) : '')
        setNota(serie.rating?.average || '')
        setImagem(serie.image?.original || serie.image?.medium || '') 

        setSinopse(
          serie.summary
            ? serie.summary.replace(/<[^>]*>/g, '')
            : 'Sinopse não encontrada.'
        )

        setMensagem('Informações encontradas pela API.')
      } else {
        setMensagem('Nenhuma informação encontrada.')
      }
    } catch {
      setMensagem('Erro ao buscar informações externas.')
    }
  }

  function salvarItem(e) {
    e.preventDefault()

    if (!titulo || !genero || !ano || !nota || !sinopse) {
      setMensagem('Preencha todos os campos.')
      return
    }

    if (nota < 0 || nota > 10) {
      setMensagem('A nota deve estar entre 0 e 10.')
      return
    }

     const novoItem = {
     id: Date.now(),
     titulo,
     imagem,
     tipo,
     genero,
     ano,
     nota,
     sinopse, 
     favorito: false
    }

    adicionarItem(novoItem)
    navigate('/')
  }

  return (
    <main className="container">
      <section className="form-area">
        <h2>Adicionar Filme ou Série</h2>

        <form onSubmit={salvarItem}>
          <label>Título</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Ex: Stranger Things"
          />
          <label>URL da Imagem</label>
          <input
            type="text"
            placeholder="Cole a URL da capa ou pôster"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
          />
          <button type="button" onClick={buscarSugestao} className="btn-api">
            Buscar informações pela API
          </button>

          <label>Tipo</label>
          <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option>Filme</option>
            <option>Série</option>
          </select>

          <label>Gênero</label>
          <input
            type="text"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            placeholder="Ex: Ação, Drama, Comédia"
          />

          <label>Ano</label>
          <input
            type="number"
            value={ano}
            onChange={(e) => setAno(e.target.value)}
            placeholder="Ex: 2024"
          />

          <label>Nota</label>
          <input
            type="number"
            value={nota}
            onChange={(e) => setNota(e.target.value)}
            placeholder="0 a 10"
            min="0"
            max="10"
          />

          <label>Sinopse</label>
          <textarea
            value={sinopse}
            onChange={(e) => setSinopse(e.target.value)}
            placeholder="Escreva uma breve descrição"
          ></textarea>

          {mensagem && <p className="mensagem">{mensagem}</p>}

          <button type="submit" className="btn-salvar">
            Salvar no Catálogo
          </button>
        </form>
      </section>
    </main>
  )
}

export default AddMovie