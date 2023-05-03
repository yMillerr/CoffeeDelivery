import { useContext, useEffect, useState } from 'react'
import { CoffeeContext } from '../../context/CoffeesContext'

import {
  OrderInfoContainer,
  OrderConfirmedContainer,
  StreetInfo,
  DeliveryInfo,
  PaymentInfo,
} from './styles'

import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import deliveryIMG from '../../assets/delivery-img.png'

export function FinishedOrder() {
  const { checkoutData } = useContext(CoffeeContext)

  const [paymentMethod, setPaymentMethod] = useState<string[]>([])

  useEffect(() => {
    const getPaymentMethod = localStorage.getItem("coffeeDelivery@PaymentMethod-v1.1")

    if(getPaymentMethod){
      return setPaymentMethod(JSON.parse(getPaymentMethod))
    }
  }, [])

  return (
    <OrderConfirmedContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <main>
        <OrderInfoContainer>
          <StreetInfo>
            <div>
              <MapPin size={16} weight="fill" />
            </div>

            <p>
              Entrega em 
              <strong> {checkoutData.street}, {checkoutData.houseNumber}</strong> {checkoutData.complement} -
              {checkoutData.city} - {checkoutData.region}
            </p>
          </StreetInfo>

          <DeliveryInfo>
            <div>
              <Timer size={16} weight="fill" />
            </div>

            <p>
              Previsão de Entrega <br />
              <strong>20 min - 30 min</strong>
            </p>
          </DeliveryInfo>

          <PaymentInfo>
            <div>
              <CurrencyDollar size={16} weight="fill" />
            </div>
            <p>
              Pagamento na entrega <br />
              <strong>{paymentMethod}</strong>
            </p>
          </PaymentInfo>
        </OrderInfoContainer>

        <img src={deliveryIMG} alt="Entregador em uma moto" />
      </main>
    </OrderConfirmedContainer>
  )
}
