import React from 'react'
import { HeroBtns, HeroContainer, HeroLogo, Heroinfo } from './Hero.Styled'
import Logo from '../../Images/img/Logo_Circ.png'
import { Button } from '../UX/Button/Button'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Hero = () => {
const Usuario = useSelector(state => state.user.currentUser)
  const navigate = useNavigate();
  return (
    <HeroContainer>
        <HeroLogo>
            <img src={Logo} alt="" />
            <h1>Money<span>NET</span></h1>
        </HeroLogo>
        <Heroinfo>
            Somos <b>Money<span>NET</span></b> , un banco online que te ofrece 
            servicios bancarios tradicionales, así como la 
            compra y venta de criptomonedas, como Bitcoin, 
            Ethereum y Stable Coins.
        </Heroinfo>
        <HeroBtns>
          {
            !Usuario? (
              <Button onClick={() => navigate("/login")}>Ingresa</Button>
            ) : (
            Usuario.verified ===true? (
              <h2>Buenveníd@ {Usuario.name}, ya estas listo para operar!</h2>
            ) : (
              <Button onClick={() => navigate("/verifyuser")}>Verificar Cuenta</Button> 
              )
            )
          }
        </HeroBtns>
    </HeroContainer>
  )
}

export default Hero