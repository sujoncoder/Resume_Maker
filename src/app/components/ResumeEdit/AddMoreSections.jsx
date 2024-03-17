import { MdOutlineDashboardCustomize } from "react-icons/md";

const AddMoreSections = () => {
  return (
    <div className="">
      <h1 className="text-xl font-semibold py-4 border-y-2 border-slate-200 my-10">
        Add more section
      </h1>

      <div className="flex justify-start items-center space-x-4">
        <div className="flex justify-center items-center space-x-2 text-lg font-semibold cursor-pointer">
          <MdOutlineDashboardCustomize />
          <p>Custom Section</p>
        </div>

        <div className="flex justify-center items-center space-x-2 text-lg font-semibold cursor-pointer">
          <MdOutlineDashboardCustomize />
          <p>InternShips</p>
        </div>

        <div className="flex justify-center items-center space-x-2 text-lg font-semibold cursor-pointer">
          <MdOutlineDashboardCustomize />
          <p>Courses</p>
        </div>
      </div>
    </div>
  );
};

export default AddMoreSections;
