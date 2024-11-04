import Link from 'next/link';
import Image from 'next/image'; // Import Image for optimization
import React from 'react';
import "./footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="footer" id="Contact">
        <section className="container">
          <hr />
          <div className="grid">
            <div>
              <p className="section-number">01</p>
              <h3 className="section-title">Front-End Development</h3>
              <p className="section-description">User Interface</p>
              <ul className="list">
                <li><Link href="#" className="link">HTML</Link></li>
                <li><Link href="#" className="link">CSS</Link></li>
                <li><Link href="#" className="link">Tailwind CSS</Link></li>
                <li><Link href="#" className="link">JavaScript</Link></li>
              </ul>
            </div>
            <div>
              <p className="section-number">02</p>
              <h3 className="section-title">Back-End Development</h3>
              <p className="section-description">Data Handling</p>
              <ul className="list">
                <li><Link href="#" className="link">Node.js</Link></li>
                <li><Link href="#" className="link">MongoDB</Link></li>
              </ul>
            </div>
            <div>
              <p className="section-number">03</p>
              <h3 className="section-title">Full-Stack Development</h3>
              <p className="section-description">MERN Stack</p>
              <ul className="list">
                <li><Link href="#" className="link">MongoDB</Link></li>
                <li><Link href="#" className="link">Express.js</Link></li>
                <li><Link href="#" className="link">React.js</Link></li>
                <li><Link href="#" className="link">Node.js</Link></li>
              </ul>
            </div>
          </div>

          <small className="info">Ideal for websites, web apps, and brand design projects, custom code solutions, blogs, and app dashboard design.</small>

          <p className="social-title">Social Media</p>
          <ul className="social-links">
            <li><Link href="https://twitter.com/AliFaro45370063" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</Link></li>
            <li><Link href="https://www.facebook.com/ali.farooq.1447342" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</Link></li>
            <li><Link href="https://github.com/ALiraza4278" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</Link></li>
            <li><Link href="https://www.linkedin.com/in/ali-farooq-4a5762282/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</Link></li>
          </ul>

          <div className="flex-container">
            <Image className="profile-pic" src="/Images/myPic.png" alt="My Picture" width={80} height={80} /> {/* Use Image for optimization */}
            <Link className="explore-button" href="./Projects">Explore Work</Link>
            <Link className="arrow-button" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l14 0"></path>
                <path d="M13 18l6 -6"></path>
                <path d="M13 6l6 6"></path>
              </svg>
            </Link>
          </div>

          <div>
            <small className="help-text">Don&apos;t know if it fits your needs or not? <Link className="help-link" href="#">Let me help!</Link></small> {/* Escape single quotes */}
          </div>
        </section>
      </footer>
    </div>
  );
}
