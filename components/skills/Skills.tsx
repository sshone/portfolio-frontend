import Link from "next/link";
import SkillList from "./SkillList";

function Skills() {
  return (
    <div className="min-h-screen mb-24 flex items-center" id="skills">
      <div>
        <h1 className="text-4xl">Skills & Experience</h1>
        <h3 className="uppercase tracking-[3px] text-gray-500 text-sm">
          A full-stack programmer With six years of professional experience
        </h3>
        <hr className="border-gray-200" />
        <div className="max-w-[700px] flex flex-wrap mx-auto py-24 gap-6 text-center justify-center text-md md:text-lg">
          <p>
            I am a full-stack developer, with a specialty in .NET back-end and
            Azure cloud development.
          </p>
          <p>
            I have worked on a variety of projects, ranging from small web
            applications to large scale enterprise solutions. My typical
            professional work involves creating React / TypeScript front-ends
            powered by C# Azure Function REST APIs.
          </p>
          <p>
            Visit my{" "}
            <Link
              href={"https://www.linkedin.com/in/stuart-shone-069191114/"}
              className="text-theme"
            >
              LinkedIn
            </Link>{" "}
            for a more comprehensive overview of my professional experience.
          </p>
        </div>
        <SkillList />
      </div>
    </div>
  );
}

export default Skills;
