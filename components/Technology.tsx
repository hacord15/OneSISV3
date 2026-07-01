"use client";

import React from "react";
import Link from "next/link";

const techItems = [
  {
    label: "One Point App",
    desc: "Single platform for real-time performance monitoring across all service lines and sites.",
  },
  {
    label: "iOPS App",
    desc: "Operational tracking of Tier 2 staff and key performance metrics.",
  },
  {
    label: "FACTECH / CMMS",
    desc: "Preventive and predictive maintenance, asset tracking, e-checklists, complaint management.",
  },
  {
    label: "E-Attendance",
    desc: "Aadhaar authentication and bank account verification for seamless digital onboarding.",
  },
];

export default function Technology() {
  return (
    <section
      className="py-20 md:py-28"
      style={{ backgroundColor: "#f0f0ee" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── LEFT ── */}
          <div className="lg:sticky lg:top-32">
            {/* Tag */}
            <div className="flex items-center gap-2 mb-8">
              <div style={{ width: 24, height: 1, backgroundColor: "#A1232B" }} />
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 10,
                  fontWeight: 400,
                  letterSpacing: "0.22em",
                  color: "#A1232B",
                }}
              >
                 TECHNOLOGY
              </span>
            </div>

            {/* Heading */}
            <h2
              className="mb-7"
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 400,
                fontSize: "clamp(32px, 3.8vw, 52px)",
                lineHeight: 1.15,
                color: "#1a1a1a",
              }}
            >
              Powered by{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: "#A1232B",
                }}
              >
                proprietary
              </em>
              <br />
              platforms.
            </h2>

            {/* Body */}
            <p
              className="mb-10"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 15,
                color: "#6a6a6a",
                lineHeight: 1.85,
                maxWidth: 380,
              }}
            >
              Real-time operational intelligence, automated compliance
              tracking, and client-facing transparency dashboards — built
              in-house, not licensed off the shelf.
            </p>

            {/* CTA */}
            <Link
              href="#"
              className="inline-flex items-center gap-2 group w-fit"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.16em",
                color: "#1a1a1a",
                textDecoration: "none",
                borderBottom: "1px solid #1a1a1a",
                paddingBottom: 2,
                transition: "color 0.2s ease, border-color 0.2s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = "#A1232B";
                (e.currentTarget as HTMLElement).style.borderColor = "#A1232B";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = "#1a1a1a";
                (e.currentTarget as HTMLElement).style.borderColor = "#1a1a1a";
              }}
            >
              EXPLORE THE TECHNOLOGY STACK
              <span
                className="group-hover:translate-x-1"
                style={{ display: "inline-block", transition: "transform 0.2s ease" }}
              >
                →
              </span>
            </Link>
          </div>

          {/* ── RIGHT: Table list ── */}
          <div>
            {/* Top border */}
            <div style={{ borderTop: "1px solid #d0d0ce" }} />

            {techItems.map((tech, i) => (
              <div
                key={i}
                className="grid grid-cols-5 gap-6 py-7 group"
                style={{
                  borderBottom: "1px solid #d0d0ce",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={e =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "rgba(161,35,43,0.03)")
                }
                onMouseLeave={e =>
                  ((e.currentTarget as HTMLElement).style.background = "transparent")
                }
              >
                {/* Name — 2 cols */}
                <div className="col-span-2">
                  <h3
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontWeight: 400,
                      fontSize: 18,
                      color: "#1a1a1a",
                      lineHeight: 1.3,
                      transition: "color 0.2s ease",
                    }}
                    className="group-hover:text-[#A1232B]"
                  >
                    {tech.label}
                  </h3>
                </div>

                {/* Desc — 3 cols */}
                <div className="col-span-3">
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: 14,
                      color: "#7a7a78",
                      lineHeight: 1.75,
                    }}
                  >
                    {tech.desc}
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