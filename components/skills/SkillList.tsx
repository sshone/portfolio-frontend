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
    skill: "Git",
    iconImage: "/images/icons/git.svg",
  },
  {
    skill: "HTML",
    iconImage: "/images/icons/html.svg",
  },
  {
    skill: "CSS",
    iconImage: "/images/icons/css.svg",
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
