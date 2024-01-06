import { styled } from "styled-components";
import { motion } from "framer-motion";

export const StyledButton = styled(motion.button)`
    
    font-family: "Quicksand", sans-serif;
    border-radius: 20px;
    background: linear-gradient(215deg, var(--CelesteClaro) 0%, var(--Azul) 50%);
    padding: 10px 25px;
    color: var(--GrisClaro);
    width: 210px;
    min-width: 200px;

    text-align: center;
    box-shadow: 0px 3px 12px 0px var(--Gris2);
    -webkit-box-shadow: 0px 3px 12px 0px var(--Gris2);
    cursor: pointer;
    transition: all ease 0.3s;
    font-size: 30px;

    &:hover {
    background: linear-gradient(
        180deg,
        var(--Blanco) 0%,
        var(--GrisClaro) 50%,
        var(--Blanco) 100%
        );
    /* border: solid var(--Blanco) 1px; */
    text-shadow: 1px 1px 5px rgba(6, 33, 70, 0.5);
    transition: all ease 0.3s;
    color: var(--CelesteClaro);
    font-weight: 500;
    }

    &:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
`
export const TrashStyledButton = styled(motion.button)`
    background-color: var(--Rojo);
    padding: 5px 8px 3px 8px;
    font-size: 25px;
    text-align: center;
    border-radius: 10px;
    border: var(--RojoOscuro) solid 1px;
    cursor: pointer;
    color: var(--Blanco);

    &:hover {
        background-color: var(--RojoOscuro);
    }

    &:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
`

export const StyledCryptoButton = styled(motion.button)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Quicksand", sans-serif;
    border-radius: 30px;
    background: linear-gradient(215deg, var(--CelesteClaro) 0%, var(--Azul) 50%);
    padding: 10px 25px;
    color: var(--GrisClaro);
    width: 200px;
    min-width: 200px;
    height: 40px;
    text-align: center;
    box-shadow: 0px 3px 12px 0px var(--Gris2);
    -webkit-box-shadow: 0px 3px 12px 0px var(--Gris2);
    cursor: pointer;
    transition: all ease 0.3s;
    font-size: 25px;

    &:hover {
    background: linear-gradient(
        180deg,
        var(--Blanco) 0%,
        var(--GrisClaro) 50%,
        var(--Blanco) 100%
        );
    /* border: solid var(--Blanco) 1px; */
    text-shadow: 1px 1px 5px rgba(6, 33, 70, 0.5);
    transition: all ease 0.3s;
    color: var(--CelesteClaro);
    font-weight: 500;
    }

    &:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
`