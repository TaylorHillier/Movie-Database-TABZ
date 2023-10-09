import { NavLink } from "react-router-dom";
import { useState } from "react";

function Nav() {
    const [hamburgerOpen, setHamburgerOpen] = useState({
        open: false,
        hidden: "hidden",
        isOpen: "",
    });
    // const [hidden, setHidden] = useState("hidden");

    const toggleHamburger = () => {
        if (hamburgerOpen.open === false) {
            setHamburgerOpen({ open: true, hidden: "", isOpen: "is-open" });
        } else {
            setHamburgerOpen({ open: false, hidden: "hidden", isOpen: "" });
        }
    };

    return (
        <>
            <nav className="h-full bg-theme-red flex drop-shadow-md sm:justify-between">
                <div className="bg-theme-red h-full p-3 flex-auto relative z-20 md:flex-[0_1_20%] md:right-0">
                    <NavLink to="/">
                        <img
                            className="m-0 m-auto relative top-1/2 -translate-y-1/2 -right-5 md:right-0"
                            width="120"
                            src={require("../images/logo/logo1.png")}
                            alt="logo"
                        />
                    </NavLink>
                </div>

                <div className="bg-theme-red p-3 hidden relative z-20 flex-1 md:flex md:flex-col justify-center">
                    <ul className="list-none m-0 flex justify-evenly items-center gap-5">
                        <li>
                            <NavLink to="/popular">Popular</NavLink>
                        </li>
                        <li>
                            <NavLink to="/top-rated">Top Rated</NavLink>
                        </li>
                        <li>
                            <NavLink to="/now-playing">Now Playing</NavLink>
                        </li>
                        <li>
                            <NavLink to="/upcoming">Upcoming</NavLink>
                        </li>
                    </ul>
                </div>

                <div
                    className={
                        `w-[10%] bg-theme-red group ` +
                        hamburgerOpen.isOpen + ` md:flex md:flex-col justify-center`
                    }
                >
                    {/* Hamburger Button */}
                    <div
                        className="text-center relative z-20 md:hidden"
                        onClick={toggleHamburger}
                    >
                        <h1 className="align-middle">V</h1>
                    </div>
                    {/* Hamburger Menu */}
                    <ul
                        className={`bg-theme-red list-none text-center absolute inset-x-0 -z-10 flex flex-col py-4 gap-4 shadow-inner drop-shadow-2xl transition-transform duration-700 -translate-y-[100%] group-[.is-open]:translate-y-2 md:z-20 md:-translate-y-0 md:duration-0 md:relative md:shadow-none md:drop-shadow-none md:text-left md:py-0 md:gap-2 `}
                    >
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/favorites">Favorites</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Nav;
