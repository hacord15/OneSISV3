"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
    {
        label: "COMPANY",
        href: "#",
        children: [
            { label: "About SIS Group", href: "#" },
            { label: "About OneSIS", href: "#" },
            { label: "Board", href: "#" },
            { label: "Management", href: "#" },
            { label: "Why OneSIS", href: "#" },
            { label: "News", href: "#" },
            { label: "Training", href: "#" },
        ],
    },
    {
        label: "SOLUTIONS",
        href: "#",
        children: [
            { label: "Integrated FM", href: "#" },
            { label: "Property Management", href: "#" },
            { label: "Specialized Services", href: "#" },
        ],
    },
    {
        label: "CAREER",
        href: "#",
        children: [
            { label: "Why work with us ", href: "#" },
            { label: "Current Oppenings", href: "#" },
            { label: "Employee Benifits", href: "#" },
        ],
    },
    {
        label: "CONTACT US",
        href: "#",
        children: [
            { label: "Become a Partner", href: "#" },
            { label: "Presence Map", href: "#" },
            { label: "Contact Form", href: "#" },
        ],
    },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

    const toggleMobileDropdown = (label: string) => {
        setExpandedMobile(expandedMobile === label ? null : label);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#F7F7F7] border-b border-gray-100">
            <nav className="flex items-center m-1 justify-between h-[72px] px-6 lg:px-10 max-w-[1400px] mx-auto">
                {/* ── Logo ── */}
                <Link href="/" className="shrink-0">
                    <Image
                        src="/logo_oneSIS.jpeg"
                        alt="OneSIS Logo"
                        width={180}      
                        height={60}      
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* ── Desktop Nav Links ── */}
                <ul className="hidden md:flex items-center gap-8 lg:gap-10">
                    {NAV_LINKS.map(({ label, href, children }) => {
                        const hasChildren = children && children.length > 0;
                        return (
                            <li key={label} className="relative group">
                                <Link
                                    href={href}
                                    className="text-gray-700 hover:text-gray-900 transition-colors duration-150 inline-block"
                                    style={{
                                        fontFamily: "var(--font-inter)",
                                        fontSize: 14,
                                        fontWeight: 600,
                                        letterSpacing: "0.16em",
                                    }}
                                >
                                    {label}
                                </Link>

                                {/* Desktop Dropdown */}
                                {hasChildren && (
                                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform -translate-y-1 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
                                        <div className="bg-white shadow-lg rounded-md min-w-[220px] py-1 border border-gray-100">
                                            {children.map((child) => (
                                                <Link
                                                    key={child.label}
                                                    href={child.href}
                                                    className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
                                                    style={{
                                                        fontFamily: "var(--font-inter)",
                                                        fontSize: 12,
                                                        fontWeight: 400,
                                                        letterSpacing: "0.04em",
                                                    }}
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </li>
                        );
                    })}
                </ul>

                {/* ── Contact CTA ── */}
                <div className="hidden md:block">
  <Link
    href="#"
className="inline-flex items-center justify-center border border-[#A32229] bg-transparent text-[#A32229] transition-all duration-300 hover:bg-[#A32229] hover:text-white"
    style={{
      fontFamily: "var(--font-inter)",
      fontSize: 11,
      fontWeight: 400,
      letterSpacing: "0.14em",
      padding: "14px 28px",
    }}
  >
    DOWNLOAD PROFILE
  </Link>
</div>

                

                {/* ── Mobile Hamburger ── */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-1"
                    onClick={() => {
                        setMobileOpen(!mobileOpen);
                        if (mobileOpen) setExpandedMobile(null);
                    }}
                    aria-label="Toggle menu"
                >
                    <span
                        className={`block h-px w-6 bg-gray-800 transition-transform duration-200 ${
                            mobileOpen ? "rotate-45 translate-y-2" : ""
                        }`}
                    />
                    <span
                        className={`block h-px w-6 bg-gray-800 transition-opacity duration-200 ${
                            mobileOpen ? "opacity-0" : ""
                        }`}
                    />
                    <span
                        className={`block h-px w-6 bg-gray-800 transition-transform duration-200 ${
                            mobileOpen ? "-rotate-45 -translate-y-2" : ""
                        }`}
                    />
                </button>
            </nav>

            {/* ── Mobile Menu ── */}
            {mobileOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 max-h-[calc(100vh-72px)] overflow-y-auto">
                    <ul className="flex flex-col gap-1 mb-6">
                        {NAV_LINKS.map(({ label, href, children }) => {
                            const hasChildren = children && children.length > 0;
                            const isExpanded = expandedMobile === label;

                            return (
                                <li key={label} className="border-b border-gray-50 last:border-0">
                                    {hasChildren ? (
                                        <>
                                            <button
                                                onClick={() => toggleMobileDropdown(label)}
                                                className="flex items-center justify-between w-full py-3 text-left text-gray-700 hover:text-gray-900 transition-colors duration-150"
                                                style={{
                                                    fontFamily: "var(--font-inter)",
                                                    fontSize: 11,
                                                    fontWeight: 400,
                                                    letterSpacing: "0.16em",
                                                }}
                                            >
                                                <span>{label}</span>
                                                <span
                                                    className={`text-gray-400 text-lg transition-transform duration-200 ${
                                                        isExpanded ? "rotate-180" : ""
                                                    }`}
                                                >
                                                    ▼
                                                </span>
                                            </button>

                                            <div
                                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                                    isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                                }`}
                                            >
                                                <ul className="pl-4 pb-3 space-y-1">
                                                    {children.map((child) => (
                                                        <li key={child.label}>
                                                            <Link
                                                                href={child.href}
                                                                className="block py-2.5 text-gray-600 hover:text-gray-900 transition-colors duration-150"
                                                                style={{
                                                                    fontFamily: "var(--font-inter)",
                                                                    fontSize: 12,
                                                                    fontWeight: 400,
                                                                    letterSpacing: "0.04em",
                                                                }}
                                                                onClick={() => setMobileOpen(false)}
                                                            >
                                                                {child.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </>
                                    ) : (
                                        <Link
                                            href={href}
                                            className="block py-3 text-gray-700 hover:text-gray-900 transition-colors duration-150"
                                            style={{
                                                fontFamily: "var(--font-inter)",
                                                fontSize: 11,
                                                fontWeight: 400,
                                                letterSpacing: "0.16em",
                                            }}
                                            onClick={() => setMobileOpen(false)}
                                        >
                                            {label}
                                        </Link>
                                    )}
                                </li>
                            );
                        })}
                    </ul>

                    <Link
                        href="#"
                        className="inline-flex items-center justify-center text-white w-full py-3 transition-opacity duration-150 hover:opacity-90"
                        style={{
                            backgroundColor: "#1d3a20",
                            fontFamily: "var(--font-inter)",
                            fontSize: 11,
                            fontWeight: 400,
                            letterSpacing: "0.14em",
                        }}
                        onClick={() => setMobileOpen(false)}
                    >
                        CONTACT US
                    </Link>
                </div>
            )}
        </header>
    );
}