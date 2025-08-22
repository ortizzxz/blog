import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function NavBarSocials() {
  return (
    <div className="flex space-x-4">
      <Link
        href="https://github.com/ortizzxz"
        target="_blank"
        className="text-white hover:text-black transition-colors duration-200"
      >
        <FaGithub size={20} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/jesusdortizreyes/"
        target="_blank"
        className="text-white hover:text-black transition-colors duration-200"
      >
        <FaLinkedin size={20} />
      </Link>
    </div>
  );
}
