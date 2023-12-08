const Projects = () => {
  const projects = [
    {
      name: "Project 1",
      description: "project description",
      link: "",
      imageURL: "https://source.unsplash.com/200x200/?random?1",
    },
    {
      name: "Project 2",
      description: "project description",
      link: "",
      imageURL: "https://source.unsplash.com/200x200/?random?2",
    },
    {
      name: "Project 3",
      description: "project description",
      link: "",
      imageURL: "https://source.unsplash.com/200x200/?random?3",
    },
  ];
  return (
    <>
      <section className="max-w-screen-md mx-auto mt-10 mb-[4.5rem]">
        <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
          <div className="container p-6 mx-auto space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold">Projects</h2>
            </div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="shadow-lg flex flex-col dark:bg-gray-900"
                >
                  <div className="flex flex-col justify-center items-center flex-1 p-6 bg-container-color rounded">
                    <img src={project.imageURL} alt="" />
                    <h1 className="text-left mt-4">{project.name}</h1>
                    <p>{project.description}</p>
                    <div className=" flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400 text-blue-700">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-pointer"
                      >
                        View More{" "}
                        <i className="uil uil-arrow-right button__icon"></i>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Projects;
