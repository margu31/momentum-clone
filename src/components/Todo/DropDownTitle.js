import styled from 'styled-components';
import { useState } from 'react';

const StyledTitleButton = styled.div`
  h2 {
    margin: 0;
    margin-bottom: 10px;

    button {
      outline: none;
      border: none;
      font-size: 20px;
      font-weight: 600;
      color: #ffffff;
      background-color: inherit;
      padding-left: 0;
      cursor: pointer;
    }
  }
`;

const StyledDropDown = styled.div`
  background-color: rgb(51, 51, 51);
  width: 240px;
  border-radius: 5px;

  button {
    color: #ffffff;
    font-weight: 600;
    text-align: left;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 5px;
    display: block;
    width: 100%;
    padding: 7px 10px;
    background-color: inherit;
    user-select: none;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;

export const DropDownTitle = ({ title, setTitle, todos }) => {
  const [dropDown, setDropDown] = useState(false);
  const onClick = () => setDropDown(!dropDown);
  const viewToday = () => setTitle('Today');
  const viewDone = () => setTitle('Done');
  const todosLength = todos.length;
  const doneLength = todos.filter(todo => todo.completed).length;

  return (
    <StyledTitleButton>
      <h2>
        <button onClick={onClick}>{title}</button>
      </h2>
      <StyledDropDown>
        {dropDown && (
          <>
            <button onClick={viewToday}>Today {todosLength}</button>
            <button onClick={viewDone}>Done {doneLength}</button>
          </>
        )}
      </StyledDropDown>
    </StyledTitleButton>
  );
};
