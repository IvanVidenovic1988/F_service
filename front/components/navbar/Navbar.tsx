import DesktopNavbar from "../../features/navbar/DesktopNavbar";
import MobileNavbar from "../../features/navbar/MobileNavbar";

const Navbar = () => {

    return (
        <div className="w-full h-[92px] bg-white flex content-center lg:sticky top-0 border-b">
            <DesktopNavbar />
            <MobileNavbar />
        </div >
    );
}

export default Navbar;