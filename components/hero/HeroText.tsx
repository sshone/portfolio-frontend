import Link from "next/link";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function HeroText() {
  return (
    <div className="flex justify-center flex-wrap mx-auto font-hero gap-28 mt-10 md:flex-nowrap md:h-screen md:-mt-16 md:gap-0 md:px-6">
      <div className="flex flex-col justify-center items-start gap-2 md:w-full">
        <div>
          <p className="text-accentColor text-sm tracking-widest">
            Hello, my name is...
          </p>
        </div>
        <div>
          <h1 className="text-4xl text-slate-300 font-bold md:text-6xl">
            Stuart Shone
          </h1>
        </div>
        <div>
          <h1 className="text-2xl font-bold md:text-4xl">
            Building quality software that works
          </h1>
        </div>
        <div>
          <p className="max-w-md mt-3">
            I am a full-stack software developer with six years of professional
            experience, specialising in .NET and React development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-x-10 gap-y-4 pb-24 py-6">
            <Link href="#projects">
              <button className="px-6 py-2 bg-theme hover:bg-blue-800 rounded w-full">
                My Projects
              </button>
            </Link>
            <Link href="#contactMe">
              <button className="px-6 py-2 bg-theme hover:bg-blue-800 rounded w-full">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
        <div className=" text-4xl flex justify-start gap-14">
          <Link
            href="https://github.com/sshone"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </Link>

          <Link
            href="https://www.linkedin.com/in/stuart-shone-069191114/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroText;
