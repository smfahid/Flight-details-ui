import DepartureLocationIcon from "@/assets/DepartureLocationIcon";
import DestinationLoaction from "@/assets/DestinationLocation";
import React from "react";

function SectionHeader(props) {
  const { airport, location, terminal, duration } = props.data;
  const isDestination = props.isDestination;
  const isLayover = props.isLayover;
  return (
    <div className="flex gap-4 px-4 py-3 items-center">
      <div className="w-[4%] flex justify-center">
        {isDestination ? <DestinationLoaction /> : <DepartureLocationIcon />}
      </div>

      <div
        className={`flex justify-between items-center w-[95%] ${
          isLayover ? "bg-[#E8F3FF]" : "bg-[#F5F7FA]"
        }  p-4 rounded-lg`}
      >
        <div className="font-medium text-[0.9em] text-[#1A2B3D]">
          {isLayover
            ? `Layover at `
            : isDestination
            ? "Destination at "
            : "Departure from "}
          {location} {duration && `:${duration}`}
        </div>
        <div className="text-[0.9em]">
          <span className="font-medium  text-[#5A6573]">
            {terminal ? `${terminal}:` : ""}
          </span>{" "}
          <span className="text-[#5A6573] ">{airport}</span>
        </div>
      </div>
    </div>
  );
}

export default SectionHeader;
