import { useState } from "react";
import { FaLinkedin, FaGithub,  FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-scroll";

const Footer = () => {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail("");
    }
  };

  return (
    <footer className="bg-black text-white px-6 md:px-16 py-12 border-t border-gray-800">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
        {/* Logo / Tagline */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-3xl font-bold text-amber-400 mb-2">
            Ajeet Kumar
          </h1>
          <p className="text-gray-400 text-sm md:text-base text-center md:text-left">
            Full Stack Developer | MERN & IoT Enthusiast
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
          <ul className="flex flex-col gap-2 text-gray-400">
            {["home", "about", "experience", "contact"].map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-amber-400 transition-colors duration-300"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter / Social */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-semibold text-white mb-4">
            Stay Updated
          </h2>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3 w-full"
          >
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-full bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 w-full sm:w-auto"
              required
            />
            <button
              type="submit"
              className="bg-amber-500 text-black px-4 py-2 rounded-full font-semibold hover:bg-amber-400 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-2xl">
            <a
              href="https://www.linkedin.com/in/ajeet-kumar13/"
              target="_blank"
              className="hover:text-amber-400 transition-transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/ajeet3105"
              target="_blank"
              className="hover:text-amber-400 transition-transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/ajeetkumarkb02"
              target="_blank"
              className="hover:text-amber-400 transition-transform hover:scale-110"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.instagram.com/ajeetkumarbtech02/"
              target="_blank"
              className="hover:text-amber-400 transition-transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@Ajeet-b.tech123"
              target="_blank"
              className="hover:text-amber-400 transition-transform hover:scale-110"
            >
              <IoLogoYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="mt-6 text-center md:text-left text-gray-400">
        <p>
          Email:{" "}
          <a
            href="mailto:ajeetkumarkb02@gmail.com"
            className="hover:text-amber-400"
          >
            ajeetkumarkb02@gmail.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a href="tel:+91 7255951020" className="hover:text-amber-400">
            +91 7255951020
          </a>
        </p>
      </div>

      {/* Bottom Section */}
      <div className="mt-5 border-t border-gray-800 pt-3 text-center text-gray-500 text-sm">
        &copy; {year} Ajeet Kumar. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
