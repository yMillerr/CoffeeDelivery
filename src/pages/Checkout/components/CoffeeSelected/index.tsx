import { useContext } from 'react'
import { ButtonsContainer, ButtonsWrapper, SelectedContainer } from './styles'

import { Minus, Trash, Plus } from 'phosphor-react'
import { CoffeeContext } from '../../../../context/CoffeesContext'

import { CoffeProps } from '../../../../context/CoffeesContext'

interface CoffeeSelectedProps {
  coffee: CoffeProps
}

export function CoffeeSelected({ coffee }: CoffeeSelectedProps) {
  const { removeCoffeeFromCart, updateCoffeeCheckout} = useContext(CoffeeContext)

  function handleRemoveCoffeeFromCart(){
    removeCoffeeFromCart(coffee)
  }

  function handleDecreaseAmount(){
    const coffeeAmount = coffee.amount - 1
    
    if(coffeeAmount <= 0){
      return alert('A quantidade não pode ser menor que 0')
    }
    updateCoffeeCheckout({...coffee, amount: coffeeAmount})
  }

  function handleUpAmount(){
    updateCoffeeCheckout({...coffee, amount: coffee.amount + 1})
  }
  
  return (
    <SelectedContainer className='cor'>
      <img src={coffee.coffeeImg} alt="" />

      <ButtonsContainer>
        <p>{coffee.title}</p>

        <ButtonsWrapper>
          <div>
            <button type="button" onClick={handleDecreaseAmount}>
              <Minus size={14} />
            </button>
            <span>{coffee.amount}</span>
            <button type="button" onClick={handleUpAmount}>
              <Plus size={14} />
            </button>
          </div>

          <button type="button" onClick={handleRemoveCoffeeFromCart}>
            <Trash size={16} />
            remover
          </button>
        </ButtonsWrapper>
      </ButtonsContainer>

      <p>R$ {coffee.price.toFixed(2).replace(".", ",")}</p>
    </SelectedContainer>
  )
}
