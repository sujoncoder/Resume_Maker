import AlignCenter from "@/app/components/svg/AlignCenter";
import AlignLeft from "@/app/components/svg/AlignLeft";
import AlignRight from "@/app/components/svg/AlignRight";
import Bold from "@/app/components/svg/Bold.jsx";
import HOne from "@/app/components/svg/HOne";
import Italic from "@/app/components/svg/Italic";
import Link from "@/app/components/svg/Link";
import Underline from "@/app/components/svg/Underline";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";

const Builder = () => {
  return (
    <main>
      <section className="flex justify-between px-2 md:px-10">
        {/* information input section  */}
        <div className="w-full md:w-1/2 bg-white py-2 md:py-10">
          <h1 className="text-xl md:text-2xl">Personal Information</h1>
          <br /> <br />
          <div className="w-full md:flex justify-center items-center md:space-x-4">
            {/* avatar */}
            <div className="">
              <p>Photo</p>
              <div className="w-36 h-36 md:h-36 rounded border bg-gray-100 flex justify-center items-center cursor-pointer text-center">
                <FaRegCircleUser className="w-10 h-10" />
              </div>
            </div>

            <div className="w-full flex-col justify-center items-center md:space-y-4">
              {/* name arera */}
              <div className="w-full md:flex justify-center items-center md:space-x-4 space-y-2">
                <div className="w-full">
                  <p>First Name</p>
                  <input
                    type="text"
                    className="bg-gray-200 rounded h-10 w-full md:px-2"
                  />
                </div>

                <div className="w-full">
                  <p>Last Name</p>
                  <input
                    type="text"
                    className="bg-gray-200 rounded h-10 w-full md:px-2"
                  />
                </div>
              </div>

              {/* email and number area */}
              <div className="w-full md:flex justify-center items-center md:space-x-4 space-y-2">
                <div className="w-full">
                  <p>Email Address</p>
                  <input
                    type="email"
                    className="bg-gray-200 rounded h-10 w-full px-2"
                  />
                </div>

                <div className="w-full">
                  <p>Phone Number</p>
                  <input
                    type="tel"
                    className="bg-gray-200 rounded h-10 w-full px-2"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Address  */}
          <div>
            <p>Address</p>
            <input
              type="text"
              className="bg-gray-200 rounded h-10 w-full md:px-2"
            />
          </div>
          {/* city, post code, gender, date of birth */}
          <div className="w-full md:flex justify-center items-center md:space-x-4">
            <div className="w-full flex-col justify-center items-center md:space-y-4">
              {/* name arera */}
              <div className="w-full md:flex justify-center items-center md:space-x-4 space-y-2">
                <div className="w-full">
                  <p>City</p>
                  <input
                    type="text"
                    className="bg-gray-200 rounded h-10 w-full md:px-2"
                  />
                </div>

                <div className="w-full">
                  <p>Post Code</p>
                  <input
                    type="number"
                    className="bg-gray-200 rounded h-10 w-full md:px-2"
                  />
                </div>
              </div>

              {/* email and number area */}
              <div className="w-full md:flex justify-center items-center md:space-x-4 space-y-2">
                <div className="w-full">
                  <p>Gender</p>
                  <input
                    type="email"
                    className="bg-gray-200 rounded h-10 w-full px-2"
                  />
                </div>

                <div className="w-full">
                  <p>Date of Birth</p>
                  <input
                    type="date"
                    className="bg-gray-200 rounded h-10 w-full px-2"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* add field section button  */}
          <div className="flex justify-end items-center my-4">
            <button className="py-2 px-4 rounded border shadow">
              Add Field
            </button>
          </div>
          {/* PROFESSIONAL SUMMERY */}
          <div className="my-6 sm:my-20">
            <h2 className="text-xl font-bold">Professional Summary</h2>
            <p className="py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="relative">
              <textarea
                placeholder="Seasoned software developer with 5 years expertise in crafting innovative solutions."
                className="w-full h-40 bg-gray-200 border rounded-md p-2 pl-8 focus:outline-none focus:ring focus:border-blue-300 flex justify-start items-center"
                // value={text}
                // onChange={handleChange}
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
              Improve your interview chances by keeping this section between
              50-200 characters.
            </p>
          </div>
          {/* EDUCATION SUMMERY */}
          <div>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Education</h1>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud.
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
                    // value={text}
                    // onChange={handleChange}
                  ></textarea>
                  <div className="absolute top-3 left-3 flex justify-around items-center bg-white rounded space-x-4 py-2 px-4 cursor-pointer">
                    <AlignCenter />
                    <span>B</span>
                    <span>B</span>
                    <span>B</span>
                    <span>B</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ANOTHER EDUCATION */}
          <div>
            <div className="border p-2 sm:p-6 rounded my-6">
              <div className="flex justify-between items-center my-4">
                <h1>Magura GovT High School</h1>
                <FiPlus className="border rounded-full text-2xl cursor-pointer" />
              </div>

              <div>
                <p className="text-sm">Facebook - Dhaka</p>
                <p className="text-sm">Feb 2020 - Feb 2022</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <button className="py-2 px-4 rounded border shadow">
              Add More
            </button>
          </div>
          {/* Employment History */}
          <div>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Employment History</h1>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud.
              </p>
            </div>

            <div className="border p-2 sm:p-6 rounded my-6 space-y-4 sm:space-y-4">
              <div className="flex justify-between items-center my-4">
                <h1>Software Developer</h1>
                <LuMinus className="border rounded-full text-2xl cursor-pointer" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="w-full">
                  <p>Job Title</p>
                  <input
                    type="text"
                    className="bg-gray-200 rounded h-10 w-full md:px-2"
                  />
                </div>

                <div className="w-full">
                  <p>Company</p>
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
                    // value={text}
                    // onChange={handleChange}
                  ></textarea>
                  <div className="absolute top-3 left-3 flex justify-around items-center bg-white rounded space-x-4 py-2 px-4 cursor-pointer">
                    <span>B</span>
                    <span>B</span>
                    <span>B</span>
                    <span>B</span>
                    <span>B</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ANOTHER EMPLOYEE */}
          <div>
            <div className="border p-2 sm:p-6 rounded my-6">
              <div className="flex justify-between items-center my-4">
                <h1>Software Developer</h1>
                <FiPlus className="border rounded-full text-2xl cursor-pointer" />
              </div>

              <div>
                <p className="text-sm">Facebook - Dhaka</p>
                <p className="text-sm">Feb 2020 - Feb 2022</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <button className="py-2 px-4 rounded border shadow">
              Add More
            </button>
          </div>
        </div>

        {/* desktop preview section */}
        <div className="border justify-between items-center hidden sm:block">
          <h1 className="text-center font-bold text-pink-200 text-4xl">
            Hello Preview
          </h1>
          <h1 className="text-center font-bold text-pink-200 text-4xl">
            Hello Preview
          </h1>
          <h1 className="text-center font-bold text-pink-200 text-4xl">
            Hello Preview
          </h1>
        </div>
      </section>
    </main>
  );
};

export default Builder;
