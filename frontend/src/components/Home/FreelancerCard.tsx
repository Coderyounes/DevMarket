import { Link } from "react-router-dom";
import { FreelancerCardType } from "../../utils/constants/types";
import Stars from "../shared/Stars";

export default function FreelancerCard({ data }: { data: FreelancerCardType }) {
  return (
    <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div
        className="w-1/3 bg-cover"
        style={{
          backgroundImage:
            `url('${data.profile_img}')`,
        }}
      ></div>

      <div className="w-2/3 p-4 md:p-4">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          {data.name}
        </h1>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {data.description.slice(1, 80)}
        </p>

        <Stars rating={data.rating} />

        <div className="flex justify-between mt-3 item-center">
          <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
            {data.job}
          </h1>
          <Link
            to={`/freelancer/${data.username}`}
            className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
