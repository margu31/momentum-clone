import React from 'react';
import StyledSignButton from './SignButton.styled';

export default function SignInButton({ onClick, onClose, ...restProps }) {
  return (
    <StyledSignButton onClick={onClick} type="button" {...restProps}>
      로그인
    </StyledSignButton>
  );
}
