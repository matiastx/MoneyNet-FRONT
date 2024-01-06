import { InputBoxStyled, InputLabelStyled, InputStyled } from "./Input.Styles";

const Input = ({ children, htmlFor, id, value}) => {
  return (

      <InputBoxStyled>

        <InputLabelStyled htmlFor={htmlFor}>{children}</InputLabelStyled>

        <InputStyled
          htmlFor={htmlFor}
          id={id}
          >{value}</InputStyled>   
          
      </InputBoxStyled>
  );
};

export default Input;
