import styled from 'styled-components'

export const OrderConfirmedContainer = styled.div`
  max-width: 112rem;

  margin: 8rem auto;
  padding: 0 3.2rem;
  > h1 {
    color: ${(props) => props.theme['yellow-300']};
    font-size: 3.2rem;
    line-height: 130%;
  }

  > p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 2rem;
    line-height: 130%;

    margin-bottom: 3.4rem;
  }

  > main {
    display: flex;
    align-items: center;
    gap: 10.2rem;

    > img {
      max-width: 100%;
    }

    @media (max-width: 830px) {
      flex-direction: column;
    }
  }
`

export const OrderInfoContainer = styled.div`
  padding: 4rem;

  border: 1px solid rgba(128, 71, 248, 1);
  border-radius: 0.6rem 3.6rem 0.6rem 3.6rem;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`

export const OrderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  color: ${(props) => props.theme['base-text']};

  > div {
    padding: 0.8rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
      color: ${(props) => props.theme.white};
    }
  }
`

export const StreetInfo = styled(OrderInfo)`
  > svg {
    background-color: ${(props) => props.theme['purple-200']};
  }

  > div {
    background-color: ${(props) => props.theme['purple-200']};
  }
`

export const DeliveryInfo = styled(OrderInfo)`
  > div {
    background-color: ${(props) => props.theme['yellow-200']};
  }
`

export const PaymentInfo = styled(OrderInfo)`
  > div {
    background-color: ${(props) => props.theme['yellow-300']};
  }
`
