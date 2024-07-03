import { Link } from "react-router-dom";

export default function CategoryElem({ name }: { name: string }) {
  return (
    <div>
      <Link
        to={`/${encodeURIComponent(name.replace(" ", "_"))}`}
        className="relative !h-72 rounded-lg !p-6 !flex !flex-col overflow-hidden group mx-5 w-[159px]"
        data-slick-index="7"
        aria-hidden="true"
        tabIndex={-1}
      >
        <span aria-hidden="true" className="absolute inset-0">
          <img
            src="https://i.pinimg.com/736x/4e/99/61/4e996161b1ff9177cd41ce737c8e00ca.jpg"
            alt="Music &amp; Audio"
            className="w-full h-full object-center object-cover opacity-70 group-hover:opacity-100"
          />
        </span>
        <span
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-90"
        ></span>
        <span className="relative mt-auto text-center text-xl font-bold text-white">
          {name}
        </span>
      </Link>
    </div>
  );
}
