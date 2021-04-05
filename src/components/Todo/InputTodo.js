import { useState } from 'react';

export const InputTodo = ({ onCreate }) => {
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
