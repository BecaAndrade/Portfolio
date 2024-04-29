import React from "react";
import {createGlobalStyle} from "styled-components"
import Navegação from "./components/Navegacao";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: "Days One", sans-serif;
  font-weight: 400;
  font-style: normal;

}
`


function App (){
  return(
<>
<GlobalStyle/>
<Navegação/>
</>

  )
}

export default App