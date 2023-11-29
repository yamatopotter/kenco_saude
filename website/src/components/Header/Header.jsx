import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container-sm md:container-md lg:container-lg xl:container-xl mx-auto">
      <nav
        className={`flex items-center justify-around ${
          isOpen ? "pt-4" : "py-4"
        } lg:py-6 gap-2 flex-wrap`}
      >
        <div>
          <img
            src="./assets/img/logo-colorida.png"
            className="h-14 lg:h-20"
            alt="Logo Kenco. Saúde"
          />
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`lg:flex lg:items-center lg:w-auto w-full px-4 lg:px-0 bg-cyan-400 lg:bg-white text-white lg:text-black ${
            isOpen ? "block mt-2" : "hidden"
          }`}
        >
          <div className="flex flex-col lg:flex-row gap-2 text-sm text-end lg:flex-grow">
            <a
              href="#"
              className="block lg:inline-block lg:mt-0 text-white-200 p-2"
            >
              First Link
            </a>
            <hr className="lg:hidden" />
            <a
              href="#"
              className="block lg:inline-block lg:mt-0 text-white-200 p-2"
            >
              Second Link
            </a>
            <hr className="lg:hidden" />
            <a
              href="#"
              className="block lg:inline-block lg:mt-0 text-white-200 p-2"
            >
              Third Link
            </a>
            <hr className="lg:hidden" />
            <a
              href="#"
              className="block lg:inline-block lg:mt-0 text-white-200 p-2"
            >
              Fourth Link
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};
