import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, setUser, updateUser, singInWithGoogle } =
    use(AuthContext);
  const [show, setShow] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Registration successful",
          showConfirmButton: false,
          timer: 1500,
        });
        updateUser({ displayName: name, photoURL: photoUrl })
          .then((currentUser) => {
            setUser({ ...currentUser, displayName: name, photoURL: photoUrl });
            navigate("/");
          })
          .catch((error) => {
            toast.error(error.massage);
          });

        // ...
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.code}`,
        });
      });
  };
  const handleGoogleSingUp = () => {
    singInWithGoogle()
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Google Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
          setUser(result);
      navigate(`${location.state ? location.state : "/"}`)
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
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="flex flex-col  p-6 rounded-md sm:p-10 bg-white max-w-xl  mx-auto min-h-[calc(100vh-200px)] my-4 shadow-xl/30  shadow-xl dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-8 ">
          <h1 className="md:text-4xl text-2xl md:font-bold font-bold w-full md:p-5 p-2 ">
            Welcome to FindMates 👋
          </h1>
          <h1 className="mt-5 mb-1 text-3xl font-semibold">Register Now !</h1>
          <p className="text-sm dark:text-gray-600">
            Register to create your account & Find Your Roommates
          </p>
        </div>
        <form onSubmit={handleRegister} className="space-y-12">
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Enter Your Full Name"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Photo Url
              </label>
              <input
                type="text"
                name="photoUrl"
                id="photoUrl"
                placeholder="Your Profile Photo URL"
                required
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            {/* Password field */}
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Password
              </label>
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
                    name="password"
                    placeholder="Password"
                    minLength="8"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                    title="Must be more than 6 characters, including number, lowercase letter, uppercase letter"
                  />
                <button
                  onClick={() => {
                    setShow(!show);
                  }}
                  className=" btn-xs absolute -top-5 z-200 right-7 "
                >
                  {show ? <FaEyeSlash /> : <FaEye></FaEye>}
                </button>{" "}
                </label>
              <p className="validator-hint text-red-500 hidden">
                Must be more than 6 characters, including
                <br />
                At least one number <br />
                At least one lowercase letter <br />
                At least one uppercase letter
              </p>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <input
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md  dark:bg-gray-900 dark:text-gray-50"
                value="Register"
              />
            </div>
          </div>
        </form>
        <div>
          <button
            onClick={handleGoogleSingUp}
            className="relative px-5 py-3 w-full mt-2 overflow-hidden font-medium text-gray-600  border  rounded-lg  group"
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 flex items-center gap-2 justify-center group-hover:text-white ease">
              <FcGoogle size={24} /> Register with Google
            </span>
          </button>
        </div>

        <p className="px-6 font-semibold text-center dark:text-gray-600">
          Already have an account yet?
          <Link to="/auth/login" className="text-blue-700">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
