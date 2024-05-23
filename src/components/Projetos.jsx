import React from "react"
import * as S from "./Style"

//importando imagens
import Loja from "./ImagensPortfolio/LOJA.jpeg"
import Cao from "./ImagensPortfolio/Cao.jpeg"
import Cartoon from "./ImagensPortfolio/Cartoon.jpeg"
import TheWitcher from "./ImagensPortfolio/TheWitcher.jpeg"
import Disney from "./ImagensPortfolio/Disney.jpeg"

function Projetos() {

return (
        <S.SectionProjetos>
    
          <S.Projetos>
        <img src={Loja} alt="" />
        <h2>Loja da Beca</h2>
        <h3>HTML, CSS</h3>
        <a href="https://becaandrade.github.io/DesafioLoja/" target="_blank" rel="noopener noreferrer">Visite a Loja</a>
          </S.Projetos>
          
          <S.Projetos>
        <img src={Cao} alt="" />
        <h2>Fantastika</h2>
        <h3>HTML, CSS</h3>
        <a href="https://becaandrade.github.io/DesafioFinal/" target="_blank" rel="noopener noreferrer">Visite o site</a>
          </S.Projetos>

          <S.Projetos>
        <img src={Cartoon} alt="" />
        <h2>Cartoon Network</h2>
        <h3>HTML, CSS E JAVASCRIPT</h3>
        <a href="https://github.com/BecaAndrade/CartoonNetwork" target="_blank" rel="noopener noreferrer">Visite o codigo</a>
          </S.Projetos>

          <S.Projetos>
        <img src={TheWitcher} alt="" />
        <h2>The Witcher</h2>
        <h3>HTML, CSS</h3>
        <a href="https://becaandrade.github.io/TheWitcher/" target="_blank" rel="noopener noreferrer">Visite o site</a>
          </S.Projetos>

          <S.Projetos>
        <img src={Disney} alt="" />
        <h2>Disney</h2>
        <h3>HTML, CSS</h3>
        <a href="https://becaandrade.github.io/DesafioDisney/" target="_blank" rel="noopener noreferrer">Visite o site</a>
          </S.Projetos>

        </S.SectionProjetos>
    );
}


export default Projetos