import AlignCenter from "../svg/AlignCenter";
import AlignLeft from "../svg/AlignLeft";
import AlignRight from "../svg/AlignRight";
import Bold from "../svg/Bold";
import HOne from "../svg/HOne";
import Italic from "../svg/Italic";
import Link from "../svg/Link";
import Underline from "../svg/Underline";

const ProfessonalSummary = () => {
  return (
    <div className="my-6 sm:my-20">
      <h2 className="text-xl font-bold">Professional Summary</h2>
      <p className="py-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <div className="relative">
        <textarea
          placeholder="Seasoned software developer with 5 years expertise in crafting innovative solutions."
          className="w-full h-40 bg-gray-200 border rounded-md p-2 pl-8 focus:outline-none focus:ring focus:border-blue-300 flex justify-start items-center"
        ></textarea>
        <div className="absolute top-3 left-3 flex justify-around items-center bg-white rounded space-x-4 py-2 px-4 cursor-pointer">
          <Bold />
          <Underline />
          <Italic />
          <HOne />
          <AlignLeft />
          <AlignCenter />
          <AlignRight />
          <Link />
        </div>
      </div>
      <p>
        Improve your interview chances by keeping this section between 50-200
        characters.
      </p>

      {/* add more section button  */}
      <div className="flex justify-end items-center my-4">
        <button className="py-2 px-4 rounded border shadow">Add More</button>
      </div>
    </div>
  );
};

export default ProfessonalSummary;
