import React, { use, useState } from "react";
// import {  AiFillHeart, AiFillLike, AiOutlineHeart, AiOutlineLike } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { AiFillLike } from "react-icons/ai";
import Swal from "sweetalert2";

const PostDetails = () => {
  const [showContact, setShowContact] = useState(false);
  const data = useLoaderData();
  const { user } = use(AuthContext);
  const {
    availability,
    lifestylePreferences,
    location,
    names,
    Age,
    profilePhoto,
    rentAmount,
    roomPhoto,
    roomType,
    title,
    description,
    _id,
    email,
    likes,
    contactInfo,
  } = data;

 
  const [likesCount, setLikesCount] = useState(likes);
  const parsed = { likes: likesCount};

  console.log(parsed)

  

  const handleLike = () => {
    if (user.email === email) {
      Swal.fire({
        icon: "error",
        title: "This is your post. you can't like it.",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    else {
      fetch(
        `https://assignment-10-server-side-rho-six.vercel.app/parsonData/${_id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(parsed),
        }
      ).then((res) => res.json())
      setLikesCount((prev)=>prev+1);

      setShowContact(true);
    }
  };

  return (
    <div className="lg:w-[80%] sm:w-[95%] my-20 mx-auto">
      <div className="flex flex-col max-w-full h-full  p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div className="flex space-x-4">
          <img
            alt=""
            src={`${profilePhoto}`}
            className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-xl font-semibold  "
            >
              {names}
            </a>
            <span className="text-xs  rancho-regular text-blue-500">
              4 hours ago
            </span>
          </div>
        </div>
        <div>
          <div className=" sm:p-5 border bg-gray-900  border-gray-700 rounded-xl  shadow-md">
            <div className="w-full  mx-auto bg-white rounded-t-lg p-10 space-y-4 ">
              {/* Image */}

              <img
                src={roomPhoto}
                alt="Event Thumbnail"
                className=" w-full rounded-md"
              />
              {/* Description */}
              <h2 className=" text-2xl sm:font-semibold text-gray-600  ">
                {" "}
                {title}
              </h2>
              <h2 className=" text-2xl font-bold text-gray-600  ">
                Availability-{" "}
                <span className="text-green-400">{availability}</span>{" "}
              </h2>
            </div>
            <div className="w-full  mx-auto bg-white rounded-b-lg   pb-10 px-10  space-y-4 ">
              <div className="border border-gray-400 rounded-xl p-4 bg-gray-300">
                <h2 className=" sm:text-2xl sm:font-semibold text-gray-600  ">
                  Age: {Age}
                </h2>
                <h2 className=" sm:text-2xl sm:font-semibold text-gray-600  ">
                  Rent Amount: {rentAmount}
                </h2>
                <h2 className=" sm:text-2xl sm:font-semibold text-gray-600  ">
                  Room Type: {roomType}
                </h2>
                <h2 className=" sm:text-2xl sm:font-semibold text-gray-600 my-2 ">
                  Location: {location}
                </h2>
                <h2 className=" sm:text-2xl sm:font-semibold text-gray-600  ">
                  Lifestyle Preferences: {lifestylePreferences}
                </h2>
              </div>
              <p className="text-gray-800 sm:font-semibold"> {description}</p>
              <div className="flex flex-wrap justify-between">
                <div className="space-x-2">
                  <button
                    aria-label="Share this post"
                    type="button"
                    className="p-2 text-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 fill-current dark:text-violet-600"
                    >
                      <path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
                    </svg>
                  </button>
                  <button
                    aria-label="Bookmark this post"
                    type="button"
                    className="p-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 fill-current dark:text-violet-600"
                    >
                      <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                    </svg>
                  </button>
                </div>
                <div className="flex space-x-2 text-sm dark:text-gray-600">
                  <button
                    type="button"
                    className="flex items-center p-1 space-x-1.5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      aria-label="Number of comments"
                      className="w-4 h-4 fill-current dark:text-violet-600"
                    >
                      <path d="M448.205,392.507c30.519-27.2,47.8-63.455,47.8-101.078,0-39.984-18.718-77.378-52.707-105.3C410.218,158.963,366.432,144,320,144s-90.218,14.963-123.293,42.131C162.718,214.051,144,251.445,144,291.429s18.718,77.378,52.707,105.3c33.075,27.168,76.861,42.13,123.293,42.13,6.187,0,12.412-.273,18.585-.816l10.546,9.141A199.849,199.849,0,0,0,480,496h16V461.943l-4.686-4.685A199.17,199.17,0,0,1,448.205,392.507ZM370.089,423l-21.161-18.341-7.056.865A180.275,180.275,0,0,1,320,406.857c-79.4,0-144-51.781-144-115.428S240.6,176,320,176s144,51.781,144,115.429c0,31.71-15.82,61.314-44.546,83.358l-9.215,7.071,4.252,12.035a231.287,231.287,0,0,0,37.882,67.817A167.839,167.839,0,0,1,370.089,423Z"></path>
                      <path d="M60.185,317.476a220.491,220.491,0,0,0,34.808-63.023l4.22-11.975-9.207-7.066C62.918,214.626,48,186.728,48,156.857,48,96.833,109.009,48,184,48c55.168,0,102.767,26.43,124.077,64.3,3.957-.192,7.931-.3,11.923-.3q12.027,0,23.834,1.167c-8.235-21.335-22.537-40.811-42.2-56.961C270.072,30.279,228.3,16,184,16S97.928,30.279,66.364,56.206C33.886,82.885,16,118.63,16,156.857c0,35.8,16.352,70.295,45.25,96.243a188.4,188.4,0,0,1-40.563,60.729L16,318.515V352H32a190.643,190.643,0,0,0,85.231-20.125,157.3,157.3,0,0,1-5.071-33.645A158.729,158.729,0,0,1,60.185,317.476Z"></path>
                    </svg>
                    <span>30</span>
                  </button>
                  <div className="p-4 max-w-md mx-auto bg-white rounded shadow">
                    <h2 className="text-xl font-bold mb-2">
                      {likes} Person is interested
                    </h2>

                    <button
                      onClick={handleLike}
                      className="bg-blue-500 text-white px-6 py-2 flex gap-1  rounded hover:bg-blue-600"
                    >
                      Like <AiFillLike size={20} />
                    </button>

                    {showContact && (
                      <div className="mt-4 text-lg text-gray-700">
                        <strong>ContactInfo:</strong> {contactInfo}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <Link
                to="/"
                className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 font-semibold overflow-hidden text-secondary transition-all duration-150 ease-in-out rounded hover:pr-10 hover:pl-6 bg-gray-50 group"
              >
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-secondary group-hover:h-full"></span>
                <span className="absolute left-0 pr-4   duration-200 ease-out group-hover:translate-y-12">
                  <FaArrowLeft color="secondary" />
                </span>
                <span className="absolute right-0 pr-2.5  -translate-y-12 group-hover:translate-y-0 ease-out duration-200">
                  <FaArrowLeft color="white" />
                </span>
                <span className="relative w-full text-right transition-colors duration-200 ease-in-out group-hover:text-white">
                  Back to Home
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
