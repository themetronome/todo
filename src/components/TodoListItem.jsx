export const TodoListItem = ({ label, important = false }) => {
  const itemStyle = {
    color: important ? "tomato" : "black",
  };

  return (
    <li>
      <span style={itemStyle}>{label}</span>
    </li>
  );
};
