import { profileSchema } from "../../utils/schema/profile_schema";
import { profileSchemaType } from "../../utils/schema/schema_types";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useSWRMutation from "swr/mutation";
import { BASE_URL } from "../../utils/constants/config";
import toast, { Toaster } from "react-hot-toast";
import { getDataAuth, putAuth } from "../../utils/constants/api_caller";
import { useAuthStore } from "../../utils/store/store";
import MultiTagSelect from "../shared/MultiTagSelect";
import { useState } from "react";
import { availableSkills } from "../../utils/constants/constant";
import { useEffect } from "react";
import useSWR from 'swr'


export default function Settings() {
  const [skills, setSkills] = useState<string[]>(["programmer"]);
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  const { trigger: updateProfile } = useSWRMutation(
    `${BASE_URL}/${user["usertype"] as string}/updateProfile`,
    putAuth,
    {
      revalidate: true,
      onError: (err) => {
        for (const elem in err) {
          toast.error(err[elem], { id: "toaster" });
        }
      },
      onSuccess: (data) => {
        toast.success("user profile updated successfully");
        console.log(data, "user updated");
        setUser(data);
      },
    }
  );

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<profileSchemaType>({
    resolver: zodResolver(profileSchema),
  });

  const onSubmit: SubmitHandler<profileSchemaType> = (data) => {
    console.log(data, "start updating user");
    updateProfile(data);
  };

  useEffect(() => {
    if (skills.length > 0 && user["usertype"] !== 'employer') {
      setValue("skills", skills.join(","));
    }
  }, [skills, setValue]);

  const { isLoading } = useSWR(
    `${BASE_URL}/${user["usertype"] as string}/userProfile`,
    getDataAuth,
    {
      onSuccess: (data) => {
        // setBookDetails(data);
        // console.log("got user profile cred", data);
        if (data.skills) {
          setSkills(data.skills.split(","));
        }
      },
      onError: (err) => {
        console.log(err, "profile details err");
      },
    }
  );

  return (
    <div className="max-w-sm min-w-fit p-6 bg-white rounded-lg shadow-xl  mx-auto my-5 sm:my-14">
      <Toaster />
      <div className="flex justify-center mx-auto">
        <h1 className="text-2xl font-semibold">Edit Profile</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
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
            defaultValue={user["firstname"]}
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
            defaultValue={user["lastname"]}
            {...register("lastname")}
            type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        {skills && (
          <div className="mt-6">
            <label className="block text-sm text-gray-800 capitalize ">
              skills
            </label>

            {errors.skills && (
              <p className="mt-1 text-xs italic text-red-500">
                {errors.skills?.message}
              </p>
            )}
            <MultiTagSelect props={[skills, setSkills, availableSkills]} />
          </div>
        )}

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
