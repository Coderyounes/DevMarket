import { Dispatch, SetStateAction } from "react";
import toast, { Toaster } from "react-hot-toast";
import { serviceSchema } from "../../utils/schema/service_schema";
import { serviceSchemaType } from "../../utils/schema/schema_types";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BASE_URL } from "../../utils/constants/config";
import { postFormAuth } from "../../utils/constants/api_caller";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../utils/store/store";
import useSWRMutation from "swr/mutation";
import { ALL_CATEGORIES } from "../../utils/constants/constant";

export default function NewService({
  close,
}: {
  close: Dispatch<SetStateAction<boolean>>;
}) {
  const navigate = useNavigate();
  // const categories: string[] = ALL_CATEGORIES.map((category) => category.name);
  const setUser = useAuthStore((state) => state.setUser);

  const { data: NewServiceResponse, trigger: startPostingService } =
    useSWRMutation(`${BASE_URL}/freelance/createService`, postFormAuth, {
      revalidate: false,
      onError: (err) => {
        toast.error(err["error"], { id: "toaster" });
      },
    });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<serviceSchemaType>({
    resolver: zodResolver(serviceSchema),
  });

  const onSubmit: SubmitHandler<serviceSchemaType> = (data) => {
    console.log(data, "start creatig new service");
    console.log(data);
    startPostingService({ ...data, images: data.images[0] });
  };

  if (NewServiceResponse) {
    // navigate("/profile");
    toast.success("new service have been created");
  }

  return (
    <div
      className="fixed inset-0 z-10 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <Toaster />

      <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <span
          className="hidden sm:inline-block sm:h-screen sm:align-middle"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl  sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
          <h3
            className="text-lg font-medium leading-6 text-gray-800 capitalize "
            id="modal-title"
          >
            New Service
          </h3>

          <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="title"
                  className="block text-sm text-gray-800 capitalize"
                >
                  title
                </label>
              </div>
              {errors.title && (
                <p className="mt-1 text-xs italic text-red-500">
                  {errors.title?.message}
                </p>
              )}

              <input
                {...register("title")}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="emails-list" className="text-sm text-gray-700 ">
                Description
              </label>
              {errors.description && (
                <p className="mt-1 text-xs italic text-red-500">
                  {errors.description?.message}
                </p>
              )}

              <label className="block mt-3" htmlFor="description">
                <textarea
                  {...register("description")}
                  className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40    "
                />
              </label>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="price"
                  className="block text-sm text-gray-800 capitalize"
                >
                  price
                </label>
              </div>
              {errors.price && (
                <p className="mt-1 text-xs italic text-red-500">
                  {errors.price?.message}
                </p>
              )}

              <input
                {...register("price")}
                type="number"
                min={1}
                max={99999}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="tags"
                  className="block text-sm text-gray-800 capitalize"
                >
                  tags
                </label>
              </div>
              {errors.tags && (
                <p className="mt-1 text-xs italic text-red-500">
                  {errors.tags?.message}
                </p>
              )}

              <input
                {...register("tags")}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mt-4">
              <label className="block mt-3" htmlFor="images">
                {errors.images && (
                  <p className="mt-1 text-xs italic text-red-500">
                    {errors.images?.message?.toString()}
                  </p>
                )}
                <input
                  {...register("images")}
                  type="file"
                  className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40    "
                />
              </label>
            </div>

            <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
              <button
                onClick={() => close(false)}
                type="button"
                className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2    hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
              >
                Cancel
              </button>

              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
