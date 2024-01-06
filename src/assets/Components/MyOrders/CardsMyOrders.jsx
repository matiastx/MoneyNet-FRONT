import { useSelector } from 'react-redux';
import MyOrdersCard from './CardMyOrders';
import { MyOrdersContainerStyled } from './CardMyOrders.Styled';
import  Loader from "../UX/Loader/Loader"

const CardsMyOrders = () => {

  const {orders, loading, error} = useSelector(state => state.orders)

  if (loading && !orders) {
    return <Loader styles={{ height: '50px', width: '50px' }} />
  }

  if(error) {
    return <h2 style={{ textAlign: 'center' }}>{error}</h2>;
  }

  

  return (
    <MyOrdersContainerStyled>
      {
        orders?.length ? (
          orders.map((order) => {
            return <MyOrdersCard key={order._id} {...order} />
          })
        ) : (
          <h2>Todavía no hay Ordenes para Mostrar.</h2>
        )
      }
      
    </MyOrdersContainerStyled>
  );
};

export default CardsMyOrders;
