import { FaUser, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const notices = [
  {
    id: 1,
    author: "Andru Hebo",
    time: "9:00am - 5:00 pm",
    location: "California(CA), 92677",
    message:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 2,
    author: "Andru Hebo",
    time: "9:00am - 5:00 pm",
    location: "California(CA), 92677",
    message:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 3,
    author: "Andru Hebo",
    time: "9:00am - 5:00 pm",
    location: "California(CA), 92677",
    message:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];

const NoticeBoard = () => {
  return (
    <div className="bg-gray-900   text-white p-6 rounded-md shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">⚠️ Notice Board</h2>
        <button className="text-gray-400 hover:text-gray-200 ">⋯</button>
      </div>

      <div className="space-y-6">
        {notices.map((notice) => (
          <div key={notice.id} className="border-b border-gray-700 pb-4">
            <div className="flex items-center  md:gap-4 text-sm hover:text-black text-gray-300 mb-2">
              <span className="flex items-center gap-1">
                <FaUser /> {notice.author}
              </span>
              <span className="flex items-center gap-1">
                <FaClock /> {notice.time}
              </span>
              <span className="flex items-center gap-1">
                <FaMapMarkerAlt /> {notice.location}
              </span>
            </div>
            <p className="text-gray-100 font-medium">{notice.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeBoard;
