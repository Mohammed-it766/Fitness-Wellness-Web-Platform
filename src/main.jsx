import React, { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <main style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background: "#0a0a0a",
          color: "#f0eee8",
          fontFamily: "system-ui, sans-serif",
          padding: 32
        }}>
          <section style={{ maxWidth: 760 }}>
            <p style={{ color: "#ff4d1c", fontWeight: 700, textTransform: "uppercase" }}>
              React render error
            </p>
            <pre style={{
              whiteSpace: "pre-wrap",
              background: "#141414",
              border: "1px solid #252525",
              borderRadius: 8,
              padding: 16
            }}>{String(this.state.error?.stack || this.state.error)}</pre>
          </section>
        </main>
      );
    }

    return this.props.children;
  }
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
