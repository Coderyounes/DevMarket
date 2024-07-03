import { Link } from "react-router-dom";
import { getNames } from "country-list";

export default function SignUp() {
  const countryList = getNames();

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
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <label
              htmlFor="email"
              className="block text-sm text-gray-800 capitalize "
            >
              email
            </label>
          </div>
          <input
            name="email"
            type="email"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm text-gray-800 capitalize "
            >
              Password
            </label>
          </div>
          <input
            name="password"
            type="password"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="mt-6">
          <label
            htmlFor="first_name"
            className="block text-sm text-gray-800 capitalize "
          >
            first name
          </label>
          <input
            name="first_name"
            type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mt-6">
          <label
            htmlFor="last_name"
            className="block text-sm text-gray-800 capitalize "
          >
            last name
          </label>
          <input
            name="last_name"
            type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mt-6">
          <label
            htmlFor="country"
            className="block text-sm text-gray-800 capitalize "
          >
            country
          </label>

          <select
            name="country"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          >
            <option value="">--Please choose an option--</option>
            {countryList.map((elem, index) => (
              <option value={elem} key={index}>
                {elem}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-6">
          <label
            htmlFor="user_type"
            className="block text-sm text-gray-800 capitalize "
          >
            account type
          </label>

          <select
            name="user_type"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          >
            <option value="" className="py-2">
              --Please choose an option--
            </option>
            <option value="freelancer" className="py-2">
              freelancer
            </option>
            <option value="employer" className="py-2">
              employer
            </option>
          </select>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between">
            <label
              htmlFor="birth"
              className="block text-sm text-gray-800 capitalize "
            >
              date of birth
            </label>
          </div>
          <input
            name="birth"
            type="date"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
        Already have an account?
        <Link
          to="/signin"
          className="font-medium text-blue-600  hover:underline"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}
