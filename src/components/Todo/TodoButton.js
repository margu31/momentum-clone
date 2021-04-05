import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  color: #ffffffd9;
  user-select: none;
  padding: 0 15px;
  line-height: 50px;
  background: inherit;
  /* background-color: white; */

  position: absolute;
  bottom: 0;
  right: 0;
`;

const TodoButton = ({ onClick }) => {
  return <StyledButton onClick={onClick}>Todo</StyledButton>;
};

export default TodoButton;
