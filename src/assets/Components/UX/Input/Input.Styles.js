import styled from 'styled-components';

export const InputBoxStyled = styled.div`
  display: flex;
  margin: 1rem 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
`;

export const InputLabelStyled = styled.label`
  display: flex;  
  padding: 5px 10px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
`;

export const InputStyled = styled.label`
  display: flex;
  background-color: var(--background);
  outline: none;
  border: 0.5px solid var(--GrisClaro);
  border-radius: 8px;
  height: 30px;
  padding: 5px 10px;
  color: var(--Negro);
  width: 200px;
  margin-top: 1rem;
  justify-content: flex-start;
  align-items: flex-start;
`;

