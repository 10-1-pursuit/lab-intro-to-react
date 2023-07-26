import '/src/css/NavBar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li id='nav-home'>
                    < button href="">Home</button>
                </li>
                <li>
                    <button href="">Contact</button>
                </li>
                <li id='nav-logout'>
                    <button href="">Log Out</button>

                </li>
            </ul>
        </nav>
    );
};

export default Navbar;