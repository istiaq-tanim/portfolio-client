import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
      return (
            <div className="grid lg:grid-cols-12 grid-cols-3">
                  <div className="lg:col-span-2 col-span-1">
                        <Sidebar></Sidebar>
                  </div>
                  <div className="lg:col-span-10 col-span-2">
                        <Outlet></Outlet>
                  </div>
            </div>
      );
};

export default Dashboard;