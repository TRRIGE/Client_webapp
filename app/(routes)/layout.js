import React from "react"
import Link from "next/link";

export default function Layout({ children }) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary pt-2 sticky-top">
                <div className="container">
                    <a
                        className="navbar-brand"
                        href="/"
                        style={{ color: "#7510f7", fontSize: "32px", fontWeight: 600 }}
                    >
                        Rutuja Kothekar
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Link href="/" className="ms-auto">
                            <button type="button" className="btn" id="navButton">
                                Home
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
            <main>{children}</main>

        </>
    )
}