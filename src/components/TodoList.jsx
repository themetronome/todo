import { TodoListItem } from "./TodoListItem";

import "./TodoList.css";

export const TodoList = ({ todos }) => {
  const elements = todos.map((item) => {
    return (
      <li key={item.id} className="list-group-item">
        <TodoListItem {...item} />
      </li>
    );
  });
  return <ul className="list-group todoList">{elements}</ul>;
};
