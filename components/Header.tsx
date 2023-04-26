import Link from "next/link";

export default function Header() {
  return (
    <div className="text-white font-header">
      <header className="py-6">
        <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
          <h1 className="text-2xl font-bold">sshone.dev</h1>
          <div className="hidden md:flex space-x-12">
            <Link href="#skills">skills</Link>
            <Link href="#projects">projects</Link>
          </div>
          <div className="md:hidden">
            {/* TODO: Hamburger menu */}
          </div>
        </div>
      </header>
    </div>
  );
}
