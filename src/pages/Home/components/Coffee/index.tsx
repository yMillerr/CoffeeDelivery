import { useContext, useState } from 'react'

import {
  CoffeeContainer,
  ButtonsContainer,
  HeaderContainer,
  TagsContainer,
  ButtonsControll,
} from './styles'

import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { CoffeeContext } from '../../../../context/CoffeesContext'

import { CoffeProps } from '../../../../context/CoffeesContext'

interface CoffeeCupProps {
  coffee: CoffeProps
}

export function CoffeeCup({ coffee }: CoffeeCupProps) {
  
  const { addCoffeeInTheCart, coffeesInCart , coffees} = useContext(CoffeeContext)

  const [amount, setAmount] = useState(coffeesInCart.reduce((acc, amountCoffee) => {
    if(amountCoffee.id === coffee.id){
      return acc = amountCoffee.amount
    }

    return acc
  }, 1))

  function handleAddAmount() {
    setAmount((state) => state + 1)
  }

  function handleRemoveAmount() {
    setAmount((state) => {
      const updatedState = state - 1

      if (updatedState <= 0) {
        alert('Você precisa ter no minimo 1 café')
        return 1
      }

      return updatedState
    })
  }

  function handleSetCoffee(coffee: CoffeProps) {
    const coffeeOriginalPrice = coffees.map(coffeePrice => coffeePrice.price)
    const indexCoffeePrice = coffees.findIndex(coffeeIndex => coffeeIndex.id === coffee.id)

    const coffeeUpdated = { 
      ...coffee, 
      amount,
      price: coffeeOriginalPrice[indexCoffeePrice] * amount
    }

    addCoffeeInTheCart(coffeeUpdated)
  }

  return (
    <CoffeeContainer>
      <HeaderContainer>
        <img src={coffee.coffeeImg} alt="" />
        <TagsContainer>
          {coffee.tags &&
            coffee.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </TagsContainer>
        <h2>{coffee.title}</h2>
        <p>{coffee.description}</p>
      </HeaderContainer>

      <footer>
        <span>
          RS <strong>{coffee.price.toFixed(2).replace(".", ",")}</strong>
        </span>

        <ButtonsContainer>
          <ButtonsControll>
            <button onClick={handleRemoveAmount}>
              <Minus weight="fill" size={14} />
            </button>
            <span>{amount}</span>
            <button onClick={handleAddAmount}>
              <Plus weight="fill" size={14} />
            </button>
          </ButtonsControll>

          <button onClick={() => handleSetCoffee(coffee)}>
            <ShoppingCartSimple weight="fill" size={22} />
          </button>
        </ButtonsContainer>
      </footer>
    </CoffeeContainer>
  )
}
