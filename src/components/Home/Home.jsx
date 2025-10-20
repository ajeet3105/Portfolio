import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
import {
  FaSquareFacebook,
  FaXTwitter,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaGithub
} from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { SiMongodb, SiExpress, SiArduino } from "react-icons/si";

const projects = [
  {
    title: "Smart Arduino Car",
    desc: "IoT based robotic car with obstacle detection and Blynk mobile control.",
    img: "https://images-cdn.ubuy.co.in/66df2280c514ed533b6b623c-keyestudio-smart-car-robot-4wd.jpg",
    tags: ["IoT", "Arduino",],
    live: "https://github.com/ajeet3105/car-control",
    github: "https://github.com/ajeet3105/car-control",
  },
  {
    title: "Mid Sem Paper Povider for Revision",
    desc: "AI based system using MediaPipe to detect and display sign language gestures.",
    img: "/projects/sign_language.jpg",
    tags: ["Html","TailwindCSS","Javascript","Express","Node.js","MongoDB"],
    live: "https://edupast.onrender.com/",
    github: "https://github.com/ajeet3105/EduPAST",
  },
  {
    title: "Portfolio Website",
    desc: "Responsive portfolio built using React, TailwindCSS showcasing projects & skills.",
    img: "/AKportfolio.png",
    tags: ["HTML","Tailwind", "React",],
    live: "https://portfolio-psi-jade-tefsgbv8c4.vercel.app/",
    github: "https://github.com/ajeet3105/Portfolio",
  },
  {
    title: "Buy Sell & Donate E-Books",
    desc: "Full-stack MERN project with cart, payment gateway, and user authentication.",
    img: "/projects/ecommerce.jpg",
    tags: ["MERN","TailwindCSS", "NodeJS", "MongoDB"],
    live: "https://bookmandir-frontend.vercel.app/",
    github: "https://github.com/ajeet3105/Bookmandir-Frontend",
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
            applications. Skilled in MERN stack, IoT, C++, and Data Structures.
            Always exploring new technologies, optimizing algorithms, and
            creating efficient and scalable solutions. Enthusiastic about
            solving complex problems and turning ideas into innovative projects.
          </p>

          {/* Social & Tech Icons */}
          <div className="flex flex-col md:flex-row justify-between text-center mt-6 gap-6 items-center">
            {/* Social Icons */}
            <div className="space-y-2">
              <h1 className="font-bold text-white text-lg">Available on</h1>
              <ul className="flex space-x-2">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100051647891197"
                    target="_blank"
                  >
                    <FaSquareFacebook className="text-blue-600 md:text-gray-400 text-xl md:text-2xl rounded-full border border-blue-600 md:border-gray-700 hover:border-blue-600 hover:text-blue-600 hover:scale-110 duration-200" />
                  </a>
                </li>
                <li>
                  <a href=""></a>
                  <FaGithub className="text-white md:text-gray-400 text-xl md:text-2xl rounded-full border border-white md:border-gray-700 hover:border-white hover:text-white hover:scale-110 duration-200"  />
                </li>
                <li>
                  <a href="https://x.com/ajeetkumarkb02" target="_blank">
                    <FaXTwitter className="text-white md:text-gray-400 text-xl md:text-2xl rounded-full border border-white md:border-gray-700 hover:border-white hover:text-white hover:scale-110 duration-200" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ajeet-kumar13/"
                    target="_blank"
                  >
                    <FaLinkedin className="text-blue-700 md:text-gray-400 text-xl md:text-2xl rounded-full border border-blue-700 md:border-gray-700 hover:border-blue-700 hover:text-blue-700 hover:scale-110 duration-200" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@Ajeet-b.tech123" target="_blank">
                    <IoLogoYoutube className="text-red-600 md:text-gray-400 text-xl md:text-2xl rounded-full border border-red-600 md:border-gray-700 hover:border-red-600 hover:text-red-600 hover:scale-110 duration-200" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Tech Stack Icons */}
            <div className="space-y-2">
              <h1 className="font-bold text-white text-lg">
                Currently working on
              </h1>
              <ul className="flex space-x-2 justify-center md:text-center">
                <li>
                  <SiMongodb className="text-green-600 md:text-gray-400 text-xl md:text-2xl rounded-full border border-green-600 md:border-gray-700 hover:border-green-600 hover:text-green-600 hover:scale-110 duration-200" />
                </li>
                <li>
                  <SiExpress className="text-gray-400 md:text-gray-400 text-xl md:text-2xl rounded-full border border-gray-400 md:border-gray-700 hover:border-gray-400 hover:text-gray-400 hover:scale-110 duration-200" />
                </li>
                <li>
                  <FaReact className="text-sky-500 md:text-gray-400 text-xl md:text-2xl rounded-full border border-sky-500 md:border-gray-700 hover:border-sky-500 hover:text-sky-500 hover:scale-110 duration-200" />
                </li>
                <li>
                  <FaNodeJs className="text-green-500 md:text-gray-400 text-xl md:text-2xl rounded-full border border-green-500 md:border-gray-700 hover:border-green-500 hover:text-green-500 hover:scale-110 duration-200" />
                </li>
                <li>
                  <SiArduino className="text-teal-500 md:text-gray-400 text-xl md:text-2xl rounded-full border border-teal-500 md:border-gray-700 hover:border-teal-500 hover:text-teal-500 hover:scale-110 duration-200" />
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
          <div className="mb-4">
            <h2 className="font-semibold mb-1">C++</h2>
            <div className="bg-gray-800 rounded-full h-3  w-full">
              <div className="bg-indigo-700 h-2  md:h-3 lg:h-3 rounded-full w-3/5 sm:w-3/5 md:w-3/4 lg:w-2/3 transition-all duration-500"></div>
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-1 ">
              Data Structures and Algorithms
            </h2>
            <div className="bg-gray-800 rounded-full h-3 w-full">
              <div className="bg-red-700 h-2 md:h-3 lg:h-3 rounded-full w-2/4 sm:w-2/4 md:w-3/5 lg:w-3/5 transition-all duration-500"></div>
            </div>
          </div>

          {/* Frontend */}
          <div>
            <h2 className="font-semibold mb-1">Frontend</h2>
            <div className="bg-gray-800 rounded-full h-3 w-full">
              <div className="bg-amber-500 h-2  md:h-3 lg:h-3 rounded-full w-3/5 sm:w-3/5 md:w-3/4 lg:w-2/3 transition-all duration-500"></div>
            </div>
          </div>

          {/* Backend */}
          <div>
            <h2 className="font-semibold mb-1">Backend</h2>
            <div className="bg-gray-800 rounded-full h-3 w-full">
              <div className="bg-green-500 h-2 md:h-3 lg:h-3 rounded-full w-2/4 sm:w-2/4 md:w-2/4 lg:w-2/4 transition-all duration-500"></div>
            </div>
          </div>

          {/* Database */}
          <div>
            <h2 className="font-semibold mb-1">Database</h2>
            <div className="bg-gray-800 rounded-full h-3 w-full">
              <div className="bg-teal-500 h-2 md:h-3 lg:h-3 rounded-full w-3/4 sm:w-3/4 md:w-3/4 lg:w-3/4 transition-all duration-500"></div>
            </div>
          </div>

          {/* IoT */}
          <div>
            <h2 className="font-semibold mb-1">IoT / Arduino</h2>
            <div className="bg-gray-800 rounded-full h-3 w-full">
              <div className="bg-blue-500 h-2 md:h-3 lg:h-3 rounded-full w-2/4 sm:w-2/4 md:w-2/4 lg:w-2/4 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}

      <div className="mt-16">
        <h1 className="text-2xl font-bold text-amber-500 mb-6">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 duration-300"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-65 object-cover object-[center_0%] "
              />
              <div className="p-4">
                <h2 className="font-bold text-white mb-2">{project.title}</h2>
                <p className="text-gray-300 text-sm mb-2">{project.desc}</p>
                <div className="flex gap-2 flex-wrap" >
                  {project.tags.map((tag, i) => (
                    <span
                      key={i} 
                      className="bg-amber-500 text-black px-2 py-1 rounded-full text-xs" 
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex gap-4">
                  <a
                    href={project.live}
                    className="text-amber-500 text-sm hover:underline" target="_blank"
                  >
                    Live
                  </a>
                  <a
                    href={project.github}
                    className="text-amber-500 text-sm hover:underline" target="_blank"
                  >
                    GitHub
                  </a>
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
