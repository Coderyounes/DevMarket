import { Dispatch, SetStateAction } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function NewMission({
  close,
}: {
  close: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-70"
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
            New Mission
          </h3>
          <p className="mt-2 text-sm text-gray-500 ">
            Your new project has been created. Invite your team to collaborate
            on this project.
          </p>

          <form className="mt-4" action="#">
            <label htmlFor="emails-list" className="text-sm text-gray-700 ">
              Description
            </label>

            <label className="block mt-3" htmlFor="description">
              <textarea
                name="description"
                id="description"
                placeholder="I will make you"
                value="devdhaif@gmail.com"
                className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40    "
              />
            </label>
            <label className="block mt-3" htmlFor="cv">
              <input
                type="file"
                name="cv"
                id="cv"
                className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40    "
              />
            </label>

            <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
              <button
                onClick={() => close(false)}
                type="button"
                className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2    hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  toast.success("proposal have been sent successfully", {
                    position: "bottom-center",
                  });
                  setTimeout(() => {
                    close(false);
                  }, 1000);
                }}
                type="button"
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
