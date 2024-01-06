import styled from "styled-components";

export const HeroContainer = styled.section`
    display: flex;
    max-width: 1200px;
    border-radius: 20px;
    padding: 20px;
    flex-direction: column;
    position: relative;
    padding-top: 200px;
    margin-top: 90px;
    min-height: 300px;
    gap: 5px;
`

export const HeroLogo = styled.div`
    display: flex;
    justify-content: center;

    & img {
        position: absolute;
        top: -90px;
        border-radius: 150px;
        box-shadow: 0px 3px 12px 0px var(--Gris2);
        -webkit-box-shadow: 0px 3px 12px 0px var(--Gris2);
        background-color: var(--Celeste);
        height: 250px;
    }

    & h1 {
        color: var(--Gris2);
        font-family: "Quicksand", sans-serif;
        font-weight: 500;
        font-size: 50px;
        text-align: center;
        text-shadow: 2px 3px 2px rgba(6, 25, 51, 0.4);
        position: relative;
        height: 80px;
        top: -20px;
    }
    
    & H1 span {
        color: var(--Celeste);
        font-weight: 700;
        font-family: "Quicksand", sans-serif;
    }
`

export const Heroinfo = styled.div`
    text-align: justify;
    font-weight: 600;
    font-size: 25px;
    text-align: center;

    & b {
        color: var(--Gris2);
        text-shadow: #02050e 1px 1px;
        font-family: "Quicksand", sans-serif;
    }

    & b span {
        color: var(--Celeste);
        font-weight: 700;
    }
`
export const HeroBtns = styled.div`
    display: flex;
    width: 90%;
    flex-wrap: wrap;
    margin: 40px auto;
    gap: 40px;
    justify-content: center;

    & h2 {
        font-family: "Quicksand", sans-serif;
        font-weight: 500;
        font-size: 25px;
        color: var(--CelesteClaro);
        text-shadow: #02050e 1px 1px;
    }
`