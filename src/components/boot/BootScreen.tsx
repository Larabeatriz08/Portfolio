import "./BootScreen.css";

export default function BootScreen() {
  return (
    <section className="boot-screen">
      <div className="boot-content">

        <div className="logo">
          L
        </div>

        <span className="company">
          LARA LIMA
        </span>

        <h1>
          Building thoughtful
          <br />
          digital experiences.
        </h1>

        <p className="version">
          LARA OS • v1.0.0
        </p>

        <button className="enter-button">
          Enter Workspace →
        </button>

      </div>
    </section>
  );
}