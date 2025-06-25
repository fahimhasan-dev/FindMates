import React, { use,  useState } from "react";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser, singInWithGoogle, setUser } = use(AuthContext);
  // const email = emailRef.current.value;
 


  const location = useLocation();
  const navigate = useNavigate();


  const [show, setShow] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Login SuccessFully",
          showConfirmButton: false,
          timer: 1500,
        });
         navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        if (error) {
          Swal.fire({
            icon: "error",
            title: `${error.code}
                     Incorrect user or password`,

            text: "Please, try again",
            showConfirmButton: false,
            timer: 2500,
          });
        }
      });
  };




  const handleGoogleLogin = () => {
    singInWithGoogle()
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Google Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        setUser(result)
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: `${error.code}`,
          text: "Please, try again",
          showConfirmButton: false,
          timer: 2500,
        });
      });
  };
  return (
    <div className="items-center my-4 justify-center  min-h-[calc(100vh-300px)] flex  ">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="  w-full max-w-xl   mx-auto shrink-0  ">
        <div className="card-body bg-white  rounded-xl shadow-2xl h-full">
          <h1 className="md:text-4xl text-2xl  md:font-extrabold font-bold w-full md:p-5 p-2 ">
            Welcome to FindMates 👋
          </h1>
          <h1 className="text-2xl font-semibold border-white ">Login Now!</h1>
          <form onSubmit={handleLogin} className="fieldset">
            {/* email */}
            <label className="input w-full validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                name="email"
                required
                placeholder="mail@site.com"
              />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
            {/* password */}
            <div className="relative">
              <label className="input w-full validator">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                    <circle
                      cx="16.5"
                      cy="7.5"
                      r=".5"
                      fill="currentColor"
                    ></circle>
                  </g>
                </svg>
                <input
                  type={`${show ? "text" : "password"}`}
                  required
                  placeholder="Password"
                  name="password"
                  minLength="8"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                />
              </label>
              <button
                onClick={() => {
                  setShow(!show);
                }}
                className=" btn-xs absolute bottom-1 z-200 right-7 "
              >
                {show ? <FaEyeSlash /> : <FaEye></FaEye>}
              </button>{" "}
            </div>
            <p className="validator-hint hidden">
              Must be more than 8 characters, including
              <br />
              At least one number <br />
              At least one lowercase letter <br />
              At least one uppercase letter
            </p>
            {/* onClick={handleForgetPassword} */}
            <div>
              <p className="hover:link">Forgat Password</p>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
          </form>

          <div>
            <button
              onClick={handleGoogleLogin}
              className="relative px-5 py-3 w-full overflow-hidden font-medium text-gray-600  border  rounded-lg  group"
            >
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
              <span className="relative transition-colors duration-300 delay-200 flex items-center gap-2 justify-center group-hover:text-white ease">
                <FcGoogle size={24} /> Login with Google
              </span>
            </button>
          </div>

          <p className="text-sm text-center">
            Don't Have An Account Please ?{" "}
            <Link className="text-blue-500 hover:link" to="/auth/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
