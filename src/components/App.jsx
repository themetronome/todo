import { AppHeader } from "./AppHeader";
import { SearchField } from "./SearchField";
import { TodoList } from "./TodoList";
import { ItemStatusFilter } from "./ItemStatusFilter";

import "./App.css";

export const App = () => {
  const todoData = [
    {
      id: 1,
      label: "mastering js",
      important: true,
    },
    {
      id: 2,
      label: "learn react",
      important: false,
    },
    {
      id: 3,
      label: "do something great",
      important: true,
    },
  ];

  return (
    <div className="todoApp">
      <AppHeader toDo={1} done={3} />
      <div className="topPanel d-flex">
        <SearchField />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData} />
    </div>
  );
};
