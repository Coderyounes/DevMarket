import { ALL_CATEGORIES } from "../../utils/constants/constant";
import CategoryElem from "./CategoryElem";
import { CategorySettingsSlider } from "../../utils/constants/constant";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CategoriesSlider() {
  return (
    <section className="bg-white ">
      <div className="container px-6 py-2 mx-auto">
        <p className="max-w-2xl mx-auto my-3 text-center text-gray-500 text-2xl">
          Categories
        </p>

        <div className="slider-container">
          <Slider {...CategorySettingsSlider}>
            {ALL_CATEGORIES.map((elem, index) => {
              return <CategoryElem key={index} name={elem} />;
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}
