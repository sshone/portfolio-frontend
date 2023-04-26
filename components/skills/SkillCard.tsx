import Image from "next/image";

type Skill = {
  skill: string;
  iconImage: string;
};

type SkillCardProps = {
  skill: Skill;
};

function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="flex flex-col items-center justify-center m-2 md:m-4 p-2 md:p-2 rounded-lg bg-[#dddddd] shadow-lg hover:scale-110 transition duration-500 scale-75 md:scale-100">
      <Image
        src={skill.iconImage}
        alt={skill.skill}
        width={80}
        height={80}
      />
      <span className="mt-2 text-center text-black text-md">{skill.skill}</span>
    </div>
  );
}

export default SkillCard;
