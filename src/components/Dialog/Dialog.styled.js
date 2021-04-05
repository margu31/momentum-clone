import styled from 'styled-components';

export const StyledDialog = styled.form`
  position: relative;
  display: flex;
  flex-flow: column;
`;

export const StyledButton = styled.button`
  margin-top: 1rem;
  cursor: pointer;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 230px;
  border: 0;
  border-radius: 4px;
  padding: 0.777em 3.055em;
  text-align: center;
  text-decoration: none;
  font: bold 1.125rem/1.388 'Spoqa Han Sans Neo', 'Noto Sans', Sans-Serif;
  box-shadow: 0 1px 3px rgba(147, 153, 210, 0.56);

  &[disabled] {
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(147, 153, 210, 0.56);
    &:not(:focus-visible) {
      box-shadow: none;
    }
  }
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  background-color: transparent;
  color: #fefefe;
  top: -5rem;
  right: 0;
  cursor: pointer;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  border: 0;
  border-radius: 4px;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  font: bold 1.125rem/1.388 'Spoqa Han Sans Neo', 'Noto Sans', Sans-Serif;
  box-shadow: 0 1px 3px #fefefe;

  &[disabled] {
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(147, 153, 210, 0.56);
    &:not(:focus-visible) {
      box-shadow: none;
    }
  }
`;
