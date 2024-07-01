import Hero from "../components/Home/Hero";
import CategoriesSlider from "../components/Home/CategoriesSlider";
import FreelancersSlider from "../components/Home/FreelancersSlider";
import ServicesSample from "../components/Home/ServicesSample";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoriesSlider />
      <FreelancersSlider />
      <ServicesSample title="programming" />
    </>
  );
}
