"use client";
// components/CTA.tsx
import React from "react";
import Link from "next/link";

export default function CTA() {
  return (
    <section
      style={{ backgroundColor: "#f0f0ee" }}
      className="py-15 md:py-20"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col items-center text-center">

        {/* Tag – ab --font-sans (Barlow) */}
        <span
          className="mb-7 block"
          style={{
            fontFamily: "var(--font-sans)", // pehle --font-inter
            fontSize: 10,
            fontWeight: 400,
            letterSpacing: "0.28em",
            color: "#A12329",
          }}
        >
          GET STARTED
        </span>

        {/* Heading – ab --font-display (Oswald) */}
        <h2
          className="mb-7"
          style={{
            fontFamily: "var(--font-display)", // pehle --font-playfair
            fontWeight: 400,
            fontSize: "clamp(32px, 4vw, 58px)",
            lineHeight: 1.15,
            color: "#1a2a1a",
            maxWidth: 700,
          }}
        >
          Ready to Transform Your
          <br />
          <em style={{ fontStyle: "italic", color: "#A12329" }}>
            Facility Operations?
          </em>
        </h2>

        {/* Sub-copy – ab --font-sans */}
        <p
          className="mb-12"
          style={{
            fontFamily: "var(--font-sans)", // pehle --font-inter
            fontSize: 16,
            color: "#8a9a8a",
            lineHeight: 1.8,
            maxWidth: 480,
          }}
        >
          Talk to our team and discover how OneSIS can simplify your facility
          needs under one roof — with guaranteed SLAs and full transparency.
        </p>

        {/* Buttons – ab --font-sans */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#"
            style={{
              fontFamily: "var(--font-sans)", // pehle --font-inter
              fontSize: 11,
              fontWeight: 400,
              letterSpacing: "0.16em",
              color: "#ffffff",
              backgroundColor: "#A12329",
              padding: "16px 36px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={e =>
              ((e.currentTarget as HTMLElement).style.opacity = "0.88")
            }
            onMouseLeave={e =>
              ((e.currentTarget as HTMLElement).style.opacity = "1")
            }
          >
            CONTACT OUR TEAM
          </Link>

          <Link
            href="#"
            style={{
              fontFamily: "var(--font-sans)", // pehle --font-inter
              fontSize: 11,
              fontWeight: 400,
              letterSpacing: "0.16em",
              color: "#1a2a1a",
              backgroundColor: "transparent",
              border: "1px solid #A12329",
              padding: "16px 36px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#A12329";
              (e.currentTarget as HTMLElement).style.color = "#ffffff";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#A12329";
            }}
          >
            DOWNLOAD COMPANY PROFILE
          </Link>
        </div>

      </div>
    </section>
  );
}