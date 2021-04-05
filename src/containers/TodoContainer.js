import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import TodoButton from '../components/Todo/TodoButton';
import TodoModal from '../components/Todo/TodoModal';
import { addTodo, deleteTodo, toggleTodo } from '../redux/modules/todos';

const StyledTodoContainer = styled.div`
  box-sizing: border-box;
  position: fixed;
  bottom: 5px;
  right: 5px;
  background: inherit;
`;

export default function TodoContainer() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const onCreate = text => {
    if (text) dispatch(addTodo(text));
  };
  const onToggle = number => dispatch(toggleTodo(number));
  const onRemove = number => dispatch(deleteTodo(number));

  const [visible, setVisible] = useState(false);
  const onClick = () => setVisible(!visible);

  return (
    <StyledTodoContainer>
      <AnimatePresence>
        {visible && (
          <TodoModal
            todos={todos}
            onCreate={onCreate}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        )}
      </AnimatePresence>
      <TodoButton onClick={onClick} />
    </StyledTodoContainer>
  );
}
