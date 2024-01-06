import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const ModalOverlayStyled = styled(motion.div)`
    position: fixed;
    top: 65px;
    left: 0;
    z-index: -1;
    width: 100vw;
    height: 100vh;

    ${
        ( { isHidden } ) =>
            !isHidden &&
            css`
            backdrop-filter: blur(4px);
    `}
`;

export const CartContainer = styled(motion.div)`
    position: fixed;
    top: 65px;
    right: 0;
    z-index: 99;

    padding: 50px 30px;
    background: linear-gradient( 180deg, rgba(4, 63, 110, 0.9) 10%, rgba(0, 153, 246, 0.9) 100% );
    border-left: 1px solid var(--AzulClaro);
    display: flex;
    flex-direction: column;
    gap: 30px;
    height: calc(100vh - 65px);
    width: 450px;
    overflow-y: auto;
    box-shadow: 0px 3px 12px 0px #0a1d29c5;
    -webkit-box-shadow: 0px 3px 20px 0px #0a1d29c5;
    background-color: #0a1d29c5;
`;

export const CartHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & a {
        background-color: var(--Rojo);
        padding: 5px 8px 3px 8px;
        font-size: 25px;
        text-align: center;
        border-radius: 10px;
        border: var(--RojoOscuro) solid 1px;
        cursor: pointer;
        color: var(--Blanco);
    }
`;

export const CardsContainer = styled.div`
    display: flex;
    align-items: center;    
    justify-content: center;
    flex-direction: column;
    gap: 15px;

    & h4 {
        font-size: 25px;
        font-weight: 400;
        color: var(--GrisClaro);
    }
`;
export const CardContainer = styled.div`
    display: flex;
    align-items: center;    
    justify-content: center;
    gap: 15px;
    border: var(--CelesteClaro) solid 1px;
    border-radius: 20px;
    padding: 15px;
    background-color: var(--bgprimario);
    @media (max-width: 500px) {
        flex-direction: column;
    }

    & img {
        height: 80px;

        @media (max-width: 500px) {
            display: none;
        }
    }

    & h2 {
        font-family: "Quicksand", sans-serif;
    padding: 25px;
    text-align: center;
    font-size: 35px;
    font-weight: 800;
    }
`;
export const CardDescription = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    width: 200px;

    & h3 {
        font-family: "Quicksand", sans-serif;
        font-size: 25px;
        font-weight: 600;
        color: var(--CelesteClaro);
    }

    & p {
        font-family: "Quicksand", sans-serif;
        font-size: 18px;
        font-weight: 600;
        color: var(--Gris2);
    }

    & span {
        height: 1px;
        background: linear-gradient(215deg, var(--Lila) 0%, var(--Azul) 50%);
        width: 95%;
    }
`;

export const CardQuantity = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    width: 70px;
    @media (max-width: 500px) {
        flex-direction: row;
    }

    & span {
        background: linear-gradient(215deg, var(--CelesteClaro) 0%, var(--Azul) 50%);
        height: 40px;
        width: 40px;
        text-align: center;
        font-family: "Quicksand", sans-serif;
        font-size: 30px;
        font-weight: 600;
        border-radius: 10px;
        border: var(--AzulOscuro);
        cursor: pointer;

        @media (max-width: 500px) {
            padding: 0px 10px;
        }
    }

    & p {
        color: var(--AzulOscuro);
        font-family: "Quicksand", sans-serif;
        font-size: 18px;
        font-weight: 600;
    }
`;

export const Separator = styled.span`
    height: 3px;
    background: linear-gradient(215deg, var(--bgprimario) 0%, var(--Blanco) 50%);
    width: 95%;
    width: 100%;
`;

export const CartBuy = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const CartBuyDesc = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: auto;
    width: 95%;
    justify-content: space-between;
    margin-bottom: 20px;
    
    @media (max-width: 500px) {
            justify-content: center;
        }

    & p {
        margin-top: 10px;
        font-family: "Quicksand", sans-serif;
        font-size: 30px;
        font-weight: 600;

        @media (max-width: 500px) {
            display: none;
        }
    }

    & h2 {
        margin-top: 10px;
        font-size: 35px;
        font-weight: 800
        
    }
`;