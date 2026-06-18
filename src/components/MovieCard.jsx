import styled from 'styled-components'

const Card = styled.article`
  background-color: white;
  border-radius: 14px;
  padding: 18px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.10);
  transition: 0.3s;
  max-width: 420px;

  &:hover {
    transform: translateY(-4px);
  }
`

const CardTopo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Tipo = styled.span`
  background-color: #2563eb;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
`

const Favorito = styled.button`
  background: none;
  border: none;
  color: #f59e0b;
  font-size: 28px;
  cursor: pointer;
`

const Poster = styled.img`
  width: 180px;
  height: 260px;
  object-fit: cover;
  border-radius: 10px;
  display: block;
  margin: 15px auto;
`

const Titulo = styled.h3`
  font-size: 23px;
  margin: 12px 0;
`

const Sinopse = styled.p`
  color: #555;
  line-height: 1.5;

  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const BotaoExcluir = styled.button`
  background-color: #dc2626;
  color: white;
  border: none;
  padding: 10px 14px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #b91c1c;
  }
`

function MovieCard({ item, excluirItem, favoritarItem }) {
  return (
    <Card>
      <CardTopo>
        <Tipo>{item.tipo}</Tipo>

        <Favorito onClick={() => favoritarItem(item.id)}>
          {item.favorito ? '★' : '☆'}
        </Favorito>
      </CardTopo>

      {item.imagem && (
        <Poster src={item.imagem} alt={item.titulo} />
      )}

      <Titulo>{item.titulo}</Titulo>

      <p><strong>Gênero:</strong> {item.genero}</p>
      <p><strong>Ano:</strong> {item.ano}</p>
      <p><strong>Nota:</strong> {item.nota}</p>

      <p><strong>Sinopse:</strong></p>

      <Sinopse title={item.sinopse}>
        {item.sinopse}
      </Sinopse>

      <BotaoExcluir onClick={() => excluirItem(item.id)}>
        Excluir
      </BotaoExcluir>
    </Card>
  )
}

export default MovieCard