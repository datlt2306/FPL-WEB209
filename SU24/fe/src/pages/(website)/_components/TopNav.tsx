import React from "react";

type Props = {};

const TopNav = (props: Props) => {
    return (
        <>
            <div className="w-full bg-[#05422c] lg:h-[37px] mb:h-[34px] *:text-white flex justify-center items-center *:lg:text-sm *:mb:text-xs gap-x-4">
                <span className="opacity-75 lg:w-auto mb:w-[266px] mb:truncate">
                    LIMITED OFFER: 30% OFF. Use RABBIT30 at Checkout.
                </span>
                <span>23 : 15 : 00</span>
            </div>
        </>
    );
};

export default TopNav;
