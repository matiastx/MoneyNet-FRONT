import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import MyOrdersCard from "../../Components/MyOrders/CardsMyOrders";
import { OrdersButton } from "../../Components/UX/Button/Button";
import {
  MyOrdersBtnContainerStyled,
  MyOrdersContainerStyled,
  MyOrdersPatternStyled,
  MyOrdersTitleStyled,
} from "./MyOrders.Styled";
import { useEffect } from "react";
import { getOrders } from "../../../axios/axios-orders";
import { clearError, fetchOrdersFail } from "../../../Redux/orders/ordersSlice";


const MyOrders = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser)
  const userToken = currentUser.token
  const {orders, error} = useSelector(state => state.orders)

  useEffect(() => {
    if (!orders) {
      getOrders(dispatch, userToken)
    }
    if(!currentUser?.token) {
      dispatch(fetchOrdersFail())
    } else {
      error && dispatch(clearError())
    }
  }, [currentUser, dispatch, error, orders])

  return (
    <>

      <MyOrdersContainerStyled>
        <MyOrdersTitleStyled>Mis órdenes</MyOrdersTitleStyled>
        <MyOrdersCard />
        <MyOrdersBtnContainerStyled>
          <OrdersButton onClick={() => navigate("/products")}>Volver a comprar</OrdersButton>
        </MyOrdersBtnContainerStyled>
      </MyOrdersContainerStyled>
      <MyOrdersPatternStyled
        src= "https://res.cloudinary.com/dz4oxre7x/image/upload/v1704478996/4cHDiYupSiDiKJfS9NFL6_wsek7q.png"
        alt=""
      />
    </>
  );
};

export default MyOrders;
