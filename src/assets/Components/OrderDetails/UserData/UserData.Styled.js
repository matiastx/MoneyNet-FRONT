import styled from 'styled-components';
import { Formik as FormikContainer, Form as FormikForm } from 'formik';

export const UserDataStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 300x;
  align-items: center;
`;

export const TitleStyled = styled.h2`
  font-weight: 700;
  font-size: 22px;
  color: var(--Celeste);
`;

export const Formik = styled(FormikContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;

`;
export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
