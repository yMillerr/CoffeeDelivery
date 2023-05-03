import { useContext } from 'react'

import {
  AddresButton,
  ButtonWrapper,
  CartButton,
  HeaderContainer,
} from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'
import logoImg from '../../assets/logo-img.svg'
import { CoffeeContext } from '../../context/CoffeesContext'

export function Header() {
  const { coffeesInCart, checkoutData } = useContext(CoffeeContext)

  return (
    <HeaderContainer>
      <img src={logoImg} alt="" />

      <ButtonWrapper>
        <AddresButton to="/">
          <MapPin size={22} weight="fill" />
            {
              !checkoutData.street || !checkoutData.region  ?  '' : `${checkoutData.street}, ${checkoutData.region}`
            }
        </AddresButton>

        <CartButton to="/checkout">
          <ShoppingCart size={22} weight="fill" />

          {coffeesInCart.length > 0 && <span>{coffeesInCart.length}</span>}
        </CartButton>
      </ButtonWrapper>
    </HeaderContainer>
  )
}
