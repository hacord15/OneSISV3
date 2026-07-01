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

      {/* Right-side dark gradient */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(to left, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 28%, rgba(0,0,0,0.25) 50%, transparent 68%)",
        }}
      />

      {/* Extra soft vignette */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 2,
          background:
            "radial-gradient(ellipse 60% 70% at 85% 50%, rgba(0,0,0,0.45) 0%, transparent 70%)",
        }}
      />

      {/* CONTENT */}
      <div
        className="relative w-full max-w-[1400px] mx-auto pt-[60px] flex justify-end"
        style={{ zIndex: 10 }}
      >
        {/* Right shift with negative margin */}
        <div className="max-w-[780px] w-full py-20 md:py-28 lg:py-32 text-left px-6 lg:pl-10 lg:pr-0 ml-auto -mr-2 lg:-mr-4">
          
          {/* HEADING - Size thoda kam (42px to 68px) */}
          <h1
            className="mb-7 md:mb-10"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              color: "#F7F7F7",
              lineHeight: 1.05,
              fontSize: "clamp(42px, 5.5vw, 68px)", // 🔽 Kam kiya
              textShadow: "0 4px 28px rgba(0,0,0,0.9), 0 1px 6px rgba(0,0,0,0.95)",
              letterSpacing: "0.01em",
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

          {/* SUB-COPY - Size thoda kam (16px to 19px) */}
          <p
            className="mb-10 md:mb-14"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(16px, 1.2vw, 19px)", // 🔽 Kam kiya
              fontWeight: 500,
              color: "rgba(247,247,247,0.92)",
              lineHeight: 1.8,
              textShadow: "0 2px 16px rgba(0,0,0,0.9)",
              maxWidth: "90%",
            }}
          >
            Technology-driven, self-delivered facility solutions backed by
            India's #1{" "}
            <span style={{ color: "#e0a0a4" }}>business</span> services
            group.
          </p>

          {/* BUTTONS - Size aur padding thodi kam */}
          <div className="flex flex-wrap justify-end gap-4">
            <Link
              href="#"
              className="inline-flex items-center justify-center"
              style={{
                border: "1px solid #A1232B",
                color: "#F7F7F7",
                fontFamily: "var(--font-sans)",
                fontSize: 13, // 🔽 Kam kiya (14 se 13)
                fontWeight: 600,
                letterSpacing: "0.16em",
                padding: "16px 32px", // 🔽 Padding kam
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
                fontFamily: "var(--font-sans)",
                fontSize: 12, // 🔽 Kam kiya (13 se 12)
                fontWeight: 600,
                letterSpacing: "0.16em",
                padding: "16px 32px", // 🔽 Padding kam
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
                fontFamily: "var(--font-sans)",
                fontSize: 12, // 🔽 Kam kiya
                fontWeight: 600,
                letterSpacing: "0.16em",
                padding: "16px 32px", // 🔽 Padding kam
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

          {/* SCROLL HINT - Size thoda kam */}
          <div className="flex items-center justify-end gap-3 mt-14 md:mt-16" style={{ opacity: 0.65 }}>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 11, // 🔽 Kam kiya (13 se 11)
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