import styled from 'styled-components';

//estilização da NAVEGAÇÃO
export const Header = styled.header`
display: flex;
justify-content: end;
align-items: center;
background-color: #854adf;
width: 100%;

@media(min-width: 320px) and (max-width: 768px){
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20vh;
    width: 100%;
  }
`

export const Nav = styled.nav`
width: 80%;
height: 15vh;
display: flex;
justify-content: space-around;
align-items: center;
background-color: #854adf;

@media(min-width: 320px) and (max-width: 768px){
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20vh;
    width: 80%;
  }
`
export const H2 = styled.h2`
color: white;
  font-size:2rem;

  @media(min-width: 320px) and (max-width: 768px){
    font-size: 1.5rem;
  }
`

export const Lista = styled.ul`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
height: 20vh;
list-style: none;

@media(min-width: 320px) and (max-width: 768px){
width: 100%;
height: 20vh;
display: flex;
flex-direction: column;
}
`
export const Li = styled.li`
list-style: none;


a{
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
  }

  `

//estilização INICIO:
export const ContainerInicio=styled.main`
display: flex;
align-items: center;
width: 100%;
height: 80vh;

@media(min-width: 320px) and (max-width: 768px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    width: 100%;
    a{
        font-size: 1rem;
    }
}

`

export const Section1 = styled.section`

width: 80%;
height: 20vh;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

@media(min-width: 320px) and (max-width: 768px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 30vh;
    width: 80%;

    a{
        font-size: 1rem;
    }
}
`

export const Div1 = styled.div`

width: auto;
display: flex;
flex-direction: column;
justify-content: center;
`

export const Text2 = styled.h1`
font-size: 2.5rem;
background-color: #854adf ;
color: white;
`

export const Perfil= styled.img`
height: 80vh;
width: 40%;

@media(min-width: 320px) and (max-width: 768px){
    height: 50vh;
    width: 100%;
}
`

//estilização SOBRE:

export const Sectionsobre = styled.section`
display: flex;
justify-content: space-around;
align-items: center;  

img{
    width: 80%;
    height: auto;
  }

  @media(min-width: 320px) and (max-width: 768px){
   //border: solid black;
   width: 100%;
   height: 15%;
   display: flex;
   justify-content: space-evenly;
   align-items: center;

   img{
    width: 70%;
   }

    h3{
      font-size: 0.8rem;
    }
  }

`
export const DivSobre = styled.div`
height: 20%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;

@media(min-width: 320px) and (max-width: 768px){
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}
`

export const Article=styled.article`
width: 100%;
height: 100%;
display: flex;
justify-content: space-around;


img{
    height: 90%;
  }

  figure{
  height: 45vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  }

  @media(min-width: 320px) and (max-width: 768px){
    height: 150%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    figure{
      height: 40%;
      flex-direction: column;
      justify-content: center; 
    }
    
    img{
      height: 60%;
      width: 50%;
    }
    }
`

//ESTILIZAÇÃO PROJETOS:

export const SectionProjetos = styled.section`
display: flex;
flex-wrap: wrap;
gap: 20px;
justify-content: center;
align-items: center;
text-align: center;
width: 100%;
height: 80vh;

@media(min-width: 320px) and (max-width: 768px){
  //border: solid blue;
  height: 150% ;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

`

export const Projetos = styled.div`
border: solid #854adf;
border-radius: 20px;
width: 19%;
height: 70%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
h2{
    font-size: 1.5rem;
}
h3{
    font-size: 1rem;
}
img{
  border-radius: 5%;
  width: 100%;
  height: 80%;
  object-fit: cover;
}

@media(min-width: 320px) and (max-width: 768px){
 //border: solid black;
 width: 80%;
 height: 50%;
}
`
