// import { FaSquareFacebook } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaLinkedin } from "react-icons/fa";
// import { IoLogoYoutube } from "react-icons/io";
// import { SiMongodb } from "react-icons/si";
// import { SiExpress } from "react-icons/si";
// import { FaReact } from "react-icons/fa";
// import { FaNodeJs } from "react-icons/fa";
// import { SiArduino } from "react-icons/si";
// import { ReactTyped } from "react-typed";

// const Home = () => {
//   return (
//     <>
//       <div className="max-w-screen ">
//         <div className="flex flex-col md:flex-row px-7">
//           <div className="md:w-1/2 mt-12 md:mt-24 ">
//             <span>Welcome In My Feed</span>
//             <div className="flex space-x-1  md:text-4xl">
//               <h1 className="font-semibold">Hello, I'm a </h1>
//               {/* <span className="text-red-700 font-medium"> Developer</span> */}
//                   <ReactTyped className="text-red-700 font-bold" strings={["Developer","Coder","Programmer"]} typeSpeed={60} backSpeed={60}  loop/>

//             </div>
//             <br />
//             <div>
//               <p className="text-justify text-sm ">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
//                 ducimus? Iure quibusdam possimus quae tempora pariatur, id
//                 officia a quasi, odio voluptas hic, adipisci voluptatibus unde!
//                 Eos amet aspernatur sapiente? Hic, maxi.
//               </p>
//             </div>
//             <br />

//             <div className="flex justify-between">
//               <div className="space-y-2">
//                 <h1 className="font-bold ">Avallable on</h1>
//                 <ul className="flex space-x-2">
//                   <li>
//                     <FaSquareFacebook className="text-xl md:text-2xl rounded-full border border-gray-200 hover:border-gray-400 hover:scale-110 hover:text-blue-600 duration-200" />
//                   </li>
//                   <li>
//                     <FaInstagram className="text-xl md:text-2xl rounded-full border border-gray-200 hover:border-gray-400 hover:scale-110 hover:text-pink-500 duration-200" />
//                   </li>
//                   <li>
//                     <FaXTwitter className="text-xl md:text-2xl rounded-full border border-gray-200 hover:border-gray-400 hover:scale-110 hover:text-black duration-200" />
//                   </li>
//                   <li>
//                     <FaLinkedin className="text-xl md:text-2xl rounded-full border border-gray-200 hover:border-gray-400 hover:scale-110 hover:text-blue-700 duration-200" />
//                   </li>
//                   <li>
//                     <IoLogoYoutube className="text-xl md:text-2xl rounded-full border border-gray-200 hover:border-gray-400 hover:scale-110 hover:text-red-600 duration-200" />
//                   </li>
//                 </ul>
//               </div>
//               <div className="space-y-2">
//                 <h1 className="font-bold">Current working on</h1>
//                 <ul className="flex space-x-2">
//                   <li>
//                     <SiMongodb className="text-xl md:text-2xl rounded-full border border-gray-200 hover:border-gray-400 hover:scale-110 hover:text-green-600 duration-200" />
//                   </li>
//                   <li>
//                     <SiExpress className="text-xl md:text-2xl rounded-full border border-gray-200 hover:border-gray-400 hover:scale-110 hover:text-gray-700 duration-200" />
//                   </li>
//                   <li>
//                     <FaReact className="text-xl md:text-2xl rounded-full border border-gray-200 hover:border-gray-400 hover:scale-110 hover:text-sky-500 duration-200" />
//                   </li>
//                   <li>
//                     <FaNodeJs className="text-xl md:text-2xl rounded-full border border-gray-200 hover:border-gray-400 hover:scale-110 hover:text-green-500 duration-200" />
//                   </li>
//                   <li>
//                     <SiArduino className="text-xl md:text-2xl rounded-full border border-gray-200 hover:border-gray-400 hover:scale-110 hover:text-teal-500 duration-200" />
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div className="md:w-1/2 bg-amber-500">right</div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Home;

