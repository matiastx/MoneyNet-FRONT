import React from 'react'
import {
  CardContainerStyled,
  CardInfoStyled,
  PriceStyled,
  ProductTitleStyled,
  TextStyled,
  QuantityContainerStyled,
} from './CardProductDetail.Styles';
import { formatPrice, formatPriceUSD } from '../../../../Utils/FormatPrice'
import { PrecioDolar } from '../../../../Utils/constantes'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../../../Redux/cart/cartSlice'
import { toggleModalHidden, changeModal } from '../../../../Redux/modal/modalSlice'


const CardProductDetail = ({img, title, desc, price, quantity, id}) => {
  const dispatch = useDispatch();
  const modal = useSelector(state => state.modal.hiddenModal)

  // const ShowModal = (title, color) => {
  //   if(modal===true){
  //       dispatch(toggleModalHidden())
  //       dispatch(changeModal({title, color}))
  //   }
  // }

  return (
    <CardContainerStyled>
      <img
        src={img}
        alt={title}
      />
      <CardInfoStyled>
        <ProductTitleStyled>{title}</ProductTitleStyled>
        <PriceStyled>{formatPrice(price*PrecioDolar)}</PriceStyled>
      </CardInfoStyled>
      <QuantityContainerStyled>
        <span onClick={()=>{
            dispatch(addToCart({id, title, desc, price, img, quantity}))
            }
          }>+</span>
        <p>{quantity}</p>
        <span onClick={()=>{
            dispatch(removeFromCart({id, title, desc, price, img, quantity}))
            }
        }>-</span>
      </QuantityContainerStyled>
    </CardContainerStyled>
  );
};

export default CardProductDetail;
