import Image from "next/image";
import './Home.css';

export default function Home() {
  return (
    <div>
      <section id="home" className="home-section">
        {/* Image */}
        <Image  src="/Pic.png"  alt="Ali Raza"  width={700}  height={400}  className="home-image" />

        {/* Text Section */}
        <div className="text-section" id="text-section">
          <h1>Hi, It's <span className="text-blue-600">Ali Raza</span></h1>
          <h3>I'm a <span className="relative inline-block typing-text"></span></h3>
          <p>
            "Ali Raza, a 19-year-old web and chatbot developer with a passion
            for crafting innovative digital solutions. With a strong foundation in
            programming languages like HTML, CSS & JavaScript, I design and develop
            responsive websites and conversational chatbots that engage users and
            simplify interactions."
          </p>

          {/* Social Icons */}
          <div className="social-icons-container">
          <div className="social-icons">

            <a href="https://www.linkedin.com/in/ali-raza-4a5762282/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Image src="/Linkedin.svg" alt="LinkedIn" width={40} height={40} />
            </a>
            <a href="https://github.com/ALIRAZA4278" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Image src="/github.svg" alt="GitHub" width={40} height={40} />
            </a>
            <a href="https://x.com/AliFaro45370063" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Image src="/twitter.svg" alt="Twitter" width={40} height={40} />
            </a>
            <a href="https://instagram.com/its_zyrox_x" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Image src="/instagram.svg" alt="Instagram" width={40} height={40} />
            </a>
          </div>
          </div>

          {/* Action Button */}
          <div className="flex flex-col md:flex-row mt-0 space-y-4 md:space-y-0 md:space-x-4 mx-auto">
            <a href="/Projects" className="action-button">
              Explore Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
