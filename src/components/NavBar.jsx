// import { useState } from "react";
// import { MdMenu, MdClose } from "react-icons/md";
// import { NavLink, useNavigate } from "react-router-dom";

// const NavBar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   return (
//     <header className="shadow py-3 bg-white sticky top-0 z-50">
//       <div className="flex justify-between items-center px-6 md:px-12">
//         <h1 className="text-2xl cursor-pointer" onClick={() => navigate("/")}>
//           LOGO
//         </h1>

//         <ul className="hidden md:flex gap-8 ">
//           <li className="hover:scale-105 duration-200 cursor-pointer">
//             <NavLink
//               to={"/"}
//               className={({ isActive }) =>
//                 isActive ? "text-blue-600" : "hover:text-black"
//               }
//             >
//               Home
//             </NavLink>
//           </li>

//           <li className="hover:scale-105 duration-200 cursor-pointer">
//             <NavLink
//               to={"/about"}
//               className={({ isActive }) =>
//                 isActive ? "text-blue-600" : "hover:text-black"
//               }
//             >
//               About
//             </NavLink>
//           </li>

//           <li className="hover:scale-105 duration-200 cursor-pointer">
//             <NavLink
//               to={"/experience"}
//               className={({ isActive }) =>
//                 isActive ? "text-blue-600" : "hover:text-black"
//               }
//             >
//               Experience
//             </NavLink>
//           </li>

//           <li className="hover:scale-105 duration-200 cursor-pointer">
//             <NavLink
//               to={"/contact"}
//               className={({ isActive }) =>
//                 isActive ? "text-blue-600" : "hover:text-black"
//               }
//             >
//               Contact
//             </NavLink>
//           </li>
//         </ul>

//         <button
//           className="md:hidden text-2xl focus:outline-none cursor-pointer"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {" "}
//           {menuOpen ? <MdClose /> : <MdMenu />}
//         </button>
//       </div>

//       {menuOpen && (
//         <div className="md:hidden bg-gray-50 py-4 px-6 animate-slideDown">
//           <ul className="flex flex-col">
//             <li>
//               <NavLink
//                 to={"/"}
//                 className={({ isActive }) =>
//                   isActive ? "text-blue-600" : "hover:text-black"
//                 }
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to={"/about"}
//                 className={({ isActive }) =>
//                   isActive ? "text-blue-600" : "hover:text-black"
//                 }
//               >
//                 About
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to={"/experience"}
//                 className={({ isActive }) =>
//                   isActive ? "text-blue-600" : "hover:text-black"
//                 }
//               >
//                 Experience
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to={"/contact"}
//                 className={({ isActive }) =>
//                   isActive ? "text-blue-600" : "hover:text-black"
//                 }
//               >
//                 Contact
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// };

// export default NavBar;



// import { useState } from "react";
// import { MdMenu, MdClose } from "react-icons/md";
// import { NavLink, useNavigate } from "react-router-dom";

// const NavBar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   return (
//     <header className="sticky top-0 z-50 bg-black text-white shadow-lg">
//       <div className="flex justify-between items-center px-6 md:px-12 py-3">
//         {/* Logo */}
//         <h1
//           className="text-2xl font-bold cursor-pointer hover:text-amber-400 duration-300"
//           onClick={() => navigate("/")}
//         >
//           LOGO
//         </h1>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-8 font-medium">
//           <li className="relative group cursor-pointer">
//             <NavLink
//               to={"/"}
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-amber-400"
//                   : "text-white hover:text-amber-400 duration-300"
//               }
//             >
//               Home
//             </NavLink>
//             <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-400 transition-all group-hover:w-full"></span>
//           </li>

//           <li className="relative group cursor-pointer">
//             <NavLink
//               to={"/about"}
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-amber-400"
//                   : "text-white hover:text-amber-400 duration-300"
//               }
//             >
//               About
//             </NavLink>
//             <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-400 transition-all group-hover:w-full"></span>
//           </li>

//           <li className="relative group cursor-pointer">
//             <NavLink
//               to={"/experience"}
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-amber-400"
//                   : "text-white hover:text-amber-400 duration-300"
//               }
//             >
//               Experience
//             </NavLink>
//             <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-400 transition-all group-hover:w-full"></span>
//           </li>

//           <li className="relative group cursor-pointer">
//             <NavLink
//               to={"/contact"}
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-amber-400"
//                   : "text-white hover:text-amber-400 duration-300"
//               }
//             >
//               Contact
//             </NavLink>
//             <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-400 transition-all group-hover:w-full"></span>
//           </li>
//         </ul>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-3xl focus:outline-none cursor-pointer hover:text-amber-400 duration-300"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <MdClose /> : <MdMenu />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-black py-4 px-6 animate-slideDown">
//           <ul className="flex flex-col gap-4 font-medium">
//             <li>
//               <NavLink
//                 to={"/"}
//                 className={({ isActive }) =>
//                   isActive ? "text-amber-400" : "text-white hover:text-amber-400 duration-300"
//                 }
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to={"/about"}
//                 className={({ isActive }) =>
//                   isActive ? "text-amber-400" : "text-white hover:text-amber-400 duration-300"
//                 }
//                 onClick={() => setMenuOpen(false)}
//               >
//                 About
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to={"/experience"}
//                 className={({ isActive }) =>
//                   isActive ? "text-amber-400" : "text-white hover:text-amber-400 duration-300"
//                 }
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Experience
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to={"/contact"}
//                 className={({ isActive }) =>
//                   isActive ? "text-amber-400" : "text-white hover:text-amber-400 duration-300"
//                 }
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Contact
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// };

// export default NavBar;


import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-black text-white shadow-lg">
      <div className="flex justify-between items-center px-6 md:px-12 py-3">
        <div
          className="flex items-center cursor-pointer space-x-2"
          onClick={() => navigate("/")}
        >
          <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-black font-bold text-lg hover:scale-110 duration-300">
            AK
          </div>
          <h1 className="text-xl md:text-2xl font-bold hover:text-amber-400 duration-300">
            Ajeet | Developer
          </h1>
        </div>

        <ul className="hidden md:flex gap-8 font-medium">
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

          <li className="relative group cursor-pointer">
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
          </li>

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
            <li>
              <NavLink
                to={"/experience"}
                className={({ isActive }) =>
                  isActive ? "text-amber-400" : "text-white hover:text-amber-400 duration-300"
                }
                onClick={() => setMenuOpen(false)}
              >
                Experience
              </NavLink>
            </li>
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
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;

