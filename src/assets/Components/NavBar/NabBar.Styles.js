import styled from "styled-components";
import { motion } from "framer-motion";

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    height: 65px;
    padding: 10px;
    width: 100%;
    background: linear-gradient( 180deg, var(--AzulClaro) 0%, var(--CelesteClaro) 100% );
    color: var(--bgprimario);
    box-shadow: 0px 3px 12px 0px #0099f666;
    -webkit-box-shadow: 0px 3px 12px 0px #0099f666;
    border-bottom: solid 1px var(--AzulClaro);
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    
    & img {
        font-size: small;
    }
`

export const LogoImg = styled.a`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: 0;
    font-size: 32px;
    color: var(--Blanco);
    font-family: "Quicksand", sans-serif;

    & img {	
        height: 40px;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;
        font-family: "Roboto Condensed", sans-serif;
        overflow-clip-margin: content-box;
        overflow: clip;
        padding: 0;
    }  

    & a {
        @media (max-width: 370px) {
            font-size: 25px;
    }
    }

    & span {
        color: var(--AzulOscuro);
        font-weight: 700;
    }
`

export const LinksContainer = styled.ul`
    display: flex;
    align-items: center;
    gap: 15px;

    @media (max-width: 800px) {
        position: absolute;
    top: 65px;
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    flex-direction: column;
    background: linear-gradient(
        180deg,
        rgba(4, 63, 110, 0.9) 10%,
        rgba(0, 153, 246, 0.9) 100%
    );
    border: 1px solid var(--AzulClaro);
    border-top: 0px;
    border-radius: 0px 0px 15px 0;
    align-items: flex-start;
    padding: 45px 60px;
    gap: 25px;
    box-shadow: 0px 3px 12px 0px #0a1d29c5;
    -webkit-box-shadow: 0px 3px 20px 0px #0a1d29c5;
    z-index: 2;
    
    
    transition: all 0.5s ease-in-out;
    }
`

export const MenuLinksContainer = styled.ul`
    display: flex;
    align-items: center;
    gap: 15px;
`

export const MenuLinkA = styled.a`
font-size: 20px;
cursor: pointer;
color: var(--Blanco);
    @media (max-width: 600px) {
        display: none;
    }
`

export const NavLinksLiStyled = styled.li`
    position: relative;
    padding: 0;
    
    & a {
        color: var(--Blanco);
        font-size: 30px;
        font-family: "Roboto Condensed", sans-serif;
        cursor: pointer;
    }

    & a::after {
        content: "";
        height: 3px;
        width: 100%;
        background: var(--VerdeAgua);
        position: absolute;
        bottom: 0;
        left: 0;
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 0.25s ease;
    }

    & a:hover {
        text-shadow: var(--AzulClaro) 3px 2px;
        background-color: var(--CelesteClaro);
        border-radius: 10px;
        box-shadow: 0px 3px 12px 0px var(--CelesteClaro);
        -webkit-box-shadow: 0px 0px 15px 12px var(--CelesteClaro);
        transition: all 0.5s ease;
    }

    & a:hover::after {
        transform-origin: bottom left;
        transform: scaleX(1);
    }
`

export const UserLinksLiStyled = styled(NavLinksLiStyled)`
    display: none;
    @media (max-width: 400px) {
        display: flex;
    }
`

export const NavLinkStyled = styled.a`
    color: var(--Blanco);
    font-size: 30px;
    font-family: "Roboto Condensed", sans-serif;
    cursor: pointer;

    &::after {
        content: "";
        height: 3px;
        width: 100%;
        background: var(--VerdeAgua);
        position: absolute;
        bottom: 0;
        left: 0;
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 0.25s ease;
    }

    &:hover {
        text-shadow: var(--AzulClaro) 3px 2px;
        background-color: var(--CelesteClaro);
        border-radius: 10px;
        box-shadow: 0px 3px 12px 0px var(--CelesteClaro);
        -webkit-box-shadow: 0px 0px 15px 12px var(--CelesteClaro);
        transition: all 0.5s ease;
    }

    &:hover::after {
        transform-origin: bottom left;
        transform: scaleX(1);
    }

    
`


export const NavCartStyled = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(215deg, var(--CelesteClaro) 0%, var(--Azul) 50%);
    color: var(--Blanco);
    font-size: 35px;
    border-radius: 20px;
    cursor: pointer;
    padding: 5px;

    &:hover {
        background: linear-gradient(
    180deg,
    var(--Blanco) 0%,
    var(--GrisClaro) 50%,
    var(--Blanco) 100%
    );
    transition: all ease 0.3s;
    color: var(--CelesteClaro);
    font-weight: 600;
    }
`

export const NavMenuStyled = styled(NavCartStyled)`
    display: none;
    @media (max-width: 800px) {
        display: flex
    }
`

export const NavUserStyled = styled(NavCartStyled)`


    @media (max-width: 400px) {
        display: none;
    }
`