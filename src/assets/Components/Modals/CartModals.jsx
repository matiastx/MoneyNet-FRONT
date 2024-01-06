import React from 'react'
import { ModalContainer } from './CartModlas.Styles'
import { AnimatePresence } from 'framer-motion'
import { useSelector } from 'react-redux'

const CartModals = () => {

    const modal = useSelector(state => state.modal)

    return (
        <AnimatePresence>
            <ModalContainer 
            initial={{ translateY: 200 }}
            animate={{ translateY: 0 }}
            exit={{ translateX: 200 }}
            transition={{ type: 'just', damping: 27 }}
            key="change-modal"
            Color={modal.modalColor}
            >
                <h1>{modal.modalTitle}</h1>
            </ModalContainer>
        </AnimatePresence>
        )
}
export default CartModals