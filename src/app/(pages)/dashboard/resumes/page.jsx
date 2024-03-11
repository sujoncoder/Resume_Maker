import Link from "next/link";

const Resumes = () => {
  return (
    <main>
      <Link
        href="dashboard/resumes/resume-edit"
        className="w-60 h-60 flex justify-center items-center border rounded-lg shadow py-10 my-20 cursor-pointer hover:border-blue-300"
      >
        <h1 className="text-center text-lg">Create Resume</h1>
      </Link>
    </main>
  );
};

export default Resumes;
