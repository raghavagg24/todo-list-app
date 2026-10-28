import TodoItem from "./Todoitem";
import { useTodos } from "../context/TodoContext";

function TodoList() {
  const { todos } = useTodos();

  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">✓</div>
        <h3>All clear!</h3>
        <p>Add your first task to get started.</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;