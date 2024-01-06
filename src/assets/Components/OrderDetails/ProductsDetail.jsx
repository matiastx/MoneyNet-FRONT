import { formatPrice } from "../../../Utils/FormatPrice";
import { PrecioDolar } from "../../../Utils/constantes";
import CardProductDetail from "./CardProducts/CardProductDetail";
import {
  CardsWrapperStyled,
  HrStyled,
  PriceContainerStyled,
  PriceTotalStyled,
  ProductosContainerStyled,
  ProductsTitleStyled,
  TotalStyled,
} from "./ProductsDetail.Styles";

const OrderDetailProducts = ({cartItems, price}) => {
  return (
    <ProductosContainerStyled>
      <ProductsTitleStyled>Tu pedido</ProductsTitleStyled>
      <CardsWrapperStyled>

        {
          cartItems.length ? (
            cartItems.map((item) => {
              return <CardProductDetail key={item.id} {...item} />
            })
          ) : (
            <p>La Orden esta Vacia</p>
          )
        }
      </CardsWrapperStyled>
      <PriceContainerStyled>
        <HrStyled />
        <TotalStyled>
          <p>Total:</p>
          <PriceTotalStyled>{formatPrice(price*PrecioDolar)}</PriceTotalStyled>
        </TotalStyled>
      </PriceContainerStyled>
    </ProductosContainerStyled>
  );
};

export default OrderDetailProducts;
