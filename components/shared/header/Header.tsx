import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { PiChats } from "react-icons/pi";
import Search from "../search/Search";
import { TbCategory2 } from "react-icons/tb";
import { FaCaretDown } from "react-icons/fa";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { TbArrowsSort } from "react-icons/tb";
import { MdOutlineArchive } from "react-icons/md";
import { BiMessageSquareAdd } from "react-icons/bi";

function Header() {
  return (
    <header>
      <div className="border-2 p-3 w-full rounded-t-lg flex justify-between items-center">
        <h2 className="font-semibold text-lg">Products</h2>
        <div className="flex gap-3 items-center">
          <Search />
          <div className="border-2 p-1 rounded-lg">
            <PiChats className="text-lg" />
          </div>
          <div className="border-2 p-1 rounded-lg">
            <IoSettingsOutline className="text-lg" />
          </div>
        </div>
      </div>
      <div className="border-2 border-t-0 p-3 w-full flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="border-2 p-1 rounded-lg flex items-center gap-1">
            <TbCategory2 className="text-lg" />
            <h2 className="font-semibold">All brands</h2>
            <FaCaretDown />
          </div>
          <div className="border-2 p-1 rounded-lg flex items-center gap-1">
            <h2 className="font-semibold">Desk</h2>
            <FaCaretDown />
          </div>
          <div className="border-2 p-1 rounded-lg flex items-center gap-1">
            <h2 className="font-semibold">Tages</h2>
            <FaCaretDown />
          </div>
          <div className="border-2 p-1 rounded-lg flex items-center gap-1">
            <TbArrowsSort />
            <h2 className="">Short</h2>
          </div>
          <div className="border-2 p-1 rounded-lg flex items-center gap-1">
            <HiAdjustmentsHorizontal />
            <h2 className="">Filter</h2>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="border-2 p-1 rounded-lg flex items-center gap-1">
            <BiMessageSquareAdd className="text-lg" />
            <h2 className="font-semibold">Metting</h2>
          </div>
          <div className="border-2 p-1 rounded-lg flex items-center gap-1">
            <MdOutlineArchive className="text-lg" />
            <h2 className="font-semibold">Import/Export</h2>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
