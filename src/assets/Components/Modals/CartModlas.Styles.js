import { motion } from "framer-motion";
import styled from "styled-components";

export const ModalContainer = styled(motion.div)`
    position: fixed;
    bottom: 50px;
    right: 0;
    z-index: 100;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: ${({Color})=> Color || 'var(--bgprimario)'};
    height: 75px;
    background-color: var(--Gris);

    .compra {
        color: var(--Verde);
    }
`;
