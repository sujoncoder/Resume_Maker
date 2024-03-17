import EditBar from "@/app/components/EditBar/EditBar";
import AddMoreSections from "@/app/components/ResumeEdit/AddMoreSections";
import Education from "@/app/components/ResumeEdit/Education";
import EmploymentHistory from "@/app/components/ResumeEdit/EmploymentHistory";
import Languages from "@/app/components/ResumeEdit/Language";
import PersonalInfo from "@/app/components/ResumeEdit/PersonalInfo";
import ProfessonalSummary from "@/app/components/ResumeEdit/ProfessonalSummary";
import Skill from "@/app/components/ResumeEdit/Skill";

const ResumeEdit = () => {
  return (
    <main className="px-20 grid grid-cols-12 gap-20">
      {/* information input section  */}
      <section className=" bg-white py-2 md:py-10 col-span-5">
        <h1 className="text-xl md:text-2xl mb-10">Personal Information</h1>

        <PersonalInfo />
        <ProfessonalSummary />
        <Education />
        <EmploymentHistory />
        <Skill />
        <Languages />
        <AddMoreSections />
      </section>
      {/* desktop preview section */}
      <section className="col-span-5">
        <div className="flex justify-center items-end h-screen">
          <EditBar />
        </div>
      </section>
    </main>
  );
};

export default ResumeEdit;
