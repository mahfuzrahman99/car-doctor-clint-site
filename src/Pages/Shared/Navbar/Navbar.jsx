import { useContext } from "react";
import logo from "../../../assets/icons/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-400 underline font-bold"
              : "font-bold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <a href="#about" className="font-bold">
          About
        </a>
      </li>
      <li>
        <a href="#service" className="font-bold">
          Services
        </a>
      </li>
      <li>
        <NavLink
          to="/allServices"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-400 underline font-bold"
              : "font-bold "
          }
        >
          All Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allProducts"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-400 underline font-bold"
              : "font-bold "
          }
        >
          All Products
        </NavLink>
      </li>
    </>
  );

  // console.log(user)
  return (
    <div className="navbar -z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <Link className="flex justify-center items-center">
            <img
              className="w-24 h-14  md:w-34 md:h-34 hidden md:block"
              src={logo}
              alt="logo"
            />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex justify-center items-center gap-4">
          <p className="text-xl font-medium">
            {user?.email && (
              <Link to={"/order"} className="text-3xl">
                <BiShoppingBag />
              </Link>
            )}
          </p>
          {user?.email ? (
            <div className="flex items-center gap-2">
              <div>
                <img
                  src={user?.photoURL}
                  className="h-[35px] w-[35px] rounded-full"
                  alt=""
                />
              </div>
              <button
                className="btn btn-ghost btn-sm bg-[#1f2937] rounded-md text-white  hover:bg-[#ff3811] transform duration-1000 font-bold"
                onClick={handleLogout}
              >
                <Link to="/login">Logout</Link>
              </button>
            </div>
          ) : (
            <button className="btn btn-ghost btn-sm bg-[#1f2937] rounded-md text-white  hover:bg-[#ff3811] transform duration-1000 font-bold">
              <Link to="/login">Login</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
