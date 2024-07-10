"use client";
import { cn } from "@/common/lib/utils";
import { LucideIcon } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
type SidebarItemProps = {
    icon: LucideIcon;
    label: string;
    href: string;
};

const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
    const pathname = useLocation().pathname;
    const navigate = useNavigate();
    const isActive =
        (pathname === "/" && href === "/") ||
        pathname === href ||
        pathname.startsWith(`${href}/`);
    const onClick = () => {
        navigate(href);
    };
    return (
        <button
            onClick={onClick}
            type="button"
            className={cn(
                "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/200",
                isActive &&
                    "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700",
            )}
        >
            <div className="flex items-center gap-x-2 py-4">
                <Icon size={20} className={cn(isActive && "text-sky-700")} />
                {label}
            </div>
            <div
                className={cn(
                    "ml-auto opacity-0 border-2 border-sky-700 h-full transition-all",
                    isActive && "opacity-100",
                )}
            />
        </button>
    );
};

export default SidebarItem;
