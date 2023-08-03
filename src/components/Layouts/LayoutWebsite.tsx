import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const LayoutWebsite = (props: Props) => {
    return (
        <div>
            LayoutWebsite
            <Outlet />
        </div>
    );
};

export default LayoutWebsite;