// import { ReactTyped } from "react-typed";
// import { FaSquareFacebook, FaXTwitter, FaLinkedin, FaReact, FaNodeJs } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";
// import { IoLogoYoutube } from "react-icons/io";
// import { SiMongodb, SiExpress, SiArduino } from "react-icons/si";

// const Home = () => {
//   return (
//     <div className="max-w-screen min-h-screen bg-black flex flex-col px-7 py-10 md:px-12 md:py-16 text-white">
//       <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-10">

//         {/* Right Image Section */}
//         <div className="md:w-1/2 flex justify-center md:justify-end">
//           <div className="w-50 h-50 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-amber-500 shadow-lg shadow-amber-500/50 hover:scale-105 duration-300">
//             <img
//               src="/photo/ajeet.jpg"
//               alt="profile"
//               className="w-full h-full object-cover object-[center_40%]"

//             />
//           </div>
//         </div>

//         {/* Left Text & Icons */}
//         <div className="md:w-1/2 mt-6 md:mt-0">
//           <span className="text-gray-300 text-lg font-medium tracking-wide">
//             Welcome In My Feed 👋
//           </span>
//           <div className="flex space-x-1 md:text-4xl mt-2">
//             <h1 className="font-semibold text-white">Hello, I'm a </h1>
//             <ReactTyped
//               className="text-amber-500 font-bold"
//               strings={["Developer","Coder","Programmer"]}
//               typeSpeed={60}
//               backSpeed={60}
//               loop
//             />
//           </div>

//           <p className="text-gray-300 text-sm mt-4">
//             Passionate about building interactive and aesthetic web applications.
//             Always exploring innovations in MERN stack and IoT.
//           </p>

//           {/* Icons Section */}
//           <div className="flex flex-col md:flex-row justify-between mt-6 gap-6">

//             {/* Social Icons */}
//             <div className="space-y-2">
//               <h1 className="font-bold text-white text-lg">Available on</h1>
//               <ul className="flex space-x-2">
//                 <li>
//                   <FaSquareFacebook className="text-xl md:text-2xl rounded-full border border-gray-700 hover:border-blue-600 hover:scale-110 hover:text-blue-600 duration-200" />
//                 </li>
//                 <li>
//                   <FaInstagram className="text-xl md:text-2xl rounded-full border border-gray-700 hover:border-pink-500 hover:scale-110 hover:text-pink-500 duration-200" />
//                 </li>
//                 <li>
//                   <FaXTwitter className="text-xl md:text-2xl rounded-full border border-gray-700 hover:border-white hover:scale-110 hover:text-white duration-200" />
//                 </li>
//                 <li>
//                   <FaLinkedin className="text-xl md:text-2xl rounded-full border border-gray-700 hover:border-blue-700 hover:scale-110 hover:text-blue-700 duration-200" />
//                 </li>
//                 <li>
//                   <IoLogoYoutube className="text-xl md:text-2xl rounded-full border border-gray-700 hover:border-red-600 hover:scale-110 hover:text-red-600 duration-200" />
//                 </li>
//               </ul>
//             </div>

//             {/* Tech Stack */}
//             <div className="space-y-2">
//               <h1 className="font-bold text-white text-lg">Currently working on</h1>
//               <ul className="flex space-x-2 ">
//                 <li>
//                   <SiMongodb className="text-xl md:text-2xl rounded-full border border-gray-700 hover:border-green-600 hover:scale-110 hover:text-green-600 duration-200" />
//                 </li>
//                 <li>
//                   <SiExpress className="text-xl md:text-2xl rounded-full border border-gray-700 hover:border-gray-400 hover:scale-110 hover:text-gray-400 duration-200" />
//                 </li>
//                 <li>
//                   <FaReact className="text-xl md:text-2xl rounded-full border border-gray-700 hover:border-sky-500 hover:scale-110 hover:text-sky-500 duration-200" />
//                 </li>
//                 <li>
//                   <FaNodeJs className="text-xl md:text-2xl rounded-full border border-gray-700 hover:border-green-500 hover:scale-110 hover:text-green-500 duration-200" />
//                 </li>
//                 <li>
//                   <SiArduino className="text-xl md:text-2xl rounded-full border border-gray-700 hover:border-teal-500 hover:scale-110 hover:text-teal-500 duration-200" />
//                 </li>
//               </ul>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import { ReactTyped } from "react-typed";
import {
  FaSquareFacebook,
  FaXTwitter,
  FaLinkedin,
  FaReact,
  FaNodeJs,
} from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { SiMongodb, SiExpress, SiArduino } from "react-icons/si";

