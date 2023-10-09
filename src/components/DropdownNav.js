import { NavLink } from "react-router-dom";
import { useState } from "react";

function DropdownNav() {
    const [isOpen, setIsOpen] = useState({ state: false, class: "" });

    const toggle = () => {
        if (isOpen.state === false) {
            setIsOpen({ state: true, class: "is-open" });
        } else {
            setIsOpen({ state: false, class: "" });
        }
    };
    return (
        <>
            <div
                className={
                    `text-center bg-slate-600 my-5 mx-auto w-1/2 border border-solid border-slate-50 rounded-sm group ` +
                    isOpen.class + ` md:hidden`
                }
            >
                <div
                    className="bg-slate-800 p-3"
                    onClick={toggle}
                >
                    Categories
                    {/* <input type="checkbox" className="absolute w-full h-full left-0 right-0" /> */}
                </div>
                <nav 
                className="h-0 overflow-hidden transition-[height] ease-out duration-500 group-[.is-open]:h-40"
                >
                    <ul className="bg-slate-600 py-2 list-none">
                        <li className="leading-normal py-1.5 active:bg-slate-800">
                            <NavLink to="/popular">Popular</NavLink>
                        </li>
                        <li className="leading-normal py-1.5 active:bg-slate-800">
                            <NavLink to="/top-rated">Top Rated</NavLink>
                        </li>
                        <li className="leading-normal py-1.5 active:bg-slate-800">
                            <NavLink to="/now-playing">Now Playing</NavLink>
                        </li>
                        <li className="leading-normal py-1.5 active:bg-slate-800">
                            <NavLink to="/upcoming">Upcoming</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default DropdownNav;
