import { NavLink } from "react-router-dom";
import { useState } from "react";

function Nav() {
    const [hamburgerOpen, setHamburgerOpen] = useState({open: false, hidden: 'hidden', isOpen: ''});
    // const [hidden, setHidden] = useState("hidden");

    const toggleHamburger = () => {
        if(hamburgerOpen.open === false){
            setHamburgerOpen({open: true, hidden: '', isOpen: 'is-open'})
        }else{
            setHamburgerOpen({open: false, hidden: 'hidden', isOpen: ''})
        }
    }

    return (
        <>
            <nav className="h-full bg-theme-red flex drop-shadow-md sm:justify-between">
                <div className="bg-theme-red h-full p-3 flex-1 relative z-20">
                    <img
                        className="m-0 m-auto relative top-1/2 -translate-y-1/2"
                        width="120"
                        src={require("../images/logo/logo1.png")}
                        alt="logo"
                    />
                </div>
                
                <div className="bg-theme-red p-3 mr-0 hidden relative z-20">
                    <ul className="list-none">
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

                <div className={`h-full w-[10%] bg-theme-red group ` + hamburgerOpen.isOpen}>
                    {/* Hamburger Button */}
                    <div
                        className="text-center relative z-20"
                        onClick={toggleHamburger}
                    >
                        <h1 className="align-middle">V</h1>
                    </div>
                    {/* Hamburger Menu */}
                    <ul
                        className={
                            `bg-theme-red list text-center absolute inset-x-0 -z-10 flex flex-col py-4 gap-4 shadow-inner drop-shadow-2xl transition-transform duration-700 -translate-y-[110%] group-[.is-open]:-translate-y-[10%]`
                        }
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
