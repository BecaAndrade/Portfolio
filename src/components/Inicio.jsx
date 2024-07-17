import React from "react";
import Rebeca from "./ImagensPortfolio/Rebeca.png"
import Linkedin from "./ImagensPortfolio/linkedin.png"
import Instagram from "./ImagensPortfolio/instagram.png"
import GitHub from "./ImagensPortfolio/github.png"
import * as S from "./Style"

function Inicio(){

return(
    
<S.ContainerInicio>
    <S.Section1>
    <S.Div1>
        <h2>Olá, eu sou </h2>
        <S.Text2>Desenvolvedora Front-End</S.Text2>
    </S.Div1>
<div>
 
 <a href="https://github.com/BecaAndrade" target="_blank">    
    <img src={GitHub} alt="" />
</a>

<a href="https://www.linkedin.com/in/rebecabarceloz/"target="_blank">   
     <img src={Linkedin} alt="" />
</a>

<a href="https://www.instagram.com/becaziando/"target="_blank">   
     <img src={Instagram} alt="" />
</a>

</div>
</S.Section1>
<S.Perfil src={Rebeca} alt=""/>



</S.ContainerInicio>
)

}

export default Inicio