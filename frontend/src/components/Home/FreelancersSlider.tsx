import Slider from "react-slick";
import FreelancerCard from "./FreelancerCard";
import { FreelancerSettingsSlider } from "../../utils/constants/constant";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProfileType } from "../../utils/constants/types";
import { getData } from "../../utils/constants/api_caller";
import { useState } from "react";
import { BASE_URL } from "../../utils/constants/config";
import useSWR from "swr";
import Loading from "../shared/Loading";

export default function FreelancersSlider() {
  const [freelancerSample, setFreelancecSample] = useState<
    ProfileType[] | undefined
  >();

  const { isLoading, data: freelancerSamplesRes } = useSWR(
    `${BASE_URL}/latest`,
    getData,
    {
      revalidate: true,
      onSuccess: (data) => {
        setFreelancecSample(Object.values(data));
      },
    }
  );

  if (isLoading) {
    return <Loading />;
  }

  if (freelancerSamplesRes) {
    return (
      <section className="bg-white ">
        <div className="container px-6 py-2 mx-auto">
          <p className="max-w-2xl mx-auto my-3 text-center text-gray-500 text-2xl">
            Categories
          </p>

          {freelancerSample && (
            <div className="slider-container">
              <Slider {...FreelancerSettingsSlider}>
                {freelancerSample.map((elem: ProfileType, index) => (
                  <FreelancerCard key={index} data={elem} />
                ))}
              </Slider>
            </div>
          )}
        </div>
      </section>
    );
  }
}
