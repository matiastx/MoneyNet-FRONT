import React from 'react'
import { 
    CardContainer, 
    CardDescription, 
    CardQuantity 
} from './ModalCart.Styles'
import { formatPrice, formatPriceUSD } from '../../../../Utils/FormatPrice'
import { PrecioDolar } from '../../../../Utils/constantes'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../../../Redux/cart/cartSlice'
import { toggleModalHidden, changeModal } from '../../../../Redux/modal/modalSlice'

const ModalCartCard = ({id, title, denom, price, img, quantity}) => {
    const modal = useSelector(state => state.modal.hiddenModal)

    const dispatch = useDispatch()

    const ShowModal = (title, color) => {
        if(modal===true){
            dispatch(toggleModalHidden())
            dispatch(changeModal({title, color}))
        }
    }

    return (
        <CardContainer key={id}>

            <img src={img} alt={denom} />
            <CardDescription>
                <h3>{title}</h3>
                <p>Valor: {formatPriceUSD(price)}</p>
                <p>Valor: {formatPrice(price*PrecioDolar)}</p>
                <span></span>
                <p>SubTotal: {formatPrice((price*quantity)*PrecioDolar)}</p>
            </CardDescription>
            <CardQuantity>
                <span onClick={()=>dispatch(addToCart({id, title, denom, price, img, quantity})) && ShowModal('Producto Agregado', 'var(--Verde)')}>+</span>
                <p>{quantity}</p>
                <span onClick={()=>dispatch(removeFromCart({id, title, denom, price, img, quantity})) && ShowModal('Producto Eliminado', 'var(--Rojo)')}>-</span>
            </CardQuantity>
        </CardContainer>
    )
}

export default ModalCartCard