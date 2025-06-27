import React from "react";

import StatCards from "../components/StatCards";
import NoticeBoard from "../components/NoticeBoard";
import EventCard2 from "../components/EventCard2";
import DarkCalendar from "../components/DarkCalendar";

const DashboardHome = () => {
  return (
    <div className=" ">
      <section>
        <StatCards></StatCards>
      </section>
      <section className="mb-3 w-[98%] mx-auto">
        <NoticeBoard></NoticeBoard>
      </section>
      <section className="2xl:grid grid-cols-5 gap-4 w-[98%] mx-auto mb-3">
        <div className="col-span-4"><EventCard2></EventCard2></div>
        <div className="col-span-1 my-2 2xl:my-0">
          <DarkCalendar></DarkCalendar>
        </div>
      </section>
    </div>
  );
};

export default DashboardHome;
