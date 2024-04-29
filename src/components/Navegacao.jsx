import React from 'react';
import Inicio from './Inicio.jsx';
import Sobre from './Sobre.jsx';
import Projetos from "./Projetos.jsx"
import * as S from './Style.jsx' 

import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Navegacao() {
  return (
    <>
        <BrowserRouter>
<S.Header>   
  
<div><S.H2>Rebeca Andrade</S.H2></div>

    <S.Nav>
        <S.Lista>
        <S.Li> <Link to="/"> Inicio </Link>  </S.Li>
        <S.Li> <Link to="/Sobre"> Sobre </Link>   </S.Li>
        <S.Li> <Link to="/Projetos"> Projetos </Link>  </S.Li>
                   
        </S.Lista>
    </S.Nav>
    </S.Header>
   <Routes>

      <Route path="/" element={<Inicio/>} />
      <Route path="Sobre" element={<Sobre/>} />
      <Route path="Projetos" element={<Projetos/>} />

   </Routes>


    </BrowserRouter>
    </>

  );
}

export default Navegacao;