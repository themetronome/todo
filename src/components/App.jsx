import { AppHeader } from "./AppHeader";
import { SearchField } from "./SearchField";
import { TodoList } from "./TodoList";

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
    <div>
      <AppHeader />
      <SearchField />
      <TodoList todos={todoData} />
    </div>
  );
};
