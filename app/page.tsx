"use client";

import NavBar from "./sections/navbar";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
// import Squares from "./components/Squares/Squares";
import DarkVeil from "./components/DarkVeil/DarkVeil";
// import SplashCursor from "./components/SplashCursor/SplashCursor";
import GradientText from "./components/GradientText/GradientText";
// import CircularText from "./components/CircularText/CircularText";
// import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";
import { Timeline } from "./components/Timeline/Timeline";

export default function Home() {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <h2 className="font-bold text-xl my-2">April - June</h2>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            MAGENTA Batch 2
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="images/experience/sptp-1.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="images/experience/sptp-2.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="images/experience/sptp-3.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="images/experience/sptp-4.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    // {
    //   title: "Early 2023",
    //   content: (
    //     <div>
    //       <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
    //         I usually run out of copy, but when I see content this big, I try to
    //         integrate lorem ipsum.
    //       </p>
    //       <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
    //         Lorem ipsum is for people who are too lazy to write copy. But we are
    //         not. Here are some more example of beautiful designs I built.
    //       </p>
    //       <div className="grid grid-cols-2 gap-4">
    //         <img
    //           src="https://assets.aceternity.com/pro/hero-sections.png"
    //           alt="hero template"
    //           width={500}
    //           height={500}
    //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
    //         />
    //         <img
    //           src="https://assets.aceternity.com/features-section.png"
    //           alt="feature template"
    //           width={500}
    //           height={500}
    //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
    //         />
    //         <img
    //           src="https://assets.aceternity.com/pro/bento-grids.png"
    //           alt="bento template"
    //           width={500}
    //           height={500}
    //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
    //         />
    //         <img
    //           src="https://assets.aceternity.com/cards.png"
    //           alt="cards template"
    //           width={500}
    //           height={500}
    //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
    //         />
    //       </div>
    //     </div>
    //   ),
    // },
    // {
    //   title: "Changelog",
    //   content: (
    //     <div>
    //       <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
    //         Deployed 5 new components on Aceternity today
    //       </p>
    //       <div className="mb-8">
    //         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
    //           ✅ Card grid component
    //         </div>
    //         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
    //           ✅ Startup template Aceternity
    //         </div>
    //         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
    //           ✅ Random file upload lol
    //         </div>
    //         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
    //           ✅ Himesh Reshammiya Music CD
    //         </div>
    //         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
    //           ✅ Salman Bhai Fan Club registrations open
    //         </div>
    //       </div>
    //       <div className="grid grid-cols-2 gap-4">
    //         <img
    //           src="https://assets.aceternity.com/pro/hero-sections.png"
    //           alt="hero template"
    //           width={500}
    //           height={500}
    //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
    //         />
    //         <img
    //           src="https://assets.aceternity.com/features-section.png"
    //           alt="feature template"
    //           width={500}
    //           height={500}
    //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
    //         />
    //         <img
    //           src="https://assets.aceternity.com/pro/bento-grids.png"
    //           alt="bento template"
    //           width={500}
    //           height={500}
    //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
    //         />
    //         <img
    //           src="https://assets.aceternity.com/cards.png"
    //           alt="cards template"
    //           width={500}
    //           height={500}
    //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
    //         />
    //       </div>
    //     </div>
    //   ),
    // },
  ];

  return (
    <>
      {/* Navbar */}
      <NavBar />

      <div className="min-h-screen overflow-x-hidden">
        {/* <SplashCursor /> */}
        <div className="absolute top-0 right-0 bottom-0 w-full h-full">
        {/* <Squares
          speed={0.05}
          squareSize={40}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#454B29"
          hoverFillColor="#1B232E"
        /> */}
        <DarkVeil />
      </div>
        <div className="container mx-auto" id="home">
          <div className="grid grid-cols-12">
            <div className="col-span-full md:col-span-5 relative">
              <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
              <div className="absolute top-20 right-10">
                {/* <CircularText
                  text="WEB*DATA*AI*ML*"
                  onHover="speedUp"
                  spinDuration={20}
                  // className="absolute top-20 right-20"
                /> */}
              </div>
            </div>

            <div className="col-span-full md:col-span-7 ml-4 lg:mr-24 mt-4">
              <div className="flex items-center h-full">
                <div className="flex flex-col gap-6">
                  <AnimatedContent
                    // className="flex items-center gap-2"
                    distance={150}
                    direction="horizontal"
                    reverse={false}
                    duration={1.2}
                    ease="bounce.out"
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                    delay={0.3}
                  >
                    <div className="flex items-center gap-2">
                      <h1 className="md:text-2xl font-bold text-white">
                        I'm Ready For Job
                      </h1>
                      <RotatingText
                        texts={[
                          "Web Design",
                          "Web Development",
                          "Data Analyst",
                          "AI Development",
                        ]}
                        mainClassName="px-2 sm:px-2 md:px-3 bg-[#C5F10F] text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg md:text-2xl font-bold inline-flex transition-all"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{
                          type: "spring",
                          damping: 30,
                          stiffness: 400,
                        }}
                        rotationInterval={2000}
                      />
                    </div>
                  </AnimatedContent>

                  <div className="flex flex-col items-start">
                    <SplitText
                      text="Marchel Adias Pradana"
                      className="md:text-2xl font-semibold text-center text-white"
                      delay={50}
                      duration={0.6}
                      ease="power3.out"
                      splitType="chars"
                      from={{ opacity: 0, y: 40 }}
                      to={{ opacity: 1, y: 0 }}
                      threshold={0.1}
                      rootMargin="-100px"
                      textAlign="center"
                    />
                    <SplitText
                      text="FullStack Developer"
                      className="md:text-2xl font-semibold text-center text-[#C5F10F]"
                      delay={75}
                      duration={0.6}
                      ease="power3.out"
                      splitType="chars"
                      from={{ opacity: 0, y: 40 }}
                      to={{ opacity: 1, y: 0 }}
                      threshold={0.1}
                      rootMargin="-100px"
                      textAlign="center"
                    />
                  </div>

                  <div className="">
                    <BlurText
                      text='I am a fresh graduated at Universitas Pembangunan Negeri "VETERAN" Jawa Timur, starting to look for roles in the web development, data analyst, or AI Engineer. I really enjoy learning things related to technology. My dream right now is to become a Web Developer at a well-known company. If you also have the same interests as me.'
                      delay={75}
                      animateBy="words"
                      direction="top"
                      className="text-sm md:text-md mb-8 text-white"
                    />

                    <div className="flex items-center">
                      <GradientText
                        colors={[
                          "#40ffaa",
                          "#C5F10F",
                          "#40ffaa",
                          "#C5F10F",
                          "#40ffaa",
                        ]}
                        animationSpeed={8}
                        showBorder={false}
                        className="mb-4 px-6 py-3 rounded-lg border bg-[#1B232E]"
                      >
                        <a href="https://drive.google.com/file/d/1rkRzwk9v5aBDQOTPfAh9XShVoECAAJKQ/view?usp=sharing">
                          See my CV
                        </a>
                      </GradientText>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section */}

        {/* <div className="container mx-auto min-h-screen"> */}
        <div className="container" id="experience">
          {/* <ScrollVelocity
          texts={["Marchel Adias Pradana -", "Web - Data - AI -"]}
          // className="custom-scroll-text"
        /> */}
          <Timeline data={data} />
        </div>
      </div>
    </>
  );
}
