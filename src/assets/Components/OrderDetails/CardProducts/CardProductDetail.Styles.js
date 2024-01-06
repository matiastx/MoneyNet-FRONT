import styled from 'styled-components';

export const CardContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--CelesteClaro);
  width: 99%;
  background: var(--bgprimario);
  margin: 5px;
  box-shadow: 0px 0px 5px 2px var(--GrisClaro);
  -webkit-box-shadow: 0px 0px 5px 2px var(--GrisClaro);
  padding: 5px 10px;
  border-radius: 15px;

  & img {
    width: 60px;
    height: 60px;
    border-radius: 16px;
    object-fit: cover;
  }
`;

export const CardInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  @media (max-width: 500px) {
    width: 150px;
    }
`;

export const ProductTitleStyled = styled.h3`
  margin-bottom: 2px;
  font-weight: 700;
  font-size: 25px;
  color: var(--CelesteClar);
`;

export const TextStyled = styled.h3`
  margin: 0;
  color: #666;
  font-size: 1rem;
`;

export const PriceStyled = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 2rem;
  color: var(--Gris);
  
`;

export const QuantityContainerStyled = styled.span`
  display: flex;
  align-items: center;
  flex-direction: column;

  & span {
    color: var(--GrisClaro);
    background: linear-gradient(215deg, var(--CelesteClaro) 0%, var(--Azul) 50%);
    height: 35px;
    width: 35px;
    text-align: center;
    font-family: "Quicksand", sans-serif;
    font-size: 25px;
    font-weight: 600;
    border-radius: 10px;
    border: var(--AzulOscuro);
    cursor: pointer;
  }

  & p {
        color: var(--AzulOscuro);
        font-family: "Quicksand", sans-serif;
        font-size: 18px;
        font-weight: 600;
    }
`;
