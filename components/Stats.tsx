"use client";
// components/Stats.tsx
import React from "react";

const stats = [
  { value: "₹20,059 Cr", label: "GROUP REVENUE" },
  { value: "3.5 Lakh+", label: "EMPLOYEES" },
  { value: "16", label: "GROUP COMPANIES" },
  { value: "29", label: "STATES" },
  { value: "320K+", label: "PERMANENT STAFF" },
];

export default function Stats() {
  return (
    <section style={{ backgroundColor: "#F7F7F7" }}>
      <div className="max-w-[1400px] mx-auto box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
        <div className="grid grid-cols-2 md:grid-cols-5">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center py-8 px-6 text-center"
              style={{
                borderRight:
                  i < stats.length - 1
                    ? "1px solid rgba(255,255,255,0.1)"
                    : "none",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(24px, 2.8vw, 36px)",
                  fontWeight: 400,
                  color: "#A12329",
                  lineHeight: 1.2,
                  marginBottom: 10,
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  color: "black",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}