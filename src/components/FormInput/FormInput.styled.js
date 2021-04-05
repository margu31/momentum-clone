import { darken } from 'polished';
import styled, { css } from 'styled-components';

export const StyledFormControl = styled.div`
  display: inline-flex;
  flex-direction: column;
  & + & {
    margin-top: 1rem;
  }
`;

export const StyledLabel = styled.label`
  display: inline-block;
  margin-bottom: 4px;
  color: ${darken(0.1, 'gray')};
  font-size: 13px;
`;

export const StyledInputWrapper = styled.div`
  position: relative;
  display: inline-flex;
  min-width: 296px;
  box-sizing: border-box;
  border-radius: 5px;

  ${({ isError }) =>
    isError &&
    css`
      border: 1px solid #ff0c39;
    `}
`;

export const StyledInput = styled.input.attrs(props => ({
  id: props.id,
}))`
  flex: 1;
  border: 1px solid #585757;
  padding: 0.6em;
  font: 500 0.9rem 'Noto Sans';
  border-radius: 5px;
  background: transparent;
  color: ${darken(0.1, '#000')};

  &::placeholder {
    color: ${darken(0.1, 'rgba(147, 153, 210, 0.56)')};
  }

  &:read-only {
    color: rgba(147, 153, 210, 0.56);
  }

  &:disabled {
    cursor: not-allowed;
    color: rgba(147, 153, 210, 0.56);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(147, 153, 210, 0.56);
    &:not(:focus-visible) {
      box-shadow: none;
    }
  }
`;

export const StyledButton = styled.button`
  cursor: pointer;
  border: 0;
  padding: 0;
  font-size: 0.75rem;

  &:disabled {
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #ff0c39;
    &:not(:focus-visible) {
      box-shadow: none;
    }
  }

  img {
    vertical-align: bottom;
  }
`;

export const StyledError = styled.span`
  margin-top: 7px;
  margin-left: 10px;
  font-size: 0.5rem;
  color: #ff0c39;
`;
