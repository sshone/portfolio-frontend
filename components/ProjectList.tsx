import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "HomeHunch",
    description:
      "An educational game for getting a feel for recently sold homes on the UK housing market",
    image: "/images/projects/home-hunch.png",
    tags: ["C#", "AWS", "Python", "MongoDB", "React", "Next.js", "Tailwind"],
  },
  {
    title: "Grappling Hook Game",
    description: "A simple game to get a feel for Unity game development. Smash into as many green blocks as you can before you hit a hazard!",
    image: "/images/placeholder-630-400.svg",
    tags: ["C#", "Unity"],
  },
  {
    title: "Weather App",
    description:
      "View weather data for any city in the world, using the OpenWeatherMap API",
    image: "/images/placeholder-630-400.svg",
    tags: ["C#", "AWS", "MongoDB", "React", "Next.js", "Tailwind"],
  },
  {
    title: "Portfolio Website",
    description: "This website! Built with Next.js and Tailwind CSS",
    image: "/images/projects/portfolio-website.png",
    tags: ["React", "Next.js", "Tailwind CSS", "Netlify"],
  },
  {
    title: "Young Nomad - Blogging Website",
    description: "A blogging website for a travel blogger, built with Next.js and Sanity.io for CMS functionality",
    image: "/images/placeholder-630-400.svg",
    tags: ["React", "Next.js", "Tailwind", "Sanity.io CMS"],
  },
  {
    title: "Tetris Game",
    description: "A recreation of Tetris, programmed in C. I started this project to learn more about development for embedded systems. Runs on an STM32F4 Discovery Board",
    image: "/images/projects/tetris-project.jpg",
    tags: ["C", "Embedded Systems", "STM32F4 Discovery Board"],
  },
  {
    title: "Room Finder",
    description: "A GIS application for mapping and finding rooms in buildings across the UEA campus. Involved mapping building floor plans using GIS software and developing a web application to display the data",
    image: "/images/projects/room-finder-waypoint-editor.jpg",
    tags: ["JavaScript", "Python", "GIS", "Leaflet.js", "Shell script"],
  },
  {
    title: "LIFX Lightbulb - Dominant Colour Controller",
    description: "A simple application I wrote back in 2016 to control the colour of a LIFX lightbulb, setting the current colour to the dominant colour of the screen. Written in C# using the LIFX LAN protocol",
    image: "/images/placeholder-630-400.svg",
    tags: ["C#"],
  },
  {
    title: "Discord Music Player Bot - 2016",
    description: "A Discord bot that plays music from YouTube, written in Python using the Discord.py API wrapper. Hosted on a Raspberry Pi and used for my private server.",
    image: "/images/placeholder-630-400.svg",
    tags: ["Python", "Raspberry Pi"],
  },
];

function ProjectList() {
  return (
    <div id="projects" className="min-h-screen md:pt-0 flex items-center">
      <div>
        <h1 className="text-4xl">Projects</h1>
        <h3 className="uppercase tracking-[3px] text-gray-500 text-sm">
          A collection of some of the projects I have worked on...
        </h3>
        <hr className="border-gray-200 pb-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 m-4">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
