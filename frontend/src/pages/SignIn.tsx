import { Link } from "react-router-dom";
import { loginSchema } from "../utils/schema/auth_schema";
import { loginSchemaType } from "../utils/schema/schema_types";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useSWRMutation from "swr/mutation";
import { BASE_URL } from "../utils/constants/config";
import { postData } from "../utils/constants/api_caller";
import toast, { Toaster } from "react-hot-toast";
import { redirect } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../utils/store/store";

export default function SignIn() {
  const navigate = useNavigate();

  const setUser = useAuthStore((state) => state.setUser);

  const { data: LoginResponse, trigger: startRegistering } = useSWRMutation(
    `${BASE_URL}/login`,
    postData,
    {
      revalidate: false,
      onError: (err) => {
        toast.error(err["error"], { id: "toaster" });
      },
    }
  );
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<loginSchemaType> = (data) => {
    console.log(data, "start login");
    startRegistering(data);
  };

  if (LoginResponse) {
    delete LoginResponse.__v;
    setUser(LoginResponse);
    Cookies.set("token", LoginResponse.idToken);

    navigate("/profile");
  }

  return (
    <div className="max-w-sm min-w-fit p-6 bg-white rounded-lg shadow-xl  mx-auto my-5 sm:my-14">
      <Toaster />
      <div className="flex justify-center mx-auto">
        <h1 className="text-2xl font-semibold">Login</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm text-gray-800 capitalize"
          >
            email
          </label>
          {errors.email && (
            <p className="mt-1 text-xs italic text-red-500">
              {errors.email?.message}
            </p>
          )}
          <input
            {...register("email")}
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
          </div>
          {errors.password && (
            <p className="mt-1 text-xs italic text-red-500">
              {errors.password?.message}
            </p>
          )}

          <input
            {...register("password")}
            type="password"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
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
