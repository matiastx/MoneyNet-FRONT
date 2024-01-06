import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ButtonSubmitStyled = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: 30px;
  background: linear-gradient(215deg, var(--CelesteClaro) 0%, var(--Azul) 50%);
  color: white;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 15px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
