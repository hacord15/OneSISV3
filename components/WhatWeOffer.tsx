// components/WhatWeOffer.tsx
"use client";

import React from "react";

const offers = [
  {
    num: "01",
    total: "03",
    title: "Integrated Facility Management",
    desc: "End-to-end FM services delivered under a single agreement, eliminating multi-vendor complexity and ensuring consistent standards.",
    tags: ["SOFT SERVICES", "MEP", "EHS", "SECURITY", "HORTICULTURE"],
  },
  {
    num: "02",
    total: "03",
    title: "Property Management",
    desc: "Comprehensive end-to-end residential and commercial property operations with full compliance, vendor management, and reporting.",
    tags: ["RESIDENTIAL", "COMMERCIAL", "OPERATIONS"],
  },
  {
    num: "03",
    total: "03",
    title: "Specialized Services",
    desc: "Civil upgrades, retrofitting, smart maintenance, design and build, and project management consultancy for complex requirements.",
    tags: ["CIVIL WORKS", "RETROFITTING", "PMC", "D&B"],
  },
];

export default function WhatWeOffer() {
  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #1a1a1a 0%, #2b2b2b 45%, #3a1316 100%)",
      }}
    >
      {/* Subtle radial glow — maroon, top right */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: "60%",
          height: "70%",
          background:
            "radial-gradient(ellipse at 85% 10%, rgba(161,35,43,0.35) 0%, transparent 65%)",
        }}
      />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(247,247,247,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(247,247,247,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
          maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div
                style={{
                  width: 32,
                  height: 1,
                  background: "linear-gradient(to right, #A1232B, transparent)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 10,
                  fontWeight: 400,
                  letterSpacing: "0.28em",
                  color: "#c44650",
                }}
              >
                WHAT WE OFFER
              </span>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 400,
                fontSize: "clamp(32px, 3.6vw, 52px)",
                lineHeight: 1.15,
                color: "#F7F7F7",
              }}
            >
              Integrated Solutions,
              <br />
              <em
                style={{
                  fontStyle: "italic",
                  background: "linear-gradient(100deg, #A1232B 10%, #d65c64 60%, #A1232B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                One Accountable Partner
              </em>
            </h2>
          </div>

          <p
            className="max-w-[300px]"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 13,
              color: "rgba(247,247,247,0.45)",
              lineHeight: 1.8,
            }}
          >
            Three integrated service lines, one point of accountability — built
            to scale across every site, every sector.
          </p>
        </div>

        {/* ── Cards ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px"
          style={{
            background:
              "linear-gradient(120deg, rgba(161,35,43,0.4), rgba(146,146,145,0.25))",
          }}
        >
          {offers.map((offer, i) => (
            <div
              key={i}
              className="relative flex flex-col p-9 transition-all duration-300 overflow-hidden"
              style={{
                background: "linear-gradient(165deg, #232323 0%, #1c1c1c 100%)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background =
                  "linear-gradient(165deg, #2a2020 0%, #261518 100%)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background =
                  "linear-gradient(165deg, #232323 0%, #1c1c1c 100%)";
              }}
            >
              {/* Top accent gradient line */}
              <div
                className="absolute top-0 left-0 right-0"
                style={{
                  height: 2,
                  background:
                    "linear-gradient(to right, #A1232B 0%, #d65c64 50%, transparent 100%)",
                }}
              />

              {/* Large faded watermark number */}
              <span
                className="absolute select-none pointer-events-none"
                style={{
                  top: -10,
                  right: 16,
                  fontFamily: "var(--font-playfair)",
                  fontSize: 110,
                  fontWeight: 400,
                  lineHeight: 1,
                  background: "linear-gradient(160deg, rgba(247,247,247,0.05), rgba(161,35,43,0.08))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {offer.num}
              </span>

              {/* Number / total */}
              <div className="relative flex items-baseline gap-1 mb-8">
                <span
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: 30,
                    fontWeight: 400,
                    color: "#c44650",
                    lineHeight: 1,
                  }}
                >
                  {offer.num}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    color: "rgba(146,146,145,0.6)",
                  }}
                >
                  /{offer.total}
                </span>
              </div>

              {/* Title */}
              <h3
                className="relative mb-4"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontWeight: 400,
                  fontSize: 23,
                  color: "#F7F7F7",
                  lineHeight: 1.3,
                }}
              >
                {offer.title}
              </h3>

              {/* Divider */}
              <div
                className="relative"
                style={{
                  width: 36,
                  height: 1,
                  background: "linear-gradient(to right, #A1232B, transparent)",
                  marginBottom: 18,
                }}
              />

              {/* Desc */}
              <p
                className="relative mb-9 flex-1"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 14,
                  color: "rgba(146,146,145,0.95)",
                  lineHeight: 1.85,
                }}
              >
                {offer.desc}
              </p>

              {/* Tags */}
              <div className="relative flex flex-wrap gap-2">
                {offer.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: 9.5,
                      fontWeight: 500,
                      letterSpacing: "0.13em",
                      color: "#e0a0a4",
                      border: "1px solid rgba(161,35,43,0.4)",
                      padding: "6px 12px",
                      background: "rgba(161,35,43,0.08)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}