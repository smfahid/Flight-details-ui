import Badge from "@/components/Badge";
import SerialNumber from "@/components/SerialNumber";
import React from "react";

function BookingHistoryHeader({ getAllData }) {
  return (
    <div className="flex gap-4 items-center p-4">
      <div className="w-[4%] flex justify-center ">
        <SerialNumber />
      </div>

      <div className="flex justify-between w-[95%] items-center">
        <div>
          <div className="font-bold">{getAllData?.route}</div>
          <div className="text-[#9BA6B2] flex items-center gap-2">
            {getAllData?.tripType}
            <div className="w-1 h-1 bg-[#9BA6B2] rounded-full"></div>
            {getAllData?.dates}
            <div className="w-1 h-1 bg-[#9BA6B2] rounded-full"></div>
            {getAllData?.stops}
          </div>
        </div>

        <Badge text={getAllData?.totalDuration} />
      </div>
    </div>
  );
}

export default BookingHistoryHeader;
