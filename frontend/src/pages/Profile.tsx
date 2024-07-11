import { useState } from "react";
import Settings from "../components/profile/Settings";
import Tasks from "../components/profile/Tasks";
import { useAuthStore } from "../utils/store/store";
import useSWRMutation from "swr/mutation";
import Cookies from "js-cookie";

import Missions from "../components/profile/Missions";
import NewMission from "../components/shared/NewMission";
import NewService from "../components/shared/NewService";
import useSWR from "swr";
import { getDataAuth } from "../utils/constants/api_caller";
import useSWRImmutable from 'swr/immutable'

export default function Profile() {
  const [showSettings, setShowSettings] = useState(false);
  const user = useAuthStore((state) => state.user);
  const [showModel, setShowModel] = useState(false);
  // const setUser = useAuthStore((state) => state.setUser);
  // console.log(user, "user data");

  // const { isLoading } = useSWRImmutable(
  //   `${BASE_URL}/book/get-book/${params.book_id}`,
  //   getData,
  //   {
  //     onSuccess: (data) => {
  //       setBookDetails(data);
  //     },
  //     onError: (err) => {
  //       console.log(err, 'book details err');
  //     },
  //   }
  // );

  // const { isLoading } = useSWR(
  //   `${BASE_URL}/${user["usertype"] as string}/userProfile`,
  //   getDataAuth,
  //   {
  //     onSuccess: (data) => {
  //       // setBookDetails(data);
  //       // console.log("got user profile cred", data);
  //       if (data.skills) {
  //         // setSkills(data.skills.split(","));
  //       }
  //     },
  //     onError: (err) => {
  //       console.log(err, "profile details err");
  //     },
  //   }
  // );

  return (
    <section>
      {showModel && user["usertype"] == "employer" && (
        <NewMission close={setShowModel} />
      )}
      {showModel && user["usertype"] == "freelance" && (
        <NewService close={setShowModel} />
      )}
      <div className="py-12 bg-gray-900 sm:pb-6 sm:pt-16 lg:pt-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-stretch justify-between sm:items-center">
              <div className="flex flex-col justify-between flex-1 ml-8 sm:flex-row sm:items-center sm:space-x-6">
                <div className="sm:flex-1">
                  <p className="text-xl font-bold text-white">
                    {user["firstname"]} {user["lastname"]} | {user["usertype"]}
                  </p>
                  <p className="mt-1 text-base font-medium text-gray-400">
                    {user["country"]}
                  </p>
                </div>

                <div className="mt-auto sm:ml-auto sm:mt-0">
                  <button
                    onClick={() => setShowModel(true)}
                    className="inline-flex items-center justify-center w-full px-5 py-3 text-xs font-bold tracking-widest text-gray-500 uppercase transition-all duration-200 bg-white border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:bg-gray-100 hover:text-gray-900"
                  >
                    {user["usertype"] == "freelance"
                      ? "new service"
                      : "new mission"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px space-x-8" aria-label="Tabs">
                <button
                  onClick={() => setShowSettings(false)}
                  className={`px-0 py-4 text-xs font-bold tracking-wide text-gray-400 uppercase border-b-2 whitespace-nowrap ${
                    !showSettings
                      ? "border-gray-900 sm:pr-10"
                      : "border-transparent sm:pr-10 hover:text-gray-700 hover:border-gray-300"
                  } `}
                  aria-current="page"
                >
                  Proposals
                </button>

                <button
                  onClick={() => setShowSettings(true)}
                  className={`px-0 py-4 text-xs font-bold tracking-wide text-gray-400 uppercase border-b-2 whitespace-nowrap ${
                    showSettings
                      ? "border-gray-900 sm:pr-10"
                      : "border-transparent sm:pr-10 hover:text-gray-700 hover:border-gray-300"
                  } `}
                >
                  Settings
                </button>
              </nav>
            </div>

            {!showSettings && <Missions />}
            {showSettings && <Settings />}
          </div>
        </div>
      </div>
    </section>
  );
}
