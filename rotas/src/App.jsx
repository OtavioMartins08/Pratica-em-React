import { useState } from 'react'
import './App.css'
import {link} from 'react-router-dom'

function Sinopse() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav>
      <link to="/listagem">Listagem de Filmes</link>
      <br />
      <link to="Sinopse">Sinopse do filme</link>
    </nav>
    </>
  )
}

export default Sinopse;
