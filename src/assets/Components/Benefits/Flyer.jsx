import React from 'react'
import { FlyerContainer, FlyerInfo } from './Benefits.Styled'

const Flyer = ({title, description, img}) => {
  return (
    <FlyerContainer>
      <img src={img} alt={title}/>
      <FlyerInfo>
        <h2>{title}</h2>
        <p>{description}</p>
      </FlyerInfo>
    </FlyerContainer>
  )
}

export default Flyer