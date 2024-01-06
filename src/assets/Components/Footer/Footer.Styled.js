import styled from 'styled-components';

export const FooterContainer = styled.footer`
    
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
    /* margin: 0; */
    border-top: solid 1px var(--AzulOscuro);
    background: linear-gradient(
        180deg,
        rgba(4, 63, 110, 1) 0%,
        rgba(7, 18, 43, 1) 100%
    );
    color: var(--bgprimario);
    font-size: 20px;
    border-radius: 6px 6px 0 0;
    margin-bottom: -35px;
    margin-left: -32px;
    margin-right: -32px;
    bottom: 0;


    & b {
        color: var(--Gris2);
    text-shadow: #02050e 1px 1px;
    font-family: "Quicksand", sans-serif;
    }

    & b span {
        color: var(--Celeste);
    }
`