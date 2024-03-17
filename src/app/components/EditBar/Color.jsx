import { FaSquare } from "react-icons/fa";
import { IoIosArrowDown, IoMdColorPalette } from "react-icons/io";

const Color = () => {
  return (
    <div className="flex justify-center items-center text-xl space-x-2">
      <IoMdColorPalette />
      <FaSquare />
      <IoIosArrowDown />
    </div>
  );
};

export default Color;
