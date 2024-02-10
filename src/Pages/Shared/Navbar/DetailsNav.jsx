import logo from "../../../assets/icons/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { BsSearch, BsHandbag } from "react-icons/bs";
import { GiSelfLove } from "react-icons/gi";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const DetailsNav = () => {
  const { user } = useContext(AuthContext);

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
    </>
  );

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
            <img className="w-24 h-14  md:w-34 md:h-34" src={logo} alt="logo" />
          </Link>
        </div>
      </div>
      <div className="navbar-end hidden ml-80 lg:flex justify-center items-center gap-3">
        <ul className="menu menu-horizontal px-1 ">{navLinks}</ul>
        <p className="flex justify-center items-center gap-3">
          <FaRegUser />
          <BsSearch />
          <GiSelfLove />
          {user?.email && (
            <Link to={"/order"}>
              <BsHandbag />
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default DetailsNav;
