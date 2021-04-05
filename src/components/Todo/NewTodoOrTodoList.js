import { useState } from 'react';
import styled from 'styled-components';
import { InputTodo } from './InputTodo';
import { TodoListContainer } from './TodoListContainer';

const StyledGetStarted = styled.div`
  color: #939393;
  box-sizing: border-box;
  min-height: 150px;
  padding: 21px;
  text-align: center;
  position: relative;

  div {
    font-weight: 500;
  }

  button {
    font-weight: 500;
    color: #ffffff;
    background-color: #305040f2;
    outline: none;
    border: none;
    border-radius: 50px;
    padding: 7px 27px;
    cursor: pointer;
    margin-top: 16px;
  }

  input[type='text'] {
    color: #ffffff;
    position: absolute;
    bottom: 0;
    left: 0;
    outline: none;
    border: none;
    background-color: inherit;
    font-weight: 500;
    width: 100%;
  }
`;

export const NewTodoOrTodoList = ({
  todos,
  onCreate,
  onToggle,
  onRemove,
  title,
}) => {
  const [input, setInput] = useState(false);
  const onClick = () => setInput(!input);

  if (!todos.length) {
    return (
      <StyledGetStarted>
        <div>Add a todo to get started</div>
        {input ? (
          <InputTodo onCreate={onCreate} />
        ) : (
          <button onClick={onClick}>New Todo</button>
        )}
      </StyledGetStarted>
    );
  }

  return (
    <TodoListContainer
      todos={todos}
      onCreate={onCreate}
      onToggle={onToggle}
      onRemove={onRemove}
      title={title}
    />
  );
};
