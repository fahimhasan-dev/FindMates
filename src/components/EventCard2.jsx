import { Fade } from "react-awesome-reveal";
import { FaUser, FaClock, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";

const events = [
  {
    id: 1,
    title: "Digital Business Summit - 2023",
    image: "https://i.ibb.co/7xKyvhqk/bath-half-marathon.jpg",
    organizer: "Andru Hebo",
    time: "9:00am - 5:00 pm",
    location: "California(CA), 92677",
  },
  {
    id: 2,
    title: "NASA Space Apps Challenge Summit - 2023",
    image: "https://i.ibb.co/8gczWGKT/balimarathon-2014-16.jpg",
    organizer: "Andru Hebo",
    time: "9:00am - 5:00 pm",
    location: "California(CA), 92677",
  },
  {
    id: 3,
    title: "Digital Product Design & Interaction Seminar - 2023",
    image: "https://i.ibb.co/prz39xHD/tvxlbyvh48djinb49izhg2g5hy2c.webp",
    organizer: "Andru Hebo",
    time: "9:00am - 5:00 pm",
    location: "California(CA), 92677",
  },
];

const EventCard2 = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="bg-gray-900   text-white rounded-md p-6 shadow-lg">
      <div className="flex md:flex-col lg:flex-row justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">📅 Upcoming Events</h2>
        <button className="bg-gray-700 hover:bg-gray-600 text-white text-sm px-4 py-1 rounded">
          View All Event
        </button>
      </div>

      <div className="space-y-6">
        {events.map((event) => (
          <Fade key={event.id} direction="up" cascade damping={0.1} triggerOnce>
            <div className="md:flex gap-4 items-start border-b border-gray-700 pb-4">
              <img
                src={event.image}
                alt={event.title}
                className="w-12 h-12 object-cover rounded-full"
              />
              <div>
                <h3 className="text-cyan-400 font-semibold hover:underline cursor-pointer">
                  {event.title}
                </h3>
                <div className="flex items-center text-sm gap-4 mt-1 text-gray-300">
                  <span className="flex items-center gap-1">
                    <FaUser /> {event.organizer}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock /> {event.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt /> {event.location}
                  </span>
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>

      {/* Scroll to top button */}
      <div className="flex justify-end mt-6">
        <button
          onClick={scrollToTop}
          className="bg-pink-600 p-2 rounded-full text-white hover:bg-pink-700 transition"
        >
          <FaArrowUp />
        </button>
      </div>
    </div>
  );
};

export default EventCard2;
