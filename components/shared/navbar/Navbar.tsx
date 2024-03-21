"use client";

import { GrAnnounce } from "react-icons/gr";
import { FaCode } from "react-icons/fa6";
import { LuPenTool } from "react-icons/lu";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MdOutlineAddBox } from "react-icons/md";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { MdHelpOutline } from "react-icons/md";

// Define the interface for a navigation link
interface NavItems {
  href: string;
  label: string;
  icon: JSX.Element;
}

// Define an array of navigation links
const navLinks: NavItems[] = [
  { href: "/", label: "Design Team", icon: <LuPenTool /> },
  { href: "/all-foods", label: "Markating Team", icon: <GrAnnounce /> },
  {
    href: "/about-us",
    label: "Development Team",
    icon: <FaCode />,
  },
  {
    href: "/about-us",
    label: "Create a team",
    icon: <MdOutlineAddBox />,
  },
  {
    href: "/about-us",
    label: "Invite teammetes",
    icon: <MdOutlinePersonAddAlt />,
  },
  {
    href: "/about-us",
    label: "Help and first steps",
    icon: <MdHelpOutline />,
  },
];

const Navbar = () => {
  const pathName = usePathname();
  return (
    <nav className="border-2 rounded-lg border-gray-200 h-screen sticky left-0 top-0 w-[25%] bg-green-60">
      <ul className="p-2">
        {/* Map over the navLinks array and render each link */}
        {navLinks.map((link, index) => (
          <li
            className={`${
              pathName == link.href ? "bg-slate-100 w-full" : ""
            } flex items-center p-2 gap-2 rounded-md`}
            key={index}
          >
            {/* Render a Next.js Link component for each navigation link */}
            {link.icon}
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
