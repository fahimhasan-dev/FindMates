import React from "react";
import LeftAside from "../components/LeftAside";
import DashBoardNavbar from "../components/DashBoardNavbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <div>
      {/* <Helmet>
        <title>Dashboard</title>
    
    </Helmet> */}
      <section className="grid grid-cols-6">
        <aside className="col-span-1 hidden xl:flex flex-col ">
          <LeftAside></LeftAside>
        </aside>
        <aside className="xl:col-span-5 w-full col-span-6 ">
          <header>
            <nav>
              <DashBoardNavbar> </DashBoardNavbar>
            </nav>
          </header>
          <main>
            <Outlet></Outlet>
          </main>
        </aside>
      </section>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Dashboard;
