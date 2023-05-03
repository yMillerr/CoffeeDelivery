import { createContext, ReactNode, useEffect, useReducer } from 'react'

import latteCoffee from '../assets/coffees-img/coffee-latte.png'
import tradicionalCoffee from '../assets/coffees-img/coffee-tradicional.png'

import { CheckoutFormDataProps } from '../pages/Checkout'
import { 
  CoffeProps,
  addCoffeeInCartAction, 
  updateCoffeeInCartAction,
  updateCoffeeInCheckoutAction,
  removeCoffeesFromCartAction,
  addCheckoutDataAction,
  removeAllCoffeesFromTheCartAction,
  setPaymentMethodAction
} from '../reducers/coffees/actions'

import { CoffeesReducer } from '../reducers/coffees/reducer'

interface CoffeeProviderProps {
  children: ReactNode
}

interface CoffeeContextProps {
  coffeesInCart: CoffeProps[]
  coffees: CoffeProps[]
  paymentMethod: string[]
  checkoutData: CheckoutFormDataProps
  addCoffeeInTheCart: (coffee: CoffeProps) => void
  removeCoffeeFromCart: (deleteCoffee: CoffeProps) => void
  updateCoffeeCheckout: (updatedCoffee: CoffeProps) => void
  addPaymentMethod: (method: string) => void
  addCheckoutData: (data: CheckoutFormDataProps) => void
  removeAllCoffeesFromTheCart: () => void
}

export const CoffeeContext = createContext({} as CoffeeContextProps)

export function CoffeesContextProvider({ children }: CoffeeProviderProps) {
  const [coffeesState, dispatch] = useReducer(
    CoffeesReducer,
  {
    coffeesInCart: [],
    paymentMethod: [],
    checkoutData: {},
  },
  (initialState) => {
    const updatedState = localStorage.getItem("coffeeDelivery@v1.1")

    if (updatedState) {
      return JSON.parse(updatedState)
    }

    return initialState
  })

  const coffees = [
    {
      id: 1,
      title: 'Latte',
      description: 'Café com latte',
      coffeeImg: latteCoffee,
      tags: ['latte', 'muito bom'],
      price: 9.99,
      amount: 1,
    },
    {
      id: 2,
      title: 'Café tradicional',
      description: 'Café quetinho',
      coffeeImg: tradicionalCoffee,
      tags: ['tradicional'],
      amount: 1,
      price: 9,
    },
  ]

  const { coffeesInCart, paymentMethod, checkoutData } = coffeesState

  function addCoffeeInTheCart(updatedCoffee: CoffeProps) {
    const haveThisCoffeeInTheCart = coffeesInCart.find(coffee => coffee.id == updatedCoffee.id)

    if (!haveThisCoffeeInTheCart) {
      dispatch(addCoffeeInCartAction(updatedCoffee))
    } else {
      dispatch(updateCoffeeInCartAction(updatedCoffee))
    }
  }

  function updateCoffeeCheckout(updatedCoffee: CoffeProps){
    const coffeeWithPriceUpdated = coffees.map(coffeeWithOriginalPrice => {
      if(coffeeWithOriginalPrice.id === updatedCoffee.id){
        return {
          ...coffeeWithOriginalPrice,
          price: updatedCoffee.amount * coffeeWithOriginalPrice.price,
          amount: updatedCoffee.amount
        }
      }

      return coffeeWithOriginalPrice
    })

    const CoffeeIndex = coffeeWithPriceUpdated.findIndex(
      coffeeIndexWhitPriceUpdated => coffeeIndexWhitPriceUpdated.id === updatedCoffee.id
    )
    const coffeeWithNewPrice = coffeeWithPriceUpdated[CoffeeIndex]

    dispatch(updateCoffeeInCheckoutAction(coffeeWithNewPrice))
  }

  function removeCoffeeFromCart(coffeeRemoved: CoffeProps){
    dispatch(removeCoffeesFromCartAction(coffeeRemoved))
  }

  function addPaymentMethod(method: string){
    dispatch(setPaymentMethodAction(method))
  }

  function addCheckoutData(data: CheckoutFormDataProps){
    dispatch(addCheckoutDataAction(data))
  }

  function removeAllCoffeesFromTheCart(){
    dispatch(removeAllCoffeesFromTheCartAction())
  }

  useEffect(() => {
    const coffeeStateToString = JSON.stringify({...coffeesState, paymentMethod: []})

    localStorage.setItem("coffeeDelivery@v1.1", coffeeStateToString)
  }, [coffeesState])

  return (
    <CoffeeContext.Provider value={{ 
        addCoffeeInTheCart, 
        coffeesInCart,
        removeCoffeeFromCart,
        updateCoffeeCheckout,
        coffees,
        addPaymentMethod,
        paymentMethod,
        addCheckoutData,
        checkoutData,
        removeAllCoffeesFromTheCart
      }}>
      {children}
    </CoffeeContext.Provider>
  )
}
