import styled from "styled-components"

export const AboutUsContainer = styled.section`
    display: flex;
    max-width: 1200px;
    border-radius: 20px;
    padding: 20px;
    flex-direction: column;
    position: relative;
    margin-top: 30px;
    min-height: 300px;
    color: var(--GrisClaro);
    gap: 30px;
`

export const AboutUsInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 25px;

    & h2 {
        text-align: center;
        font-size: 40px;
        font-weight: 700;
        color: var(--Gris);
    }
    
    & p {
        font-size: 25px;
        font-weight: 600;
        color: var(--AzulOscuro);
        text-align: center;
    }

    & b {
        color: var(--Gris2);
    text-shadow: #02050e 1px 1px;
    font-family: "Quicksand", sans-serif;
    }

    & b span {
        color: var(--Celeste);
    }
`

export const AboutUsMore = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    gap: 25px;
`

export const AboutUsMap = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 50px;
    flex-direction: column;
    gap: 15px;

    & a {
        color: #d41414; 
    }

    & span {
        color: var(--Gris);
        font-weight: 600;
    }
`
export const AboutUsMapContainer = styled.div`
    box-shadow: 0px 3px 10px 0px var(--Gris2);
    -webkit-box-shadow: 0px 3px 10px 0px var(--Gris2);
    border-radius: 15px;
    overflow: hidden;
    transition: all 0.5s;

    @media (max-width: 1000px) {
        iframe {
            width: 600px;
            height: 500px;
            transition: all 0.5s;
        }
    }
    
    @media (max-width: 760px) {
        iframe {
            width: 300px;
            height: 300px;
            transition: all 0.5s;
        }
    }

    @media (max-width: 400px) {
        iframe {
            width: 250px;
            height: 250px;
            transition: all 0.5s;
        }
    }
`

export const AboutUsSocial = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    gap: 60px;

    & h2 {
        text-align: center;
        font-size: 40px;
        font-weight: 700;
        color: var(--Gris);
    }
`
export const AboutUsSocialDetail = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    gap: 25px;
    flex-direction: column;

    & img {
        @media (max-width: 800px) {
        width: 250px;
    }
    }

`

export const AboutUsSocialList = styled.ul`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    line-height: 60px;
    color: var(--Blanco);
    font-weight: 600;
    text-align: justify;
    font-size: 25px;
    width: auto;

    & li {
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        align-items: center;
    }

    & li a {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--Gris2);
        font-size: 30px;
        cursor: pointer;
        transition: all 0.5s;

        
        @media (max-width: 800px) {
        font-size: 25px;
        }
    
    }

    & li span {
        text-align: center;
        color: var(--Blanco);
        padding: 5px 15px 0px 15px;
        margin: 5px 10px;
        font-size: 30px;
        border-radius: 25px;
        background: var(--Azul);
        align-self: center;
        transition: all 0.5s;
        cursor: pointer;

        @media (max-width: 800px) {
        font-size: 25px;
        margin: 0px 5px;
    }
`