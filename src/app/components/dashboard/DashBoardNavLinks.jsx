"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsMailboxFlag } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { MdOutlineRateReview, MdWorkOutline } from "react-icons/md";
import { PiNoteDuotone } from "react-icons/pi";

const links = [
  { name: "Home", href: "/dashboard", icon: FaHome },
  {
    name: "Resumes",
    href: "/dashboard/resumes",
    icon: PiNoteDuotone,
  },
  {
    name: "Cover Letters",
    href: "/dashboard/cover-letters",
    icon: MdOutlineRateReview,
  },
  { name: "Jobs", href: "/dashboard/jobs", icon: MdWorkOutline },
  {
    name: "Applications",
    href: "/dashboard/applications",
    icon: BsMailboxFlag,
  },
];

const DashBordnavLinks = () => {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-medium font-medium text-slate-600 hover:bg-cyan-100 md:flex-none md:justify-start md:p-2 md:px-3 duration-500",
              {
                "bg-cyan-100 text-blue-500": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6 h-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
};
export default DashBordnavLinks;
