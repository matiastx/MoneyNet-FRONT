import { Formik } from "formik";
import { Link } from "react-router-dom";
import Submit from "../../components/UX/Submit/Submit";
import { Form, LoginContainerStyled, LoginEmailStyled } from "./LoginStyles";
import { loginInitialValues } from "../../../formik/initialValues";
import { loginValidationSchema } from "../../../formik/validationSchema";
import { loginUser } from "../../../axios/axios-user";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../../redux/user/userSlice";
import useRedirect from "../../../hooks/useRedirect";
import LoginInput from "../../Components/UX/LoginInput/LoginInput";

const Login = () => {
  const dispatch = useDispatch();
  useRedirect("/")

  return (
    <LoginContainerStyled>
      <h1>Iniciar Sesión</h1>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={async (values) => {
          const user = await loginUser(values.email, values.password);
          if(user) {
            dispatch(setCurrentUser({
              ...user.user,
              token: user.token
            }))
          }    
        }}
      >
        <Form>
          <LoginInput name='email' type="text" placeholder="Email" />
          <LoginInput name='password' type="password" placeholder="Password" />
          <Link to="/register">
            <LoginEmailStyled>¿Todavía no tenes cuenta? Create una ahora mismo</LoginEmailStyled>
          </Link>
          <Submit>
            Ingresar
          </Submit>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Login;
