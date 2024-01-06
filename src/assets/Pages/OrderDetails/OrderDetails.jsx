import UserDataForm from "../../Components/OrderDetails/UserData/UserData";
import OrderDetailProducts from "../../Components/OrderDetails/ProductsDetail";
import { OrderDetailsContainer } from "./OrderDetails.Styled";

import {useSelector} from "react-redux"

const OrderDetails = () => {

  const {cartItems} = useSelector((state) => state.cart)

  const price = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity)
  }, 0);

  return (
    <div>
      <OrderDetailsContainer>
        <UserDataForm
          cartItems = {cartItems}
          price = {price}
        />
        <OrderDetailProducts
          cartItems = {cartItems}
          price = {price}
        />
      </OrderDetailsContainer>
    </div>
  );

};

export default OrderDetails;
