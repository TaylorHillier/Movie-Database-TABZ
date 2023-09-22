import React from "react";
// import "./PagesAbout.css";

function PageAbout() {
    return (
        <div className="about-us bg-neutral-100 shadow-[0_2px_4px_rgba(0,0,0,0.1)] text-center max-w-[600px] mx-auto my-0 p-5 rounded-[5px] [&>p]:text-base [&>p]:text-[#666] [&>p]:mb-2.5">
            <h1 className="text-2xl text-[#333]">About Us</h1>
            <p>
                Welcome to TABZ Movie Database! We are a passionate team of
                developers and movie enthusiasts who created this platform to
                help you explore the fascinating world of cinema.
            </p>
            <p>
                Our mission is to provide you with a user-friendly and
                comprehensive movie database, making it easy for you to
                discover, learn about, and enjoy movies from all genres and
                eras.
            </p>
            <p>
                Whether you're a casual moviegoer or a dedicated cinephile,
                we've got you covered. Dive into the world of film, discover
                hidden gems, and revisit your favorite classics—all right here
                on our platform one tab at a time!
            </p>
        </div>
    );
}

export default PageAbout;
