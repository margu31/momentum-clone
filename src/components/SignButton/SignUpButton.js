import React from 'react';
import StyledSignButton from './SignButton.styled';

export default function SignUpButton({ ...restProps }) {
  return (
    <StyledSignButton type="button" {...restProps}>
      회원가입
    </StyledSignButton>
  );
}
