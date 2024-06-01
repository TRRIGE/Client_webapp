import React from "react"
import Link from "next/link";

export default function Layout({ children }) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white pt-2 sticky-top">
                <div className="container">
                    <a
                        className="navbar-brand"
                        href="/"
                        id="navBrand"
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
                        id="navbarToggler"
                    >
                        <span className="navbar-toggler-icon fs-6"></span>
                    </button>
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