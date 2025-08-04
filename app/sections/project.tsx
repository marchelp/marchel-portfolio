"use client";
import { useState } from "react";
import { LinkPreview } from "../components/LinkPreview/link-preview";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiGithub,
  SiSass,
  SiHtml5,
  SiCss3,
  SiGoogledrive,
  SiMongodb,
  SiPython,
  SiExpress,
} from "react-icons/si";
import { MdOutlineOpenInNew } from "react-icons/md";

export default function Project() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  const project = [
    // {
    //   title: "Full Project",
    //   description: "...",
    //   demo: "https://...",
    //   github: "https://github.com/...",
    //   drive: "https://drive.google.com/...",
    //   tech: ["react"],
    // }
    {
      title: "Findtofine",
      description:
        "A mobile app that helps travelers pack efficiently by recognizing items through photos and creating luggage checklists.",
      image: "/images/project/findtofine.png",
      drive:
        "https://drive.google.com/file/d/1sux5RNq73LWs-bZjkOjcFuO1Bwi56j_n/view",
      github: "https://github.com/Heptacore-FindtoFine",
      tech: ["javascript", "expressjs", "python"],
    },
    {
      title: "Setor Sampah",
      description:
        "Setor Sampah is a web app that helps monitor and verify the waste hikers carry in and out of national parks, promoting cleaner, plastic-free nature conservation.",
      image: "/images/project/setor-sampah.png",
      demo: "https://setorsampah.vercel.app/",
      drive:
        "https://drive.google.com/file/d/14AOes9HtZj-jxNy4kcG157hI3faSC07A/view",
      tech: ["nextjs", "react", "tailwind", "mongodb"],
    },
    {
      title: "Fork Finder",
      description:
        "Fork Finder is a website that helps you discover restaurants across different cities, with details like ratings, menus, and facilities to match your preferences.",
      image: "/images/project/fork-finder.png",
      demo: "https://main--fork-finder-apps.netlify.app/index.html",
      github: "https://github.com/marchelp/Restaurant-Apps",
      tech: ["html", "javascript", "scss"],
    },
    {
      title: "Movie Catalogue",
      description:
        "Movie Catalogue is a front-end web app that showcases movies using real-time data from TheMovieDB API.",
      image: "/images/project/movie-catalogue.png",
      demo: "https://moviecatalogue-app.netlify.app/",
      github: "https://github.com/marchelp/movie-catalogue",
      tech: ["html", "css", "javascript"],
    },
  ];

  const renderIcon = (name: string) => {
    switch (name) {
      case "html":
        return <SiHtml5 title="HTML" className="text-orange-500" />;
      case "css":
        return <SiCss3 title="CSS" className="text-blue-500" />;
      case "scss":
        return <SiSass title="SCSS" className="text-pink-500" />;
      case "tailwind":
        return <SiTailwindcss title="Tailwind CSS" className="text-cyan-500" />;
      case "javascript":
        return <SiJavascript title="JavaScript" className="text-yellow-400" />;
      case "react":
        return <SiReact title="React" className="text-blue-500" />;
      case "nextjs":
        return (
          <SiNextdotjs title="Next.js" className="text-black dark:text-white" />
        );
      case "expressjs":
        return <SiExpress title="expressjs" className="text-black dark:text-white" />;
      case "mongodb":
        return <SiMongodb title="MongoDB" className="text-green-500" />;
      case "python":
        return <SiPython title="Python" className="text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="container mt-20 pt-20 min-h-full" id="project">
      <div>
        <h2 className="md:text-2xl font-semibold text-center text-[#C5F10F]">
          Project
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base text-center">
          Things I’ve Created
        </p>
      </div>

      <div className="flex flex-col md:flex-wrap lg:flex-row gap-6 mt-6 justify-center items-center">
        {project.map((item, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div
              key={index}
              className="w-full sm:w-[75%] lg:w-80 flex-shrink-0 bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden p-4 hover:scale-110 duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-2">{item.title}</h3>

              <p
                className={`text-gray-600 dark:text-gray-300 text-sm transition-all duration-300 ${
                  isExpanded ? "" : "line-clamp-2"
                }`}
              >
                {item.description}
              </p>

              <button
                onClick={() => toggleExpand(index)}
                className="text-blue-500 text-sm mt-1 hover:underline focus:outline-none"
              >
                {isExpanded ? "Show less" : "Read more..."}
              </button>

              {/* Tech Stack Icons */}
              <div className="flex gap-2 mt-3 text-xl">
                {item.tech.map((tech, i) => (
                  <span key={i}>{renderIcon(tech)}</span>
                ))}
              </div>

              <div className="mt-4">
                <p className="text-xs">Click below to see project resource</p>
              </div>

              <div className="flex justify-between mt-2 items-center text-xl">
                {/* Demo */}
                {item.demo && (
                  <a
                    href={item.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                    title="Live Demo"
                  >
                    <MdOutlineOpenInNew />
                  </a>
                )}

                {/* Drive */}
                {item.drive && (
                  <a
                    href={item.drive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:underline"
                    title="Google Drive File"
                  >
                    <SiGoogledrive />
                  </a>
                )}

                {/* GitHub */}
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:underline"
                    title="GitHub Repo"
                  >
                    <SiGithub />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center my-10">
        <LinkPreview
          url="https://github.com/marchelp"
          className="text-sm underline hover:text-blue-500"
        >
          Also check My GitHub profile here!
        </LinkPreview>
      </div>
    </div>
  );
}
