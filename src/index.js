import React from "react";
import ReactDOM from "react-dom";

const AppHeader = () => {
  return <h1>todo list</h1>;
};

const SearchField = () => {
  return <input placeholder="search" />;
};

const TodoListItem = () => {
  return (
    <li>
      <span>learn react</span>
    </li>
  );
};

const TodoList = () => {
  return (
    <ul>
      <TodoListItem />
      <TodoListItem />
    </ul>
  );
};

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchField />
      <TodoList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
