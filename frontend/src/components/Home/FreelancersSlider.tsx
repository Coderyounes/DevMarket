import Slider from "react-slick";
import FreelancerCard from "./FreelancerCard";
import { TRENDING_FREELANCER } from "../../utils/constant";
import { FreelancerSettingsSlider } from "../../utils/constant";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FreelancerCardType } from "../../utils/types";

export default function FreelancersSlider() {
  return (
    <section className="bg-white ">
      <div className="container px-6 py-2 mx-auto">
        <p className="max-w-2xl mx-auto my-3 text-center text-gray-500 text-2xl">
          Categories
        </p>

        <div className="slider-container">
          <Slider {...FreelancerSettingsSlider}>
            {TRENDING_FREELANCER.slice(0, 4).map(
              (elem: FreelancerCardType, index) => (
                <FreelancerCard key={index} data={elem} />
              )
            )}
          </Slider>
        </div>
      </div>
    </section>
  );
}
