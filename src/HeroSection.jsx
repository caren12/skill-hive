import { useState } from "react";

const stats = [
  { value: "10K+", label: "Active Learners" },
  { value: "500+", label: "Skills Available" },
  { value: "50K+", label: "Exchanges Made" },
];

export default function HeroSection() {
  const [query, setQuery] = useState("");

  return (
    <section style={styles.hero}>
      {/* Gradient mesh background layers */}
      <div style={styles.bgLayer1} />
      <div style={styles.bgLayer2} />
      <div style={styles.bgLayer3} />

      <div style={styles.container}>
        {/* Heading */}
        <h1 style={styles.heading}>
          Exchange Skills,<br />Grow Together
        </h1>

        {/* Subheading */}
        <p style={styles.subheading}>
          Connect with learners worldwide. Share what you know, learn what you
          need.{" "}
          <span style={styles.noMoney}>No money required</span>—just your
          passion for learning.
        </p>

        {/* Search + CTA */}
        <div style={styles.inputRow}>
          <div style={styles.searchWrapper}>
            <SearchIcon />
            <input
              type="text"
              placeholder="Search for skills..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={styles.input}
            />
          </div>
          <button
            style={styles.cta}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#1a1a2e";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Get Started <span style={styles.arrow}>→</span>
          </button>
        </div>

        {/* Stats */}
        <div style={styles.statsRow}>
          {stats.map((s, i) => (
            <div key={i} style={styles.stat}>
              <span style={styles.statValue}>{s.value}</span>
              <span style={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgba(100,120,160,0.9)"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

const styles = {
  hero: {
    position: "relative",
    overflow: "hidden",
    background: "linear-gradient(145deg, #1a3a6b 0%, #2d5fa6 40%, #3a7bd5 70%, #4a8fe0 100%)",
    minHeight: "520px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "80px 24px",
    fontFamily: "'Georgia', 'Times New Roman', serif",
  },
  bgLayer1: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(ellipse 80% 60% at 70% 30%, rgba(74,143,224,0.35) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  bgLayer2: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(ellipse 60% 50% at 20% 80%, rgba(26,58,107,0.5) 0%, transparent 65%)",
    pointerEvents: "none",
  },
  bgLayer3: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(ellipse 40% 40% at 85% 85%, rgba(58,123,213,0.25) 0%, transparent 60%)",
    pointerEvents: "none",
  },
  container: {
    position: "relative",
    zIndex: 1,
    maxWidth: "760px",
    width: "100%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0",
  },
  heading: {
    fontFamily: "'Georgia', 'Times New Roman', serif",
    fontWeight: "700",
    fontSize: "clamp(2.4rem, 6vw, 3.8rem)",
    color: "#ffffff",
    lineHeight: "1.15",
    letterSpacing: "-0.5px",
    margin: "0 0 24px 0",
    textShadow: "0 2px 12px rgba(0,0,0,0.18)",
  },
  subheading: {
    fontFamily: "'Georgia', 'Times New Roman', serif",
    fontSize: "clamp(1rem, 2.2vw, 1.15rem)",
    color: "rgba(220,232,255,0.92)",
    lineHeight: "1.7",
    maxWidth: "580px",
    margin: "0 0 36px 0",
    fontWeight: "400",
  },
  noMoney: {
    fontStyle: "italic",
  },
  inputRow: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    width: "100%",
    maxWidth: "580px",
    marginBottom: "48px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  searchWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    flex: "1 1 260px",
    background: "rgba(255,255,255,0.97)",
    borderRadius: "10px",
    padding: "0 18px",
    height: "54px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
  },
  input: {
    border: "none",
    outline: "none",
    background: "transparent",
    fontSize: "1rem",
    color: "#2a3a5c",
    width: "100%",
    fontFamily: "'Georgia', 'Times New Roman', serif",
  },
  cta: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    background: "#fff",
    color: "#1a3a6b",
    border: "none",
    borderRadius: "10px",
    height: "54px",
    padding: "0 28px",
    fontSize: "1rem",
    fontWeight: "700",
    fontFamily: "'Georgia', 'Times New Roman', serif",
    cursor: "pointer",
    whiteSpace: "nowrap",
    transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
    letterSpacing: "0.2px",
  },
  arrow: {
    fontSize: "1.1rem",
  },
  statsRow: {
    display: "flex",
    justifyContent: "center",
    gap: "clamp(24px, 6vw, 64px)",
    flexWrap: "wrap",
  },
  stat: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
  },
  statValue: {
    fontFamily: "'Georgia', 'Times New Roman', serif",
    fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
    fontWeight: "700",
    color: "#ffffff",
    lineHeight: "1",
    letterSpacing: "-0.5px",
  },
  statLabel: {
    fontFamily: "'Georgia', 'Times New Roman', serif",
    fontSize: "0.85rem",
    color: "rgba(200,218,255,0.85)",
    letterSpacing: "0.3px",
    fontWeight: "400",
  },
};
