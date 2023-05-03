import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import * as zod from 'zod'

import { CreditCard, CurrencyDollar, MapPin, Bank, Money } from 'phosphor-react'
import {
  AdressContainer,
  CheckoutContainer,
  PaymentContainer,
  SelectButtonsContainer,
  PricesContainer,
  ConfirmCheckoutContainer,
} from './styles'

import { CoffeeContext } from '../../context/CoffeesContext'

import { CoffeeSelected } from './components/CoffeeSelected'
import { PaymentMethod } from './components/PaymentMethod'
import { AddressForm } from './components/AddressForm/AddressForm'

const zodValidationSchema = zod.object({
  region: zod.string().toUpperCase().nonempty('Esse campo é obrigatório'),
  cep: zod.number({ invalid_type_error: 'Esse campo é obrigatório'}),
  street: zod.string().nonempty('Esse campo é obrigatório'),
  complement: zod.string().optional(),
  houseNumber: zod.number({ invalid_type_error: 'Esse campo é obrigatório'}),
  district: zod.string().nonempty('Esse campo é obrigatório'),
  city: zod.string().nonempty('Esse campo é obrigatório.'),
})

export type CheckoutFormDataProps = zod.infer<typeof zodValidationSchema>

export function Checkout() {
  const navigate = useNavigate()

  const [total, setTotal] = useState(0)

  const addressForm = useForm<CheckoutFormDataProps>({
    resolver: zodResolver(zodValidationSchema),
  })

  const { reset, handleSubmit } = addressForm

  const { 
    coffeesInCart, 
    addCheckoutData, 
    paymentMethod,
    removeAllCoffeesFromTheCart
  } = useContext(CoffeeContext)

  const deliveryFee = 5 

  const paymentMethodCondition = paymentMethod[0] === '' || paymentMethod.length === 0

  const conditionToButtonEnable = paymentMethodCondition || coffeesInCart.length <= 0

  function handleFormData(data: CheckoutFormDataProps){
    addCheckoutData(data)
    
    if (!data){
      return alert('Não foi possível realizar o pedido')
    }

    removeAllCoffeesFromTheCart()
    navigate("/sucess")

    reset()
  }

  useEffect(() => {
    const totalOfSumCoffeesPrices = coffeesInCart.reduce((acc, coffeePrice) => {
      acc += coffeePrice.price

      const formatNumber = acc.toFixed(2)

      return Number(formatNumber)
    }, deliveryFee)

    setTotal(totalOfSumCoffeesPrices)

    localStorage.setItem("coffeeDelivery@PaymentMethod-v1.1", JSON.stringify(paymentMethod))
    
  },[coffeesInCart, paymentMethod])

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleFormData)}>
        <AdressContainer>
          <h2>Complete seu pedido</h2>
          <div className="adress-title">
            <MapPin size={22} />

            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o Endereço onde deseja receber seu pedido</p>
            </div>
          </div>
          
          <FormProvider {...addressForm}>
            <AddressForm />
          </FormProvider>
        </AdressContainer>

        <PaymentContainer>
          <div className="payment-dollar-title">
            <CurrencyDollar size={22} />

            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>

          <SelectButtonsContainer>
            <PaymentMethod 
              icon={CreditCard} 
              content="Cartão de credito" 
            />

            <PaymentMethod 
              icon={Bank} 
              content="Cartão de debito" 
            />

            <PaymentMethod 
              icon={Money} 
              content="Dinheiro" 
            />
          </SelectButtonsContainer>
        </PaymentContainer>

        <ConfirmCheckoutContainer>
          <h2>Cafés selecionados</h2>

          {coffeesInCart &&
            coffeesInCart.map((coffee) => (
              <CoffeeSelected
                key={coffee.id}
                coffee={coffee}
              />
            ))}

          <PricesContainer>
            <p>Produtos</p>
            <span>{coffeesInCart.length === 0 ? '0,00': (total - deliveryFee).toFixed(2).replace(".", ",")}</span>
            <p>Entrega</p>
            <span>5,00</span>
            <strong>Total</strong>
            <strong>{coffeesInCart.length === 0 ? '0,00': total.toFixed(2).replace(".", ",")}</strong>
          </PricesContainer>

          <button 
            type='submit' 
            disabled={conditionToButtonEnable}
          >
            Confimar Pedido
          </button>
        </ConfirmCheckoutContainer>
      </form>
    </CheckoutContainer>
  )
}
