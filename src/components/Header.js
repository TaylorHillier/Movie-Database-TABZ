import Nav from "./Nav";

function Header() {
    return (
        <>
            <header>
                <img
                    className="logo"
                    width="120"
                    src={require("../images/logo/logo1.png")}
                    alt="logo"
                />
                <Nav />
            </header>
        </>
    );
}

export default Header;
