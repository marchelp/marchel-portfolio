"use client";

import NavBar from "./sections/navbar";
import Profile from "./sections/profile";
import Experience from "./sections/experience";
import Project from "./sections/project";
import Skill from "./sections/skill";
import Contact from "./sections/contact";

export default function Home() {
  return (
    <>
      {/* Navbar Start */}

      <NavBar />

      {/* Navbar End */}

      {/* Content */}

      <div className="min-h-screen overflow-x-hidden">
        {/* Home Start */}

        <Profile />

        {/* Home End */}

        {/* Experience Start */}

        <Experience />

        {/* Experience End */}

        {/* Project Start */}

        <Project />

        {/* Project End */}

        {/* Skill Start */}

        <Skill />

        {/* Skill End */}

        {/* Contact Start */}

        <Contact />

        {/* Contact End */}
      </div>
    </>
  );
}
