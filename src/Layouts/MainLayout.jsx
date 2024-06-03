import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
const MainLayout = () => {
      return (
            <div>
                  <Header></Header>
                  <Outlet></Outlet>
                  <Footer></Footer>
            </div>
      );
};

export default MainLayout;