import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <div className="flex space-x-2">
            <Link href="/">Home Page</Link>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
        </div>
    );
};

export default Header;
