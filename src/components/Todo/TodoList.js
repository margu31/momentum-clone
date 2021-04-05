export const TodoList = ({ todo, onToggle, onRemove }) => {
  return (
    <li>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.number)}
        id={`todo-${todo.number}`}
      />
      <label htmlFor={`todo-${todo.number}`}>{todo.text}</label>
      <button onClick={() => onRemove(todo.number)}>🗑</button>
    </li>
  );
};
