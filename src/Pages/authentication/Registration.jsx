

import { Link, Navigate, useNavigate } from "react-router-dom";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import swal from "sweetalert";
import { AuthContext } from "../../Provider/AuthProvider";
import loginSVG from "../../assets/images/login/login.svg"
import LoginNavbar from "../Shared/Navbar/LoginNavbar";

const Registration = () => {
  const [show, setShow] = useState(true);
  const { createUser, updateTheProfile, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);

  const naviget = useNavigate();


  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);

    if (/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)) {
      // create user
      createUser(email, password)
        .then(() => {
          swal("Success!", "Registration Successfully!", "success");
          naviget("/login");

          updateTheProfile(name, photo)
            .then(() => {
              console.log("Profile Updated");
            })
            .catch((err) => {
              console.log(err);
            });
        })

        .catch(() => {
            swal("Error!", "Pleas check your email or password!", "error");
        });
    } else {
      swal(
        "Error",
        "Your Password Must Be 6 character or longer and have atleast a upercase and a spacial character",
        "error"
      );
      return;
    }

    
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res.user);
        swal("Success!", "Login Successfully!", "success");
        Navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        if (err.message === "auth/invalid-login-credentials") {
          swal("Error!", "Pleas check your email or password!", "error");
        }
      });
  };

  const handleGithubLogin = () => {
    signInWithGithub()
      .then(() => {
        swal("Success!", "Login Successfully!", "success");
        Navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        if (err.message === "invalid-login-credentials") {
          swal("Error!", "Pleas check your email or password!", "error");
        }
      });
  };

  

  return (
    <div>
      <LoginNavbar/>
      <div className="flex justify-between items-center my-8">
      <div className="">
        <img src={loginSVG} alt="" />
      </div>
      <div className="flex justify-center w-3/5">
        <div className="w-3/4">
          <div className=" rounded-xl border-2 py-2">
            <form onSubmit={handleRegister} className="px-8">
              <div className="text-center ">
                <h1 className="text-2xl  font-bold">Register your account!</h1>
                <br />
                <hr className="" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="p-3 rounded-md bg-[#F3F3F3]"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="p-3 rounded-md bg-[#F3F3F3]"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  ">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="p-3 rounded-md bg-[#F3F3F3]"
                  required
                />
              </div>
              <div className="form-control relative">
                <div>
                  <label className="label">
                    <span className="label-text ">Password</span>
                  </label>
                  <input
                    type={!show ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="p-3 rounded-md bg-[#F3F3F3] w-full"
                    required
                  />
                  <div className="absolute top-12 right-1">
                    <span
                      className="text-xl  font-extrabold"
                      onClick={() => setShow(!show)}
                    >
                      {show ? <BsEye></BsEye> : <BsEyeSlash></BsEyeSlash>}
                    </span>
                  </div>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" name="checkbox" className="" required />
                <p className="text-base font-normal text-[#706F6F]">
                  Accept Terms & Conditions
                </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#403F3F] text-white rounded-none">
                  Register
                </button>
              </div>
              <div>
                <p className="text-xl text-gray-500 font-semibold">
                 Or Register With...!!
                </p>
                <div className="flex items-center justify-center gap-2 my-2">
                  <button
                    onClick={handleGoogleLogin}
                    className="btn border btn-outline w-1/2 border-blue-500"
                  >
                    <FcGoogle />
                    Google
                  </button>
                  <button
                    onClick={handleGithubLogin}
                    className="btn border btn-outline w-1/2 border-black"
                  >
                    <FaGithub />
                    Github
                  </button>
                </div>
              </div>
              <p className="text-center mt-4 text-[#706F6F]">
                Already have an account? Please
                <Link className="text-[#F75B5F] font-bold" to="/login">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Registration;
