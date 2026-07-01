"use client";

import React from "react";
import Link from "next/link";

const advantages = [
  {
    num: "01",
    title: "One-Stop Solution",
    desc: "Dedicated FM and pledged SME support across all service lines under a single agreement — eliminating multi-vendor complexity.",
  },
  {
    num: "02",
    title: "3-Step Compliance Verification",
    desc: "Rigorous compliance checks across labour, statutory, and EHS norms save precious time for HR and compliance teams.",
  },
  {
    num: "03",
    title: "Self-Delivered Services",
    desc: "Direct deployment from the SIS Group ecosystem — no sub-contracting, ensuring consistent quality and accountability.",
  },
  {
    num: "04",
    title: "Sustainability & EHS",
    desc: "Dedicated safety officers, biodegradable materials, energy audits, and ESG-aligned practices built into every contract.",
  },
  {
    num: "05",
    title: "SLA-Based Accountability",
    desc: "Fixed service level agreements with defined KPIs ensure transparency and performance-driven billing.",
  },
  {
    num: "06",
    title: "Technology & Innovation",
    desc: "Proprietary platforms (One Point App, iOPS, FACTECH) deliver real-time dashboards, e-checklists, and predictive maintenance.",
  },
];

const floatingStats = [
  { value: "320K+",    label: "Permanent Staff",  top: "12%", left: "58%" },
  { value: "29",       label: "States",            top: "28%", left: "82%" },
  { value: "₹20K Cr", label: "Group Revenue",     top: "56%", left: "72%" },
  { value: "368",      label: "Offices",           top: "70%", left: "52%" },
  { value: "630+",     label: "Districts",         top: "42%", left: "90%" },
];

