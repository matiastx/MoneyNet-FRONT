import styled from 'styled-components';

export const InputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginInputStyled = styled.input`
  width: 300px;
  padding: 1.5rem 2rem;
  color: var(--GrisClaro);
  background-color: var(--bgprimario);
  border-radius: 15px;
  border: ${({ isError }) => (isError ? '2px solid #fb103d ' : '2px solid')};
  outline: none;
  caret-color: var(--AzulClaro);
  

  ::placeholder {
    opacity: 80%;
  }
  -webkit-text-fill-color: var(--AzulClaro);

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px var(--gray-bg) inset;
  }
`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #fb103d;
  font-size: 14px;
`;
