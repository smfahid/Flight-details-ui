import AirlinesLogo from "@/assets/AirlinesLogo";
import PlaneIcon from "@/assets/PlaneIcon";
import Warning from "@/components/Warning";
import React from "react";

function SectionInfo(props) {
  const type = props.type;

  const {
    aircraft,
    airline,
    arrivalDate,
    arrivalTime,
    departureDate,
    departureTime,
    duration,
    number,
    title,
    class: flightCLass,
  } = props.flight;

  return (
    <div className="flex pl-4 gap-3 justify-center">
      <div className="w-[4%] flex flex-col gap-2 justify-center items-center">
        <AirlinesLogo />
        <div className="w-[2px] rounded-md h-[50%] bg-[#D8E1EB] "></div>
        <PlaneIcon />
        <div className="w-[2px] rounded-md h-[50%] bg-[#D8E1EB] "></div>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-3 gap-4 w-[95%]  pl-2 ">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <div className="font-semibold">{title}</div>
              <div className="text-sm text-[#5A6573]">{duration}</div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="text-sm font-medium text-[##3E4957]">
                {airline}
              </div>
              <div className="text-[#5A6573] text-sm">Flight no : {number}</div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <div className="font-semibold">{departureTime}</div>
              <div className="text-sm text-[#5A6573]">{departureDate}</div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="text-sm text-[#5A6573]">{aircraft}</div>
              <div className="text-[#5A6573] text-sm">
                <span>Class :</span>{" "}
                <span className="font-medium	">{flightCLass}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <div className="font-semibold">{arrivalTime}</div>
              <div className="text-sm text-[#5A6573]">{arrivalDate}</div>
            </div>
          </div>
        </div>
        {type === "departure" && <Warning />}
      </div>
    </div>
  );
}

export default SectionInfo;
