import styled from 'styled-components';
import { lighten, darken } from 'polished';

const StyledSignButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 2.5rem;
  font-size: 1rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(147, 153, 210, 0.56);
    &:not(:focus-visible) {
      box-shadow: none;
    }
  }

  color: #fff;
  background-color: transparent;

  &:hover {
    background-color: ${lighten(0.1, 'rgba(147, 153, 210, 0.56)')};
  }

  &:active {
    background-color: ${darken(0.1, 'rgba(147, 153, 210, 0.56)')};
  }
`;

export default StyledSignButton;
