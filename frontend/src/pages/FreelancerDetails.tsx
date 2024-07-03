import Stars from "../components/shared/Stars";
import { SERVICE_LIST } from "../utils/constants/constant";
import { getRandomNumber } from "../utils/constants/func";
import { ServiceCardType } from "../utils/constants/types";
import { useState } from "react";

export default function FreelancerDetails({
  data_,
}: {
  data_: ServiceCardType;
}) {
  const [showDescription, setShowDescription] = useState(true);
  const data = SERVICE_LIST[0];
  return (
    <section className="py-12 bg-gray-50 sm:py-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 mt-8 lg:grid-rows-1 gap-y-12 lg:mt-12 lg:grid-cols-5 lg:gap-y-16 lg:gap-x-12 xl:gap-x-16">
          <div className="lg:col-span-3 lg:row-end-1">
            <div className="lg:flex lg:items-start">
              <div className="lg:order-2 lg:ml-5">
                <div className="overflow-hidden border-2 border-transparent rounded-lg">
                  <img
                    className="object-cover w-full h-full"
                    src={data.image}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 lg:row-end-2 lg:row-span-2">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {data.title}
            </h1>

            <div className="flex items-center mt-5">
              <Stars rating={data.rating as number} />
              <p className="ml-2 text-sm font-medium text-gray-400">
                157 Reviews
              </p>
            </div>

            <div className="flex items-center mt-8">
              <p className="text-3xl font-bold text-gray-900">
                {data.price} mad
              </p>
              <p className="ml-2 text-2xl font-bold text-gray-500">
                <del> {getRandomNumber(data.price, data.price + 100)} mad</del>
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              <li className="flex items-center text-sm font-medium text-gray-500">
                <svg
                  className="w-5 h-5 mr-2.5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Free shipping worldwide
              </li>

              <li className="flex items-center text-sm font-medium text-gray-500">
                <svg
                  className="w-5 h-5 mr-2.5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                100% Secured Payment
              </li>

              <li className="flex items-center text-sm font-medium text-gray-500">
                <svg
                  className="w-5 h-5 mr-2.5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                posted by {data.owner}
              </li>

              <li className="flex items-center text-sm font-medium text-gray-500">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-2.5 text-gray-400"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                      stroke="#A5ACB6"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M12 6V12"
                      stroke="#A5ACB6"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M16.24 16.24L12 12"
                      stroke="#A5ACB6"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
                {data.posted_at.toDateString()}
              </li>
            </ul>

            <div className="flex items-center mt-10 space-x-4">
              <button
                type="button"
                className="inline-flex items-center justify-center px-12 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border-2 border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
              >
                Send Proposal
              </button>

              {/* <button
                type="button"
                className="
                            inline-flex
                            items-center
                            justify-center
                            px-4
                            py-3.5
                            text-gray-900
                            transition-all
                            duration-200
                            bg-transparent
                            border-2 border-gray-300
                            rounded-md
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                            hover:border-gray-900 hover:bg-gray-100
                            focus:border-gray-900
                        "
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button> */}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px space-x-8 sm:space-x-14">
                <button
                  onClick={() => setShowDescription(true)}
                  className={`inline-flex items-center py-4 text-sm font-medium whitespace-nowrap ${
                    showDescription
                      ? "text-gray-900 border-b-2 border-gray-900"
                      : "text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 "
                  }`}
                >
                  Description
                </button>

                <button
                  onClick={() => setShowDescription(false)}
                  title=""
                  className={`inline-flex items-center py-4 text-sm font-medium whitespace-nowrap ${
                    !showDescription
                      ? "text-gray-900 border-b-2 border-gray-900"
                      : "text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 "
                  }`}
                >
                  Reviews
                  <span className="block px-2 py-0.5 ml-2 text-xs font-bold bg-gray-400 rounded-full text-gray-50">
                    157
                  </span>
                </button>
              </nav>
            </div>

            <div className="flow-root mt-3 sm:mt-5">
              {!showDescription && (
                <ul className="divide-y divide-gray-100 -my-9">
                  <li className="py-8">
                    <div className="flex items-start">
                      <img
                        className="flex-shrink-0 rounded-full w-11 h-11"
                        src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/product-details/2/avatar-1.png"
                        alt=""
                      />

                      <div className="ml-6">
                        <Stars rating={data.rating as number} />
                        <p className="mt-5 text-base font-normal leading-7 text-gray-900">
                          You made it so simple. My new site is so much faster
                          and easier to work with than my old site. I just
                          choose the page, make the changes.
                        </p>
                        <p className="mt-5 text-sm font-bold text-gray-900">
                          Kristin Watson
                        </p>
                        <p className="mt-1 text-sm font-normal text-gray-500">
                          March 14, 2021
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              )}

              {showDescription && (
                <p className="mt-5 text-base font-normal leading-7 text-gray-900">
                  You made it so simple. My new site is so much faster and
                  easier to work with than my old site. I just choose the page,
                  make the changes.
                </p>
              )}
            </div>

            {/* <div className="mt-8 text-center lg:pl-16 sm:mt-12 lg:text-left">
              <button
                type="button"
                className="inline-flex items-center justify-center text-xs font-bold tracking-widest text-gray-400 uppercase transition-all duration-200 rounded hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                <svg
                  className="w-4 h-4 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Load more reviews
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
