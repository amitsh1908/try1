const cards = [
  {
    title: "Before",
    text:
      "React app with build and container setup had extra operational complexity for a simple landing use case."
  },
  {
    title: "After",
    text:
      "Focused React landing with clean component structure and no Docker dependency for easier maintenance."
  },
  {
    title: "Impact",
    text:
      "Faster iteration, reduced complexity, and clearer infra communication for team and stakeholders."
  }
];

const timeline = [
  "Removed container and non-essential setup files.",
  "Rebuilt website as a clean React landing page.",
  "Improved design to explain infrastructure changes clearly."
];

function App() {
  return (
    <main className="container">
      <section className="hero">
        <span className="badge">Welcome</span>
        <h1>Infrastructure: Where It Changed</h1>
        <p className="subtitle">
          This React website explains the shift to a simpler and cleaner
          infrastructure approach with better maintainability and faster
          delivery.
        </p>
      </section>

      <section className="grid" aria-label="Infrastructure comparison">
        {cards.map((card) => (
          <article className="card" key={card.title}>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </section>

      <section>
        <h2 className="section-title">Change Timeline</h2>
        <ul className="timeline">
          {timeline.map((step, index) => (
            <li key={step}>
              <b>Step {index + 1}:</b> {step}
            </li>
          ))}
        </ul>
      </section>

      <footer>React Infra Website - Ready for modern deployment</footer>
    </main>
  );
}

export default App;
