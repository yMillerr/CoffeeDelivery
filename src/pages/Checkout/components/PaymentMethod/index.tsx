import { useContext, useState} from 'react'
import { PaymentMethodContainer } from './styles'
import { CoffeeContext } from '../../../../context/CoffeesContext'

interface PaymentMethodProps {
  icon: any
  content: string
}

export function PaymentMethod({ icon: Icon, content }: PaymentMethodProps) {

  const { paymentMethod, addPaymentMethod } = useContext(CoffeeContext)

  function handleSetPaymentMethod(content: string){
    const [ methodSelect = content ] = paymentMethod.map(method => {
      if(method === content){
        return '' 
      }

      return content
    })

    addPaymentMethod(methodSelect)
  }

  return (
    <PaymentMethodContainer 
      type='button' 
      onClick={() => handleSetPaymentMethod(content)}
    >
      <div className={content === paymentMethod[0] ? 'methodSelected' : ''}>
        {Icon && <Icon />}

        {content}
      </div>
    </PaymentMethodContainer>
  )
}
