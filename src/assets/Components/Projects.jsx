import { useState } from "react";

const Projects = () => {
  let [isActive, setIsActive] = useState(true);

  return (
    <>
      <div
        id="project"
        className="lg:w-screen lg:py-20 w-[100vw] items-center lg:rounded-b-[100px] rounded-b-[50px]  gap-5 lg:pt-52 lg:mt-0 lg:text-left m-auto bg-white text-black px-2 py-12"
      >
        <div className="lg:flex lg:justify-between flex  flex-col lg:px-7 lg:flex-row justify-between items-center gap-5">
          <h1 className="lg:tezxt-8xl mt-9 lg:mt-0 md:text-5xl font-bold text-4xl">
            Featured Projects
          </h1>
          <div className="p-2 rounded-full justify-center border-2 flex gap-3 w-fit border-[#ff8312]">
            <div
              onClick={() => setIsActive(!isActive)}
              className={`lg:py-5 lg:px-6 p-3 font-semibold rounded-full text-center ${
                isActive
                  ? "bg-[#fff] text-black hover:bg-[#ffe8da] "
                  : "bg-[#ff8132] text-white"
              } `}
            >
              Frontend
            </div>
            <div
              onClick={() => setIsActive(!isActive)}
              className={`lg:py-5 font-semibold ${
                isActive
                  ? "bg-[#ff8132] text-white"
                  : "bg-[#fff] text-black hover:bg-[#ffe8da]"
              } lg:px-6 p-3 rounded-full p-auto `}
            >
              Full Stack
            </div>
          </div>
        </div>
        {isActive ? (
          <article className="overflow-hidden rounded-lg hover:shadow-lg transition-all ease-in-out border border-gray-100 bg-white max-w-md mx-auto mt-11 shadow-sm">
            <img
              alt=""
              src="/Abhi-saas.webp"
              className="h-56 w-full object-cover"
            />

            <div className="p-4 sm:p-6 space-y-2">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900">
                  Create Notes With Ease
                </h3>
              </a>
              <div className="space-x-2">
                <span className="whitespace-nowrap rounded-full bg-blue-600 px-2.5 py-0.5 text-xs text-white">
                  NextJs
                </span>
                <span className="whitespace-nowrap rounded-full bg-blue-600 px-2.5 py-0.5 text-xs text-white">
                  Prisma
                </span>
                <span className="whitespace-nowrap rounded-full bg-blue-600 px-2.5 py-0.5 text-xs text-white">
                  Shadcn UI
                </span>

                <span className="whitespace-nowrap rounded-full bg-blue-600 px-2.5 py-0.5 text-xs text-white">
                  Tailwind CSS
                </span>
              </div>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Created a complete Full Stack SAAS application using the latest
                Modern Framework called NextJs 14
              </p>
              <a
                href="https://github.com/avayyyyyyy/abhi-saas"
                target="_blank"
                type="button"
                className="text-white bg-zinc-900 hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
                rel="noreferrer"
              >
                <svg
                  className="w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clipRule="evenodd"
                  />
                </svg>
                Code
              </a>
              <a
                href="https://abhi-saas.vercel.app"
                target="_blank"
                type="button"
                className="text-white bg-blue-600 hover:bg-blue-600/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
                rel="noreferrer"
              >
                <svg
                  className="w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                    clipRule="evenodd"
                  />
                </svg>
                Live Demo
              </a>
            </div>
          </article>
        ) : (
          <div className="text-center mt-11 font-bold text-3xl">Soon...</div>
        )}
      </div>
    </>
  );
};

export default Projects;
