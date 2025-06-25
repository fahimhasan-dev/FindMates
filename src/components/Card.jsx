import { useRef } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";

const Card = ({ index, card }) => {
  const {
    names,
    location,
    rentAmount,
    roomType,
    Age,
    availability,
    roomPhoto,
    profilePhoto,
    _id,
  } = card;

  const cardRefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card   rounded-xl p-4 md:p-10 mb-5 break-inside-avoid-column"
    >
      <div className="flex justify-between p-2">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 md:w-15 w-10  mb-5 rounded-full ring-2  ring-offset-2">
            <img src={`${profilePhoto}`} />
          </div>

          <h5 className="mt-2 ml-5 sm:text-xl font-bold tracking-tight  text-white">
            {names}
            <br />
            <span className="text-white font-light rancho-regular">
              {`Age: ${Age}  `}
            </span>
          </h5>
        </div>
        <div>
          <h4 className="text-green-300 font-semibold text-xl rancho-regular italic ">
            {availability}
          </h4>
        </div>
      </div>
      <div className="max-w-full border rounded-lg shadow-sm bg-[#fcfcfce7] border-gray-700">
        <a href="Event Image">
          <img
            className="rounded-t-lg w-full "
            src={roomPhoto}
            alt="Event Thumbnail Photo"
          />
        </a>
        <div className="p-5">
          <div></div>

          <div className="border p-4 rounded sm:my-2">
            <p className=" py-2 flex gap-1 items-center">
              Location-{" "}
              <span className=" paragraph text-xl  font-bold">{location}</span>{" "}
            </p>
            <p className=" py-2">
              RentAmount-{" "}
              <span className="paragraph text-xl  font-bold">
                {rentAmount}$
              </span>{" "}
            </p>
            <p className=" py-2">
              RoomType-{" "}
              <span className="paragraph text-xl  font-bold">{roomType}</span>{" "}
            </p>
          </div>

          <div className="sm:flex items-center mt-2 sm:mt-0 justify-end">
            <Link to={`/postDetails/${_id}`}>
              <button className="relative mt-1 sm:mt-0 inline-flex items-center justify-start sm:py-3 sm:pl-4 py-1 pl-2 pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-indigo-600   group">
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-gray-50 group-hover:h-full"></span>
                <span className="absolute -right-1 pr-1 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute left-0  -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative w-full text-left text-sm transition-colors duration-200 ease-in-out group-hover:text-indigo-600">
                  See More
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