const projects = [
  {
    title: "Smart Arduino Car",
    desc: "IoT based robotic car with obstacle detection and Blynk mobile control.",
    img: "/projects/arduino_car.jpg",
    tags: ["IoT", "Arduino", "MERN"],
    live: "#",
    github: "#",
  },
  {
    title: "Sign Language Detection",
    desc: "AI based system using MediaPipe to detect and display sign language gestures.",
    img: "/projects/sign_language.jpg",
    tags: ["AI", "Python", "IoT"],
    live: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    desc: "Responsive portfolio built using React, TailwindCSS showcasing projects & skills.",
    img: "/projects/portfolio.jpg",
    tags: ["React", "Tailwind", "Frontend"],
    live: "#",
    github: "#",
  },
  {
    title: "E-commerce Web App",
    desc: "Full-stack MERN project with cart, payment gateway, and user authentication.",
    img: "/projects/ecommerce.jpg",
    tags: ["MERN", "NodeJS", "MongoDB"],
    live: "#",
    github: "#",
  },
  {
    title: "Chat App",
    desc: "Real-time chat application using Socket.IO and Node.js backend.",
    img: "/projects/chat_app.jpg",
    tags: ["Socket.IO", "NodeJS", "Frontend"],
    live: "#",
    github: "#",
  },
  {
    title: "IoT Weather Station",
    desc: "IoT project to monitor temperature and humidity in real-time using sensors.",
    img: "/projects/iot_weather.jpg",
    tags: ["IoT", "Arduino", "Sensors"],
    live: "#",
    github: "#",
  },
];


