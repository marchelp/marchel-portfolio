"use client";

import { Timeline } from "../components/Timeline/Timeline";
import { LinkPreview } from "../components/LinkPreview/link-preview";
import ScrollReveal from "../components/ScrollReveal/ScrollReveal";

export default function Experience() {
  const data = [
    {
      title: "MAGENTA Batch 2 2025 as IT Planning and Control",
      content: (
        <div>
          <p className="font-bold text-xl">
            PT Pelindo Terminal Petikemas - Internship (Onsite)
          </p>
          <p className="text-md">April 2025 - June 2025</p>
          <p className="text-md mb-2">Kota Surabaya, East Java, Indonesia</p>
          <LinkPreview
            url="https://drive.google.com/file/d/12FR9PqhM7ZVW5S0t9eGBaLBgu6nfmwf4/view?usp=sharing"
            className="text-sm underline hover:text-blue-500"
          >
            Click here to see My certificate
          </LinkPreview>
          {/* <p className="my-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Internship focused on IT asset management and reporting. Involved in
            conducting structured inventory of employee devices for annual
            archiving, and developing an interactive dashboard using Power BI.
            The dashboard is being integrated into a web-based platform to
            support inter-division reporting and data visualization.
          </p> */}
          <ul className="list-disc my-4 ml-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            <li>Completed a 3-month onsite internship under the IT Planning & Control division</li>
            <li>Conducted device inventory data collection with the team for annual employee archiving</li>
            <li>Developed a dashboard report using Power BI and integrated it into a web platform using NextJs and NestJs</li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="images/experience/sptp/sptp-1.jpg"
              alt="sptp-experience"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="images/experience/sptp/sptp-2.jpg"
              alt="sptp-experience"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="images/experience/sptp/sptp-3.jpg"
              alt="sptp-experience"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="images/experience/sptp/sptp-4.jpg"
              alt="sptp-experience"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Magang Mandiri as IT Support & Network",
      content: (
        <div>
          <p className="font-bold text-xl">
            Dinas Komunikasi dan Informatika Surabaya - Internship (Onsite)
          </p>
          <p className="text-md">January 2025 - March 2025</p>
          <p className="text-md mb-2">Kota Surabaya, East Java, Indonesia</p>
          <LinkPreview
            url="https://drive.google.com/file/d/1iZM-R5zXGHTstrSDUTiapstUNnPSDq_K/view?usp=sharing"
            className="text-sm underline hover:text-blue-500"
          >
            Click here to see My certificate
          </LinkPreview>
          {/* <p className="my-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Internship experience in network infrastructure installation and
            maintenance at public service facilities under the Department of
            Communication and Information (Diskominfo) of Surabaya. Involved in
            structured cabling (UTP/STP), cable crimping, router and switch
            installation, as well as troubleshooting network issues to ensure
            reliable connectivity for government operations.
          </p> */}
          <ul className="list-disc my-4 ml-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            <li>Completed a 3-month internship focused on IT infrastructure and networking</li>
            <li>Collaborated with a team to maintain network systems across government offices in Surabaya</li>
            <li>Performed structured cabling, device setup (router/switch), and network issue troubleshooting</li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="images/experience/kominfo/kominfo-1.jpg"
              alt="kominfo-experience"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="images/experience/kominfo/kominfo-2.jpg"
              alt="kominfo-experience"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="images/experience/kominfo/kominfo-3.jpg"
              alt="kominfo-experience"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="images/experience/kominfo/kominfo-4.jpg"
              alt="kominfo-experience"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "BeIntern Batch 2 as Web Developer",
      content: (
        <div>
          <p className="font-bold text-xl">
            CV BeData Technology Indonesia - Internship (Remote)
          </p>
          <p className="text-md">May 2024 - August 2024</p>
          <p className="text-md mb-2">Surabaya, East Java, Indonesia</p>
          <LinkPreview
            url="https://drive.google.com/file/d/16xp8iY7Gw9TXoges5lhDPHAXGwgOmIC0/view?usp=sharing"
            className="text-sm underline hover:text-blue-500"
          >
            Click here to see My certificate
          </LinkPreview>
          {/* <p className="my-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Involved in the web development process at BeData by designing
            features to be developed, creating a website appearance according to
            the design, and creating services used by BeData for both internal
            and external projects.
          </p> */}
          <ul className="list-disc my-4 ml-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            <li>Participate in an internship program for 3-months</li>
            <li>Working on a web based project using Laravel</li>
            <li>End the program with satisfying results</li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="images/experience/bedata/bedata-1.png"
              alt="bedata-experience"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="images/experience/bedata/bedata-2.png"
              alt="bedata-experience"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="images/experience/bedata/bedata-3.png"
              alt="bedata-experience"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="images/experience/bedata/bedata-4.png"
              alt="bedata-experience"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      {/* <div className="container mx-auto min-h-screen"> */}
      <div className="container" id="experience">
        <Timeline data={data} />
      </div>
    </>
  );
}
