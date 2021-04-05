import React from 'react';
import {
  StyledFormControl,
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
} from './FormInput.styled';

export default function FormInput({
  id,
  label,
  hasError,
  placeholder,
  value,
  ...restProps
}) {
  return (
    <StyledFormControl>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInputWrapper isError={hasError}>
        <StyledInput
          placeholder={placeholder}
          id={id}
          value={value}
          {...restProps}
        />
      </StyledInputWrapper>
    </StyledFormControl>
  );
}
