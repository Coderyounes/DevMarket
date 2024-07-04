import ServiceCard from "./ServiceCard";
import { ServiceCardType } from "../../utils/constants/types";
import { SERVICE_LIST } from "../../utils/constants/constant";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ServicesSample({ title }: { title: string }) {
  return (
    <section className="bg-white sm:pt-5 pt-10">
      <div className="container px-6  mx-auto">
        <p className="max-w-2xl mx-auto text-center text-gray-500 text-2xl"></p>
        <div className="flex justify-between items-center bg-transparent py-2">
          <div>
            <span className="font-semibold text-xl text-gray-800  block tracking-wider">
              {title}
            </span>
          </div>

          <div>
            <Link
              to={`/services?category=${encodeURIComponent(title)}`}
              className="hidden text-sm font-semibold text-primary-600 hover:text-primary-700 sm:block"
            >
              More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 hidden ltr:inline"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 hidden rtl:inline"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 17l-5-5m0 0l5-5m-5 5h12"
                ></path>
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 px-4  sm:px-0 xl:grid-cols-4 sm:grid-cols-2">
          {SERVICE_LIST.slice(0,4).map((elem: ServiceCardType, index) => {
            return <ServiceCard key={index} data={elem} />;
          })}
        </div>
      </div>
    </section>
  );
}
