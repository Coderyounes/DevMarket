import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../res/logo.png";
import { useAuthStore } from "../../utils/store/store";
import Cookies from "js-cookie";
import useSWRMutation from "swr/mutation";
import { postDataAuth } from "../../utils/constants/api_caller";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../utils/constants/config";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [token, setToken] = useState<string | undefined>();
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    setToken(Cookies.get("token"));
    console.log(user, "context");
  }, []);

  const { trigger: startLoggingOut } = useSWRMutation(
    `${BASE_URL}/logout`,
    postDataAuth,
    {
      revalidate: false,
      onSuccess: (data) => {
        Cookies.remove("token");
        Cookies.remove("email");
        Cookies.remove("_id");
        Cookies.remove("firstname");
        Cookies.remove("lastname");
        Cookies.remove("country");
        Cookies.remove("usertype");
        Cookies.remove("firebaseUID");
        Cookies.remove("age");
        Cookies.remove("createdAt");
        setToken(undefined);
        // setUser(initial_user_state);
        navigate("/");
      },
    }
  );

  return (
    <nav className="relative bg-white shadow ">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <Link to="/">
              <img src={logo} className="w-[200px]" />
            </Link>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600 "
                aria-label="toggle menu"
              >
                {!isOpen && (
                  <svg
                    onClick={() => setOpen(!isOpen)}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}

                {isOpen && (
                  <svg
                    onClick={() => setOpen(!isOpen)}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            className={`${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
          >
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              <Link
                to="/employer"
                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 "
              >
                Find Work
              </Link>
              <Link
                to="/freelancer"
                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 "
              >
                Find Talent
              </Link>
              <Link
                to="/aboutus"
                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 "
              >
                Who we are
              </Link>
            </div>

            {!token && (
              <div className="flex items-center mt-4 lg:mt-0">
                <Link
                  to="/signin"
                  className="px-6 mr-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                >
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  className="px-6 ml-3 py-2 font-medium tracking-wide text-black capitalize transition-colors duration-300 transform  border-2 border-black rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                >
                  Sign up
                </Link>
              </div>
            )}

            {token && (
              <div className="flex items-center mt-4 lg:mt-0">
                <Link
                  to={"/profile"}
                  className="flex items-center focus:outline-none"
                  aria-label="toggle profile dropdown"
                >
                  <h3 className="mx-2 text-gray-700">
                    {Cookies.get("lastname")}
                  </h3>
                </Link>

                <svg
                  onClick={() => startLoggingOut()}
                  className="w-5 hover:cursor-pointer"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.2429 22 18.8286 22 16.0002 22H15.0002C12.1718 22 10.7576 22 9.87889 21.1213C9.11051 20.3529 9.01406 19.175 9.00195 17"
                      stroke="#1C274C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15"
                      stroke="#1C274C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
