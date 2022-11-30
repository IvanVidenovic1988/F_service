import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import Topbar from "./navbar/Topbar";

const Layout = ({ children }: any) => {
    return (
        <div>
            <Topbar />
            <Navbar />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;