import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
const MainLayout = () => {
      return (
            <div>
                  <Header></Header>
                  <div className='min-h[calc(100vh-276px)]'><Outlet></Outlet></div>
                  <Footer></Footer>
            </div>
      );
};

export default MainLayout;