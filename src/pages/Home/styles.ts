import styled from 'styled-components'
import backgroundImg from '../../assets/background-img.png'

export const HomeContainer = styled.div`
  font-size: 2rem;
`

export const HeaderContainer = styled.div`
  min-height: 54.4rem;
  width: 100%;

  padding: 0 3.2rem;

  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5.6rem;

  > img {
    max-width: 47.6rem;
    width: 100%;
  }

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`

export const TitleContainer = styled.div`
  max-width: 58.8rem;

  > h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 4.8rem;
    font-weight: 800;
    line-height: 130%;
  }

  > p {
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;

    margin-top: 1.6rem;
  }

  @media (max-width: 1000px) {
    > h1 {
      font-size: 4rem;
    }

    > p {
      font-size: 1.6rem;
    }
  }
`

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  row-gap: 2rem;

  margin-top: 6.6rem;
`

export const CoffeesContainer = styled.div`
  max-width: 112rem;

  margin: 4.2rem auto 15.7rem;

  display: flex;
  flex-direction: column;
  > h2 {
    color: ${(props) => props.theme['base-title']};
    font-size: 3.2rem;
    font-weight: 800;
    line-height: 130%;
    font-family: 'Baloo 2', cursive;

    align-self: start;
  }
`

export const CoffeesWrapper = styled.div`
  margin-top: 5.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3.2rem;
  row-gap: 4rem;
`
