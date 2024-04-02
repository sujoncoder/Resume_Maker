"use client";

import BreadCrumbs from "@/app/components/Breadcrumbs";
import Image from "next/image.js";
import Profile from "../../../../public/assets/images/profile.png";
import DashBoardSideNav from "../../components/dashboard/SideNave";

const DashBoardLayout = ({ children }) => {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-60">
        <DashBoardSideNav />
      </div>

      <div className="flex-grow p-3 md:overflow-y-auto md:p-12">
        <div className="hidden md:block">
          <div className="w-full h-16 bg-[#00B6BF] rounded flex justify-between items-center px-4">
            <div>
              <BreadCrumbs />
            </div>

            <div className="flex justify-center items-center space-x-2">
              <Image
                src={Profile}
                width={50}
                height={50}
                className="border-4 rounded-full border-pink-400"
                alt="profile image"
              />

              <div>
                <p className="text-lg font-semibold">Sujon Sheikh</p>
                <p className="text-sm text-slate-500">sujon@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};
export default DashBoardLayout;
