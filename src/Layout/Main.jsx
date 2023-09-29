import { Outlet } from "react-router-dom";
import Header from "../assets/Shared/Header/Header";
import Footer from "../assets/Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    );
};

export default Main;