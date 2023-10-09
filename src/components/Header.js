import Nav from "./Nav";

function Header() {
    return (
        <>
            <header className="h-[10%] fixed -inset-0 z-50">
                <Nav />
            </header>
        </>
    );
}

export default Header;
