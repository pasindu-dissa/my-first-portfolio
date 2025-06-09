import Image from "next/image";
import styles from "./page.module.css";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa6";
import profileImg from "./assets/me.png";
import chartImg from "./assets/chart.png";
import CircularProgressBar from "./skills"; // Import the Skills component
import Collapse from "./collapse"; // Import the Collapse component
import ScrollToTop from "./scroll"; // Import the Scroll Btn component
import Projects from "./projects"; // Import the projects component
import Navbar from "./navbar"; // Import the navbar component
import HeroSection from "./heroSection"; // Import the hero component

export default function Home() {
  return (
    <main
      className=" text-white bg-black min-h-screen py-5
      mobile:max-mobileLg:px-0
      mobile:px-5
      tab:px-15"
    >
      {/*NAVIGATION SECTION*/}
      <section className="  font-poppins pb-5 mobile:max-mobileLg:px-5">
        {/*NAVIGATION BAR*/}
        <Navbar />
      </section>

      {/*HERO SECTION*/}
      <section className="">
        <HeroSection />
      </section>

      {/* SKILLS-SECTION */}
      <section id="skills" className="  font-poppins text-left pt-30 mobile:max-mobileLg:pt-20 mobile:max-mobileLg:px-5">
        <div className=" min-[900px]:w-3/5">
          <div className="flex items-center gap-4">
            <h1 className="text-4xl font-bold whitespace-nowrap">skills</h1>
            <div className="flex-grow h-px block w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
          </div>
          <p className=" font-normal opacity-75 py-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            voluptatibus quibusdam laborum nesciunt asperiores, ipsam, ex at
            ratione nemo magnam nulla consequatur quas quidem! Modi laudantium
            dolores veritatis cumque esse!
          </p>
          {/*CIRCULAR-PROGRESS-BARS*/}
          <div className="font-antonio min-[640px]:flex min-[640px]:flex-row min-[640px]:gap-8 min-[640px]:justify-left">
            <CircularProgressBar
              id="progress-1"
              progressBars={[
                {
                  percentage: 80,
                  gradientColors: ["#4ECDC4", "#45B7D1"],
                  customText: "React",
                },
              ]}
              size={175}
              strokeWidth={10}
            />
            <CircularProgressBar
              id="progress-2"
              progressBars={[
                {
                  percentage: 60,
                  gradientColors: ["#96CEB4", "#D4A5A5"],
                  customText: "Node.js",
                },
              ]}
              size={175}
              strokeWidth={10}
            />
            <CircularProgressBar
              id="progress-3"
              progressBars={[
                {
                  percentage: 75,
                  gradientColors: ["#FF6B6B", "#FFE66D"],
                  customText: "T-Script",
                },
              ]}
              size={175}
              strokeWidth={10}
            />
          </div>
          {/*MORE-SKILLS-BOXES*/}
          <div className=" flex justify-between">
            <div className="py-10 opacity-65 text-left">
              <span className="inline-block border-1 px-2 py-0.5 m-2">
                Python
              </span>
              <span className="inline-block border-1 px-2 py-0.5 m-2">C++</span>
              <span className="inline-block border-1 px-2 py-0.5 m-2">C#</span>
              <span className="inline-block border-1 px-2 py-0.5 m-2">
                Java
              </span>
              <span className="inline-block border-1 px-2 py-0.5 m-2">
                MySQL
              </span>
              <span className="inline-block border-1 px-2 py-0.5 m-2">
                mongoDB
              </span>
              <span className="inline-block border-1 px-2 py-0.5 m-2">
                express.js
              </span>
              <span className="inline-block border-1 px-2 py-0.5 m-2">
                Next.js
              </span>
            </div>
          </div>
        </div>
      </section>

      {/*ABOUT-ME SECTION*/}
      <section id="about" className=" flex font-poppins text-left py-30 mobile:max-mobileLg:px-5">
        <div className="w-full">
          {/* Topic */}
          <div className="flex items-center gap-4 min-[900px]:w-3/5">
            <h1 className="text-4xl font-bold whitespace-nowrap">about</h1>
            <div className="flex-grow h-px block w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
          </div>
          {/* Components */}
          <div className="flex flex-row gap-4 flex-wrap justify-center pt-30">
            <div className="sm:w-80">
              <Collapse title="My Journey">
                <p>
                  I'm a passionate developer with a love for crafting digital
                  experiences. From tinkering with code in my teens to building
                  scalable web apps, my journey has been fueled by curiosity and
                  creativity.
                </p>
              </Collapse>
            </div>
            <div className="sm:w-80">
              <Collapse title="Skills">
                <p>
                  Proficient in modern web technologies with a knack for
                  problem-solving.
                </p>
                <ul className="list-disc pl-5 mt-2">
                  <li>React, TypeScript, Node.js</li>
                  <li>Tailwind CSS, UI/UX Design</li>
                  <li>API Development & Integration</li>
                </ul>
              </Collapse>
            </div>
            <div className="sm:w-80">
              <Collapse title="Passions">
                <p>Beyond coding, I thrive on creativity and innovation.</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Building open-source projects</li>
                  <li>Exploring generative art</li>
                  <li>Mentoring aspiring developers</li>
                </ul>
              </Collapse>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className=" font-poppins mobile:max-mobileLg:px-5">
        {/* Topic */}
        <div className="flex items-center gap-4 min-[900px]:w-3/5">
          <h1 className="text-4xl font-bold whitespace-nowrap">services</h1>
          <div className="flex-grow h-px block w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
        </div>
        {/* Services */}
        <div
          className=" font-dm_sans flex flex-col gap-15 py-30 
        text-[7vw] font-semibold tracking-tighter text-center justify-center"
        >
          <div>
            <span></span>
            <p>Web development</p>
          </div>
          <div>
            <p>Mobile app development</p>
            <span></span>
          </div>
          <div>
            <span></span>
            <p>Full stack development</p>
          </div>
          <div>
            <p>Graphic design</p>
            <span></span>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className=" font-poppins mobile:max-mobileLg:px-5 py-10">
        <div className="flex items-center gap-4 min-[900px]:w-3/5">
          <h1 className="text-4xl font-bold whitespace-nowrap">Projects</h1>
          <div className="flex-grow h-px block w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
        </div>
        <Projects />
      </section>

      {/* LET'S CONNECT FINAL SECTION */}
      <section id="connect" className="font-poppins text-center py-30 px-5 bg-gradient-to-br from-black via-neutral-900 to-black">
        <div className="max-w-2xl mx-auto bg-neutral-800 p-10 shadow-2xl border border-neutral-600">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg opacity-75 mb-6">
            Whether it's a project, collaboration, or just a chat about design
            and tech — I'm just a message away.
          </p>
          <div className="flex justify-center gap-6 text-2xl mb-6">
            <FaLinkedinIn className="cursor-pointer hover:text-blue-500 transition" />
            <FaGithub className="cursor-pointer hover:text-gray-400 transition" />
            <FaFacebook className="cursor-pointer hover:text-blue-600 transition" />
          </div>
          <a
            href="#"
            className="inline-block mt-4 px-6 py-3 bg-white text-black font-semibold hover:bg-transparent hover:text-white border-2 border-white transition"
          >
            Let's Talk
          </a>
        </div>
      </section>

      {/* <ScrollToTop /> */}
    </main>
  );
}
