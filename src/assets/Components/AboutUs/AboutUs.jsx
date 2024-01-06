import React from 'react'
import { AboutUsContainer, AboutUsInfo, AboutUsMap, AboutUsMapContainer, AboutUsMore, AboutUsSocial, AboutUsSocialDetail, AboutUsSocialList } from './AboutUs.Styled'
import {ImLocation} from 'react-icons/im'
import {BsLinkedin, BsInstagram, BsFacebook, BsTwitter} from 'react-icons/bs'

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <AboutUsInfo>
        <h2>Acerca de Nosotros!</h2>
        <p>Somos <b>Money<span >Net</span></b>! estamos comprometidos con ofrecer 
        servicios financieros innovadores y accesibles para todos nuestros clientes. 
        Puedes contactarnos a través de nuestra línea telefónica en 0351-1234567, 
        o escribirnos por correo electrónico a info@moneybank.com.ar.
        </p>
        <p>
        ¡Gracias por confiar en <b>Money<span>Net</span></b> para tus operaciones financieras!
        </p>
      </AboutUsInfo>
      <AboutUsMore>
        <AboutUsMap>
          <AboutUsMapContainer>
            <iframe
            class="aboutus-iframe"
            width="600px"
            min-width="300px"
            height="500px"
            min-height="300px"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Colon 550 Cordoba&t=&z=16&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            ></iframe>
          </AboutUsMapContainer>
          <a><ImLocation/><span>Av.colon 550, Cordoba, Argentina</span></a>
        </AboutUsMap>
        <AboutUsSocial>
          <h2>Seguinos en nuestras Redes</h2>
          <AboutUsSocialDetail>
            <img src="https://res.cloudinary.com/dz4oxre7x/image/upload/v1691432936/cells_tlqyiv.png" alt="Redes" />
            <AboutUsSocialList>
              <li><a href=""><span><BsLinkedin/></span> @moneybank.arg</a></li>
              <li><a href=""><span><BsInstagram/></span> @moneybank.arg</a></li>
              <li><a href=""><span><BsFacebook/></span> /moneybank.arg</a></li>
              <li><a href=""><span><BsTwitter/></span> @moneybank_arg</a></li>
            </AboutUsSocialList>
          </AboutUsSocialDetail>
        </AboutUsSocial>
      </AboutUsMore>
    </AboutUsContainer>
  )
}

export default AboutUs