export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #eaeaea" }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "24px 20px",
          fontSize: 14,
          color: "#666",
        }}
      >
        © {new Date().getFullYear()} Bhupal Baral
      </div>
    </footer>
  );
}
