"use client";

// import user from "/public/assets/images/user1.png";

const DashBoard = () => {
  return (
    <main>
      <section className="flex justify-center items-center py-4 md:py-32">
        <div className="w-full h-full rounded-lg shadow p-6 space-y-2 bg-gray-100 cursor-pointer">
          <h1 className="text-center text-2xl text-blue-500 font-bold">
            Wellcome to Resume maker DASHBOARD
          </h1>

          <h3 className="text-xl text-center font-semibold">Sujon Sheikh</h3>
          <p className="text-slate-500 text-center">sujonsheikh@gmail.com</p>
        </div>
      </section>
    </main>
  );
};

export default DashBoard;
