import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const LayoutAdmin = (props: Props) => {
    return (
        <div>
            <header>Header</header>
            <aside>Sidebar</aside>
            <main>
                <Outlet />
            </main>
            <footer>Footer</footer>
        </div>
    );
};

export default LayoutAdmin;
