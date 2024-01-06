import React from 'react'
import { CardsContainer, CategoriesCardsContainer, CryptoContainer } from './Crypto.Styled'
import CryptoCard from './CryptoCards'
import { useSelector } from 'react-redux'
import Categoria from './CategoriesCard'

const Crypto = () => {

  const {products} = useSelector((state) => state.products)
  const {categories} = useSelector((state) => state.categories)
  const {selectedCategory} = useSelector((state) => state.categories)

  let filteredProducts = products

  if (selectedCategory) {
    filteredProducts = products.filter((product) => product.cointype === selectedCategory)
  }

  return (
    <CryptoContainer>
      <h2>Comenza ahora mismo!</h2>
      <h4>Selecciona una categoria</h4>
      <CategoriesCardsContainer>    
        {
          categories.map((category) => {
            return <Categoria key={category.id} {...category}/>
          })
        }
      </CategoriesCardsContainer>
      <h4>Nuestas Crypto</h4>
      <CardsContainer>
        {
          filteredProducts.map((product) => {
            return <CryptoCard key={product.id} {...product}/>
          })
          }
      </CardsContainer>
    </CryptoContainer>
  )
}

export default Crypto