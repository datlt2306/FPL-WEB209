import React from "react";

const Services = () => {
    return (
        <>
            <div className="w-full flex justify-center bg-[#F2F6F4] mb:pb-2 lg:pb-0 mb:-mt-0.5 lg:mt-0">
                <div className="lg:w-[1440px] mb:w-[342px] md:w-[95vw] lg:h-[356px] mb:h-[645px] grid grid-cols-1 auto-cols-[172px] *:w-full *:h-full md:grid-cols-2 lg:gap-y-0 mb:gap-y-[31px] lg:grid-cols-[416px_416px_416px] justify-between lg:px-16 lg:py-20 mb:py-16">
                    {/* left */}
                    <div className="items-start grid lg:grid-cols-[100px_292px] mb:grid-cols-[64px_256px] justify-between">
                        <img
                            className="lg:w-[100px] lg:h-[100px] mb:w-16 mb:h-16 bg-white rounded-[50%] lg:p-5 mb:p-2.5"
                            src="../Images/truck-fast.png"
                            alt=""
                        />
                        <div className="flex flex-col mt-[0.5px] lg:ml-0 mb:ml-0.5">
                            <strong className="lg:text-2xl mb:text-[20px] font-medium lg:tracking-[-0.5px]">
                                Reliable Shipping
                            </strong>
                            <p className="lg:text-base mb:text-[14px] leading-[21px] lg:mt-[19px] mb:mt-[12px] font-normal text-[#717378] lg:leading-auto">
                                Green Society provides Canada Post Xpress Shipping right to your
                                doorstep! You can also opt in for shipping insurance. For orders
                                over $149, shipping is free!
                            </p>
                        </div>
                    </div>
                    {/* center */}
                    <div className="items-start grid lg:grid-cols-[100px_292px] mb:grid-cols-[64px_256px] justify-between">
                        <img
                            className="lg:w-[100px] lg:h-[100px] mb:w-16 mb:h-16 bg-white rounded-[50%] lg:p-5 mb:p-2.5"
                            src="../Images/safe-home.png"
                            alt=""
                        />
                        <div className="flex flex-col mt-[0.5px] lg:ml-0 mb:ml-0.5">
                            <strong className="lg:text-2xl mb:text-[20px] font-medium lg:tracking-[-0.5px]">
                                You're Safe With Us
                            </strong>
                            <p className="lg:text-base mb:text-[14px] lg:mt-[19px] leading-[21px] mb:mt-[12px] font-normal text-[#717378] lg:leading-auto">
                                Our secure payment system accepts the most common forms of payments
                                making the checkout process quicker! The payments we accept are
                                debit, all major credit cards, and cryptocurrency.
                            </p>
                        </div>
                    </div>
                    {/* right */}
                    <div className="items-start grid lg:grid-cols-[100px_292px] mb:grid-cols-[64px_256px] justify-between">
                        <img
                            className="lg:w-[100px] lg:h-[100px] mb:w-16 mb:h-16 bg-white rounded-[50%] lg:p-5 mb:p-2.5"
                            src="../Images/coin.png"
                            alt=""
                        />
                        <div className="flex flex-col mt-[0.5px] lg:ml-0 mb:ml-0.5">
                            <strong className="lg:text-2xl mb:text-[20px] font-medium lg:tracking-[-0.5px]">
                                Best Quality &amp; Pricing
                            </strong>
                            <p className="lg:text-base mb:text-[14px] leading-[21px] lg:mt-[19px] mb:mt-[12px] font-normal text-[#717378] lg:leading-auto">
                                Here at Green Society, we take pride in the quality of our products
                                and service. Our prices are set to ensure you receive your
                                medication at a reasonable price and safely
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
