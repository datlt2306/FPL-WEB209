import { Outlet } from "react-router-dom";

const LayoutWebsite = () => {
    return (
        <div>
            <header>Header</header>
            <main>
                <Outlet />
            </main>
            <footer>Footer</footer>
        </div>
    );
};

export default LayoutWebsite;
