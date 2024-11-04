import { Outlet } from "react-router-dom";

const LayoutAdmin = () => {
    return (
        <div>
            <aside>Aside</aside>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default LayoutAdmin;
