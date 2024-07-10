import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="h-full">
           <div>aside</div>
           <main>
            <Outlet />
           </main>
        </div>
    );
};

export default Layout;
