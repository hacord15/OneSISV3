"use client";

import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src="/hero_banner2.webm" type="video/webm" />
      </video>

      {/* Right-side dark gradient — only behind the text area, for readability */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(to left, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 28%, rgba(0,0,0,0.25) 50%, transparent 68%)",
        }}
      />

      {/* Extra soft vignette behind text block specifically */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 2,
          background:
            "radial-gradient(ellipse 60% 70% at 85% 50%, rgba(0,0,0,0.45) 0%, transparent 70%)",
        }}
      />

      {/* CONTENT — right aligned, open on video */}
      <div
        className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-10 pt-[60px] flex justify-end"
        style={{ zIndex: 10 }}
      >
        <div className="max-w-[620px] w-full py-20 md:py-28 lg:py-32 text-left">

          {/* Tag line */}
          {/* <div className="flex items-center gap-3 mb-8 md:mb-10">
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 16,
                fontWeight: 800,
                letterSpacing: "0.28em",
                color: "#e0535c",
                textShadow: "0 2px 10px rgba(0,0,0,0.9)",
              }}
            >
              A 100% SIS GROUP COMPANY
            </span>
            <div
              style={{
                width: 40,
                height: 1,
                background: "linear-gradient(to left, #A1232B, #F7F7F7)",
                flexShrink: 0,
              }}
            />
          </div> */}

          {/* Heading */}
          <h1
            className="mb-7 md:mb-9"
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 400,
              color: "#F7F7F7",
              lineHeight: 1.1,
              fontSize: "clamp(38px, 4.6vw, 62px)",
              textShadow: "0 4px 28px rgba(0,0,0,0.9), 0 1px 6px rgba(0,0,0,0.95)",
            }}
          >
            Your One-Stop Partner
            <br />
            for{" "}
            <em
              style={{
                fontStyle: "italic",
                color: "#e0535c",
                textShadow: "0 4px 28px rgba(0,0,0,0.9), 0 1px 6px rgba(0,0,0,0.95)",
              }}
            >
              Integrated
            </em>{" "}
            Facility
            <br />
            Management
          </h1>

          {/* Sub-copy */}
          <p
            className="mb-10 md:mb-12"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 15,
              fontWeight: 600,
              color: "rgba(247,247,247,0.92)",
              lineHeight: 1.8,
              textShadow: "0 2px 16px rgba(0,0,0,0.9)",
            }}
          >
            Technology-driven, self-delivered facility solutions backed by
            India's #1{" "}
            <span style={{ color: "#e0a0a4" }}>business</span> services
            group.{" "}
            {/* <span style={{ color: "#e0a0a4" }}>
              Transform. Reduce. Enable. Enhance.
            </span> */}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-end gap-4">
            <Link
              href="#"
              className="inline-flex items-center justify-center"
              style={{
                border: "1px solid #A1232B",
                color: "#F7F7F7",
                fontFamily: "var(--font-inter)",
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: "0.16em",
                padding: "15px 28px",
                transition: "all 0.25s ease",
                backgroundColor: "#A22229",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#8a1d23";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#A22229";
              }}
            >
              EXPLORE SOLUTIONS
            </Link>

            <Link
              href="#"
              className="inline-flex items-center justify-center"
              style={{
                border: "1px solid rgba(247,247,247,0.5)",
                color: "#F7F7F7",
                fontFamily: "var(--font-inter)",
                fontSize: 11,
                fontWeight: 400,
                letterSpacing: "0.16em",
                padding: "15px 28px",
                transition: "all 0.25s ease",
                backgroundColor: "rgba(0,0,0,0.35)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(0,0,0,0.55)";
                (e.currentTarget as HTMLElement).style.borderColor = "#F7F7F7";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(0,0,0,0.35)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(247,247,247,0.5)";
              }}
            >
              DOWNLOAD PROFILE
            </Link>

            <Link
              href="#"
              className="inline-flex items-center justify-center"
              style={{
                border: "1px solid rgba(247,247,247,0.5)",
                color: "#F7F7F7",
                fontFamily: "var(--font-inter)",
                fontSize: 11,
                fontWeight: 400,
                letterSpacing: "0.16em",
                padding: "15px 28px",
                transition: "all 0.25s ease",
                backgroundColor: "rgba(0,0,0,0.35)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(0,0,0,0.55)";
                (e.currentTarget as HTMLElement).style.borderColor = "#F7F7F7";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(0,0,0,0.35)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(247,247,247,0.5)";
              }}
            >
              CONTACT US
            </Link>
          </div>

          {/* Scroll hint */}
          <div className="flex items-center justify-end gap-3 mt-14 md:mt-16" style={{ opacity: 0.65 }}>
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 10,
                letterSpacing: "0.22em",
                color: "#e0a0a4",
                textShadow: "0 2px 10px rgba(0,0,0,0.85)",
              }}
            >
              SCROLL TO EXPLORE
            </span>
            <div
              style={{
                width: 1,
                height: 40,
                background: "linear-gradient(to bottom, #A1232B, transparent)",
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}