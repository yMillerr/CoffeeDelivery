import styled from 'styled-components'

export const SelectedContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  padding: 2.4rem 0 2.4rem;

  > img {
    width: 6.4rem;
    height: 6.4rem;
  }

  > p {
    font-weight: 700;
    color: ${(props) => props.theme['base-text']};

    margin-left: 2rem;

    align-self: flex-start;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.4rem;

    border-radius: 0.6rem;

    background-color: ${(props) => props.theme['base-button']};

    padding: 0.55rem 0.8rem;

    > button {
      border: none;
      background: none;

      svg {
        color: ${(props) => props.theme['purple-200']};
      }
    }

    span {
      color: ${(props) => props.theme['base-title']};
    }
  }

  > button {
    display: flex;
    align-items: center;
    gap: 0.4rem;

    border: none;
    border-radius: 0.6rem;

    background-color: ${(props) => props.theme['base-button']};

    padding: 0.7rem 0.8rem;

    svg {
      color: ${(props) => props.theme['purple-200']};
    }
  }

  > span {
    background-color: ${(props) => props.theme['base-button']};

    border-radius: 0.8rem;

    padding: 0.7rem 0.8rem;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > p {
    color: ${(props) => props.theme['base-title']};
    line-height: 130%;
  }
`
