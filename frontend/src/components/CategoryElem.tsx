import { Link } from "react-router-dom";

export default function CategoryElem() {
  return (
    <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg ">
      <img
        className="object-cover w-full h-56"
        src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="avatar"
      />

      <div className="py-5 text-center">
        <Link
          to="/"
          className="block text-xl font-bold text-gray-800 "
        >
          John Doe
        </Link>
        <span className="text-sm text-gray-700 ">
          Software Engineer
        </span>
      </div>
    </div>
  );
}
