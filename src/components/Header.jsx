import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #111827, #1e3a8a);
  color: white;
  padding: 28px 20px;
  text-align: center;
`

const Title = styled.h1`
  margin: 0 0 18px;
  font-size: 36px;
`

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
`

const NavLink = styled(Link)`
  color: white;
  background-color: rgba(255, 255, 255, 0.15);
  text-decoration: none;
  padding: 10px 18px;
  border-radius: 10px;
  transition: 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
`

function Header() {
  return (
    <HeaderContainer>
      <Title>Catálogo de Filmes e Séries</Title>

      <Nav>
        <NavLink to="/">Início</NavLink>
        <NavLink to="/adicionar">Adicionar</NavLink>
        <NavLink to="/favoritos">Favoritos</NavLink>
      </Nav>
    </HeaderContainer>
  )
}

export default Header