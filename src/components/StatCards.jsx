import { FaUsers, FaUserTie, FaCalendarAlt, FaTicketAlt } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";

const stats = [
  {
    label: "Total Registration",
    value: "1250+",
    icon: <FaUsers className="text-3xl text-white" />,
  },
  {
    label: "Total Speakers",
    value: "125+",
    icon: <FaUserTie className="text-3xl text-white" />,
  },
  {
    label: "New Events",
    value: "35",
    icon: <FaCalendarAlt className="text-3xl text-white" />,
  },
  {
    label: "Total Ticket Sold",
    value: "2560+",
    icon: <FaTicketAlt className="text-3xl text-white" />,
  },
];

const StatCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 p-4 ">
      {stats.map((stat, index) => (
        <Fade triggerOnce direction="up" cascade key={index}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="card-hover-bg text-white p-8 rounded shadow-lg flex items-center justify-between"
          >
            <div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
            <div className="bg-gray-700 p-3 rounded-full ml-4">{stat.icon}</div>
          </motion.div>
        </Fade>
      ))}
    </div>
  );
};
export default StatCards;
