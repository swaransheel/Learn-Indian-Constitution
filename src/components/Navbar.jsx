import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-[64px] bg-black flex items-center justify-center px-56">
      <ul className="flex space-x-4 ">
        <li>
          <Link to="/">
            <button className=" font-merri text-white bg-transparent border-none shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
              Home
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
