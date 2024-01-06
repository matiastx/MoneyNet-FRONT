import { Formik } from "formik";
import { Link } from "react-router-dom";
import LoginInput from "../../components/UX/LoginInput/LoginInput";
import Submit from "../../components/UX/Submit/Submit";
import { Form, VerfyUserContainerStyled, LoginEmailStyled } from "./VerfyUser.Styled";
import { verfyInitialValues } from "../../../formik/initialValues";
import { verfyValidationSchema } from "../../../formik/validationSchema";
import { verifyUser } from "../../../axios/axios-user";
import { toggleModalHidden, changeModal } from '../../../Redux/modal/modalSlice';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "../../../Redux/user/userSlice";

const VerfyUser = () => {
  const modal = useSelector(state => state.modal.hiddenModal)
  const userEmail = useSelector(state => state.user.currentUser.email)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const ShowModal = (title, color) => {
    if(modal){
    dispatch(toggleModalHidden())
    dispatch(changeModal({title, color}))
    }
  }

  return (
    <VerfyUserContainerStyled>
      <h1>Verifica tu cuenta</h1>
      <Formik
        initialValues={verfyInitialValues}
        validationSchema={verfyValidationSchema}
        onSubmit={async (values) => {
          try {
            await verifyUser(userEmail, values.code);
            ShowModal('Tu cuenta ahora esta verificada!', 'var(--Verde)')
            dispatch(setCurrentUser(null))
            navigate("/login");
          } catch (error) {
            console.log(error);
          }    
        }}
      >
        <Form>
          <LoginInput name='code' type="text" placeholder="Codigo" />

            <LoginEmailStyled>Ingresa el código de verificación que enviamos a tu email.</LoginEmailStyled>

          <Submit>
            Ingresar
          </Submit>
        </Form>
      </Formik>
    </VerfyUserContainerStyled>
  );
};

export default VerfyUser;
