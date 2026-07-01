// components/AboutSection.tsx
import React from "react";
import Link from "next/link";

const cards = [
  {
    id: "01",
    title: "100% SIS Group Entity",
    desc: "Fully owned and backed by India's #1 Security & FM group.",
    dark: true,
    full: true,
  },
  {
    id: "02",
    title: "Founded 2023–24",
    desc: "Built for the next generation of integrated facility services.",
    dark: false,
    full: false,
  },
  {
    id: "03",
    title: "Technology-First",
    desc: "Proprietary platforms: One Point App, iOPS, FACTECH, M-Trainer.",
    dark: false,
    full: false,
  },
  {
    id: "04",
    title: "Self-Delivered",
    desc: "Services delivered directly — not sub-contracted — ensuring quality.",
    dark: false,
    full: false,
  },
];

export default function AboutSection() {
  return (
    <section style={{ backgroundColor: "#f0f0ee" }} className="py-20 md:py-15">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── LEFT: Text Content ── */}
          <div className="flex flex-col justify-center">
            {/* Tag */}
            <div className="flex items-center gap-3 mb-6">
              <div style={{ width: 32, height: 1, backgroundColor: "#A12329" }} />
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 10,
                  fontWeight: 400,
                  letterSpacing: "0.26em",
                  color: "#A12329",
                }}
              >
                ABOUT ONESIS
              </span>
            </div>

            {/* Heading */}
            <h2
              className="mb-6"
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 400,
                fontSize: "clamp(30px, 3.2vw, 46px)",
                lineHeight: 1.2,
                color: "#1a2a1a",
              }}
            >
              Reimagining Facility Management
              <br />
              for{" "}
              <em style={{ fontStyle: "italic", color: "#A12329" }}>
                Modern India
              </em>
            </h2>

            {/* Paragraph */}
            <p
              className="mb-10"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 16,
                fontWeight: 400,
                color: "#6a7a6a",
                lineHeight: 1.85,
                maxWidth: 520,
              }}
            >
              Founded in 2023–24, OneSIS is a 100% wholly owned subsidiary of
              SIS Ltd — established to deliver comprehensive, technology-driven,
              and self-managed facility management solutions. From soft services
              to technical operations, we offer one point of accountability
              across all facility needs.
            </p>

            {/* CTA */}
            <Link
              href="#"
              className="inline-flex items-center gap-3 group w-fit"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.18em",
                color: "#1a2a1a",
                textDecoration: "none",
              }}
            >
              LEARN MORE ABOUT US
              <span
                style={{
                  display: "inline-block",
                  transition: "transform 0.2s ease",
                }}
                className="group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>

          {/* ── RIGHT: Cards Grid ── */}
          <div className="flex flex-col gap-[2px]">
            {/* Card 01 — full width, dark */}
            <div
             className="w-full p-8 transition-all duration-300 ease-out cursor-pointer hover:-translate-y-1 hover:shadow-2xl"
              style={{ background:
      "linear-gradient(135deg, #74171C 0%, #8E1E24 30%, #A12329 60%, #B93239 85%, #D95E65 100%)", }}
            >
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  color: "#e8bec1",
                  display: "block",
                  marginBottom: 14,
                }}
              >
                01
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontWeight: 400,
                  fontSize: 22,
                 
                  color: "#ffffff",
                  marginBottom: 12,
                  lineHeight: 1.3,
                }}
              >
                100% SIS Group Entity
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 15,
                  color: "rgba(180,210,185,0.65)",
                  lineHeight: 1.75,
                }}
              >
               Fully owned and backed by India's #1 Security & FM group.
              </p>
            </div>

            {/* Cards 02 & 03 — bottom row */}
            <div className="grid grid-cols-3 gap-[2px]">
              {cards.slice(1).map((card) => (
                <div
                  key={card.id}
                  className="p-7"
                  style={{ backgroundColor: "#e6e6e4" }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: 11,
                      letterSpacing: "0.1em",
                      color: "#A12329",
                      display: "block",
                      marginBottom: 14,
                    }}
                  >
                    {card.id}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontWeight: 400,
                      fontSize: 19,
                      color: "#1a2a1a",
                      marginBottom: 10,
                      lineHeight: 1.3,
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: 13,
                      color: "#6a7a6a",
                      lineHeight: 1.75,
                    }}
                  >
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}