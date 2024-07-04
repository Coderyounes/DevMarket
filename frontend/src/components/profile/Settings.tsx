import { Link } from "react-router-dom";
import { getNames } from "country-list";
import { registrationSchema } from "../../utils/schema/auth_schema";
import { registrationSchemaType } from "../../utils/schema/schema_types";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useSWRMutation from "swr/mutation";
import { BASE_URL } from "../../utils/constants/config";
import { postFormAuth } from "../../utils/constants/api_caller";
import toast, { Toaster } from "react-hot-toast";
import Cookies from "js-cookie";
import { putAuth } from "../../utils/constants/api_caller";
import { useAuthStore } from "../../utils/store/store";

export default function Settings() {
  const countryList = getNames();
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  const { trigger: updateProfile } = useSWRMutation(
    `${BASE_URL}/${Cookies.get("usertype")}/updateProfile`,
    putAuth,
    {
      revalidate: false,
      onError: (err) => {
        for (const elem in err) {
          toast.error(err[elem], { id: "toaster" });
        }
      },
      onSuccess: (data) => {
        toast.success("user profile updated successfully");
        setUser(data);
      },
    }
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registrationSchemaType>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit: SubmitHandler<registrationSchemaType> = (data) => {
    console.log(data, "start updating user");
    updateProfile(data);
  };

  return (
    <div className="max-w-sm min-w-fit p-6 bg-white rounded-lg shadow-xl  mx-auto my-5 sm:my-14">
      <Toaster />
      <div className="flex justify-center mx-auto">
        <h1 className="text-2xl font-semibold">Edit Profile</h1>
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
            value={Cookies.get("email")}
            type="email"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            {...register("email")}
          />
        </div>

        {/* <div className="mt-4">
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
        </div> */}

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
            value={Cookies.get("firstname")}
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
            value={Cookies.get("lastname")}
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
            defaultValue={Cookies.get("country")}
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
            defaultValue={Cookies.get("usertype")}
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
              Age
            </label>
          </div>
          {errors.age && (
            <p className="mt-1 text-xs italic text-red-500">
              {errors.age?.message}
            </p>
          )}
          <input
            value={Cookies.get("age")}
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
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
}
