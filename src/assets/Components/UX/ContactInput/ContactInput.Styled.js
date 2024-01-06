import styled from "styled-components";

export const ContactInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 100%;
`;

export const ContactInputTitle = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
    font-family: "Quicksand", sans-serif;
    color: var(--AzulClaro);
    font-size: 25px;
    font-weight: 700;
    width: 100%;
    cursor: default;
`;

export const ContactInputField = styled.input`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    font-family: "Quicksand", sans-serif;
    width: 100%;
    border-radius: 15px;
    font-size: 20px;
    padding: 5px 10px;
    color: var(--Gris);
    font-weight: 600;
    border: ${({ isError }) => (isError ? '1px solid var(--Rojo)' : 'none')};
    outline: none;
`;

export const ContactInputTextArea = styled.textarea`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    font-family: "Quicksand", sans-serif;
    width: 100%;
    border-radius: 15px;
    font-size: 20px;
    padding: 5px 10px;
    color: var(--Gris);
    font-weight: 600;
    border: ${({ isError }) => (isError ? '1px solid var(--Rojo)' : 'none')};
    outline: none;
`;

export const ContactErrorMessage = styled.span`
    color: var(--Rojo);
    font-size: 15px;
    font-weight: 600;
    margin: 0;
    margin-top: 5px;
`;

export const ContactLabelStyled = styled.label`
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    font-family: "Quicksand", sans-serif;
    color: var(--AzulClaro);
    font-size: 25px;
    font-weight: 700;
    width: 100%;
    cursor: default;
`