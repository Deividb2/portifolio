import React from 'react'
import './index.css'
import Cabecalho from './assets/componentes/Cabecalho'
import Sobre from './assets/componentes/Sobre'
import Projetos from './assets/componentes/Projetos'
import Rodape from './assets/componentes/Rodape'

export default function App() {

  return (
    <>
      <Cabecalho />
      <Sobre />
      <Projetos />
      <Rodape />
    </>
  )
}