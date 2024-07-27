import React from "react";

type Props = {};

const FormSearch = (props: Props) => {
    return (
        <>
            <form className="w-[456px] flex *:h-[48px] justify-between">
                <input
                    type="text"
                    className="border rounded-full w-[400px] px-6"
                    placeholder="Search"
                />
                <button className="rounded-[50%] bg-[#17af26] w-[48px]">
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
        </>
    );
};

export default FormSearch;
