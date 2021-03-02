import { AppHeader } from "./AppHeader";
import { SearchField } from "./SearchField";
import { TodoList } from "./TodoList";

export const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchField />
      <TodoList />
    </div>
  );
};
