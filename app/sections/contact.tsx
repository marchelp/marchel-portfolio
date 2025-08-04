"use client";

import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  {
    name: "@marchlp",
    url: "https://www.instagram.com/marchlp/",
    icon: <FaInstagram className="text-pink-500 text-2xl lg:text-3xl" />,
  },
  {
    name: "Marchel Adias Pradana",
    url: "https://www.linkedin.com/in/marchelp/",
    icon: <FaLinkedin className="text-blue-600 text-2xl lg:text-3xl" />,
  },
  {
    name: "marchelp",
    url: "https://github.com/marchelp",
    icon: <FaGithub className="text-black dark:text-white text-2xl lg:text-3xl" />,
  },
  {
    name: "marchel.adias@gmail.com",
    url: "mailto:marchel.adias@gmail.com",
    icon: <FaEnvelope className="text-black dark:text-white text-2xl lg:text-3xl" />,
  },
];

export default function Contact() {
  return (
    <div className="container mt-20 pt-20" id="contact">
      <div>
        <h2 className="md:text-2xl font-semibold text-center text-[#C5F10F]">
          Contact
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base text-center">
          Let’s get in touch
        </p>
      </div>

      <div className="flex flex-col md:flex-col mx-4 gap-8 mb-16 items-center">
        {/* Contact Form */}
        <form
          action="mailto:marchel.adias@gmail.com"
          method="POST"
          encType="text/plain"
          className="mt-10 max-w-xl mx-auto space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
          ></textarea>
          <button
            type="submit"
            className="bg-[#C5F10F] text-black font-semibold px-6 py-2 rounded-md hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base text-center">
          Or just connect with me
        </p>
        <div className="w-full max-w-md mx-auto flex justify-evenly text-gray-700 dark:text-gray-200">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
