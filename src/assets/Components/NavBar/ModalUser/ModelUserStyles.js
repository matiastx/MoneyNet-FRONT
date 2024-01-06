import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const ModalContainerStyled = styled(motion.div)`
    width: 450px;
  top: 65px;
  right: 0;
  z-index: 98;
  
  position: fixed;
  background: linear-gradient( 180deg, rgba(4, 63, 110, 0.9) 10%, rgba(0, 153, 246, 0.9) 100% );
  box-shadow: 0px 3px 12px 0px #0a1d29c5;
  -webkit-box-shadow: 0px 3px 20px 0px #0a1d29c5;
  display: flex;
  flex-direction: column;
  border-radius: 0 0 0 1rem;
  padding: 1rem;
  color: var(--Blanco);
  border: 1px solid var(--AzulClaro);
  overflow-y: auto;

  & span {
    color : var(--RojoOscuro);
    display: flex;
    font-weight: 100;
    margin-top: 20px;
    cursor: pointer;
  }

  & span:hover {
    color: var(--RojoOscuro2);
    transition: all 0.5s ease;
    font-weight: 700;
  }
`;


export const LinkStyled = styled(Link)`
  text-decoration: none;
  position: relative;
  padding: 0;
  color: var(--GrisClaro);
  font-size: 26px;
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
`;


export const UsernameStyled = styled.h2`
  font-weight: 400;
`;

export const HrStyled = styled.hr`
  margin: 2rem 0;
`;

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