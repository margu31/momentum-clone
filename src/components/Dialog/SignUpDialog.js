import React, { useState } from 'react';
import { signUpWithEmailAndPassword } from 'api/firebase';
import { StyledButton, StyledCloseButton, StyledDialog } from './Dialog.styled';
import FormInput from '../FormInput/FormInput';

const initialSignUpFormValues = {
  displayName: '',
  email: '',
  password: '',
  passwordConfirm: '',
  hasError: {
    email: null,
    password: null,
  },
};

export default function SignUpDialog({ onClose }) {
  const [formValue, setFormValue] = useState(initialSignUpFormValues);

  const handleChange = e => {
    const { name, value, checked } = e.target;

    const newState = {
      ...formValue,
      [name]: value.trim(),
    };

    setFormValue(newState);
  };

  const onSubmit = async formdata => {
    const { displayName, email, password } = Object.fromEntries(
      formdata.entries(),
    );

    console.log(displayName);
    await signUpWithEmailAndPassword(email, password, { displayName });

    onClose();
  };

  const handleSubmit = e => {
    e.preventDefault();

    // 썹밋 핸들러

    // 에러, 폼데이터 불러오기
    const { hasError, ...requestFormData } = formValue;

    const formdata = new FormData();

    Object.entries(requestFormData).forEach(([key, value]) =>
      formdata.append(key, value),
    );

    onSubmit(formdata);
  };
  return (
    <StyledDialog>
      <FormInput
        label="이름"
        name="displayName"
        id="displayName"
        placeholder="이름"
        onChange={handleChange}
      />
      <FormInput
        label="이메일"
        name="email"
        id="email"
        placeholder="아이디(이메일)"
        onChange={handleChange}
      />
      <FormInput
        label="비밀번호"
        name="password"
        id="password"
        placeholder="비밀번호"
        type="password"
        onChange={handleChange}
      />
      <FormInput
        label="비밀번호 확인"
        name="passwordConfirm"
        id="passwordConfirm"
        placeholder="비밀번호 확인"
        type="password"
        onChange={handleChange}
      />
      <StyledButton type="submit" onClick={handleSubmit}>
        회원가입
      </StyledButton>
      <StyledCloseButton type="button" onClick={onClose}>
        X
      </StyledCloseButton>
    </StyledDialog>
  );
}
