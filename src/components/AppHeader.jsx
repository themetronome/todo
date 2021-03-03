import "./AppHeader.css";

export const AppHeader = ({ toDo, done }) => {
  return (
    <div className="appHeader d-flex">
      <h1>todo list</h1>
      <h2>
        {toDo} more to do, {done} done
      </h2>
    </div>
  );
};
