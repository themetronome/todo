import { TodoListItem } from "./TodoListItem";

export const TodoList = () => {
  return (
    <ul>
      <TodoListItem label="mastering js" important />
      <TodoListItem label="learn react" />
    </ul>
  );
};
