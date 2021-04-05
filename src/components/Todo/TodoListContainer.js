import styled from 'styled-components';
import { InputTodo } from './InputTodo';
import { TodoList } from './TodoList';

const StyledTodoLists = styled.div`
  color: #939393;

  ul {
    margin: 0;
    padding-left: 0;
    max-height: 385px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.3);
      border: 3px solid transparent;
      border-radius: 7px;
    }
  }

  li {
    list-style: none;
    margin: 5px 0;
    color: #ffffff;
    position: relative;

    label {
      margin-left: 5px;
    }

    input[type='checkbox'] {
      border: 0;
      outline: none;
      border-radius: 0;
      border-bottom: 2px solid rgba(255, 255, 255, 0.4);
      margin-left: 0;
    }

    button {
      outline: none;
      border: none;
      border-radius: 50%;
      background-color: transparent;
      color: #939393;
      position: absolute;
      right: 10px;
      cursor: pointer;

      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        color: #ffffff;
      }
    }
  }

  input[type='text'] {
    color: #ffffff;
    font-weight: 500;
    outline: none;
    border: none;
    background-color: inherit;
    width: 100%;
  }

  input:checked + label {
    text-decoration-line: line-through;
    color: #939393;
  }
`;

export const TodoListContainer = ({
  todos,
  onCreate,
  onToggle,
  onRemove,
  title,
}) => {
  if (title === 'Today') {
    return (
      <StyledTodoLists>
        <ul>
          {todos.map(todo => (
            <TodoList
              key={todo.number}
              todo={todo}
              onToggle={onToggle}
              onRemove={onRemove}
            />
          ))}
        </ul>
        <InputTodo onCreate={onCreate} />
      </StyledTodoLists>
    );
  } else if (title === 'Done') {
    return (
      <StyledTodoLists>
        <ul>
          {todos.map(
            todo =>
              todo.completed && (
                <TodoList
                  key={todo.number}
                  todo={todo}
                  onToggle={onToggle}
                  onRemove={onRemove}
                />
              ),
          )}
        </ul>
        <InputTodo onCreate={onCreate} />
      </StyledTodoLists>
    );
  }
};
