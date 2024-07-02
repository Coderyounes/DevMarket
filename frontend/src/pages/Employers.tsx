import { ALL_CATEGORIES, SERVICE_LIST } from "../utils/constant";
import ServicesSample from "../components/Home/ServicesSample";
import { ServiceCardType } from "../utils/types";
import ServiceCard from "../components/Home/ServiceCard";

export default function Employers() {
  return (
    <section className="mt-10">
      <div className="container grid grid-cols-1 gap-6 px-4  sm:px-0 xl:grid-cols-4 sm:grid-cols-2 mx-auto">
        {SERVICE_LIST.map((elem: ServiceCardType, index) => {
          return <ServiceCard key={index} data={elem} />;
        })}
      </div>
    </section>
  );
}
