import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-components/LeftNavbar";
import RightNavbar from "../components/layout-components/RightNavbar";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <div className="bg-base-100 min-h-screen font-poppins">
            <header>
                <Header></Header>
                <section className="w-10/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className="w-10/12 mx-auto py-5">
                <Navbar></Navbar>
            </nav>
            <main className="w-10/12 mx-auto grid md:grid-cols-12 gap-6 pt-5">
                <aside className="col-span-3">
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className="col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className="col-span-3">
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;