import { Link } from "react-router-dom";
import { ALL_CATEGORIES } from "../utils/constant";
import CategoryElem from "./CategoryElem";

export default function ImageSlider() {
  return (
    <section className="bg-white ">
      <div className="container px-6 py-2 mx-auto">
        <p className="max-w-2xl mx-auto my-3 text-center text-gray-500 text-2xl">
          Categories
        </p>

        <div className="grid grid-cols-1 gap-8 mt-6 xl:mt-14 md:grid-cols-2 xl:grid-cols-6">
          <CategoryElem />
          <CategoryElem />
          <CategoryElem />
          <CategoryElem />
          <CategoryElem />
          <CategoryElem />
        </div>
      </div>
    </section>
  );
}
