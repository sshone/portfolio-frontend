import HeroText from "./HeroText";
import Image from "next/image";

type HeroProps = {
  projectRef: React.RefObject<HTMLDivElement>;
};

function Hero({ projectRef }: HeroProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <HeroText projectRef={projectRef} />
      <div className="hidden md:inline-flex justify-center items md:ml-10 pb-28">
        <Image
          src="/images/hero.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
          className="my-auto border-4 border-secondary rounded-full"
        />
      </div>
    </div>
  );
}

export default Hero;
