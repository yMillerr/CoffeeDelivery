import styled from 'styled-components'

export const PaymentMethodContainer = styled.button`
  border: none;

  div {
    background-color: ${(props) => props.theme['base-button']};

    border-radius: 0.6rem;

    max-width: 18rem;
    width: 100%;

    padding: 1.6rem;

    display: flex;
    align-items: center;
    gap: 1.2rem;

    text-transform: uppercase;
    color: ${(props) => props.theme['base-text']};
    font-size: 1.2rem;

    > svg {
      color: ${(props) => props.theme['purple-300']};
    }
  }
  .methodSelected {
    background-color: ${props => props.theme['purple-100']};

    outline: 2px solid ${props => props.theme['purple-300']};
  }

`
