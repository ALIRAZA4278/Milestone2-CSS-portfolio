import Link from 'next/link'; // Import Link from Next.js
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <p className="navbar-title">ALI <span>RAZA</span></p>
                <ul className="nav-menu">
                    <li className="nav-item"><Link href="/">Home</Link></li>
                    <li className="nav-item"><Link href="/About">About</Link></li>
                    <li className="nav-item"><Link href="/Skills">Skills</Link></li>
                    <li className="nav-item"><Link href="/Projects">Projects</Link></li>
                    <li className="nav-item"><Link href="/Contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
