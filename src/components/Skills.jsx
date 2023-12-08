import CompanyImg from "../assets/company.png";

const Skills = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold my-10">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 min-h-[300px]">
        <div className="w-full bg-indigo-200 dark:bg-indigo-800 flex flex-col  justify-center items-center space-y-4 p-6">
          <div className="h-28 w-28 bg-indigo-400 grid place-items-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
          <h1 className=" text-3xl font-bold text-center ">
            Programming languages
          </h1>

          <div className="w-full ">
            <div className="w-full flex justify-between">
              <p className=" text-sm mb-2 font-bold">C</p>
              <p className=" text-sm mb-2">90%</p>
            </div>
            <span
              role="progressbar"
              aria-labelledby="ProgressLabel"
              aria-valuenow="75"
              className="block rounded-full bg-black bg-opacity-20"
            >
              <span
                className="block h-1 rounded-full bg-black"
                style={{ width: "90%" }}
              ></span>
            </span>
          </div>
          <div className="w-full ">
            <div className="w-full flex justify-between">
              <p className=" text-sm mb-2 font-bold">Java</p>
              <p className=" text-sm mb-2">70%</p>
            </div>
            <span
              role="progressbar"
              aria-labelledby="ProgressLabel"
              aria-valuenow="75"
              className="block rounded-full bg-black bg-opacity-20"
            >
              <span
                className="block h-1 rounded-full bg-black"
                style={{ width: "70%" }}
              ></span>
            </span>
          </div>
          <div className="w-full ">
            <div className="w-full flex justify-between">
              <p className=" text-sm mb-2 font-bold">Python</p>
              <p className=" text-sm mb-2">60%</p>
            </div>
            <span
              role="progressbar"
              aria-labelledby="ProgressLabel"
              aria-valuenow="75"
              className="block rounded-full bg-black bg-opacity-20"
            >
              <span
                className="block h-1 rounded-full bg-black"
                style={{ width: "60%" }}
              ></span>
            </span>
          </div>
        </div>
        <div className=" w-full bg-pink-200 dark:bg-pink-800 flex flex-col  justify-center items-center space-y-4 p-6">
          <div className="h-28 w-28 bg-pink-400 grid place-items-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              ></path>
            </svg>
          </div>
          <h1 className=" text-3xl font-bold text-center ">
            Frontend technologies
          </h1>

          <div className="w-full ">
            <div className="w-full flex justify-between">
              <p className=" text-sm mb-2 font-bold">HTML</p>
              <p className=" text-sm mb-2">90%</p>
            </div>
            <span
              role="progressbar"
              aria-labelledby="ProgressLabel"
              aria-valuenow="75"
              className="block rounded-full bg-black bg-opacity-20"
            >
              <span
                className="block h-1 rounded-full bg-black"
                style={{ width: "90%" }}
              ></span>
            </span>
          </div>
          <div className="w-full ">
            <div className="w-full flex justify-between">
              <p className=" text-sm mb-2 font-bold">CSS</p>
              <p className=" text-sm mb-2">80%</p>
            </div>
            <span
              role="progressbar"
              aria-labelledby="ProgressLabel"
              aria-valuenow="75"
              className="block rounded-full bg-black bg-opacity-20"
            >
              <span
                className="block h-1 rounded-full bg-black"
                style={{ width: "80%" }}
              ></span>
            </span>
          </div>
          <div className="w-full ">
            <div className="w-full flex justify-between">
              <p className=" text-sm mb-2 font-bold">JavaScript</p>
              <p className=" text-sm mb-2">70%</p>
            </div>
            <span
              role="progressbar"
              aria-labelledby="ProgressLabel"
              aria-valuenow="75"
              className="block rounded-full bg-black bg-opacity-20"
            >
              <span
                className="block h-1 rounded-full bg-black"
                style={{ width: "70%" }}
              ></span>
            </span>
          </div>
        </div>{" "}
        <div className=" w-full bg-cyan-200 dark:bg-cyan-800 flex flex-col  justify-center items-center space-y-4 p-6">
          <div className="h-28 w-28 bg-cyan-400 grid place-items-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
              ></path>
            </svg>
          </div>
          <h1 className=" text-3xl font-bold text-center ">Databases </h1>

          <div className="w-full ">
            <div className="w-full flex justify-between">
              <p className=" text-sm mb-2 font-bold">MYSQL</p>
              <p className=" text-sm mb-2">70%</p>
            </div>
            <span
              role="progressbar"
              aria-labelledby="ProgressLabel"
              aria-valuenow="75"
              className="block rounded-full bg-black bg-opacity-20"
            >
              <span
                className="block h-1 rounded-full bg-black"
                style={{ width: "70%" }}
              ></span>
            </span>
          </div>
          <div className="w-full "> .</div>
          <div className="w-full "> .</div>
        </div>
      </div>
      <h2 className="text-center text-4xl font-bold my-10">Experience</h2>
      <div className="w-full flex flex-col">
        <img src={CompanyImg} alt="company" className="w-60 mx-auto" />
        <div className="mx-auto ">
          <span className="font-bold">Work Experience Role:</span> Worked as
          Associate Developer
        </div>
      </div>
    </>
  );
};

export default Skills;