export default function OneSISAdvantage() {
  return (
    <section
      style={{ backgroundColor: "#f0f0ee", position: "relative", overflow: "hidden" }}
      className="py-20 md:py-28"
    >
      <style>{`
        @keyframes GlowBreath   { 0%,100%{opacity:0.55;transform:scale(1)}   50%{opacity:1;transform:scale(1.08)} }
        @keyframes GlowBreath2  { 0%,100%{opacity:0.35;transform:scale(1)}   50%{opacity:0.7;transform:scale(1.12)} }
        @keyframes GlowBreath3  { 0%,100%{opacity:0.18;transform:scale(1)}   50%{opacity:0.38;transform:scale(1.16)} }
        @keyframes RingRotate   { from{transform:translate(-50%,-50%) rotate(0deg)} to{transform:translate(-50%,-50%) rotate(360deg)} }
        @keyframes RingRotateRev{ from{transform:translate(-50%,-50%) rotate(0deg)} to{transform:translate(-50%,-50%) rotate(-360deg)} }
        @keyframes PulseRing    { 0%,100%{opacity:0.18;transform:translate(-50%,-50%) scale(1)} 50%{opacity:0.38;transform:translate(-50%,-50%) scale(1.04)} }
        @keyframes CenterGlow   { 0%,100%{box-shadow:0 0 0 0 rgba(161,35,43,0.3),0 0 30px 8px rgba(161,35,43,0.25)} 50%{box-shadow:0 0 0 20px rgba(161,35,43,0),0 0 50px 18px rgba(161,35,43,0.4)} }
        @keyframes BadgeBob     { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-6px)} }
        @keyframes SparkPop     { 0%,100%{opacity:0;transform:scale(0.5)} 50%{opacity:1;transform:scale(1)} }
      `}</style>

      {/* ════════════════════════════════════════
          GLOW LAYER — dark to light, top-right
      ════════════════════════════════════════ */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-60px",
          right: "-100px",
          width: "640px",
          height: "640px",
          zIndex: 0,
        }}
      >
        {/* ── Outer dark base — very deep maroon dark ── */}
        <div
          className="absolute rounded-full"
          style={{
            inset: 0,
            background:
              "radial-gradient(ellipse at 55% 45%, rgba(60,5,8,0.38) 0%, rgba(40,4,6,0.22) 40%, transparent 72%)",
          }}
        />

        {/* ── Mid glow — maroon bloom ── */}
        <div
          className="absolute rounded-full"
          style={{
            inset: "8%",
            background:
              "radial-gradient(ellipse at 52% 48%, rgba(161,35,43,0.55) 0%, rgba(130,20,30,0.28) 38%, transparent 68%)",
            animation: "GlowBreath2 5s ease-in-out infinite",
            animationDelay: "0.5s",
          }}
        />

        {/* ── Inner bright core — warm light ── */}
        <div
          className="absolute rounded-full"
          style={{
            inset: "22%",
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(255,200,200,0.92) 0%, rgba(230,100,110,0.70) 22%, rgba(180,40,50,0.50) 42%, rgba(120,15,20,0.25) 65%, transparent 85%)",
            animation: "GlowBreath 4s ease-in-out infinite",
          }}
        />

        {/* ── Hotspot — near-white center ── */}
        <div
          className="absolute rounded-full"
          style={{
            inset: "36%",
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.95) 0%, rgba(255,220,220,0.80) 30%, rgba(220,80,90,0.45) 60%, transparent 80%)",
            animation: "GlowBreath 4s ease-in-out infinite",
            animationDelay: "0.3s",
          }}
        />

        {/* ── Dot grid overlay — masked to glow area ── */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(161,35,43,0.28) 1.5px, transparent 1.5px)",
            backgroundSize: "26px 26px",
            maskImage:
              "radial-gradient(ellipse 75% 75% at 55% 45%, black 20%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 75% at 55% 45%, black 20%, transparent 70%)",
          }}
        />

        {/* ── Ring 1 — outermost, very faint ── */}
        <div
          className="absolute rounded-full"
          style={{
            width: 500,
            height: 500,
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            border: "1px solid rgba(161,35,43,0.10)",
            animation: "PulseRing 7s ease-in-out infinite",
          }}
        />

        {/* ── Ring 2 ── */}
        <div
          className="absolute rounded-full"
          style={{
            width: 370,
            height: 370,
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            border: "1px solid rgba(161,35,43,0.18)",
            animation: "PulseRing 5.5s ease-in-out infinite 0.8s",
          }}
        />

        {/* ── Ring 3 — rotating dashed ── */}
        <div
          className="absolute rounded-full"
          style={{
            width: 260,
            height: 260,
            top: "50%",
            left: "50%",
            border: "1px dashed rgba(161,35,43,0.22)",
            animation: "RingRotate 28s linear infinite",
          }}
        />

        {/* ── Ring 4 — rotating reverse ── */}
        <div
          className="absolute rounded-full"
          style={{
            width: 180,
            height: 180,
            top: "50%",
            left: "50%",
            border: "1px dashed rgba(161,35,43,0.30)",
            animation: "RingRotateRev 18s linear infinite",
          }}
        />

        {/* ── Sparkling dots at ring positions ── */}
        {[
          { angle: 40,  dist: 130, dur: "2.8s", del: "0s"   },
          { angle: 145, dist: 130, dur: "3.2s", del: "0.7s" },
          { angle: 250, dist: 130, dur: "2.5s", del: "1.4s" },
          { angle: 80,  dist: 185, dur: "3.8s", del: "0.3s" },
          { angle: 200, dist: 185, dur: "3.0s", del: "1.1s" },
          { angle: 320, dist: 185, dur: "2.7s", del: "1.9s" },
        ].map((spark, i) => {
          const rad = (spark.angle * Math.PI) / 180;
          const cx = 320 + spark.dist * Math.cos(rad);
          const cy = 320 + spark.dist * Math.sin(rad);
          return (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: 6,
                height: 6,
                left: cx,
                top: cy,
                backgroundColor: "#e0535c",
                boxShadow: "0 0 8px 4px rgba(200,40,50,0.6), 0 0 2px 1px rgba(255,200,200,0.8)",
                animation: `SparkPop ${spark.dur} ease-in-out infinite`,
                animationDelay: spark.del,
              }}
            />
          );
        })}

        {/* ── Center orb ── */}
        <div
          className="absolute flex flex-col items-center justify-center rounded-full"
          style={{
            width: 110,
            height: 110,
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            background:
              "radial-gradient(circle at 40% 35%, rgba(255,160,160,0.5) 0%, #A1232B 45%, #7a1820 100%)",
            animation: "CenterGlow 3.5s ease-in-out infinite",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: 34,
              fontWeight: 400,
              color: "#F7F7F7",
              lineHeight: 1,
            }}
          >
            8
          </span>
          <span
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 8,
              fontWeight: 500,
              letterSpacing: "0.2em",
              color: "rgba(247,247,247,0.75)",
              marginTop: 3,
            }}
          >
            PILLARS
          </span>
        </div>
      </div>

      {/* ── Floating Stat Badges ── */}
      {floatingStats.map((stat, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            top: stat.top,
            left: stat.left,
            zIndex: 1,
            animation: `BadgeBob ${3.5 + i * 0.6}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        >
          <div
            style={{
              backgroundColor: "#F7F7F7",
              border: "1px solid rgba(161,35,43,0.18)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              padding: "10px 16px",
              borderLeft: "3px solid #A1232B",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              minWidth: 100,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: 20,
                fontWeight: 400,
                color: "#A1232B",
                lineHeight: 1,
              }}
            >
              {stat.value}
            </span>
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 9,
                fontWeight: 500,
                letterSpacing: "0.16em",
                color: "#929291",
              }}
            >
              {stat.label}
            </span>
          </div>
        </div>
      ))}

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative" style={{ zIndex: 2 }}>

        <div className="max-w-[520px] mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div style={{ width: 32, height: 1, backgroundColor: "#A12329", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-inter)", fontSize: 10, fontWeight: 400, letterSpacing: "0.26em", color: "#A12329" }}>
              THE ONESIS ADVANTAGE
            </span>
          </div>

          <h2 className="mb-5" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400, fontSize: "clamp(28px, 3vw, 44px)", lineHeight: 1.2, color: "#1a2a1a" }}>
            Built for{" "}
            <em style={{ fontStyle: "italic", color: "#A12329" }}>Accountability</em>
            {" "}at<br />Every Level
          </h2>

          <p style={{ fontFamily: "var(--font-inter)", fontSize: 16, color: "#6a7a6a", lineHeight: 1.8 }}>
            We combine the scale of India's largest business services group with
            the agility of a specialist FM provider — delivering outcomes that
            larger, fragmented vendors cannot.
          </p>
        </div>

        {/* ── ADVANTAGE CARDS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ border: "1px solid #dcdcd8" }}>
          {advantages.map((item, i) => {
            const isLastRow = i >= 3;
            const isLastCol = (i + 1) % 3 === 0;
            return (
              <div
                key={i}
                className="relative p-8 pt-10 flex flex-col"
                style={{
                  backgroundColor: "#ebebea",
                  borderRight: !isLastCol ? "1px solid #dcdcd8" : "none",
                  borderBottom: !isLastRow ? "1px solid #dcdcd8" : "none",
                  minHeight: 220,
                }}
              >
                <span
                  className="absolute top-1 left-7 select-none pointer-events-none"
                  style={{ fontFamily: "var(--font-playfair)", fontSize: 64, fontWeight: 400, color: "#A12329", lineHeight: 1, userSelect: "none" }}
                >
                  {item.num}
                </span>
                <div className="relative z-10 mt-8">
                  <h3 className="mb-3" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400, fontSize: 20, color: "#1a2a1a", lineHeight: 1.3 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: 16, color: "#6a7a6a", lineHeight: 1.8 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 🔥 NAYA "View All" link – cards ke neeche, right side */}
        <div className="flex justify-end mt-6">
          <Link
            href="#"
            className="inline-flex items-center gap-2 group"
            style={{
              fontFamily: "var(--font-sans)",
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
            View All
            <span
              className="group-hover:translate-x-1"
              style={{ display: "inline-block", transition: "transform 0.2s ease" }}
            >
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}