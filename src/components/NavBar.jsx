import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-black text-white shadow-lg">
      <div className="flex justify-between items-center px-6 md:px-12 py-3">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer space-x-2"
          onClick={() => navigate("/")}
        >
          <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-black font-bold text-lg hover:scale-110 duration-300">
            AK
          </div>
          <h1 className="text-xl md:text-2xl font-bold hover:text-amber-400 duration-300">
            Ajeet | <span className="text-red-600">Developer</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium items-center">
          <li className="relative group cursor-pointer">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-amber-400"
                  : "text-white hover:text-amber-400 duration-300"
              }
            >
              Home
            </NavLink>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-400 transition-all group-hover:w-full"></span>
          </li>

          <li className="relative group cursor-pointer">
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive
                  ? "text-amber-400"
                  : "text-white hover:text-amber-400 duration-300"
              }
            >
              About
            </NavLink>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-400 transition-all group-hover:w-full"></span>
          </li>

          {/* <li className="relative group cursor-pointer">
            <NavLink
              to={"/experience"}
              className={({ isActive }) =>
                isActive
                  ? "text-amber-400"
                  : "text-white hover:text-amber-400 duration-300"
              }
            >
              Experience
            </NavLink>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-400 transition-all group-hover:w-full"></span>
          </li> */}

          <li className="relative group cursor-pointer">
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive
                  ? "text-amber-400"
                  : "text-white hover:text-amber-400 duration-300"
              }
            >
              Contact
            </NavLink>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-400 transition-all group-hover:w-full"></span>
          </li>

          {/* Hire Me Button */}
          {/* <li>
            <NavLink
              to="/contact"
              className="ml-4 bg-amber-500 text-black px-4 py-2 rounded-full font-semibold hover:bg-amber-400 hover:scale-105 transition-all duration-300"
            >
              Hire Me
            </NavLink>
          </li> */}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl focus:outline-none cursor-pointer hover:text-amber-400 duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black py-4 px-6 animate-slideDown">
          <ul className="flex flex-col gap-4 font-medium">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "text-amber-400" : "text-white hover:text-amber-400 duration-300"
                }
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive ? "text-amber-400" : "text-white hover:text-amber-400 duration-300"
                }
                onClick={() => setMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to={"/experience"}
                className={({ isActive }) =>
                  isActive ? "text-amber-400" : "text-white hover:text-amber-400 duration-300"
                }
                onClick={() => setMenuOpen(false)}
              >
                Experience
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive ? "text-amber-400" : "text-white hover:text-amber-400 duration-300"
                }
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/contact"
                className="bg-amber-500 text-black px-4 py-2 rounded-full font-semibold hover:bg-amber-400 hover:scale-105 transition-all duration-300 text-center"
                onClick={() => setMenuOpen(false)}
              >
                Hire Me
              </NavLink>
            </li> */}
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
