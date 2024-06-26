import work_illustration from "../res/undraw_working_re_ddwy.svg";

export default function Hero() {
  return (
    <header className="bg-white ">
      <div className="container px-6 py-8 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800  lg:text-4xl">
                Best place to Find
                <br /> your
                <span className="text-blue-500 "> mission</span>
              </h1>

              <p className="mt-3 text-gray-600 ">
                Find skilled freelancers for your projects. Post jobs, browse
                profiles, and collaborate efficiently. Connect with top talent
                across various industries to get your work done.
              </p>

              <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Find work
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full lg:max-w-3xl"
              src={work_illustration}
              alt="Catalogue-pana.svg"
            />
            {/* <Logo /> */}
          </div>
        </div>
      </div>
    </header>
  );
}
