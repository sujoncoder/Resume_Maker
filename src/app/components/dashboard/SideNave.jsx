import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoPowerOutline } from "react-icons/io5";
import DashBordnavLinks from "./DashBoardNavLinks";
import logo from "/public/logo.png";

const DashBoardSideNav = () => {
  const router = useRouter();

  const handleRouter = () => {
    router.push("/dashboard");
  };

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <button
        onClick={handleRouter}
        className="mb-2 flex h-20 items-center justify-center rounded-md p-4"
      >
        <div className="w-32 md:w-40">
          <Image src={logo} alt="logo" />
        </div>
      </button>

      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <DashBordnavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>

        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-medium font-medium text-slate-600 hover:bg-red-300 hover:text-red-500 md:flex-none md:justify-start md:p-2 md:px-3">
            <IoPowerOutline className="w-6 h-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashBoardSideNav;
