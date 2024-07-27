type Props = {};

const Banner = (props: Props) => {
    return (
        <>
            <div className="w-full flex justify-center bg-gradient-to-r from-[#386957] to-[#134d38]">
                <div className="lg:w-[1440px] mb:w-[342px] md:w-[95vw] md:h-[720px] mb:h-[694px] justify-between">
                    {/* about */}
                    <div className="flex flex-col *:flex *:flex-col md:pl-16 md:py-[120px] mb:py-[57px]">
                        <div>
                            <span className="text-[#F2BC1B] mb:text-sm md:text-base tracking-[4px] mb:-translate-y-0.5 lg:translate-y-0">
                                BEST SELLER
                            </span>
                            <strong className="lg:text-[64px] lg:w-[664px] mb:text-[32px] font-medium lg:leading-[70.4px] mb:leading-[38px] lg:tracking-[-3.4px] mb:tracking-[-1.2px] lg:my-4 mb:my-[10.5px] text-white">
                                BEST DISPENSARY TO BUY WEED ONLINE
                            </strong>
                            <span className="text-white lg:text-[22px] lg:mt-2 mb:mt-1.5 lg:tracking-[0.5px]">
                                Vitamins &amp; Supplements
                            </span>
                        </div>
                        <div className="flex flex-col *:text-white lg:mt-[105px] mb:mt-[39px]">
                            <div className="flex items-center lg:w-[356px] lg:justify-between lg:gap-x-0 mb:gap-x-[22px] *:lg:text-2xl *:mb:text-lg mb:tracking-[0.2px] lg:tracking-0">
                                <span>Get 25% off</span>|<span>Free Shipping</span>
                            </div>
                            <a
                                className="bg-[#17AF26] lg:mt-11 mb:mt-6 lg:text-lg lg:w-[185px] mb:w-[145px] grid place-items-center lg:h-[64px] mb:h-[56px] rounded-[100px] border-none"
                                href="#"
                            >
                                Shop All
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
