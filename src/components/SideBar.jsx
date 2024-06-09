import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";

const SideBar = () => {
    return (
        <div className="flex flex-col p-1 md:p-4">
            <Link>
                <div className="flex gap-2 py-4 px-2 md:px-3 items-center md:text-lg cursor-pointer rounded-md hover:bg-[#3F3F3F]">
                    <span className="max-md:text-2xl">
                        <IoMdHome />
                    </span>
                    <span className="max-md:hidden line-clamp-1">Anasayfa</span>
                </div>
            </Link>
        </div>
    );
};

export default SideBar;
