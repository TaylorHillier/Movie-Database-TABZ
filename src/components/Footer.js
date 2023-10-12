import React from "react";
import "./Footer.css";
import ScrollToTopButton from "./ScrollToTopButton.js";

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <p>&copy; 2023 TABZ Movie Database</p>
                    <p>Contact us: contact@example.com</p>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/favorites">Favorites</a></li>
                            <li><a href="/about">About</a></li>
                        </ul>
                    </nav>
                </div>
            </footer>
            <ScrollToTopButton />
        </>
    );
}

export default Footer;
