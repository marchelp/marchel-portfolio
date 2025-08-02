"use client";

import DarkVeil from "../components/DarkVeil/DarkVeil";
import Lanyard from "../components/Lanyard/Lanyard";
import AnimatedContent from "../components/AnimatedContent/AnimatedContent";
import RotatingText from "../components/RotatingText/RotatingText";
import SplitText from "../components/SplitText/SplitText";
import BlurText from "../components/BlurText/BlurText";
import GradientText from "../components/GradientText/GradientText";

export default function Profile() {
  return (
    <>
      <div className="absolute top-0 right-0 bottom-0 w-full h-full hidden dark:block">
        <DarkVeil />
      </div>
      <div className="container mx-auto" id="home">
        <div className="grid grid-cols-12">
          <div className="col-span-full md:col-span-5 relative">
            <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
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
                    <h1 className="md:text-2xl font-bold">
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
                    className="md:text-2xl font-semibold text-center"
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
                    className="text-sm md:text-md mb-8"
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
    </>
  );
}
