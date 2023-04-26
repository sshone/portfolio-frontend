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
    <div className="flex flex-col md:flex-row items-center justify-center md:m-2 p-2 rounded-lg bg-element hover:scale-110 transition duration-500 scale-75 md:scale-100 opaciy-90">
      <div >
        <Image
          src={skill.iconImage}
          alt={skill.skill}
          width={60}
          height={60}
        />
      </div>
      <span className="mt-2 md:mt-0 md:mx-2 text-center text-white text-md">{skill.skill}</span>
    </div>
  );
}

export default SkillCard;
