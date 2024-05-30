import RightArrowIcon from "@/assets/RightArrow";
import React from "react";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className=" w-10/12 mx-auto flex gap-6 pt-4  justify-center">
        <SideBar />

        <div className="w-[70%] flex flex-col rounded-lg gap-4">
          <Topbar />
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;

export function SideBar() {
  return <div className=" w-[20%] bg-white rounded-lg shadow p-4"></div>;
}

export function Topbar() {
  return (
    <div className="h-[6%] flex gap-3  items-center">
      <div className="text-sm text-[#5A6573]">Home</div>
      <RightArrowIcon />
      <div className="text-sm text-[#5A6573]">Booking History</div>
      <RightArrowIcon />
      <div className="text-sm text-[#5A6573]">Flight</div>
      <RightArrowIcon />
      <div className="text-sm text-[#1882FF] font-medium">
        STFL17121182045413
      </div>
    </div>
  );
}

export function Navbar() {
  return <div className="h-20 bg-[#FFFFFF] w-full mb-2"></div>;
}
