import { AnimatePresence } from "framer-motion";

import {
  HrStyled,
  LinkStyled,
  ModalContainerStyled,
  UsernameStyled
} from "./ModelUserStyles";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, toggleHiddenMenu } from "../../../../Redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { clearOrders } from "../../../../redux/orders/ordersSlice";

const ModalUser = () => {
  const {hiddenMenu, currentUser} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (

    <AnimatePresence>
      {!hiddenMenu && (
        <ModalContainerStyled
          initial={{ translateX: 600 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: 600 }}
          transition={{ duration: 0.5 }}
          key="cart-user"
        >
          <UsernameStyled>Bienvenido {currentUser.name}</UsernameStyled>
          <HrStyled />
          <LinkStyled to={"/myorders"}
            onClick={() => {
              dispatch(toggleHiddenMenu())
              }
            }
            >Mis Ordenes</LinkStyled>
          <span onClick={() => {
            dispatch(setCurrentUser(null))
            dispatch(toggleHiddenMenu())
            dispatch(clearOrders())
            navigate("/")
          }}>Cerrar Sesion</span>
        </ModalContainerStyled>
      )}
    </AnimatePresence>
  );
};

export default ModalUser;
