import styled from 'styled-components';

export const MyOrdersContainerStyled = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  max-width: 1500px;
  margin: 0 auto;

  @media (max-width: 500px) {
    margin: 0;
    width: 100%;
  }

`;

export const PedidoContainerStyled = styled.div`
  background: var(--GrisClaro);
  width: 380px;
  border-radius: 15px;
  padding: 1rem 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  cursor: pointer;

  @media (max-width: 500px) {
    margin: 0;
    width: 100%;
    padding: 20px 0;
    flex-direction: column;
    gap: 15px;
    min-width: 220px;
  }

`;

export const TextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;
`;

export const TitleStyled = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  font-size: 1.2rem;
  width: 100%;
  min-width: 250px;
`;

export const IdStyled = styled.p`
  font-size: 1rem;
  color: #666;
`;

export const PriceStyled = styled.p`
  font-weight: 800;
  font-size: 2rem;
  background: linear-gradient( 180deg, rgba(4, 63, 110, 0.9) 10%, rgba(0, 153, 246, 0.9) 100% );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
`;
