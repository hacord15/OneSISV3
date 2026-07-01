// components/WhyChooseOneSIS.tsx
import React from "react";

const pillars = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: "Transform",
    desc: "Self-delivered and digitized last-mile operations across all service lines, driving operational excellence at scale.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Reduce",
    desc: "Lower people costs and energy costs through technology-led efficiencies and intelligent workforce management.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Enable",
    desc: "Business control and compliance management with real-time dashboards and SLA-driven performance visibility.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Enhance",
    desc: "Office experience and staff satisfaction through best-in-class practices and continuous service improvement.",
  },
];

export default function WhyChooseOneSIS() {
  return (
    <section style={{ backgroundColor: "#f0f0ee" }} className="py-10 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* ── Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div style={{ width: 32, height: 1, backgroundColor: "#A12329", flexShrink: 0 }} />
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 10,
                  fontWeight: 400,
                  letterSpacing: "0.26em",
                  color: "#A12329",
                }}
              >
                WHY CHOOSE ONESIS
              </span>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 400,
                fontSize: "clamp(28px, 3vw, 44px)",
                lineHeight: 1.2,
                color: "#1a2a1a",
              }}
            >
              Four Pillars That Drive{" "}
              <em style={{ fontStyle: "italic", color: "#A12329" }}>
                Every
                <br />
                Engagement
              </em>
            </h2>
          </div>

          {/* Right */}
          <div className="flex items-end lg:items-center">
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 16,
                color: "#6a7a6a",
                lineHeight: 1.8,
                maxWidth: 460,
              }}
            >
              Our four value pillars are not just principles — they are
              measurable outcomes that we deliver for every client, across every
              site, every day.
            </p>
          </div>
        </div>

        {/* ── Four Pillar Cards ── */}
        
<div
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
  style={{
    border: "1px solid #dcdcd8",
    backgroundColor: "#e8e8e6",
  }}
>
  {pillars.map((pillar, i) => (
    <div
      key={i}
      className="group relative p-8 flex flex-col gap-5 cursor-pointer
                 transition-all duration-300 ease-out
                 hover:-translate-y-2
                 hover:bg-[#FDF8F8]
                 hover:shadow-[0_20px_45px_rgba(161,35,41,0.12)]
                 hover:border-t-4
                 hover:border-t-[#A12329]"
      style={{
        backgroundColor: "#ebebea",
        borderRight:
          i < pillars.length - 1
            ? "1px solid #dcdcd8"
            : "none",
      }}
    >
      {/* Icon */}
      <div
        className="flex items-center justify-center transition-all duration-300 group-hover:scale-110"
        style={{
          width: 40,
          height: 40,
          backgroundColor: "#A12329",
          borderRadius: 4,
          flexShrink: 0,
        }}
      >
        {pillar.icon}
      </div>

      {/* Title */}
      <h3
        className="transition-colors duration-300 group-hover:text-[#A12329]"
        style={{
          fontFamily: "var(--font-playfair)",
          fontWeight: 400,
          fontSize: 22,
          color: "#1a2a1a",
          lineHeight: 1.3,
        }}
      >
        {pillar.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: 15,
          color: "#6a7a6a",
          lineHeight: 1.8,
        }}
      >
        {pillar.desc}
      </p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}