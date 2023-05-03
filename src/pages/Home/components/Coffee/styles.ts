import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  width: 25.6rem;
  height: 31rem;

  background-color: ${(props) => props.theme['base-card']};

  border-radius: 6px 36px 6px 36px;

  padding: 0 2rem;

  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 3.3rem;

  > footer {
    display: flex;
    align-items: center;
    gap: 2.3rem;

    color: ${(props) => props.theme['base-text']};

    > span {
      font-size: 1.4rem;
      line-height: 130%;

      > strong {
        font-size: 2.4rem;
        font-weight: 700;
        font-family: 'Baloo 2', cursive;
      }
    }
  }
`

export const HeaderContainer = styled.div`
  margin-top: -3.4rem;

  > h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 700;
    line-height: 130%;

    margin-top: 1.6rem;
  }

  > p {
    font-size: 1.4rem;
    color: ${(props) => props.theme['base-label']};
  }
`

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  margin-top: 1.2rem;
  > span {
    padding: 0.4rem 0.8rem;

    font-size: 1rem;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-300']};

    text-transform: uppercase;

    border-radius: 999px;

    background-color: ${(props) => props.theme['yellow-100']};
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  > button {
    border: none;
    border-radius: 0.6rem;

    background-color: ${(props) => props.theme['purple-300']};

    padding: 0.8rem;

    > svg {
      color: ${(props) => props.theme.white};
    }
  }
`

export const ButtonsControll = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  background-color: ${(props) => props.theme['base-button']};

  width: 7.2rem;
  height: 3.8rem;

  border-radius: 0.6rem;

  > button {
    border: none;
    background: none;

    > svg {
      color: ${(props) => props.theme['purple-300']};
    }
  }

  > span {
    color: ${(props) => props.theme['base-title']};
    line-height: 130%;
    font-size: 1.6rem;
  }
`
