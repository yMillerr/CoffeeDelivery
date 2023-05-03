import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  > form {
    max-width: 112rem;

    display: grid;
    grid-template-areas:
      'adress checkout'
      'payment checkout';
    gap: 3.2rem;
    row-gap: 1.2rem;

    margin: 0 auto;

    > h2 {
      color: ${(props) => props.theme['base-subtitle']};

      margin-bottom: 1.5rem;
    }
  }
`

export const AdressContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};

  border-radius: 0.6rem;

  padding: 4rem;

  grid-area: adress;

  > .adress-title {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    margin-bottom: 3.2rem;

    svg {
      color: ${(props) => props.theme['yellow-300']};

      align-self: start;
    }

    div {
      h3 {
        color: ${(props) => props.theme['base-subtitle']};
        font-weight: 400;
        line-height: 130%;
      }

      p {
        color: ${(props) => props.theme['base-text']};
        font-size: 1.4rem;
        line-height: 130%;
      }
    }
  }
`

export const PaymentContainer = styled.div`
  grid-area: payment;

  background-color: ${(props) => props.theme['base-card']};

  padding: 4rem;

  > .payment-dollar-title {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    > svg {
      color: ${(props) => props.theme['purple-200']};

      align-self: flex-start;
    }

    > div {
      margin-bottom: 3.2rem;

      h3 {
        color: ${(props) => props.theme['base-subtitle']};
        font-weight: 400;
        line-height: 130%;
      }

      p {
        font-size: 1.4rem;
        color: ${(props) => props.theme['base-text']};
        line-height: 130%;
      }
    }
  }
`

export const SelectButtonsContainer = styled.div`
  max-width: 56rem;

  display: flex;
  align-items: center;
  gap: 1.2rem;
`

export const ConfirmCheckoutContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};

  padding: 4rem;

  border-radius: 0.6rem 4.4rem 0.6rem 4.4rem;

  grid-area: checkout;
  > button {
    text-transform: uppercase;
    color: ${(props) => props.theme.white};

    width: 100%;
    height: 4.6rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 0.6rem;

    background-color: ${(props) => props.theme['yellow-200']};

    &:disabled {
      filter: opacity(.6);
    }
  }
`

export const PricesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;

  margin: 2.4rem 0 2.4rem;

  > strong {
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
