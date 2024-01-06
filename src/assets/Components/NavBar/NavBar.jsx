import React, { useEffect } from 'react'
import Logo from '../../Images/img/Logo_Circ.png'
import { HiViewGrid } from 'react-icons/hi'
import { TiShoppingCart } from 'react-icons/ti'
import {BiSolidUser} from 'react-icons/bi'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


import { 
  LinksContainer, 
  LogoContainer, 
  LogoImg, 
  NavBarContainer, 
  NavMenuStyled, 
  NavCartStyled, 
  NavLinksLiStyled, 
  MenuLinksContainer , 
  MenuLinkA,
  NavUserStyled,
  UserLinksLiStyled
} from './NabBar.Styles'

import ModalCart from './ModalCart/ModalCart'
import CartModals from '../Modals/CartModals'
import { useDispatch, useSelector } from 'react-redux'
import { toggleModalHidden } from '../../../Redux/modal/modalSlice'
import { toggleCartHidden } from '../../../Redux/cart/cartSlice'
import { toggleHiddenMenu } from '../../../Redux/user/userSlice'
import ModalUser from './ModalUser/ModalUser'



const NavBar = () => {
  const [ clikedMenu, setclikedMenu ] = useState(false) 
  const navigate = useNavigate();
  const cartModals = useSelector(state => state.modal.hiddenModal)
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const {currentUser} = useSelector((state) => state.user)
  
  useEffect(() => {
      if(!cartModals){
      const timer = setTimeout(() =>dispatch(toggleModalHidden()), 1500);
      return () => clearTimeout(timer);
      }
  }, [cartModals]);

  return (
    <NavBarContainer>
      <ModalCart hiddenCart={cart.hidden}/>
      {!cartModals && (
        <CartModals hiddenCart={cartModals}/>
        )
      }
      
      <ModalUser/>
      <LogoContainer>
        <LogoImg onClick={() => navigate("/")}>
          <img src={Logo}/>
          <a>Money<span>NET</span></a>
        </LogoImg>
      </LogoContainer>
        <LinksContainer isOpen={clikedMenu}>
        <NavLinksLiStyled onClick={() => navigate("/")}>
          <a>Home</a>
        </NavLinksLiStyled>
        <NavLinksLiStyled onClick={() => navigate("/products")}>
          <a>Crypto</a>
        </NavLinksLiStyled>
        <NavLinksLiStyled onClick={() => navigate("/aboutus")}>
        <a>AboutUs</a>
        </NavLinksLiStyled>
        <UserLinksLiStyled onClick={() => navigate("/aboutus")}>
        <a>Usuario</a>
        </UserLinksLiStyled>
      </LinksContainer>
      
      <MenuLinksContainer>
      <MenuLinkA onClick={
        () => {
          if(currentUser){
            navigate("/")
            dispatch(toggleHiddenMenu())
          }else{
            navigate("/login")
          }
        }
      
      }>
        {
          currentUser ?
          `${currentUser.name}` :
          "Iniciar Sesión"
        }
      </MenuLinkA>
      <li><NavUserStyled onClick={() => {
            currentUser ?
            dispatch(toggleHiddenMenu()) :
            navigate("/login")}
          }><BiSolidUser/></NavUserStyled></li>
      <li><NavMenuStyled onClick={() => setclikedMenu(!clikedMenu)}><HiViewGrid/></NavMenuStyled></li>
      <li><NavCartStyled onClick={() => dispatch(toggleCartHidden())}><TiShoppingCart/></NavCartStyled></li>
      </MenuLinksContainer>
    </NavBarContainer>
  )
}

export default NavBar