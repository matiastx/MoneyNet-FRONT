import Input from "../../UX/Input/Input";
import Submit from "../../UX/Submit/Submit";

import { UserDataStyled, Form, Formik, TitleStyled } from "./UserData.Styled";
import { createOrder } from "../../../../axios/axios-orders";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PrecioDolar } from "../../../../Utils/constantes";
import { clearCart } from "../../../../Redux/cart/cartSlice";
import { toggleModalHidden, changeModal } from '../../../../Redux/modal/modalSlice';
import { clearOrders } from "../../../../Redux/orders/ordersSlice";

const UserDataForm = ({cartItems, price}) => {

  const dispatch = useDispatch()
  const {currentUser} = useSelector(state => state.user)
  const navigate = useNavigate()
  const items = cartItems.map(
    (item) => {
      return {
        id: item.id,
        title: item.title,
        coinPriceUSD: item.price,
        coinPriceARS: item.price*PrecioDolar,
        subTotal: (item.price*PrecioDolar)*item.quantity,
        quantity: item.quantity,
        img: item.img,
      };}
  )
  const total = items.reduce((acc, item) => acc + item.subTotal, 0) 
  
  const OrderData = {
    items: items,
    total: total,
    }
  const userToken = currentUser.token

  const modal = useSelector(state => state.modal.hiddenModal)

  const ShowModal = (title, color) => {
    if(modal){
    dispatch(toggleModalHidden())
    dispatch(changeModal({title, color}))

    }
}

  return (
    
    <UserDataStyled>
      <TitleStyled>Detalle de tu Pedido</TitleStyled>
      <div>
        <Input
          name= "name"
          htmlFor="nombre"
          type="text"
          id="nombre"
          value={currentUser.name}
        >Nombre</Input>
        <Input
          name= "email"
          htmlFor="email"
          type="email"
          id="email"
          value={currentUser.email}
        >eMail</Input>
        <div>
          <Submit disabled={!cartItems.length} 
          onClick={
            async () => {
              try {
                await createOrder(OrderData, dispatch, userToken);
                navigate("/")  
                dispatch(clearCart())
                dispatch(clearOrders())
                ShowModal('Pedido relizado exitosamente!', 'var(--CelesteClaro)')
              } catch (error) {
                alert("Error al crear la orden")
              }
            }
          }
          >Confirmar Pedido
          </Submit>
        </div>
      </div>
    </UserDataStyled>
  );
};

export default UserDataForm;
