import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="max-w-sm min-w-fit p-6 bg-white rounded-lg shadow-xl  mx-auto my-5 sm:my-14">
      <div className="flex justify-center mx-auto">
        <img
          className="w-auto h-7 sm:h-8"
          src="https://merakiui.com/images/logo.svg"
          alt=""
        />
      </div>
      <form className="mt-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm text-gray-800 capitalize"
          >
            email
          </label>
          <input
            name="email"
            type="email"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm text-gray-800 capitalize"
            >
              Password
            </label>
            {/* <a href="#" className="text-xs text-gray-600  hover:underline">
              Forget Password?
            </a> */}
          </div>
          <input
            type="password"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mt-6">
          <button
            type="button"
            className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
          >
            Sign In
          </button>
        </div>
      </form>

      <p className="mt-8 text-xs font-light text-center text-gray-400">
        Don't have an account?
        <Link
          to="/signup"
          className="font-medium text-blue-600  hover:underline"
        >
          Create One
        </Link>
      </p>
    </div>
  );
}
