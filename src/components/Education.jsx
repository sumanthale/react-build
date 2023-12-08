const Skills = () => {
  return (
    <div>
      <section className="mx-auto" id="skills">
        <h2 className="text-center text-4xl mb-10 font-bold ">Education</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 min-h-[300px]">
          <div className="w-full bg-yellow-200 dark:bg-yellow-600 flex flex-col  justify-center items-center space-y-8 p-6">
            <h1 className=" text-4xl font-bold text-center ">Intermediate</h1>
            <p className=" text-lg font-semibold text-center">
              I have completed my Intermediate from SCJC in the year 2019 with a
              percentage of 93.1.
            </p>
          </div>
          <div className=" w-full bg-green-200 dark:bg-green-600 flex flex-col  justify-center items-center space-y-8 p-6">
            <h1 className=" text-4xl font-bold text-center ">
              Bachelor of Technology
            </h1>
            <p className=" text-lg font-semibold text-center">
              I have completed my bachelors in IT from MRECW in the year 2023
              with an aggregate of 9.34.
            </p>
          </div>{" "}
          <div className=" w-full bg-purple-200 dark:bg-purple-600 flex flex-col  justify-center items-center space-y-8 p-6">
            <h1 className=" text-4xl font-bold text-center ">Masters</h1>
            <p className=" text-lg font-semibold text-center">
              I am currently pursuing my Masters in Computer Science from SLU
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
