import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-slate-800 text-white py-6">
      <div className="container mx-auto flex justify-center items-center space-x-8">
        <Link href="/" legacyBehavior>
          <a className="text-lg font-bold tracking-wider hover:text-blue-100 transition duration-300 select-none">
            Home
          </a>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/projects" legacyBehavior>
                <a className="text-lg font-semibold hover:text-blue-100 transition duration-300 select-none">
                  Projects
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about" legacyBehavior>
                <a className="text-lg font-semibold hover:text-blue-100 transition duration-300 select-none">
                  About
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
