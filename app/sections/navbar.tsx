"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../components/Navbar/resizable-navbar";
import { useState } from "react";

export default function NavBar() {
    const navItems = [
    { name: "Home", link: "#home" },
    { name: "Experience", link: "#experience" },
    { name: "Project", link: "#project" },
    { name: "Skill", link: "#skill" },
    { name: "Contact", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
        {/* Navbar */}
      <div className="sticky top-0 z-50 w-full">
        <Navbar>
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            {/* <div className="flex items-center gap-4">
              <NavbarButton variant="primary">Login</NavbarButton>
            </div> */}
          </NavBody>

          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </a>
              ))}
              {/* <div className="flex w-full flex-col gap-4">
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full"
                >
                  Login
                </NavbarButton>
              </div> */}
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>
    </>
  )
}

// Toggle Darkmode

// "use client";

// import {
//   Navbar,
//   NavBody,
//   NavItems,
//   MobileNav,
//   NavbarLogo,
//   MobileNavHeader,
//   MobileNavToggle,
//   MobileNavMenu,
// } from "../components/Navbar/resizable-navbar";
// import { useEffect, useState } from "react";
// import { BsSun, BsMoon } from "react-icons/bs";

// export default function NavBar() {
//   const navItems = [
//     { name: "Home", link: "#home" },
//     { name: "Experience", link: "#experience" },
//     { name: "Project", link: "#project" },
//     { name: "Skill", link: "#skill" },
//     { name: "Contact", link: "#contact" },
//   ];

//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Cek preferensi awal dari localStorage
//   useEffect(() => {
//     if (
//       localStorage.theme === "dark" ||
//       (!("theme" in localStorage) &&
//         window.matchMedia("(prefers-color-scheme: dark)").matches)
//     ) {
//       document.documentElement.classList.add("dark");
//       setIsDarkMode(true);
//     } else {
//       document.documentElement.classList.remove("dark");
//       setIsDarkMode(false);
//     }
//   }, []);

//   const toggleDarkMode = () => {
//     const html = document.documentElement;
//     console.log("Toggle clicked!");
//     if (html.classList.contains("dark")) {
//       html.classList.remove("dark");
//       localStorage.theme = "light";
//       setIsDarkMode(false);
//     } else {
//       html.classList.add("dark");
//       localStorage.theme = "dark";
//       setIsDarkMode(true);
//     }
//   };

//   return (
//     <>
//       <div className="sticky top-0 z-50 w-full">
//         <Navbar>
//           {/* Desktop Navigation */}
//           <NavBody>
//             <NavbarLogo />
//             <NavItems items={navItems} />
//             <div className="flex items-center gap-4 pr-4">
//               <button
//                 onClick={toggleDarkMode}
//                 className="text-xl text-neutral-600 dark:text-neutral-300 hover:opacity-80 transition"
//                 aria-label="Toggle Theme"
//               >
//                 {isDarkMode ? <BsSun /> : <BsMoon />}
//               </button>
//             </div>
//           </NavBody>

//           {/* Mobile Navigation */}
//           <MobileNav>
//             <MobileNavHeader>
//               <NavbarLogo />
//               <MobileNavToggle
//                 isOpen={isMobileMenuOpen}
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               />
//             </MobileNavHeader>

//             <MobileNavMenu
//               isOpen={isMobileMenuOpen}
//               onClose={() => setIsMobileMenuOpen(false)}
//             >
//               {navItems.map((item, idx) => (
//                 <a
//                   key={`mobile-link-${idx}`}
//                   href={item.link}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   className="relative text-neutral-600 dark:text-neutral-300"
//                 >
//                   <span className="block">{item.name}</span>
//                 </a>
//               ))}
//               <button
//                 onClick={toggleDarkMode}
//                 className="mt-4 text-left text-neutral-600 dark:text-neutral-300 text-sm"
//               >
//                 {isDarkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
//               </button>
//             </MobileNavMenu>
//           </MobileNav>
//         </Navbar>
//       </div>
//     </>
//   );
// }
