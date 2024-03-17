import { LuMinus } from "react-icons/lu";
import { MdDelete } from "react-icons/md";

const Languages = () => {
  return (
    <div>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Languages</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud.
        </p>
      </div>

      <div className="border p-2 sm:p-6 rounded my-6 space-y-4 sm:space-y-4">
        <div className="flex justify-end items-center my-4">
          <LuMinus className="border rounded-full text-2xl cursor-pointer" />
        </div>

        <div className="w-full">
          <p className="text-lg">Language</p>
          <input
            type="text"
            className="bg-gray-200 rounded h-10 w-full md:px-2"
          />

          <br />
          {/* Radio selector  */}
          <div className="space-x-4 my-6">
            <label className="inline-flex items-center">
              <input type="radio" className="form-radio text-indigo-600" />
              <span className="ml-2">Begainner</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" className="form-radio text-indigo-600" />
              <span className="ml-2">Moderate</span>
            </label>

            <label className="inline-flex items-center">
              <input type="radio" className="form-radio text-indigo-600" />
              <span className="ml-2">Good</span>
            </label>

            <label className="inline-flex items-center">
              <input type="radio" className="form-radio text-indigo-600" />
              <span className="ml-2">Very good</span>
            </label>

            <label className="inline-flex items-center">
              <input type="radio" className="form-radio text-indigo-600" />
              <span className="ml-2">Excellent</span>
            </label>
          </div>

          {/* action section  */}
          <div className="flex justify-end space-x-2 items-center text-lg font-semibold">
            <MdDelete className="border rounded w-8 h-8 cursor-pointer" />
            <button className="bg-blue-500 rounded py-1 px-4 space-x-2 flex justify-around items-center ">
              <p className="text-white">Done</p>
            </button>
          </div>
        </div>
      </div>
      {/* add more section button  */}
      <div className="flex justify-end items-center my-4">
        <button className="py-2 px-4 rounded border shadow">Add More</button>
      </div>
    </div>
  );
};

export default Languages;
