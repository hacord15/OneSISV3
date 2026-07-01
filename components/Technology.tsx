// components/Technology.tsx
"use client";

import React from "react";
import Link from "next/link";

const techItems = [
  {
    label: "One Point App",
    sub: "Single platform for real-time performance monitoring across all service lines and sites.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A1232B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    label: "iOPS App",
    sub: "Operational tracking of Tier 2 staff and key performance metrics.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A1232B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    label: "FACTECH / CMMS",
    sub: "Preventive & predictive maintenance, asset tracking, e-checklist, complaint management.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A1232B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: "E-Attendence",
    sub: "Aadhaar authentication & bank account verification for seamless digital on-boarding.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A1232B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
];

export default function Technology() {
  return (
    <section
      className="py-20 md:py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(155deg, #6b6b6b 0%, #929291 55%, #7a3236 100%)",
      }}
    >
      {/* Radial maroon glow */}
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{
          width: "55%",
          height: "80%",
          background: "radial-gradient(ellipse at 10% 90%, rgba(161,35,43,0.4) 0%, transparent 65%)",
        }}
      />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(247,247,247,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(247,247,247,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
          maskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Text ── */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div
                style={{
                  width: 32,
                  height: 1,
                  background: "linear-gradient(to right, #F7F7F7, transparent)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 10,
                  fontWeight: 400,
                  letterSpacing: "0.28em",
                  color: "#F7F7F7",
                }}
              >
                OUR TECHNOLOGY
              </span>
            </div>

            <h2
              className="mb-6"
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 400,
                fontSize: "clamp(28px, 3.2vw, 46px)",
                lineHeight: 1.2,
                color: "#F7F7F7",
              }}
            >
              Powered by{" "}
              <em
                style={{
                  fontStyle: "italic",
                  background: "linear-gradient(100deg, #ffffff 10%, #A1232B 70%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Proprietary
              </em>
              <br />
              Technology
            </h2>

            <p
              className="mb-10"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 14,
                color: "rgba(40,30,30,0.75)",
                lineHeight: 1.85,
                maxWidth: 380,
              }}
            >
              Our integrated digital platforms provide real-time operational
              intelligence, automated compliance tracking, and client-facing
              transparency dashboards.
            </p>

            <Link
              href="#"
              className="inline-flex items-center gap-3 group w-fit"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.18em",
                color: "#7a1218",
                textDecoration: "none",
              }}
            >
              EXPLORE OUR TECHNOLOGY
              <span
                style={{ display: "inline-block", transition: "transform 0.2s ease" }}
                className="group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>

          {/* ── RIGHT: Tech Cards ── */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-px"
            style={{ background: "rgba(161,35,43,0.25)" }}
          >
            {techItems.map((tech, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-4 py-10 px-4 text-left transition-all duration-300"
                style={{
                  background: "linear-gradient(165deg, rgba(247,247,247,0.92), rgba(247,247,247,0.8))",
                  cursor: "default",
                }}
                onMouseEnter={e =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "linear-gradient(165deg, rgba(255,255,255,0.98), rgba(255,236,236,0.9))")
                }
                onMouseLeave={e =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "linear-gradient(165deg, rgba(247,247,247,0.92), rgba(247,247,247,0.8))")
                }
              >
                {/* Icon circle */}
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    border: "1px solid rgba(161,35,43,0.35)",
                    background: "linear-gradient(145deg, rgba(161,35,43,0.1), rgba(161,35,43,0.04))",
                  }}
                >
                  {tech.icon}
                </div>

                {/* Label */}
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontWeight: 400,
                      fontSize: 15,
                      color: "#3a2a2a",
                      marginBottom: 5,
                      lineHeight: 1.3,
                    }}
                  >
                    {tech.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: 9,
                      fontWeight: 500,
                      letterSpacing: "0.18em",
                      color: "#A1232B",
                    }}
                  >
                    {tech.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}