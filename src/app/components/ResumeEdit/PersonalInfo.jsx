import { FaRegCircleUser } from "react-icons/fa6";

const PersonalInfo = () => {
  return (
    <>
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
        <button className="py-2 px-4 rounded border shadow">Add Field</button>
      </div>
    </>
  );
};

export default PersonalInfo;
