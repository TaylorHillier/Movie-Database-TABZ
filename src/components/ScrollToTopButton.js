import React, { useState, useEffect } from "react";
import "./ScrollToTopButton.css";

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`scroll-to-top ${isVisible ? "visible" : ""}`}>
            <button onClick={scrollToTop}>Scroll to Top</button>
        </div>
    );
}

export default ScrollToTopButton;
