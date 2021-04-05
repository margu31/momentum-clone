import { useState } from 'react';
import styled from 'styled-components';

const InputTodo = ({ onCreate }) => {
  const [text, setText] = useState('');
  const onChange = e => setText(e.target.value);
  const onKeyDown = e => {
    if (e.key === 'Enter') {
      onCreate(text);
      setText('');
    }
  };

  return (
    <input
      type="text"
      value={text}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder="New Todo"
    />
  );
};

const TodoList = ({ todo, onToggle }) => {
  return (
    <li>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.number)}
        id={`todo-${todo.number}`}
      />
      <label htmlFor={`todo-${todo.number}`}>{todo.text}</label>
    </li>
  );
};
