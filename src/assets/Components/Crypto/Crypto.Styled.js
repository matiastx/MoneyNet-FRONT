import styled from "styled-components";

export const CategoriesCardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    gap: 25px;
`
export const CategoriesCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 150px;
    width: 150px;
    border-radius: 30px;
    background-color: ${({selected})=> (selected ? "var(--Gris2)" : "var(--bgprimario)")};
    border: 2px solid var(--Celeste);
    padding: 10px 10px;
    gap: 5px;
    transition: all ease-in-out 0.3s;
    box-shadow: 2px 5px 10px 0px var(--AzulOscuro);

    & h3 {
        text-align: center;
        font-size: 20px;
        font-weight: 800;
        color: ${({selected})=> (selected ? "var(--VerdeAgua)" : "var(--Celeste)")};
        width: 80px;
    }

    & img {
        display: block;
        margin-top: -30px;
        border-radius: 50%;
        height: 100px;
        width: 100px;
        border: 2px solid var(--Celeste);

    }
`


export const CryptoContainer = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 20px auto;
    border-radius: 20px;
    padding: 20px;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: var(--CelesteClaro);
    width: 100%;
    box-shadow: 0px 3px 10px 0px var(--Gris2);
    -webkit-box-shadow: 0px 3px 10px 0px var(--Gris2);
    gap: 20px;

    & h2 {
        color: var(--Blanco);
        text-align: center;
        font-size: 40px;
        font-weight: 700;
    }

    & h4 {
        font-size: 25px;
        display: flex;
        color: var(--bgprimario);
    }
    `

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 30px;
`

export const CryptoCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 380px;
    width: 260px;
    border-radius: 30px;
    background-color: var(--bgprimario);
    padding: 10px 10px;
    gap: 15px;
    transition: all ease-in-out 0.3s;

    & img {
        height: 75px;
        margin-left: 15px;
        border-radius: 15%;
    }
`

export const CryptoCardTop = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`

export const CryptoCardTitle = styled.div`
    display: flex;
    flex-direction: column;
    width: 150px;
    justify-content: center;
    align-items: center;
    gap: 5px;
    
    & h2 {
        color: var(--Celeste);
        font-family: "Quicksand", sans-serif;
        font-weight: 700;
        width: 140px;
        text-align: center;
        font-size: 30px;
    }
`

export const CryptoCardBottom = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
    justify-content: center;
    color: var(--Gris2);
    font-weight: 800;
    font-size: 20px;

    & h2 {
        color: #07122b;
        font-size: 30px;
    }
`

export const CryptoCardBtnContainer = styled.button`
display: flex;
align-items: center;
justify-content: center;
border: none
`