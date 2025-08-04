"use client";

import { useState } from "react";
import { FaReact, FaNodeJs, FaPhp, FaDatabase, FaPython } from "react-icons/fa";
import {
  SiJavascript,
  SiNestjs,
  SiFirebase,
  SiTypescript,
  SiMongodb,
  SiLaravel,
  SiTailwindcss,
  SiNextdotjs,
  SiGooglecloud,
  SiExpress
} from "react-icons/si";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";

type SkillItem = {
  name: string;
  icon: React.ReactNode;
};

export default function Skill() {
  const tabs = [
    {
      title: "Frontend",
      value: "frontend",
      skills: [
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-400" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-500" />,
        },
        {
          name: "NextJS",
          icon: <SiNextdotjs className="text-black dark:text-white" />,
        },
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-blue-400" /> },
      ],
    },
    {
      title: "Backend",
      value: "backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
        { name: "ExpressJS", icon: <SiExpress className="text-black dark:text-white" /> },
        { name: "NestJS", icon: <SiNestjs className="text-red-500" /> },
        { name: "PHP", icon: <FaPhp className="text-blue-600" /> },
        { name: "Laravel", icon: <SiLaravel className="text-red-600" /> },
      ],
    },
    {
      title: "Cloud",
      value: "cloud",
      skills: [
        { name: "GCP", icon: <SiGooglecloud className="text-red-600" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      ],
    },
    {
      title: "Data",
      value: "data",
      skills: [
        { name: "Python", icon: <FaPython className="text-yellow-400" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
        { name: "SQL / MySQL", icon: <FaDatabase className="text-blue-500" /> },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="container mt-20 pt-20" id="skill">
      <div>
        <h2 className="md:text-2xl font-semibold text-center text-[#C5F10F]">
          Skills
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base text-center">
          My tech stack
        </p>
      </div>

      {/* Tabs */}
      {/* Tabs dengan animasi */}
      <div className="overflow-x-auto flex flex-nowrap justify-center items-center gap-4 my-8 relative pl-14 sm:pl-0 mr-4 sm:mr-0">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "relative px-4 py-2 rounded-full text-sm font-medium transition z-10 border mb-4",
              activeTab.value === tab.value
                ? "text-black"
                : "text-gray-600 dark:text-gray-300"
            )}
          >
            {/* Animated background */}
            {activeTab.value === tab.value && (
              <motion.div
                layoutId="active-tab"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute inset-0 bg-[#C5F10F] rounded-full z-[-1]"
              />
            )}
            {tab.title}
          </button>
        ))}
      </div>

      {/* Card Skill */}
      <div className="my-10 flex justify-center">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 w-full max-w-xs min-h-60 text-center hover:scale-110 duration-300">
          <h3 className="text-xl font-semibold text-[#C5F10F] mb-8">
            {activeTab.title} Skills
          </h3>
          <div className="flex justify-center">
            <ul className="space-y-4 text-left">
              {activeTab.skills.map((skill: SkillItem, idx: number) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-200"
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