const Home = () => {
  return (
    <div className="max-w-screen min-h-screen bg-black flex flex-col px-7 py-10 md:px-12 md:py-16 text-white">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-10">
        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="w-50 h-50 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-amber-500 shadow-lg shadow-amber-500/50 hover:scale-105 duration-300">
            <img
              src="/photo/ajeet.jpg"
              alt="profile"
              className="w-full h-full object-cover object-[center_20%]"
            />
          </div>
        </div>

        {/* Left Text & Icons */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <span className="text-gray-300 text-lg font-medium tracking-wide">
            Welcome In My Feed 👋
          </span>
          <div className="flex space-x-1 md:text-4xl mt-2">
            <h1 className="font-semibold text-white">Hello, I'm a </h1>
            <ReactTyped
              className="text-amber-500 font-bold"
              strings={["Developer", "Coder", "Programmer"]}
              typeSpeed={60}
              backSpeed={60}
              loop
            />
          </div>

          <p className="text-gray-300 text-sm mt-4 text-justify ">
            Passionate about building interactive and aesthetic web
            applications. Always exploring innovations in MERN stack and IoT.
          </p>

          {/* Social & Tech Icons */}
          <div className="flex flex-col md:flex-row justify-between text-center mt-6 gap-6 items-center">
            {/* Social Icons */}
            <div className="space-y-2">
              <h1 className="font-bold text-white text-lg">Available on</h1>
              <ul className="flex space-x-2">
                <li>
                  <FaSquareFacebook className="text-xl md:text-2xl rounded-full border border-gray-700 hover:border-blue-600 hover:scale-110 hover:text-blue-600 duration-200" />
                </li>
                <li>
                  <FaInstagram className="text-xl md:text-2xl rounded-full border border-gray-700 hover:border-pink-500 hover:scale-110 hover:text-pink-500 duration-200" />
                </li>
                <li>
                  <FaXTwitter className="text-xl md:text-2xl rounded-full border border-gray-700 hover:border-white hover:scale-110 hover:text-white duration-200" />
                </li>
                <li>
                  <FaLinkedin className="text-xl md:text-2xl rounded-full border border-gray-700 hover:border-blue-700 hover:scale-110 hover:text-blue-700 duration-200" />
                </li>
                <li>
                  <IoLogoYoutube className="text-xl md:text-2xl rounded-full border border-gray-700 hover:border-red-600 hover:scale-110 hover:text-red-600 duration-200" />
                </li>
              </ul>
            </div>

            {/* Tech Stack Icons */}
            <div className="space-y-2">
              <h1 className="font-bold text-white text-lg">
                Currently working on
              </h1>
              <ul className="flex space-x-2 ">
                <li>
                  <SiMongodb className="text-xl md:text-2xl rounded-full border border-gray-700 hover:border-green-600 hover:scale-110 hover:text-green-600 duration-200" />
                </li>
                <li>
                  <SiExpress className="text-xl md:text-2xl rounded-full border border-gray-700 hover:border-gray-400 hover:scale-110 hover:text-gray-400 duration-200" />
                </li>
                <li>
                  <FaReact className="text-xl md:text-2xl rounded-full border border-gray-700 hover:border-sky-500 hover:scale-110 hover:text-sky-500 duration-200" />
                </li>
                <li>
                  <FaNodeJs className="text-xl md:text-2xl rounded-full border border-gray-700 hover:border-green-500 hover:scale-110 hover:text-green-500 duration-200" />
                </li>
                <li>
                  <SiArduino className="text-xl md:text-2xl rounded-full border border-gray-700 hover:border-teal-500 hover:scale-110 hover:text-teal-500 duration-200" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Skills / Tech Stack Bars */}
      <div className="mt-16">
        <h1 className="text-2xl font-bold text-amber-500 mb-6">My Skills</h1>
        <div className="space-y-4">
          {/**c++ */}
           <div>
            <h2 className="font-semibold mb-1">C++</h2>
            <div className="bg-gray-800 rounded-full h-3 w-full">
              <div className="bg-indigo-700 h-3 rounded-full w-55 md:w-130"></div>
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-1">Data Structures and Algorithms</h2>
            <div className="bg-gray-800 rounded-full h-3 w-full">
              <div className="bg-red-700 h-3 rounded-full w-45 md:w-100"></div>
            </div>
          </div>

          {/* Frontend */}
          <div>
            <h2 className="font-semibold mb-1">Frontend</h2>
            <div className="bg-gray-800 rounded-full h-3 w-full">
              <div className="bg-amber-500 h-3 rounded-full w-45 md:w-95"></div>
            </div>
          </div>

          {/* Backend */}
          <div>
            <h2 className="font-semibold mb-1">Backend</h2>
            <div className="bg-gray-800 rounded-full h-3 w-full">
              <div className="bg-green-500 h-3 rounded-full w-35 md:w-60"></div>
            </div>
          </div>

          {/* Database */}
          <div>
            <h2 className="font-semibold mb-1">Database</h2>
            <div className="bg-gray-800 rounded-full h-3 w-full">
              <div className="bg-teal-500 h-3 rounded-full w-40 md:w-90"></div>
            </div>
          </div>

          {/* IoT */}
          <div>
            <h2 className="font-semibold mb-1">IoT / Arduino</h2>
            <div className="bg-gray-800 rounded-full h-3 w-full">
              <div className="bg-blue-500 h-3 rounded-full w-35 md:w-50"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      
       <div className="mt-16">
        <h1 className="text-2xl font-bold text-amber-500 mb-6">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 duration-300">
              <img src={project.img} alt={project.title} className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h2 className="font-bold text-white mb-2">{project.title}</h2>
                <p className="text-gray-300 text-sm mb-2">{project.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-amber-500 text-black px-2 py-1 rounded-full text-xs">{tag}</span>
                  ))}
                </div>
                <div className="mt-3 flex gap-4">
                  <a href={project.live} className="text-amber-500 text-sm hover:underline">Live</a>
                  <a href={project.github} className="text-amber-500 text-sm hover:underline">GitHub</a>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

          {/* Add more project cards similarly */}
    </div>
  );
};

export default Home;
