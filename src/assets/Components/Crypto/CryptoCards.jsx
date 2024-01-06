import React from 'react'
import { CryptoCardBottom, CryptoCardBtnContainer, CryptoCardContainer, CryptoCardTitle, CryptoCardTop } from './Crypto.Styled'
import { CryptoButton } from '../UX/Button/Button'
import { PrecioDolar } from '../../../Utils/constantes'
import { formatPrice, formatPriceUSD } from '../../../Utils/FormatPrice'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../../Redux/cart/cartSlice'
import { toggleModalHidden, changeModal } from '../../../Redux/modal/modalSlice'


const CryptoCard = ({id, title, denom, histryMax, price, img}) => {
  const maxprice = formatPriceUSD(histryMax)
  const modal = useSelector(state => state.modal.hiddenModal)
  
  const dispatch = useDispatch()
  
  const ShowModal = (title, color) => {
    if(modal){
    dispatch(toggleModalHidden())
    dispatch(changeModal({title, color}))
    }
  }
    return (
    <CryptoCardContainer>
      <CryptoCardTop>
        <img src={img} alt={id} />
        <CryptoCardTitle>
          <h2>{title}</h2>
          <h3>{denom}</h3>
        </CryptoCardTitle>
      </CryptoCardTop>
      <CryptoCardBottom>
        <h2>Max Historico</h2>
        <p>{isNaN(histryMax) ? histryMax : maxprice}</p>
        <h2>Valor Actual</h2>
        <p>{formatPriceUSD(price)}</p>
        <p>{formatPrice(price * PrecioDolar)}</p>
      
      </CryptoCardBottom>
      <CryptoCardBtnContainer> 
        <CryptoButton onClick={()=> dispatch(addToCart({id, title, denom, histryMax, price, img})) && ShowModal('Producto Agregado', 'var(--Verde)')}>Comprar</CryptoButton>
      </CryptoCardBtnContainer>
      
    </CryptoCardContainer>
  )
}

export default CryptoCard