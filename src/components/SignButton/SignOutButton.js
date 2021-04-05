import React from 'react';
import { useDispatch } from 'react-redux';
import StyledSignButton from './SignButton.styled';

export default function SignOutButton({ onClick }) {
  const dispatch = useDispatch();
  return (
    <StyledSignButton onClick={() => dispatch(onClick())} type="button">
      로그아웃
    </StyledSignButton>
  );
}
