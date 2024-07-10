import NavbarRoutes from "@/components/NavbarRoutes";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
    return (
        <div className="p-4 border-b h-full flex items-center bg-whiteshadow-sm ">
            <MobileSidebar />
            <NavbarRoutes />
        </div>
    );
};

export default Navbar;
