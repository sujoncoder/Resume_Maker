import Link from "next/link";

export const metadata = {
  title: "Resume Page",
  description: "Resume Maker Resume Page",
};

const Resumes = () => {
  return (
    <main>
      <Link
        href="/dashboard/edit-resume"
        className="w-60 h-60 flex justify-center items-center border rounded-lg shadow py-10 my-20 cursor-pointer hover:border-blue-300"
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center text-lg">Create Resume</h1>
          <span className="text-5xl text-slate-500">+</span>
        </div>
      </Link>
    </main>
  );
};

export default Resumes;
