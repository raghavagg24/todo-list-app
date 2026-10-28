import TodoForm from "../component/TodoForm";
import TodoList from "../component/TodoList";
import { useTodos } from "../context/TodoContext";

function Home() {
  const { todos } = useTodos();

  const completed = todos.filter((todo) => todo.completed).length;

  return (
    <section className="todo-container">
      <div className="hero">
        <p className="eyebrow">YOUR DAILY PRODUCTIVITY</p>
        <h1>Make Today <span>Count.</span></h1>
        <p>Organize your tasks and get things done, one step at a time.</p>
      </div>

      <div className="stats">
        <div>
          <span>Total Tasks</span>
          <h2>{todos.length}</h2>
        </div>
        <div>
          <span>Completed</span>
          <h2>{completed}</h2>
        </div>
        <div>
          <span>Remaining</span>
          <h2>{todos.length - completed}</h2>
        </div>
      </div>

      <div className="todo-card">
        <h2>My Tasks</h2>
        <TodoForm />
        <TodoList />
      </div>
    </section>
  );
}

export default Home;