import { SERVICE_LIST } from "../utils/constants/constant";
import { ServiceCardType } from "../utils/constants/types";
import MissionCard from "../components/Home/MissionCard";
import { Link } from "react-router-dom";
import useSWR from "swr";
import { BASE_URL } from "../utils/constants/config";
import { getData } from "../utils/constants/api_caller";
import { useState } from "react";

export default function Employers() {
  const [employers, setEmployers] = useState<ServiceCardType[] | undefined>();

  const { isLoading, data } = useSWR(`${BASE_URL}/allProjects`, getData, {
    revalidate: true,
    onSuccess: (data) => {
      console.log(data, "employer _ getting all");
      setEmployers(data);
    },
    onError: (err) => {
      console.log(err, "employer listing err");
    },
  });

  return (
    <section className="container mx-auto ">
      {employers && (
        <div className="px-4 mt-10 grid grid-cols-1  gap-6  xl:grid-cols-3 sm:grid-cols-2">
          {employers.map((elem: ServiceCardType, index) => {
            console.log(elem)
            return <MissionCard key={index} data={elem} />;
          })}
        </div>
      )}

      <div className="flex justify-center w-full mt-8">
        <Link
          to="#"
          className="px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-not-allowed  "
        >
          <div className="flex items-center -mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>

            <span className="mx-1">previous</span>
          </div>
        </Link>

        <Link
          to="#"
          className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md   hover:bg-blue-500  hover:text-white "
        >
          <div className="flex items-center -mx-1">
            <span className="mx-1">Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </Link>
      </div>
    </section>
  );
}
