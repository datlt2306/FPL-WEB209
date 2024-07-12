import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="h-full">
            <aside>Sidebar</aside>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
