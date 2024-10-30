"use client";

import React from "react";

const error = ({ error }: any) => {
    return <div>{error.message}</div>;
};

export default error;
