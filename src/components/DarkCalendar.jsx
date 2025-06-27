import { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
} from "date-fns";

const DarkCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  const renderHeader = () => (
    <div className="flex justify-between  items-center mb-4">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        📅 Calendar
      </h2>
    </div>
  );

  const renderNavigation = () => (
    <div className="flex justify-between items-center text-white mb-4">
      <button
        onClick={() => setCurrentDate(subMonths(currentDate, 1))}
        className="text-2xl"
      >
        ←
      </button>
      <span className="text-lg font-medium">
        {format(currentDate, "MMMM yyyy")}
      </span>
      <button
        onClick={() => setCurrentDate(addMonths(currentDate, 1))}
        className="text-2xl"
      >
        →
      </button>
    </div>
  );

  const renderDays = () => {
    const days = [];
    const dateFormat = "EEE";
    const startDate = startOfWeek(currentDate);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="text-center font-medium text-gray-300">
          {format(addDays(startDate, i), dateFormat).slice(0, 3)}
        </div>
      );
    }
    return <div className="grid grid-cols-7 mb-2">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const isCurrentMonth = isSameMonth(day, monthStart);
        const isToday = isSameDay(day, today);
        days.push(
          <div
            key={day}
            className={`text-center p-2 rounded-full ${
              !isCurrentMonth ? "text-gray-500" : "text-white"
            } ${isToday ? "bg-yellow-600 text-black" : ""}`}
          >
            {format(day, "d")}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(<div className="grid grid-cols-7">{days}</div>);
      days = [];
    }

    return <div className="space-y-1">{rows}</div>;
  };

  return (
    <div className="bg-gray-900 text-white p-6  rounded-md shadow-lg w-full">
      {renderHeader()}
      {renderNavigation()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default DarkCalendar;
