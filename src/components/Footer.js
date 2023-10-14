import React from "react";
import "./Footer.css";
import ScrollToTopButton from "./ScrollToTopButton.js";

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-copyright">
                        <p>&copy; 2023 TABZ Movie Database</p>
                        <p>Contact us: contact@example.com</p>
                    </div>
                    <ul className="web-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/favorites">Favorites</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                    <ul className="cat-nav">
                        <li><a href="/top-rated">Top Rated</a></li>
                        <li><a href="/popular">Popular</a></li>
                        <li><a href="/upcoming">Upcoming</a></li>
                        <li><a href="/now-playing">Now Playing</a></li>
                    </ul>
                </div>
            </footer>
            <ScrollToTopButton />
        </>
    );
}

export default Footer;
