import styled from 'styled-components'
import { ItemProps } from '.'

const VarientsProps = {
  orange: 'yellow-300',
  purple: 'purple-300',
  yellow: 'yellow-200',
  black: 'base-text',
} as const

export type VarientProps = keyof typeof VarientsProps

export const ItemContainer = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  color: ${(props) => props.theme['base-text']};
  font-size: 1.6rem;
  line-height: 130%;

  > p {
    background-color: ${(props) => props.theme[VarientsProps[props.varient]]};

    padding: 0.8rem;

    border-radius: 50%;

    color: ${(props) => props.theme.white};

    display: flex;
    align-items: center;
    justify-content: center;
  }
`
