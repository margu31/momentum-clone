import React, { useState } from 'react';
import { signUpWithEmailAndPassword } from 'api/firebase';
import { StyledButton, StyledCloseButton, StyledDialog } from './Dialog.styled';
import FormInput from '../FormInput/FormInput';
import {
  isValidDisplayNameFormat,
  isValidEmailFormat,
  isValidPasswordConfirmFormat,
  isValidPasswordFormat,
} from '../../utils';

const initialSignUpFormValues = {
  displayName: '',
  email: '',
  password: '',
  passwordConfirm: '',
  hasError: {
    displayName: null,
    email: null,
    password: null,
    passwordConfirm: null,
  },
};

export default function SignUpDialog({ onClose }) {
  const [formValue, setFormValue] = useState(initialSignUpFormValues);
  const { hasError } = formValue;

  const handleBlur = ({ target: { name, value } }) => {
    const { password } = formValue;

    console.log('blurred!', name, value);

    switch (name) {
      case 'displayName':
        if (value.trim().length === 0) {
          setFormValue({
            ...formValue,
            hasError: {
              ...formValue.hasError,
              [name]: '이름을 입력해주세요.',
            },
          });
          break;
        }

        if (!isValidDisplayNameFormat(value)) {
          setFormValue({
            ...formValue,
            hasError: {
              ...formValue.hasError,
              [name]: '이름은 최소 2자 이상 입력해야 합니다.',
            },
          });
          break;
        }

        setFormValue({
          ...formValue,
          hasError: {
            ...formValue.hasError,
            [name]: null,
          },
        });
        break;
      case 'email':
        if (value.trim().length === 0) {
          setFormValue({
            ...formValue,
            hasError: {
              ...formValue.hasError,
              [name]: '아이디(이메일)를 입력해주세요.',
            },
          });
          break;
        }

        if (!isValidEmailFormat(value)) {
          setFormValue({
            ...formValue,
            hasError: {
              ...formValue.hasError,
              [name]: '아이디(이메일)은 이메일 형식으로 입력해주세요.',
            },
          });
          break;
        }
        setFormValue({
          ...formValue,
          hasError: {
            ...formValue.hasError,
            [name]: null,
          },
        });
        break;
      case 'password':
        if (value.trim().length === 0) {
          setFormValue({
            ...formValue,
            hasError: {
              ...formValue.hasError,
              [name]: '비밀번호를 입력해주세요.',
            },
          });
          break;
        }

        if (!isValidPasswordFormat(value)) {
          setFormValue({
            ...formValue,
            hasError: {
              ...formValue.hasError,
              [name]: '숫자, 영어 조합 6자리 이상 입력해야 합니다.',
            },
          });
          break;
        }

        setFormValue({
          ...formValue,
          hasError: {
            ...formValue.hasError,
            [name]: null,
          },
        });
        break;
      case 'passwordConfirm':
        if (value.trim().length === 0) {
          setFormValue({
            ...formValue,
            hasError: {
              ...formValue.hasError,
              [name]: '입력한 비밀번호를 다시 한번 입력해주세요.',
            },
          });
          break;
        }

        if (!isValidPasswordConfirmFormat(password.trim(), value.trim())) {
          setFormValue({
            ...formValue,
            hasError: {
              ...formValue.hasError,
              [name]: '입력한 비밀번호와 다릅니다. 다시 한 번 확인해주세요.',
            },
          });
          break;
        }

        setFormValue({
          ...formValue,
          hasError: {
            ...formValue.hasError,
            [name]: null,
          },
        });
        break;
      default:
        throw new Error(
          '`email`, `password`, `passwordConfirm` 인풋만 처리 가능합니다.',
        );
    }
  };

  const confirmSubmit = () => {
    const { displayName, email, password, passwordConfirm } = formValue;

    const values = {
      displayName: displayName.trim(),
      email: email.trim(),
      password: password.trim(),
      passwordConfirm: passwordConfirm.trim(),
    };

    const validation = {
      displayName: isValidDisplayNameFormat(values.displayName),
      email: isValidEmailFormat(values.email),
      password: isValidPasswordFormat(values.password),
      passwordConfirm: isValidPasswordConfirmFormat(
        values.password,
        values.passwordConfirm,
      ),
    };

    return values.displayName.length === 0 ||
      values.email.length === 0 ||
      values.password.length === 0 ||
      !validation.email ||
      !validation.password ||
      !validation.passwordConfirm
      ? true
      : false;
  };

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
    <StyledDialog
      initial={{ opacity: 0, y: 50 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
      exit={{ y: 50, opacity: 0 }}
    >
      <FormInput
        label="이름"
        name="displayName"
        id="displayName"
        placeholder="이름"
        onChange={handleChange}
        error={hasError.displayName}
        onBlur={handleBlur}
      />
      <FormInput
        label="이메일"
        name="email"
        id="email"
        placeholder="아이디(이메일)"
        onChange={handleChange}
        error={hasError.email}
        onBlur={handleBlur}
      />
      <FormInput
        label="비밀번호"
        name="password"
        id="password"
        placeholder="비밀번호"
        type="password"
        onChange={handleChange}
        error={hasError.password}
        onBlur={handleBlur}
      />
      <FormInput
        label="비밀번호 확인"
        name="passwordConfirm"
        id="passwordConfirm"
        placeholder="비밀번호 확인"
        type="password"
        onChange={handleChange}
        error={hasError.passwordConfirm}
        onBlur={handleBlur}
      />
      <StyledButton
        type="submit"
        onClick={handleSubmit}
        disabled={confirmSubmit()}
      >
        회원가입
      </StyledButton>
      <StyledCloseButton type="button" onClick={onClose}>
        x
      </StyledCloseButton>
    </StyledDialog>
  );
}
