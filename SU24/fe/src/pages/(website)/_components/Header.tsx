import React from "react";
import TopNav from "./TopNav";
import { Logo } from "@/components/icons";
import FormSearch from "./FormSearch";
import Account from "./Account";
import Nav from "./Nav";
type Props = {};

const Header = (props: Props) => {
    return (
        <>
            <header>
                {/* top header */}
                <TopNav />
                {/* logo, search and cart */}
                <div className="w-full flex justify-center items-center border-b">
                    <div className="container w-[1440px] lg:h-[76px] mb:h-[56px] flex justify-between *:flex *:items-center items-center">
                        {/* icon menu */}
                        <div className="lg:hidden mb:block translate-x-[24px]">
                            <Logo />
                        </div>
                        <img
                            className="lg:translate-x-[64px] mb:translate-x-[-12.5px] lg:w-[167px] lg:h-[40px] mb:w-[119px] mb:h-[28px]"
                            src="../Images/logo.png"
                            alt=""
                        />
                        {/* form desktop */}
                        <div className="mb:hidden lg:block *:h-[48px]">
                            <FormSearch />
                        </div>
                        <div className="lg:gap-x-6 mb:gap-x-4 lg:-translate-x-[60px] mb:-translate-x-[22px]">
                            <Account />
                        </div>
                    </div>
                </div>
                {/* menu */}
                <div className="w-full mb:hidden lg:block">
                    <Nav />
                </div>
                {/* form mobile */}
                <div className="w-full *:h-[58px] lg:hidden mb:block mb-0.5">
                    <form className="flex *:h-[36px] justify-center items-center gap-x-2">
                        <input
                            type="text"
                            className="border rounded-full w-[298px] px-5"
                            placeholder="Search"
                        />
                        <button className="rounded-[50%] bg-[#17af26] w-[36px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6 text-white mx-auto"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>
                        </button>
                    </form>
                </div>
            </header>
        </>
    );
};

export default Header;
