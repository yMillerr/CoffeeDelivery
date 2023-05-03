import { ItemContainer, VarientProps } from './styles'

export interface ItemProps {
  icon: any
  content: string
  varient: VarientProps
}

export function Item({ varient, icon: Icon, content }: ItemProps) {
  return (
    <ItemContainer icon={''} content={''} varient={varient}>
      <p>{Icon && <Icon size={16} weight="fill" />}</p>
      <span>{content}</span>
    </ItemContainer>
  )
}
