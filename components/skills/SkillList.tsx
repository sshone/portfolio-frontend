import SkillCard from "./SkillCard";

const skills = [
  {
    skill: "C#",
    iconImage: "/images/icons/csharp.svg",
  },
  {
    skill: "Azure",
    iconImage: "/images/icons/azure.svg",
  },
  {
    skill: "AWS",
    iconImage: "/images/icons/aws.svg",
  },
  {
    skill: "JavaScript",
    iconImage: "/images/icons/javascript.svg",
  },
  {
    skill: "TypeScript",
    iconImage: "/images/icons/typescript.svg",
  },
  {
    skill: "Python",
    iconImage: "/images/icons/python.svg",
  },
  {
    skill: "MongoDB",
    iconImage: "/images/icons/mongodb.svg",
  },
  {
    skill: "Redis",
    iconImage: "/images/icons/redis.svg",
  },
  {
    skill: "React",
    iconImage: "/images/icons/react.svg",
  },
  {
    skill: "Next.js",
    iconImage: "/images/icons/nextjs.svg",
  },
  {
    skill: "Tailwind CSS",
    iconImage: "/images/icons/tailwindcss.svg",
  },
  {
    skill: "SQL Server",
    iconImage: "/images/icons/microsoft-sql-server.svg",
  },
  {
    skill: "Git",
    iconImage: "/images/icons/git.svg",
  },
  {
    skill: "GitHub",
    iconImage: "/images/icons/github.svg",
  },
  {
    skill: "HTML",
    iconImage: "/images/icons/html.svg",
  },
  {
    skill: "CSS",
    iconImage: "/images/icons/css.svg",
  },
  {
    skill: "Jira",
    iconImage: "/images/icons/jira.svg",
  },
  {
    skill: "Bamboo",
    iconImage: "/images/icons/bamboo.svg",
  },
  {
    skill: "Jest",
    iconImage: "/images/icons/jest.svg",
  },
];

export default function SkillList() {
  return (
    <div>
      <div className="flex max-w[1000px] relative flex-wrap mx-auto justify-center">
        {skills.map((skill, idx) => (
          <SkillCard key={idx} skill={skill} />
        ))}
      </div>
    </div>
  );
}
