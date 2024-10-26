import Image from "next/image";
import { getProjects } from "../lib/projects";
import LoadingBar from "./loader";
import Link from "next/link";

export default async function ProjectsMain() {
  const projects = await getProjects();

  console.log("Projects data:", projects);

  if (!projects || projects.length === 0) {
    return <LoadingBar />;
  }

  return (
    <div className="px-0 md:px-5 lg:px-8 mt-2 md:mt-6 lg:mt-10 animate-fadeInUp">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8 animate-fadeInLeft">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-1 rounded-md transition-transform duration-500 transform hover:scale-100 md:hover:scale-100 lg:hover:scale-105"
          >
            <div className="p-2">
              <Link href={`/projects/${project.id}`}>
                <Image
                  className="w-full h-auto object-cover rounded-xl cursor-pointer"
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={450}
                  priority={true}
                />
              </Link>
            </div>
            <div className="p-2">
              <div className="text-lg font-bold cursor-pointer">
                {" "}
                <Link href={`/projects/${project.id}`}>{project.title}</Link>
              </div>
              <p className="text-sm mt-2">{project.description}</p>
              <div className="flex gap-2 items-center justify-between my-2">
                <a href={project.livelink} target="_blank">
                  <span className="inline-flex gap-2 justify-center items-center border-foreground border-2 cursor-pointer bg-background text-foreground px-2 py-1 text-sm font-semibold rounded-lg group hover:bg-foreground hover:text-background motion-reduce:transition-all">
                    Live link
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="currentColor"
                      className="-rotate-45 transform transition-transform duration-300"
                    >
                      <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                    </svg>
                  </span>
                </a>
                {project.github && (
                  <a href={project.github} target="_blank">
                    <span className="inline-flex gap-2 justify-center items-center border-foreground border-2 cursor-pointer bg-background text-foreground px-2 py-1 text-sm font-semibold rounded-lg group hover:bg-foreground hover:text-background motion-reduce:transition-all">
                      Source Code{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="currentColor"
                      >
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </span>
                  </a>
                )}
                <Link href={`/projects/${project.id}`}>
                  <span className="inline-flex gap-2 justify-center items-center border-foreground border-2 cursor-pointer bg-background text-foreground px-2 py-1 text-sm font-semibold rounded-lg group hover:bg-foreground hover:text-background motion-reduce:transition-all">
                    Description
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="currentColor"
                    >
                      <path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
