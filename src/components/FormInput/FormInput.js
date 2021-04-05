import React from 'react';
import {
  StyledError,
  StyledFormControl,
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
} from './FormInput.styled';

export default function FormInput({
  id,
  label,
  placeholder,
  value,
  error,
  ...restProps
}) {
  return (
    <StyledFormControl>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInputWrapper isError={!!error}>
        <StyledInput
          placeholder={placeholder}
          id={id}
          value={value}
          {...restProps}
        />
      </StyledInputWrapper>
      {error && <StyledError role="alert">{error}</StyledError>}
    </StyledFormControl>
  );
}
