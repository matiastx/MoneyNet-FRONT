import styled from "styled-components";
import { motion } from "framer-motion";

export const BenefitsContainer = styled.section`
    display: flex;
    max-width: 1200px;
    margin: auto;
    border-radius: 20px;
    padding: auto 20px;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 35px;
    flex-wrap: wrap;
    margin-bottom: 50px;
`

export const FlyerContainer = styled.div`
    flex-direction: column-reverse;
    width: 340px;
    border-radius: 25px;
    border: var(--Celeste) 2px solid;
    box-shadow: 0px 3px 10px 0px var(--Gris2);
    -webkit-box-shadow: 0px 3px 10px 0px var(--Gris2);
    gap: 5px;

    & img {
        height: 200px;
        padding: 50px 20px;
        gap: 15p;
    }
`

export const FlyerInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin: 15px;

    & h2 {
        color: var(--Gris);
    font-weight: 700;
    }

    & p {
    color: var(--Negro);
    font-weight: 600;
    min-height: 90px;
    font-size: 18px;
    text-align: center;
    }
`