import Hero from "../components/Home/Hero";
import CategoriesSlider from "../components/Home/CategoriesSlider";
import FreelancersSlider from "../components/Home/FreelancersSlider";
import ServicesSample from "../components/Home/ServicesSample";
import { ALL_CATEGORIES } from "../utils/constants/constant";
import Features from "../components/Home/Features";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoriesSlider />
      <FreelancersSlider />
      
        <ServicesSample />
      
      <Features />
    </>
  );
}
