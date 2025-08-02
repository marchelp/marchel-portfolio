"use client";

import NavBar from "./sections/navbar";
import Profile from "./sections/profile";
import Experience from "./sections/experience";

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
      </div>
    </>
  );
}
