import { useFormContext } from "react-hook-form";

import { 
  InputContainer, 
  InputWrapper, 
} from "./styles";

export function AddressForm() {
  const { register } = useFormContext()

  return (
    <InputContainer>
      <input 
        type='number'
        placeholder='CEP'
        {...register('cep', { valueAsNumber: true,  })}
      />

      <input 
        type='text'
        placeholder='Rua'
        {...register('street')}
      />

      <InputWrapper>

        <input 
          type='number'
          placeholder='Número'
          {...register('houseNumber', { valueAsNumber: true})}
        />

        <input 
          type='text'
          placeholder='Complemento'
          {...register('complement')}
        />
      </InputWrapper>

      <InputWrapper>
        <input 
          type='text'
          placeholder='Bairro'
          {...register('district')}
        />

        <input 
          type='text'
          placeholder='Cidade'
          {...register('city')}
        />

        <input 
          type='text'
          placeholder='UF'
          {...register('region')}
        />
      </InputWrapper>
    </InputContainer>
  )
}