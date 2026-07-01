// components/OneSISAdvantage.tsx
import React from "react";

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
  // {
  //   num: "07",
  //   title: "Multi-Level Governance",
  //   desc: "Structured review cadence: site-level weekly, monthly operational reviews, and quarterly business reviews with leadership.",
  // },
  // {
  //   num: "08",
  //   title: "Proven Track Record",
  //   desc: "Trusted by 289 of Nifty 500 companies. Demonstrated savings of up to 5% Y-o-Y and ₹2.5 Cr over contract periods.",
  // },
];
export default function OneSISAdvantage() {
  return (
    <section style={{ backgroundColor: "#f0f0ee" }} className="py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* ── Header ── */}
        <div className="max-w-[520px] mb-14">
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
              THE ONESIS ADVANTAGE
            </span>
          </div>

          <h2
            className="mb-5"
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 400,
              fontSize: "clamp(28px, 3vw, 44px)",
              lineHeight: 1.2,
              color: "#1a2a1a",
            }}
          >
            Built for{" "}
            <em style={{ fontStyle: "italic", color: "#A12329" }}>
              Accountability
            </em>{" "}
            at
            <br />
            Every Level
          </h2>

          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 16,
              color: "#6a7a6a",
              lineHeight: 1.8,
            }}
          >
            We combine the scale of India's largest business services group with
            the agility of a specialist FM provider — delivering outcomes that
            larger, fragmented vendors cannot.
          </p>
        </div>

        {/* ── 6-Card Grid ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ border: "1px solid #dcdcd8" }}
        >
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
                {/* Big watermark number */}
                <span
                  className="absolute top-1 left-7 select-none pointer-events-none"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: 64,
                    fontWeight: 400,
                    color: "#A12329",
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  {item.num}
                </span>

                {/* Content */}
                <div className="relative z-10 mt-8">
                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontWeight: 400,
                      fontSize: 20,
                      color: "#1a2a1a",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: 16,
                      color: "#6a7a6a",
                      lineHeight: 1.8,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}