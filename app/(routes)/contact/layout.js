"use client";

import { Saira } from "next/font/google";
import React, { useState } from "react"
import Link from "next/link";
import { motion } from "framer-motion";

export const saira = Saira({
    subsets: ["latin"],
    weight: "400",
});

export default function Layout({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white pt-2 sticky-top">
                <div className="container">
                    <a
                        className={`navbar-brand ${saira.className}`}
                        href="/"
                        id="navBrand"
                    >
                        Rutuja Kothekar
                    </a>
                    <motion.button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        id="navbarToggler"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <i
                            className="bi bi-list fs-1"
                            aria-hidden="true"
                            style={{ color: isOpen ? "#64ffda" : "#6e07f3" }}
                        ></i>
                    </motion.button>
                    <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                        <Link href="/" className="ms-auto d-grid text-decoration-none">
                            <button type="button" className="btn" id="navButton">
                                Home
                            </button>
                        </Link>
                    </div>
                </div>
            </nav >
            <main>{children}</main>
        </>
    )
}