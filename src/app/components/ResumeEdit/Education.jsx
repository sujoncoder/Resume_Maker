import AlignCenter from "@/app/components/svg/AlignCenter";
import { LuMinus } from "react-icons/lu";

const Education = () => {
  return (
    <div>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Education</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud.
        </p>
      </div>

      <div className="border p-2 sm:p-6 rounded my-6 space-y-4 sm:space-y-4">
        <div className="flex justify-between items-center my-4">
          <h1>Magura GovT High School</h1>
          <LuMinus className="border rounded-full text-2xl cursor-pointer" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="w-full">
            <p>Institution</p>
            <input
              type="text"
              className="bg-gray-200 rounded h-10 w-full md:px-2"
            />
          </div>

          <div className="w-full">
            <p>Degree</p>
            <input
              type="text"
              className="bg-gray-200 rounded h-10 w-full md:px-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="w-full col-span-6 sm:col-span-3">
            <p className="">Start Date</p>
            <input
              type="date"
              className="bg-gray-200 rounded h-10 w-full md:px-2 px-2"
            />
          </div>

          <div className="w-full col-span-6 sm:col-span-3">
            <p>End Date</p>
            <input
              type="date"
              className="bg-gray-200 rounded h-10 w-full px-2"
            />
          </div>

          <div className="w-full col-span-12 sm:col-span-6">
            <p>Location</p>
            <input
              type="text"
              className="bg-gray-200 rounded h-10 w-full px-2"
            />
          </div>
        </div>

        <div className="my-10">
          <h1 className="text-xl">Description</h1>
          <div className="relative">
            <textarea
              placeholder="Seasoned software developer with 5 years expertise in crafting innovative solutions."
              className="w-full h-40 bg-gray-200 border rounded-md p-2 pl-8 focus:outline-none focus:ring focus:border-blue-300 flex justify-start items-center"
            ></textarea>
            <div className="absolute top-3 left-3 flex justify-around items-center bg-white rounded space-x-4 py-2 px-4 cursor-pointer">
              <AlignCenter />
              <span>A</span>
              <span>B</span>
              <span>C</span>
              <span>D</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
