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
height: 20vh;
display: flex;
justify-content: space-around;
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
height: 100vh;

@media(min-width: 320px) and (max-width: 768px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    a{
        font-size: 1rem;
    }
}

`

export const Section1 = styled.section`
width: 80%;
height: 30vh;
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
width: 40%;
height: auto;

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
    width: 90%;
    height: auto;
  }

`

export const Article=styled.article`
width: 100%;
height: 100%;
display: flex;
justify-content: space-around;

img{
    height: 300px;
    width: 100%;
  }

  figure{
  display: flex;
  flex-direction: column;
  }
`

