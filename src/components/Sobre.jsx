import React from "react";
import * as S from "./Style"
import HTML from "./ImagensPortfolio/HTML.png"
import CSS from "./ImagensPortfolio/CSS.png"
import JS from "./ImagensPortfolio/JAVASCRIPT.png"
import ReactImg from "./ImagensPortfolio/React.png"
import OlabirintoDoFauno from "./ImagensPortfolio/Olabirinto.jpeg"
import Draw from "./ImagensPortfolio/Draw.jpeg"
import Jujuba from "./ImagensPortfolio/Jujuba.jpeg"
import PequenoPrincipe from "./ImagensPortfolio/PequenoPrincipe.jpeg"
import Arvore from "./ImagensPortfolio/Arvore.jpeg"
//import VNW from "./ImagensPortfolio/VNW.png"

function Sobre(){
return(
    <main>
              <h2>Linguagens</h2>

     <S.Sectionsobre>
        <div>
            <img src={HTML} alt="logo do HTML" />
            <h3>HTML</h3>
         </div>

         <div>
            <img src={CSS} alt="logo do CSS" />
            <h3>CSS</h3>
         </div>

         <div>
            <img src={JS} alt="logo do JAVASCRIPT" />
            <h3>JAVASCRIPT</h3>
         </div>

         <div>
            <img src={ReactImg} alt="logo do React" />
            <h3>REACT</h3>
         </div>
        </S.Sectionsobre> 

         
        <h2>Profissional</h2>

        <section>
        <h3>Sei Ilustrar</h3>

          <S.Article>
          <figure>
          <img src={OlabirintoDoFauno} alt="" />
          <figcaption> Ilustração O Labirinto do Fauno </figcaption>
          </figure>

         <figure>         
               <img src={Draw} alt="" />
               <figcaption> Ilustração DrawFace</figcaption>
       </figure>   

         <figure>           
             <img src={Jujuba} alt="" />
             <figcaption> Ilustração Princesa Jujuba</figcaption>
         </figure>

         <figure>            
            <img src={PequenoPrincipe} alt="" />
            <figcaption> Ilustração O Pequeno Principe</figcaption>
       </figure>

         <figure> 
             <img src={Arvore} alt="" />
             <figcaption> Ilustração Árvore</figcaption>
         </figure>      
     
           
          </S.Article>

        </section>

    </main>
)

}

export default Sobre