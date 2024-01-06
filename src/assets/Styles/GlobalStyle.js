import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


:root {
  /* colors */
  --bgprimarioBLK: #121314;
  --bgprimario: #f6f6f6;
  --GrisClaro: #d9d9d9;
  --CelesteClaro: #0099f9;
  --Celeste: #026cb2;
  --AzulClaro: #043f6e;
  --Azul: #1e50ff;
  --AzulOscuro: #07122b;
  --Lila: #833ab4;
  --VerdeAgua: #00d5ff;
  --ShadowBG: #ffffff0d;
  --ShadowColor: #1f268780;
  /* Textos */
  --Blanco: #ffffff;
  --Gris: #272d37;
  --Gris2: #626161;
  --Negro: #02050e;
  --Home: #e4f7ff;


  /* Fuentes */
  /* Logo: font-family: 'Quicksand', sans-serif; */
  /* Texto Normal: font-family: 'Roboto Condensed', sans-serif; */
  /* Texto Ligero: font-family: 'Roboto Flex', sans-serif; */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
  font-family: 'Roboto Condensed', sans-serif;
  /* border: #0099f6 solid 1px; */
}

body {
  margin-top: 65px;
  background-color: var(--bgprimario);
}
`