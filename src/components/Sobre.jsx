import React from "react";
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
     <section>
        <h2>Linguagens</h2>
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
        </section>   

        <section>
          <h2>Profissional</h2>
          <div>
            <h3>Sei tocar teclado</h3>
            <img src="" alt="" />
          </div>
          <div>
            <h3>Sei Ilustrar</h3>
            <div>
            <img src={OlabirintoDoFauno} alt="" />
            <img src={Draw} alt="" />
            <img src={Jujuba} alt="" />
            <img src={PequenoPrincipe} alt="" />
            <img src={Arvore} alt="" />
            </div>
          </div>

        </section>

    </main>
)

}

export default Sobre