import { useContext } from 'react'

import {
  CoffeesContainer,
  CoffeesWrapper,
  HeaderContainer,
  HomeContainer,
  ItemContainer,
  TitleContainer,
} from './styles'

import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import CoffeeImg from '../../assets/coffee-img.png'

import { Item } from './components/Item'
import { CoffeeCup } from './components/Coffee'
import { CoffeeContext } from '../../context/CoffeesContext'

export function Home() {

  const { coffees } = useContext(CoffeeContext)

  return (
    <HomeContainer>
      <HeaderContainer>
        <div>
          <TitleContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>

            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </TitleContainer>

          <ItemContainer>
            <Item
              content="Compra simples e segura"
              icon={ShoppingCart}
              varient="orange"
            />

            <Item
              content="Entrega rápida e rastreada"
              icon={Timer}
              varient="yellow"
            />

            <Item
              content="Embalagem mantém o café intacto"
              icon={Package}
              varient="black"
            />

            <Item
              content="O café chega fresquinho até você"
              icon={Coffee}
              varient="purple"
            />
          </ItemContainer>
        </div>
        <img src={CoffeeImg} alt="" />
      </HeaderContainer>

      <CoffeesContainer>
        <h2>Nossos Cafés</h2>

        <CoffeesWrapper>
          {coffees &&
            coffees.map((coffee) => (
              <CoffeeCup
                coffee={coffee}
                key={coffee.id}
              />
            ))}
        </CoffeesWrapper>
      </CoffeesContainer>
    </HomeContainer>
  )
}
