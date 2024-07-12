import { Link } from "react-router-dom";
import { ProfileType } from "../../utils/constants/types";

export default function FreelancerCard({ data }: { data: ProfileType }) {
  return (
    <div className="flex max-w-md overflow-hidden rounded-lg shadow-lg bg-gray-800">
      {/* <div
        className="w-1/3 bg-cover"
        style={{
          backgroundImage: `url('${data.profile_img}')`,
        }}
      ></div> */}

      <div className="w-2/3 p-4 md:p-4">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          {data.firstname}
          {data.lastname}
        </h1>

        {/* <Stars rating={data.rating} /> */}

        <div className="flex justify-between mt-3 item-center">
          <h1 className="text-lg font-bold text-gray-700 md:text-xl">
            {data.skills}
          </h1>
          <Link
            to={`/freelancer_details/${data._id}`}
            className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
