import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="bg-[#1d1d1d]">
      <div className="container mx-auto">
        <div className="flex items-center justify-start gap-10 p-4">
          <Link to="/" className="text-white text-lg font-semibold">
            FOT
          </Link>

          <div className=" lg:flex lg:items-center lg:w-auto" id="navbar">
            <ul className="flex items-center gap-5">
              <li>
                <Link
                  to="/premierleague"
                  className="text-white hover:text-gray-300"
                >
                  Standing
                </Link>
              </li>
              <li className="">
                <a href="#" className="text-white hover:text-gray-300">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
