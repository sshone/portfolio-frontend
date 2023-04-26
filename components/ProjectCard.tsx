import { FC } from "react";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
};

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="md:max-w-sm overflow-hidden text-center font-hero hover:scale-105 transition duration-500">
      <Image
        className="object-cover rounded-2xl"
        src={project.image}
        alt={project.title}
        width={630}
        height={400}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">{project.title}</div>
        <p className="text-gray-400 text-base">{project.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 text-left">
        {project.tags.map((tag, idx) => (
          <span
            key={idx}
            className="inline-block bg-element rounded-full px-3 py-1 text-sm font-semibold text-white-700 mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
