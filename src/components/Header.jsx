import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { IoIosVideocam } from "react-icons/io";
import { MdVideoLibrary } from "react-icons/md";

const Header = () => {
    return (
        <header className="flex justify-between items-center p-4">
            <Link className="flex items-center gap-2">
                <img className="w-[40px]" src="data:image/jpeg;base64,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" />
                <h1 className="text-2xl max-sm:hidden font-mono">Youtube</h1>
            </Link>

            <form className="flex group border border-gray-400 rounded-[20px] overflow-hidden">
                <input
                    type="text"
                    className="px-5 py-2 bg-black text-white outline-none focus:border-blue-500 focus:border"
                    placeholder="Aramak istediğiniz kelimeyi giriniz..." />
                <button className="bg-zinc-800 px-4 text-2xl hover:bg-gray-800">
                    <IoSearchOutline />
                </button>
            </form>

            <div className="flex text-xl cursor-pointer gap-4">
                <FaBell className="hover:text-gray-400 transition duration-[250ms]" />
                <IoIosVideocam className="hover:text-gray-400 transition duration-[250ms]" />
                <MdVideoLibrary className="hover:text-gray-400 transition duration-[250ms]" />
            </div>
        </header>
    );
};

export default Header;
