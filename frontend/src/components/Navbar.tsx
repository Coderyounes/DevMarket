import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      //  x-data="{ isOpen: false }"
      className="relative bg-white shadow "
    >
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <Link to="/">Home</Link>
            <div className="flex lg:hidden">
              <button
                //  x-cloak @click="isOpen = !isOpen"

                type="button"
                className="text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600 "
                aria-label="toggle menu"
              >
                <svg
                  //     x-show="!isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>

                <svg
                  x-show="isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            //  x-cloak :className="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']"
            className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center"
          >
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              <Link
                to="/"
                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 "
              >
                Find Work
              </Link>
              <Link
                to="/"
                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 "
              >
                Find Talent
              </Link>
              <Link
                to="/"
                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 "
              >
                Who we are
              </Link>
            </div>

            <div className="flex items-center mt-4 lg:mt-0">
              <button className="px-6 mr-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Sign in
              </button>
              <button className="px-6 ml-3 py-2 font-medium tracking-wide text-black capitalize transition-colors duration-300 transform  border-2 border-black rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Sign up
              </button>

              {/* <button
                type="button"
                className="flex items-center focus:outline-none"
                aria-label="toggle profile dropdown"
              >
                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                  <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" className="object-cover w-full h-full" alt="avatar" />
                </div>

                <h3 className="mx-2 text-gray-700  lg:hidden">Khatab wedaa</h3>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
