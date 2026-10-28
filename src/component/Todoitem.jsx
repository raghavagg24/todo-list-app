import { useTodos } from "../context/TodoContext";

function TodoItem({ todo }) {
  const { toggleTodo, deleteTodo } = useTodos();

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <label className="todo-label">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />

        <span>{todo.text}</span>
      </label>

      <button
        className="delete-btn"
        onClick={() => deleteTodo(todo.id)}
        aria-label={`Delete ${todo.text}`}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;