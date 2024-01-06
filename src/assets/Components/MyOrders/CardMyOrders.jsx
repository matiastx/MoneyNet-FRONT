import { formatPrice } from "../../../Utils/FormatPrice";
import { formatDate } from "../../../Utils/FormatPrice";
import OrderStatus from "../../Components/UX/OrderStatus/OrderStatus";

import {
  IdStyled,
  PedidoContainerStyled,
  PriceStyled,
  TextContainerStyled,
  TitleStyled,
} from "./CardMyOrders.Styled";

const MyOrdersCard = ({createdAt, status, total, _id}) => {
  

  return (
    <PedidoContainerStyled>
      <TextContainerStyled>
        <TitleStyled>ID de la orden: #{_id.slice(0, 7)}</TitleStyled>
        <IdStyled>Fecha {formatDate(createdAt)}</IdStyled>
        <PriceStyled>{formatPrice(total)}</PriceStyled>
      </TextContainerStyled>
      <OrderStatus status={status} />
    </PedidoContainerStyled>
  );
};

export default MyOrdersCard;
