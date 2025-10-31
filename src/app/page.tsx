export default function Home() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px" }}>
      <header style={{ padding: "48px 0" }}>
        <h1 style={{ fontSize: 32, margin: 0 }}>Hi, I'm Bhupal.</h1>
        <p style={{ marginTop: 12, color: "#555" }}>
          I build front-end apps and write about web performance and UX.
        </p>
      </header>

      <section style={{ marginTop: 32 }}>
        <h2>About</h2>
        <p>
          Hi — I keep this site as a place to write about front-end experiments,
          architecture and small tutorials. This is a fresh boilerplate you can
          iterate on.
        </p>
      </section>
    </div>
  );
}
