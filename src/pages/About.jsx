function About() {
  return (
    <section className="info-page">
      <p className="eyebrow">ABOUT THE PROJECT</p>
      <h1>Simple tasks. <span>Big progress.</span></h1>

      <p>
        TodoList is a simple task management application built using React.
        It helps you organize your daily tasks, track your progress,
        and stay productive.
      </p>

      <div className="feature-grid">
        <div className="feature-card">
          <h3>React</h3>
          <p>Reusable components for a clean application structure.</p>
        </div>

        <div className="feature-card">
          <h3>Context API</h3>
          <p>Share and manage tasks across components.</p>
        </div>

        <div className="feature-card">
          <h3>React Router</h3>
          <p>Navigate between pages without reloading the app.</p>
        </div>
      </div>
    </section>
  );
}

export default About;