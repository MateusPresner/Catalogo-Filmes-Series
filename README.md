# 🎬 Catálogo de Filmes e Séries

## 📖 Descrição

O Catálogo de Filmes e Séries é uma aplicação web desenvolvida em React que permite cadastrar, organizar e gerenciar informações sobre filmes e séries favoritas.

O sistema foi criado com o objetivo de aplicar conceitos fundamentais de desenvolvimento Front-End, incluindo componentização, gerenciamento de estado, navegação entre páginas, consumo de APIs, estilização moderna e armazenamento local de dados.

---

## 🎯 Objetivos do Projeto

* Desenvolver uma aplicação utilizando React.
* Aplicar conceitos de componentes reutilizáveis.
* Utilizar React Router para navegação entre páginas.
* Implementar armazenamento local utilizando LocalStorage.
* Consumir dados de uma API externa utilizando Fetch API.
* Utilizar Styled Components para estilização.
* Criar uma interface simples, intuitiva e responsiva.

---

## 🚀 Funcionalidades

### 📌 Cadastro de Filmes e Séries

Permite cadastrar informações como:

* Título
* Tipo (Filme ou Série)
* Gênero
* Ano de lançamento
* Nota
* Sinopse
* URL personalizada para imagem

### 🔎 Pesquisa

O usuário pode pesquisar filmes e séries cadastrados através do campo de busca.

### ⭐ Favoritos

É possível marcar filmes e séries como favoritos para facilitar a organização do catálogo.

### 🗑 Exclusão de Registros

O sistema permite remover filmes e séries cadastrados.

### 🎭 Filtro por Categoria

Permite visualizar apenas filmes, apenas séries ou todos os registros cadastrados.

### 🌐 Integração com API

A aplicação possui integração com a API TVMaze utilizando Fetch API, permitindo buscar automaticamente:

* Nome do título
* Gêneros
* Ano de lançamento
* Nota
* Sinopse
* Pôster

### 🖼 Exibição de Pôsteres

O sistema exibe automaticamente imagens dos filmes e séries através da API, além de permitir o cadastro de uma URL personalizada para imagem.

### 📝 Visualização Inteligente da Sinopse

As sinopses são exibidas de forma resumida para manter a organização dos cards. Ao passar o mouse sobre o texto, é possível visualizar a descrição completa.

### 💾 Armazenamento Local

Todos os dados são armazenados utilizando LocalStorage, permitindo que as informações permaneçam salvas mesmo após atualizar ou fechar o navegador.

---

## 🛠 Tecnologias Utilizadas

* React
* React Router DOM
* Styled Components
* JavaScript (ES6+)
* HTML5
* CSS3
* Vite
* Fetch API
* LocalStorage
* Git
* GitHub

---

## 📂 Estrutura do Projeto

```text
catalogo-filmes-series
│
├── public
│
├── src
│   ├── components
│   │   ├── Header.jsx
│   │   └── MovieCard.jsx
│   │
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── AddMovie.jsx
│   │   └── Favorites.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/MateusPresner/Catalogo-Filmes-Series.git
```

### 2. Acessar a pasta do projeto

```bash
cd Catalogo-Filmes-Series
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar o projeto

```bash
npm run dev
```

### 5. Abrir no navegador

```text
http://localhost:5173
```

---

## 📸 Telas do Sistema

O sistema possui as seguintes páginas:

### 🏠 Página Inicial

Exibe todos os filmes e séries cadastrados, incluindo busca, filtros e gerenciamento dos registros.

### ➕ Página de Cadastro

Permite adicionar novos filmes e séries manualmente ou preencher automaticamente os dados através da API.

### ⭐ Página de Favoritos

Lista apenas os itens marcados como favoritos pelo usuário.

---

## 📚 Conceitos Aplicados

Durante o desenvolvimento foram utilizados os seguintes conceitos:

* Componentização
* Props
* useState
* useEffect
* React Router
* LocalStorage
* Fetch API
* Styled Components
* Consumo de API REST
* Manipulação de Eventos
* Persistência de Dados
* Responsividade
* Organização de Código

---

## 🎓 Objetivo Acadêmico

Este projeto foi desenvolvido como atividade da disciplina de Desenvolvimento Front-End, com a finalidade de praticar conceitos modernos de desenvolvimento web utilizando React.

---

## 👨‍💻 Autores

Mateus Henrique Barros Presner

Matheus Borges de Ávila

Curso: Análise e Desenvolvimento de Sistemas

UniCesumar – Ponta Grossa

Ano: 2026

---

## 📄 Licença

Projeto desenvolvido exclusivamente para fins acadêmicos.

## 🌐 Acesso ao Sistema

Sistema disponível online:

https://catalogo-filmes-series.vercel.app/





