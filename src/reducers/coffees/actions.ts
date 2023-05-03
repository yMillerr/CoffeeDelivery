import { CheckoutFormDataProps } from "../../pages/Checkout"

export enum ReducerActionTypes  {
  ADD_COFFEE_IN_CART = 'ADD_COFFEE_IN_CART',
  UPDATE_COFFEE_IN_CART = 'UPDATE_COFFEE_IN_CART',
  REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART',
  UPDATE_COFFEE_IN_CHECKOUT = 'UPDATE_COFFEE_IN_CHECKOUT',
  SET_PAYMENT_METHOD = 'SET_PAYMENT_METHOD',
  ADD_CHECKOUT_DATA = 'ADD_CHECKOUT_DATA',
  REMOVE_ALL_COFFEES_FROM_THE_CART = 'REMOVE_ALL_COFFEES_FROM_THE_CART',
}

export interface CoffeProps {
  id: number
  price: number
  coffeeImg: string
  tags?: string[]
  title: string
  description: string
  amount: number
}

export function addCoffeeInCartAction(updatedCoffee: CoffeProps){
  return {
    type: ReducerActionTypes.ADD_COFFEE_IN_CART,
    payload: {
      updatedCoffee
    }
  }
}

export function updateCoffeeInCartAction(updatedCoffee: CoffeProps){
  return {
    type: ReducerActionTypes.UPDATE_COFFEE_IN_CART,
    payload: {
      updatedCoffee
    }
  }
}

export function removeCoffeesFromCartAction(coffeeRemoved: CoffeProps){
  return {
    type: ReducerActionTypes.REMOVE_COFFEE_FROM_CART,
    payload: {
      coffeeRemoved
    }
  }
}

export function updateCoffeeInCheckoutAction(coffeeWithNewPrice: CoffeProps){
  return {
    type: ReducerActionTypes.UPDATE_COFFEE_IN_CHECKOUT,
    payload: {
      coffeeWithNewPrice
    }
  }
}

export function setPaymentMethodAction(method: string){
  return {
    type: ReducerActionTypes.SET_PAYMENT_METHOD,
    payload: {
      method
    }
  }
}

export function addCheckoutDataAction(data: CheckoutFormDataProps){
  return {
    type: ReducerActionTypes.ADD_CHECKOUT_DATA,
    payload: {
      data
    }
  }
}

export function removeAllCoffeesFromTheCartAction(){
  return {
    type: ReducerActionTypes.REMOVE_ALL_COFFEES_FROM_THE_CART,
    payload: {
      removeAllCoffeesFromTheCart: []
    }
  }
}