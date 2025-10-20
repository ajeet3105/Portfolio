import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaMicrochip,
  FaCode,
} from "react-icons/fa6";

const About = () => {
  return (
    <div className="max-w-screen min-h-screen bg-black text-white px-6 md:px-16 py-10 md:py-20">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-amber-500 mb-6 text-center">
        About Me
      </h1>

      {/* About Description */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <p className="text-gray-300 text-lg leading-relaxed">
          Hello! I'm{" "}
          <span className="text-amber-500 font-semibold">Ajeet Kumar</span>, a
          passionate developer currently pursuing B.Tech in Computer Science. I
          love building innovative solutions combining{" "}
          <span className="text-amber-400">Web Development</span> and{" "}
          <span className="text-amber-400">IoT</span>. My goal is to create
          projects that make technology accessible and meaningful.
        </p>

        <p className="text-gray-400 text-base leading-relaxed">
          I specialize in the{" "}
          <span className="text-amber-400 font-semibold">MERN stack</span>{" "}
          (MongoDB, Express.js, React, Node.js), and I also enjoy working on IoT
          projects with Arduino and ESP modules. Along with that, I have a
          strong foundation in{" "}
          <span className="text-amber-400 font-semibold">C++</span> and{" "}
          <span className="text-amber-400 font-semibold">
            Data Structures & Algorithms
          </span>
          .
        </p>

        <p className="text-gray-400 text-base leading-relaxed">
          Outside coding, I enjoy learning about AI, electronics, and automation
          systems. I’m always open to exploring new technologies, collaborating
          with other developers, and improving my problem-solving skills.
        </p>
      </div>

      {/* Education & Interests */}
      <div className="max-w-4xl mx-auto mt-12 grid md:grid-cols-2 gap-8 text-center">
        <div className="border border-gray-500 p-6 rounded-2xl shadow-lg hover:scale-105 duration-300">
          <h2 className="text-xl font-semibold text-amber-500 mb-2">
            🎓 Education
          </h2>
          <p className="text-gray-300">
            Pursuing <span className="text-amber-400">B.Tech in Computer Science</span>{" "}
            from Bhopal. Focused on building hands-on projects and developing
            strong technical foundations.
          </p>
        </div>

        <div className="border border-gray-500 p-6 rounded-2xl shadow-lg hover:scale-105 duration-300">
          <h2 className="text-xl font-semibold text-amber-500 mb-2">
            💡 Interests
          </h2>
          <p className="text-gray-300">
            MERN Development • IoT Systems • AI/ML • Arduino • Problem Solving •
            Open Source Projects
          </p>
        </div>
      </div>

      {/* My Skills Section */}
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-center text-amber-500 mb-10">
          My Skills
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {/* Programming Languages */}
          <div className="border border-gray-600 rounded-2xl p-6 hover:scale-105 duration-300 shadow-lg">
            <FaCode className="text-5xl text-amber-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-amber-500 mb-2">
              Programming Languages
            </h3>
            <p className="text-gray-400">
              C, C++, JavaScript, DSA
            </p>
          </div>

          {/* Frontend */}
          <div className="border border-gray-600 rounded-2xl p-6 hover:scale-105 duration-300 shadow-lg">
            <FaReact className="text-5xl text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-amber-500 mb-2">
              Frontend Development
            </h3>
            <p className="text-gray-400">
              HTML, CSS, Tailwind CSS, React.js, Vite
            </p>
          </div>

          {/* Backend */}
          <div className="border border-gray-600 rounded-2xl p-6 hover:scale-105 duration-300 shadow-lg">
            <FaNodeJs className="text-5xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-amber-500 mb-2">
              Backend Development
            </h3>
            <p className="text-gray-400">Node.js, Express.js, REST APIs</p>
          </div>

          {/* Database */}
          <div className="border border-gray-600 rounded-2xl p-6 hover:scale-105 duration-300 shadow-lg">
            <FaDatabase className="text-5xl text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-amber-500 mb-2">
              Database
            </h3>
            <p className="text-gray-400">MongoDB, MySQL</p>
          </div>

          {/* IoT */}
          <div className="border border-gray-600 rounded-2xl p-6 hover:scale-105 duration-300 shadow-lg sm:col-span-2 lg:col-span-1">
            <FaMicrochip className="text-5xl text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-amber-500 mb-2">
              IoT & Hardware
            </h3>
            <p className="text-gray-400">
              Arduino UNO, ESP8266, ESP32, RFID, Sensors, Blynk IoT
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold text-white mb-3">
          Let's build something together!
        </h2>
        <a
          href="mailto:ajeetkumarbtech02@gmail.com"
          className="inline-block bg-amber-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition duration-300"
        >
          Hire Me
        </a>
      </div>
    </div>
  );
};

export default About;
