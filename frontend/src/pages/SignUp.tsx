import { Link } from "react-router-dom";
import { getNames } from "country-list";
import { registrationSchema } from "../utils/schema/auth_schema";
import { registrationSchemaType } from "../utils/schema/schema_types";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useSWRMutation from "swr/mutation";
import { BASE_URL } from "../utils/constants/config";
import { postData } from "../utils/constants/api_caller";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const countryList = getNames();
  const navigate = useNavigate();

  const { data: RegistrationResponse, trigger: startRegistering } =
    useSWRMutation(`${BASE_URL}/signup`, postData, {
      revalidate: false,
      onError: (err) => {
        console.log(err, "erororororo");

        toast.error(err["error"], { id: "toaster" });
      },
    });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registrationSchemaType>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit: SubmitHandler<registrationSchemaType> = (data) => {
    console.log(data, "start registering");
    startRegistering(data);
  };

  if (RegistrationResponse) {
    console.log(RegistrationResponse);
    toast.success("user created successfully");
    navigate("/signin");
  }

  return (
    <div className="max-w-sm min-w-fit p-6 bg-white rounded-lg shadow-xl  mx-auto my-5 sm:my-14">
      <Toaster />
      <div className="flex justify-center mx-auto">
        <h1 className="text-2xl font-semibold">Register</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <label
              htmlFor="email"
              className="block text-sm text-gray-800 capitalize "
            >
              email
            </label>
          </div>
          {errors.email && (
            <p className="mt-1 text-xs italic text-red-500">
              {errors.email?.message}
            </p>
          )}
          <input
            type="email"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            {...register("email")}
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
          {errors.password && (
            <p className="mt-1 text-xs italic text-red-500">
              {errors.password?.message}
            </p>
          )}
          <input
            {...register("password")}
            type="password"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="mt-6">
          <label
            htmlFor="firstname"
            className="block text-sm text-gray-800 capitalize "
          >
            first name
          </label>
          {errors.firstname && (
            <p className="mt-1 text-xs italic text-red-500">
              {errors.firstname?.message}
            </p>
          )}
          <input
            {...register("firstname")}
            type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mt-6">
          <label
            htmlFor="lastname"
            className="block text-sm text-gray-800 capitalize "
          >
            last name
          </label>
          {errors.lastname && (
            <p className="mt-1 text-xs italic text-red-500">
              {errors.lastname?.message}
            </p>
          )}
          <input
            {...register("lastname")}
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
          {errors.country && (
            <p className="mt-1 text-xs italic text-red-500">
              {errors.country?.message}
            </p>
          )}
          <select
            {...register("country")}
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
            htmlFor="usertype"
            className="block text-sm text-gray-800 capitalize "
          >
            account type
          </label>
          {errors.usertype && (
            <p className="mt-1 text-xs italic text-red-500">
              {errors.usertype?.message}
            </p>
          )}
          <select
            {...register("usertype")}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          >
            <option value="" className="py-2">
              --Please choose an option--
            </option>
            <option value="freelance" className="py-2">
              freelance
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
              age
            </label>
          </div>
          {errors.age && (
            <p className="mt-1 text-xs italic text-red-500">
              {errors.age?.message}
            </p>
          )}
          <input
            {...register("age")}
            type="number"
            min={18}
            max={100}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
          >
            Sign Up
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
