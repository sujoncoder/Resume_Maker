import { HiOutlineTemplate } from "react-icons/hi";
import { IoIosArrowUp } from "react-icons/io";

const Template = () => {
  return (
    <>
      <div className="flex justify-center items-center text-xl space-x-2">
        <HiOutlineTemplate />
        <p>Template</p>
        <div>
          <IoIosArrowUp />
          {/* <IoIosArrowDown /> */}
        </div>
      </div>
    </>
  );
};

export default Template;
