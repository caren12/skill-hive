import { useState } from "react";

const stats = [
  { value: "10K+", label: "Active Learners" },
  { value: "500+", label: "Skills Available" },
  { value: "50K+", label: "Exchanges Made" },
];

export default function HeroSection() {
  const [query, setQuery] = useState("");

  return (
    <section
      className="relative overflow-hidden min-h-[520px] flex items-center justify-center px-6 py-20"
      style={{
        background:
          "linear-gradient(145deg, #1a3a6b 0%, #2d5fa6 40%, #3a7bd5 70%, #4a8fe0 100%)",
      }}
    >
      {/* Background glow layers */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 30%, rgba(74,143,224,0.35) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 80%, rgba(26,58,107,0.5) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 40% at 85% 85%, rgba(58,123,213,0.25) 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl w-full text-center flex flex-col items-center">

        {/* Heading */}
        <h1
          className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6"
          style={{ textShadow: "0 2px 12px rgba(0,0,0,0.18)" }}
        >
          Exchange Skills,
          <br />
          Grow Together
        </h1>

        {/* Subheading */}
        <p className="text-base md:text-lg text-blue-100/90 leading-relaxed max-w-xl mb-10">
          Connect with learners worldwide. Share what you know, learn what you
          need. <em>No money required</em>—just your passion for learning.
        </p>

        {/* Search + CTA */}
        <div className="flex flex-wrap items-center justify-center gap-3 w-full max-w-xl mb-12">
          {/* Search input */}
          <div className="flex items-center gap-3 flex-1 min-w-[240px] bg-white rounded-xl px-5 h-14 shadow-lg">
            <svg
              className="shrink-0 text-blue-400"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search for skills..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-transparent border-none outline-none text-base text-blue-900 placeholder:text-blue-300 w-full"
            />
          </div>

          {/* CTA button */}
          <button className="flex items-center gap-2 bg-white text-blue-900 font-bold text-base rounded-xl h-14 px-7 shadow-lg hover:bg-blue-900 hover:text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl whitespace-nowrap cursor-pointer">
            Get Started
            <span className="text-lg">→</span>
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-12">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                {s.value}
              </span>
              <span className="text-sm text-blue-200/85 tracking-wide">
                {s.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
