import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyledButton, StyledCloseButton, StyledDialog } from './Dialog.styled';
import {
  handleSignInGoogleAuthProvider,
  handleSignInWithEmailAndPassword,
} from 'api/firebase';
import FormInput from '../FormInput/FormInput';

const initialSignInFormValues = {
  email: '',
  password: '',
  isAutoLogin: false,
  hasError: {
    email: null,
    password: null,
  },
};

export default function SignInDialog({ onClose }) {
  const dispatch = useDispatch();
  const [formData, setFormdata] = useState(initialSignInFormValues);

  const handleChange = e => {
    const { name, value } = e.target;

    const newState = {
      ...formData,
      [name]: value.trim(),
    };

    setFormdata(newState);
  };

  const onSubmit = formdata => {
    const { email, password } = Object.fromEntries(formdata.entries());

    dispatch(handleSignInWithEmailAndPassword(email, password, onClose));
  };

  const handleSubmit = e => {
    e.preventDefault();

    // 썹밋 핸들링

    const { hasError, ...requestFormdata } = formData;
    const formdata = new FormData();

    Object.entries(requestFormdata).forEach(([key, value]) =>
      formdata.append(key, value),
    );

    onSubmit(formdata);
  };

  return (
    <StyledDialog>
      <FormInput
        label="아이디"
        name="email"
        id="email"
        placeholder="아이디를 입력하세요."
        onChange={handleChange}
      />
      <FormInput
        label="비밀번호"
        name="password"
        id="password"
        placeholder="비밀번호를 입력하세요."
        type="password"
        onChange={handleChange}
      />
      <StyledButton onClick={handleSubmit} type="button">
        로그인
      </StyledButton>
      <StyledButton
        onClick={() => dispatch(handleSignInGoogleAuthProvider(onClose))}
        type="button"
      >
        구글 로그인
      </StyledButton>
      <StyledCloseButton type="button" onClick={onClose}>
        X
      </StyledCloseButton>
    </StyledDialog>
  );
}
