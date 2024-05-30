import WarningIcon from "@/assets/WarningIcon";
import React from "react";

function Warning() {
  return (
    <div className="bg-[#FFEEDB]  p-3 gap-1 flex ml-1 items-center rounded-lg mt-3  border-2 border-[#FFE1C2] w-[97.5%]">
      <div>
        <WarningIcon />
      </div>
      <div className="text-xs text-[#3E4957]">
        Technical stoppage at Malpensa International Airport (Milano). Before
        booking this flight please check your visa requirements as per your
        nationality
      </div>
    </div>
  );
}

export default Warning;
