import { CheckoutFormDataProps } from "../../pages/Checkout"
import { ReducerActionTypes, CoffeProps } from "./actions"

import { produce } from "immer"

interface coffeeState {
  coffeesInCart: CoffeProps[]
  paymentMethod: string[]
  checkoutData: CheckoutFormDataProps
}

export function CoffeesReducer(state: coffeeState, action: any) {
  switch (action.type) {
    case ReducerActionTypes.ADD_COFFEE_IN_CART:
      return produce(state, (draft) => {
        draft.coffeesInCart.push(action.payload.updatedCoffee)
      })

    case ReducerActionTypes.REMOVE_COFFEE_FROM_CART:
      return produce(state, (draft) => {
        const coffeToRemove = draft.coffeesInCart.filter(
          coffee => coffee.id !== action.payload.coffeeRemoved.id
        )
          
        if(!coffeToRemove){
          return state
        }
          
        draft.coffeesInCart = coffeToRemove
      })
    
    case ReducerActionTypes.UPDATE_COFFEE_IN_CART:
      return produce(state, (draft) => {
        const CoffeeUpdatedInCart = draft.coffeesInCart.map(coffee => {
          const updatedAmountAndPriceCodition = coffee.id === action.payload.updatedCoffee.id 
          && coffee.amount !== action.payload.updatedCoffee.amount

          if(updatedAmountAndPriceCodition){
            return {
              ...coffee,
              amount: action.payload.updatedCoffee.amount,
              price: action.payload.updatedCoffee.price
            }
          }

          return coffee
        })

        draft.coffeesInCart = CoffeeUpdatedInCart
      })
    
    case ReducerActionTypes.UPDATE_COFFEE_IN_CHECKOUT: 
      return produce(state, (draft) => {
        const updatedCoffeeInCheckout = draft.coffeesInCart.map(coffee => {
          if (coffee.id === action.payload.coffeeWithNewPrice.id) {
            return {
              ...coffee, 
              amount: action.payload.coffeeWithNewPrice.amount,
              price: action.payload.coffeeWithNewPrice.price
            }
          }

          return coffee
        })

        draft.coffeesInCart = updatedCoffeeInCheckout
      })
    
    case ReducerActionTypes.REMOVE_ALL_COFFEES_FROM_THE_CART:  
      return produce(state, (draft) => {
        draft.coffeesInCart = []
      })

    case ReducerActionTypes.SET_PAYMENT_METHOD: 
      return produce(state, (draft) => {
        draft.paymentMethod = [action.payload.method]
      })
      
    case ReducerActionTypes.ADD_CHECKOUT_DATA: 
      return produce(state, (draft) => {
        draft.checkoutData = {...action.payload.data}
      })
    default:
       return state
  }
}