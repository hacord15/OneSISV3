"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  COMPANY: [
    { label: "About SIS Group", href: "/company/about-sis" },
    { label: "About OneSIS", href: "/company/about-onesis" },
    { label: "Board & Management", href: "/company/board" },
    { label: "Why OneSIS", href: "/company/why-onesis" },
    { label: "News & Media", href: "/company/news" },
  ],
  SOLUTIONS: [
    { label: "Integrated FM", href: "/solutions/integrated-fm" },
    { label: "Property Management", href: "/solutions/property-management" },
    { label: "Specialized Services", href: "/solutions/specialized-services" },
    { label: "Technology Platforms", href: "/solutions/technology" },
    { label: "Case Studies", href: "/solutions/case-studies" },
  ],
  RESOURCES: [
    { label: "Careers", href: "/career" },
    { label: "Training", href: "/company/training" },
    { label: "Download Profile", href: "/company/profile" },
    { label: "Blog & Insights", href: "/insights" },
  ],
  SUPPORT: [
    { label: "Contact Us", href: "/contact" },
    { label: "Help Center", href: "/help" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

const socials = ["LINKEDIN", "TWITTER", "INSTAGRAM"];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1a1a1a" }}>
      {/* ── Main Footer Body ── */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">

          {/* ── Brand Column ── */}
          <div className="lg:col-span-2">
           <Link href="/" className="mb-6 block w-fit">
  <div className="relative h-14 w-52">
    <Image
      src="/logo_oneSIS-removebg-preview.svg"
      alt="OneSIS Logo"
      fill
      className="object-contain object-left"
      priority
    />
  </div>
</Link>

            <p
              className="mb-7 max-w-[260px]"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 13,
                color: "rgba(247,247,247,0.45)",
                lineHeight: 1.8,
              }}
            >
              A 100% SIS Group company delivering technology-driven,
              self-managed facility management solutions across India.
            </p>

            <div className="flex items-center gap-3">
              {["L", "T", "I"].map((s) => (
                
                 <a key={s}
                  href="#"
                  className="flex items-center justify-center transition-all duration-200"
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    border: "1px solid rgba(247,247,247,0.15)",
                    fontSize: 11,
                    fontWeight: 600,
                    color: "rgba(247,247,247,0.6)",
                    fontFamily: "var(--font-inter)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#A1232B";
                    (e.currentTarget as HTMLElement).style.borderColor = "#A1232B";
                    (e.currentTarget as HTMLElement).style.color = "#F7F7F7";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(247,247,247,0.15)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(247,247,247,0.6)";
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* ── Link Columns ── */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="mb-6"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 10,
                  fontWeight: 400,
                  letterSpacing: "0.22em",
                  color: "rgba(247,247,247,0.35)",
                }}
              >
                {category}
              </h4>
              <ul className="flex flex-col gap-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: 14,
                        fontWeight: 400,
                        color: "rgba(247,247,247,0.65)",
                        textDecoration: "none",
                        transition: "color 0.15s ease",
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.color = "#e0535c")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          "rgba(247,247,247,0.65)")
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div style={{ borderTop: "1px solid rgba(247,247,247,0.08)" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 12,
              color: "rgba(247,247,247,0.3)",
            }}
          >
            © 2024 OneSIS. A SIS Ltd Company. All rights reserved.
          </span>

          <div className="flex items-center gap-7">
            {socials.map((s) => (
              <Link
                key={s}
                href="#"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 10,
                  fontWeight: 400,
                  letterSpacing: "0.14em",
                  color: "rgba(247,247,247,0.35)",
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "rgba(247,247,247,0.8)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "rgba(247,247,247,0.35)")
                }
              >
                {s}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}