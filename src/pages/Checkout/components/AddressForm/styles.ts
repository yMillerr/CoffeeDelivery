import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  max-width: 56rem;

  > input {
    border-radius: 0.4rem;
    border: 1px solid ${(props) => props.theme['base-button']};

    padding: 1.2rem;

    background-color: ${(props) => props.theme['base-input']};

    color: ${(props) => props.theme['base-text']};
    font-size: 1.4rem;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }

  > input:nth-child(2) {
    max-width: 20rem;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  > input {
    border-radius: 0.4rem;
    border: 1px solid ${(props) => props.theme['base-button']};

    padding: 1.2rem;

    background-color: ${(props) => props.theme['base-input']};

    color: ${(props) => props.theme['base-text']};
    font-size: 1.4rem;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }

  input:nth-child(1) {
    max-width: 20rem;
    width: 100%;
  }

  input:nth-child(2) {
    width: 100%;
  }

  input:nth-child(3) {
    max-width: 6rem;
  }
`