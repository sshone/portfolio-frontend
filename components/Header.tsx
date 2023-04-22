import Link from "next/link";

export default function Header() {
  return (
    <div className="text-white font-header">
      <header className="py-6">
        <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
          <Link href="#" className="text-2xl font-bold">
            sshone.dev
          </Link>
          <div className="hidden md:flex space-x-12">
            <Link href="#" className="text-selected-text">
              home
            </Link>
            <Link href="#about">about</Link>
            <Link href="#projects">projects</Link>
          </div>
          <div className="md:hidden">
            <p>TODO: Replace with Hamburger menu</p>
          </div>
        </div>
      </header>
    </div>
  );
}
