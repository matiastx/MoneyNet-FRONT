import styled from 'styled-components';

export const ProductosContainerStyled = styled.div`
  width: 300px;
  margin-bottom: 3rem;
`;

export const ProductsTitleStyled = styled.h2`
  font-weight: 700;
  font-size: 22px;
  color: var(--Celeste);
  margin-bottom: 20px;
`;

export const CardsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 440px;
  overflow: scroll;

  &::-webkit-scrollbar {
    background: transparent;
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--GrisClaro);
    border-radius: 5px;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }

  @media (max-height: 800px) {
    height: 270px;
  }

  @media (max-width: 1500px) {
    width: 100%;
  }
`;

export const PriceContainerStyled = styled.div`
  margin: 0 auto;
  margin-top: 10px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EnvioStyled = styled(SubtotalStyled)``;

export const TotalStyled = styled(SubtotalStyled)``;

export const PriceTotalStyled = styled.span`
  background: linear-gradient( 180deg, rgba(4, 63, 110, 0.9) 10%, rgba(0, 153, 246, 0.9) 100% );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
  font-size: 25px;
`;

export const HrStyled = styled.hr`
  margin: 1rem 0;
`;
