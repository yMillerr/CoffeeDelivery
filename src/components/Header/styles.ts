import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  width: 100%;

  padding: 3.2rem 16rem;

  @media (max-width: 720px) {
    padding: 3.2rem 3.2rem;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`

const ButtonsBase = styled(Link)`
  background: transparent;

  padding: 0.8rem;

  border-radius: 6px;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;

  cursor: pointer;
`
export const CartButton = styled(ButtonsBase)`
  background-color: ${(props) => props.theme['yellow-100']};

  position: relative;

  transition: filter 0.3s;

  > svg {
    color: ${(props) => props.theme['yellow-300']};
  }

  > span {
    min-width: 2rem;

    padding: 0.2rem;

    color: ${(props) => props.theme.white};
    font-weight: bold;
    font-size: 1.2rem;

    border-radius: 1000px;

    background-color: ${(props) => props.theme['yellow-300']};

    position: absolute;
    top: -0.5rem;
    right: -1rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    filter: brightness(0.9);
  }
`

export const AddresButton = styled(ButtonsBase)`
  background-color: ${(props) => props.theme['purple-100']};

  transition: filter 0.3s;

  color: ${(props) => props.theme['purple-300']};

  > svg {
    color: ${(props) => props.theme['purple-300']};
  }

  &:hover {
    filter: brightness(0.9);
  }
`
