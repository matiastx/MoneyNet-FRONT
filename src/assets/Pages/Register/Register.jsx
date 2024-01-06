import { Formik } from "formik";
import LoginInput from "../../Components/UX/LoginInput/LoginInput";
import { Form, LoginContainerStyled, LoginEmailStyled } from "./RegisterStyles";
import { registerInitialValues } from "../../../formik/initialValues";
import { registerValidationSchema } from "../../../formik/validationSchema";
import { createUser } from "../../../axios/axios-user";
import {useDispatch} from "react-redux";
import { setCurrentUser } from "../../../Redux/user/userSlice";
import useRedirect from "../../../hooks/useRedirect";
import Submit from "../../Components/UX/Submit/Submit";

const Register = () => {
  const dispatch = useDispatch();
  useRedirect("/")

  return (
    <LoginContainerStyled>
      <h1>Crea tu cuenta</h1>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={async (values, actions) => {
          const user = await createUser(values.name, values.email, values.password);
          actions.resetForm();
          if(user) {
            dispatch(setCurrentUser({
              ...user.User
              
            }))
          }
        }}
      >
        <Form>
          <LoginInput name='name' type="text" placeholder="Nombre" />
          <LoginInput name='email' type="text" placeholder="Email" />
          <LoginInput name='password' type="password" placeholder="Password" />

          <LoginEmailStyled to="/login">
            <p>¿Ya tenes cuenta? Inicia sesión</p>
          </LoginEmailStyled>
          <Submit>
            Registrarte
          </Submit>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Register;
