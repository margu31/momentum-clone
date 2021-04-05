import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyledButton, StyledCloseButton, StyledDialog } from './Dialog.styled';
import {
  handleSignInGoogleAuthProvider,
  handleSignInWithEmailAndPassword,
} from 'api/firebase';
import FormInput from '../FormInput/FormInput';
import { isValidEmailFormat, isValidPasswordFormat } from 'utils';
import { FcGoogle } from 'react-icons/fc';

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
  const { hasError } = formData;

  const handleBlur = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        if (value.trim().length === 0) {
          setFormdata({
            ...formData,
            hasError: {
              ...formData.hasError,
              [name]: '아이디(이메일)를 입력해주세요.',
            },
          });
          break;
        }

        if (!isValidEmailFormat(value)) {
          setFormdata({
            ...formData,
            hasError: {
              ...formData.hasError,
              [name]: '아이디(이메일)은 이메일 형식으로 입력해주세요.',
            },
          });
          break;
        }
        setFormdata({
          ...formData,
          hasError: {
            ...formData.hasError,
            [name]: null,
          },
        });
        break;
      case 'password':
        if (value.trim().length === 0) {
          setFormdata({
            ...formData,
            hasError: {
              ...formData.hasError,
              [name]: '비밀번호를 입력해주세요.',
            },
          });
          break;
        }

        if (!isValidPasswordFormat(value)) {
          setFormdata({
            ...formData,
            hasError: {
              ...formData.hasError,
              [name]: '숫자, 영어 조합 6자리 이상 입력해야 합니다.',
            },
          });
          break;
        }

        setFormdata({
          ...formData,
          hasError: {
            ...formData.hasError,
            [name]: null,
          },
        });
        break;

      default:
        throw new Error('`email`, `password` 인풋만 처리 가능합니다.');
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;

    const newState = {
      ...formData,
      [name]: value.trim(),
    };

    setFormdata(newState);
  };

  const confirmSubmit = () => {
    const { email, password } = formData;

    const values = {
      email: email.trim(),
      password: password.trim(),
    };

    const validation = {
      email: isValidEmailFormat(values.email),
      password: isValidPasswordFormat(values.password),
    };

    return values.email.length === 0 ||
      values.password.length === 0 ||
      !validation.email ||
      !validation.password
      ? true
      : false;
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
    <StyledDialog
      initial={{ opacity: 0, y: 50 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
      exit={{ y: 50, opacity: 0 }}
    >
      <FormInput
        label="아이디"
        name="email"
        id="email"
        placeholder="아이디를 입력하세요."
        onChange={handleChange}
        onBlur={handleBlur}
        error={hasError.email}
      />
      <FormInput
        label="비밀번호"
        name="password"
        id="password"
        placeholder="비밀번호를 입력하세요."
        type="password"
        onChange={handleChange}
        onBlur={handleBlur}
        error={hasError.password}
      />
      <StyledButton
        onClick={handleSubmit}
        type="button"
        disabled={confirmSubmit()}
      >
        로그인
      </StyledButton>
      <StyledButton
        onClick={() => dispatch(handleSignInGoogleAuthProvider(onClose))}
        type="button"
      >
        <FcGoogle />
        &nbsp;구글 로그인
      </StyledButton>
      <StyledCloseButton type="button" onClick={onClose}>
        x
      </StyledCloseButton>
    </StyledDialog>
  );
}
