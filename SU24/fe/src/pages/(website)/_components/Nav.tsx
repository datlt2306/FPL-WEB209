import { Link } from "react-router-dom";

const menuList = [
    { name: "Shop All", url: "/products" },
]

const Nav = () => {
    return (
        <>
            <div className="w-full flex justify-center items-center *:flex *:justify-center">
                <div className="gap-x-[49.5px] h-[56px] items-center">
                    {menuList.map((menu) => (
                        <Link to={menu.url}>{menu.name}</Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Nav;
