import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const LayoutAdmin = (props: Props) => {
    return (
        <div className="grid grid-cols-[250px,auto]">
            <aside>Aside</aside>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default LayoutAdmin;
