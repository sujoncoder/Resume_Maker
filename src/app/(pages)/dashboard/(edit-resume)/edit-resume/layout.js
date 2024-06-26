import Link from "next/link";
import { AiOutlineDownload } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { GoArrowLeft } from "react-icons/go";
import { PiExport } from "react-icons/pi";

const ResumeEditLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className=" bg-[#0072B1] px-4">
          <div className="flex justify-between items-center w-full h-20">
            <div className="flex justify-around items-center space-x-2 bg-white py-2 px-4 rounded shadow text-blue text-lg text-blue-400 font-medium cursor-pointer">
              <GoArrowLeft className="w-6 h-6" />
              <Link href="/dashboard/" className="hidden md:block">
                Dashboard
              </Link>
            </div>

            <div className="flex justify-around items-center text-white space-x-2">
              <p className="text-lg font-medium hidden md:block">Cv Name</p>
              <CiEdit className="w-6 h-6 cursor-pointer" />
            </div>

            <div className="flex justify-center items-center space-x-4">
              <div className="flex justify-around items-center space-x-2  border text-white py-2 px-4 rounded shadow text-blue text-lg font-medium cursor-pointer">
                <button className="hidden md:block">Import Resume</button>
                <PiExport className="w-6 h-6" />
              </div>

              <div className="flex justify-around items-center space-x-2 bg-white py-2 px-4 rounded shadow text-blue text-lg text-blue-400 font-medium cursor-pointer">
                <button className="hidden md:block">Download</button>
                <AiOutlineDownload className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        {/* childern  */}
        <div>{children}</div>
      </body>
    </html>
  );
};
export default ResumeEditLayout;
