import React from 'react'
import { BenefitsContainer } from './Benefits.Styled'
import { FlyersData } from '../../Data/FlyersData'
import Flyer from './Flyer'

const Benefis = () => {
    return (
        <BenefitsContainer>
            {
                FlyersData.map((flyer) => {
                    return <Flyer key={flyer.id} {...flyer}/>
                })
            }
        </BenefitsContainer>
    )
}

export default Benefis;