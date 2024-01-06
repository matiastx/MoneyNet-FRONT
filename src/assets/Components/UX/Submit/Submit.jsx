import { ButtonSubmitStyled } from "./SubmitStyles";

const Submit = ({ children, onClick, disabled = false }) => {
  return (
    <ButtonSubmitStyled
      whileTap={{ scale: 0.90 }}
      disabled={disabled}
      onClick={onClick}
      type="submit"
    >
      {children}
    </ButtonSubmitStyled>
  );
};

export default Submit;
