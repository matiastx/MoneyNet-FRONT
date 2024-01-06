import styled from 'styled-components';

export const StatusStyled = styled.span`
  text-align: center;
  width: 30px;;
  height: 30px;
  border-radius: 1rem;
  padding: 8px 7px 4px 7px;
`;

export const CheckStyled = styled(StatusStyled)`
  background: #15be77;
`;

export const PendingStyled = styled(StatusStyled)`
  background: #ffa100;
`;

export const CancelStyled = styled(StatusStyled)`
  background: #ff005c;
`;
