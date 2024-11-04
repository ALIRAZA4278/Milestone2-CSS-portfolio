import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <p className="navbar-title">ALI <span>RAZA</span></p>
                <ul className="nav-menu">
                    <li className="nav-item"><a href="/">Home</a></li>
                    <li className="nav-item"><a href="/About">About</a></li>
                    <li className="nav-item"><a href="/Skills">Skills</a></li>
                    <li className="nav-item"><a href="/Projects">Projects</a></li>
                    <li className="nav-item"><a href="/Contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
