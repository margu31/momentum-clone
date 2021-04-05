import { useState } from 'react';
import styled from 'styled-components';
import { DropDownTitle } from './DropDownTitle';
import { NewTodoOrTodoList } from './NewTodoOrTodoList';

const StyledModal = styled.div`
  box-sizing: border-box;
  width: 320px;
  height: auto;
  padding: 15px;
  padding-right: 5px;
  text-align: left;
  border-radius: 5px;
  background-color: rgba(15, 15, 15, 0.88);
  margin-bottom: 50px;
`;

const TodoModal = ({ todos, onCreate, onToggle, onRemove }) => {
  const [title, setTitle] = useState('Today');

  return (
    <StyledModal>
      <DropDownTitle title={title} setTitle={setTitle} todos={todos} />
      <NewTodoOrTodoList
        todos={todos}
        onCreate={onCreate}
        onToggle={onToggle}
        onRemove={onRemove}
        title={title}
      />
    </StyledModal>
  );
};

export default TodoModal;
