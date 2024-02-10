import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
// import toast from "react-hot-toast";
import swal from "sweetalert";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import loginSVG from "../../assets/images/login/login.svg";
import LoginNavbar from "../Shared/Navbar/LoginNavbar";
import axios from "axios";

const Login = () => {
  const [show, setShow] = useState(true);
  const { signInUser, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(() => {
        // get access token
        const user = { email };
        axios
          .post("https://car-doctor-server-site-khaki.vercel.app/jwt", user, { withCredentials: true })
          .then((res) => {
            if(res.data.success){
              swal("Success!", "Login Successfully!", "success");
              navigate(location?.state ? location.state : "/");
            }
          });
      })
      .catch(() => {
        swal("Error!", "Pleas check your email and password!", "error");
      });
  };
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res.user);
        swal("Success!", "Login Successfully!", "success");
        navigate(location?.state ? location.state : "/");
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
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        if (err.message === "invalid-login-credentials") {
          swal("Error!", "Pleas check your email or password!", "error");
        }
      });
  };

  return (
    <div>
      <LoginNavbar />
      <div className="flex justify-center items-center my-8">
        <div className="">
          <img src={loginSVG} alt="" />
        </div>
        <div className="flex justify-center  w-3/5">
          <div className="w-3/4">
            <div className=" rounded-xl border-2 py-2">
              <form onSubmit={handleLogin} className="px-8">
                <div className="text-center ">
                  <h1 className="text-2xl  font-bold">Login your account!</h1>
                  <br />
                  <hr className="mt-4 mb-5" />
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
                      <span className="label-text w-full">Password</span>
                    </label>
                    <input
                      type={!show ? "text" : "password"}
                      name="password"
                      placeholder="password"
                      className="p-3 rounded-md bg-[#F3F3F3] w-full"
                      required
                    />
                  </div>
                  <div className="absolute top-12 right-1">
                    <span
                      className="text-xl font-extrabold"
                      onClick={() => setShow(!show)}
                    >
                      {show ? <BsEye></BsEye> : <BsEyeSlash></BsEyeSlash>}
                    </span>
                  </div>
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#403F3F] text-white rounded-none">
                    Login
                  </button>
                </div>
                <div>
                  <p className="text-xl text-gray-500 font-semibold">
                    Or Login With...!!
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
                  Do not have an account? Please
                  <Link className="text-[#F75B5F] font-bold" to="/register">
                    Register
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

export default Login;
