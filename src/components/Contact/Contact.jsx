import React from "react";
import {
  FaSquareFacebook,
  FaXTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="bg-black min-h-screen py-10 flex flex-col items-center text-white px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl w-full">
        {/* Top Header Center */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Have Any Project?
          </h2>
          <span className="text-gray-400 block mt-2">
            Please Drop a Message
          </span>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Get in touch and let me know how I can help. Fill out the form and
            I'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Side: Contact Details */}
          <div className="space-y-6">
            {/* Address Box */}
            <div className="p-4 border border-gray-600 rounded-xl shadow-lg space-y-2">
              <h3 className="text-lg ">Address</h3>
              <p className="text-gray-400">Bhopal, Madhya Pradesh</p>
            </div>

            {/* Phone Box */}
            <div className="p-4 border border-gray-600 rounded-xl shadow-lg space-y-2">
              <h3 className="text-lg ">Phone</h3>
              <p className="text-gray-400">+91 7255951020</p>
            </div>

            {/* Email Box */}
            <div className="p-4 border border-gray-600 rounded-xl shadow-lg space-y-2">
              <h3 className="text-lg  ">Email</h3>
              <p className="text-gray-400">ajeetkumarkb02@gmail.com</p>
            </div>

            {/* Social Links Box */}
            <div className="p-4 border border-gray-600 rounded-xl shadow-lg">
              <h3 className="text-lg  mb-2">Social Links</h3>
              <div className="flex gap-5 text-2xl">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-blue-500 transition transform hover:scale-110"
                >
                  <FaSquareFacebook />
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition transform hover:scale-110"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="https://github.com/ajeet3105"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-transform hover:scale-110"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition transform hover:scale-110"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="p-8 rounded-xl shadow-lg border border-gray-600">
            <form className="space-y-4">
              <div>
                <label className="block text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="e.g John Doe"
                  className="w-full px-4 py-3 bg-transparent text-white rounded-lg border border-gray-600 outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">
                  Email <span className="text-xs">(Required)</span>
                </label>
                <input
                  type="email"
                  placeholder="e.g johndoe@mail.com"
                  className="w-full px-4 py-3 bg-transparent text-white rounded-lg border border-gray-600 outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Phone</label>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-transparent text-white rounded-lg border border-gray-600 outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">
                  Message <span className="text-xs">(Required)</span>
                </label>
                <textarea
                  placeholder="Write message..."
                  className="w-full px-4 py-3 bg-transparent text-white rounded-lg border border-gray-600 outline-none focus:border-amber-500 h-24"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 text-black font-semibold py-3 rounded-lg hover:bg-amber-400 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
