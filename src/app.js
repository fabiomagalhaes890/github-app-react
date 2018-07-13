'use strict'

import React from 'react'

const App = () => (
  <div className='app'>
    <div className='search'>
      <input type='search' placeholder='digite o nome do usuario' />
    </div>

    <div className='user-info'>
      <img src='https://avatars1.githubusercontent.com/u/5508109?v=4' />
      <h1>
        <a href='https://github.com/fabiomagalhaes890'>fabiomagalhaes</a>
      </h1>

      <ul>
        <li>repos: 12</li>
        <li>Seguidores: 1</li>
        <li>Seguindo: 4</li>
      </ul>

      <div className='actions'>
        <button>Ver repositórios</button>
        <button>Ver favoritos</button>
      </div>

      <div className='repos'>
        <h2>Repositorios</h2>
        <ul>
          <li><a href='#'>Nome do repositorio</a></li>
        </ul>
      </div>

      <div className='starred'>
        <h2>Favoritos</h2>
        <ul>
          <li><a href='#'>Nome do repositorio</a></li>
        </ul>
      </div>
    </div>
  </div>
)

export default App
