import Image from "next/image";
import styles from "./page.module.css";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa6";
import profileImg from "./assets/me.png";
import chartImg from "./assets/chart.png";
import CircularProgressBar from "./skills"; // Import the Skills component

export default function Home() {
  return (
    <main
      className=" text-white bg-black
      min-h-screen px-15 py-5"
    >
      {/*NAVIGATION SECTION*/}
      <section className="  font-poppins pb-5">
        {/*NAVIGATION BAR*/}
        <nav className=" flex justify-between items-center text-xl pb-3">
          <h1 className=" cursor-pointer hover:underline hover:underline-offset-5 hover:decoration-2">
            <a href="#">Pasindu Dissanayake</a>
          </h1>
          <ul className=" flex gap-4">
            <li className=" cursor-pointer opacity-50 transition delay-50 duratioen-200 eas-in-out hover:opacity-100">
              home
            </li>
            <li className=" cursor-pointer opacity-50 transition delay-50 duration-200 hover:opacity-100">
              skills
            </li>
            <li className=" cursor-pointer opacity-50 transition delay-50 duration-200 hover:opacity-100">
              projects
            </li>
          </ul>
          <div className=" flex items-center gap-6">
            <BsMoonStarsFill />
            <h1
              className=" border-2 p-1 cursor-pointer transition delay-50 duratioen-200 eas-in-out
            hover:bg-white hover:border-2 hover:border-white hover:text-black"
            >
              let's connect
            </h1>
          </div>
        </nav>
      </section>

      {/*HERO SECTION*/}
      <section className="">
        <div className=" flex justify-between">
          {/*IMAGE*/}
          <Image
            src={profileImg}
            alt="profile-image"
            className=" w-130 h-131 pt-1"
          />
          {/*ABOUT-ME*/}
          <div className=" flex flex-col gap-8 items-end">
            <div
              className=" pt-8 pb-2 text-right font-antonio font-light 
              text-[85px]
              leading-20
              tracking-tight bg-gradient-to-b from-white to-neutral-600 inline-block text-transparent bg-clip-text"
            >
              <span className=" text-[70px]">I'm</span>
              <span className=" text-[80]"> Pasindu</span>
              <br />
              <span className=" text-[62px]">FULL-STACK</span>
              <b className=" font-extrabold"> DEVELOPER</b>
              <br />&<span className=" text-[62px]"> creative</span>
              <br />
              <b className=" font-extrabold">DESIGNER</b>
            </div>
            <div className=" flex text-3xl gap-4">
              <FaLinkedinIn className=" cursor-pointer opacity-50 transition delay-50 duration-200 ease-in-out hover:opacity-100" />
              <FaGithub className=" cursor-pointer opacity-50 transition delay-50 duration-200 ease-in-out hover:opacity-100" />
              <FaFacebook className=" cursor-pointer opacity-50 transition delay-50 duration-200 ease-in-out hover:opacity-100" />
            </div>
            <div>
              <span
                className=" font-poppins font-medium text-[19px] p-1 bg-white text-black border-2 border-white
              cursor-pointer transition delay-50 duration-200 ease-in-out
              hover:bg-black hover:text-white hover:border-2 hover:te"
              >
                my resume
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS-SECTION */}
      <section className="  font-poppins w-4/5 m-auto text-center pt-20">
        <h1 className=" font-bold text-4xl">skills</h1>
        <p className=" font-normal opacity-75 py-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          voluptatibus quibusdam laborum nesciunt asperiores, ipsam, ex at
          ratione nemo magnam nulla consequatur quas quidem! Modi laudantium
          dolores veritatis cumque esse!
        </p>
        {/*CIRCULAR-PROGRESS-BARS*/}
        <div className="font-antonio">
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
          <div className="py-5 opacity-65 w-3/5 text-left">
            <span className="inline-block border-1 px-2 py-0.5 m-2">Python</span>
            <span className="inline-block border-1 px-2 py-0.5 m-2">C++</span>
            <span className="inline-block border-1 px-2 py-0.5 m-2">C#</span>
            <span className="inline-block border-1 px-2 py-0.5 m-2">Java</span>
            <span className="inline-block border-1 px-2 py-0.5 m-2">MySQL</span>
            <span className="inline-block border-1 px-2 py-0.5 m-2">mongoDB</span>
            <span className="inline-block border-1 px-2 py-0.5 m-2">express.js</span>
            <span className="inline-block border-1 px-2 py-0.5 m-2">Next.js</span>
            <span className="inline-block border-1 px-2 py-0.5 m-2">Next.js</span>
            <span className="inline-block border-1 px-2 py-0.5 m-2">Next.js</span>
          </div>
          <Image src={chartImg} alt="chart-image" 
          className=" w-1/3 h-1/6 relative"/>
        </div>
      </section>
    </main>
  );
}
