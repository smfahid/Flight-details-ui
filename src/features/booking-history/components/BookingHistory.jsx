import AirlinesLogo from "@/assets/AirlinesLogo";
import DepartureLocationIcon from "@/assets/DepartureLocationIcon";
import DestinationLoaction from "@/assets/DestinationLocation";
import PlaneIcon from "@/assets/PlaneIcon";
import WarningIcon from "@/assets/WarningIcon";
import Layout from "@/components/Layout";
import SerialNumber from "@/components/SerialNumber";
import Badge from "@/components/badge";

import React from "react";

function BookingHistory() {
  const sectionHeaderJson = [
    {
      isDestination: false,
      isLayover: false,
      departure: "Departure from Dhaka",
      terminal: "Terminal 1: Hazrat Shahjalal International Airport",
    },
    {
      isDestination: false,
      isLayover: true,
      departure: "Layover at Dubai: 12 hr 20 min ",
      terminal: "Dubai International Airport",
    },
    {
      isDestination: true,
      isLayover: false,
      departure: "Destination at New York",
      terminal: "Terminal 4: John F Kennedy International Airport",
    },
  ];
  return (
    <Layout>
      {/* <div className=" w-[20%] bg-white rounded-lg shadow p-4">heello</div> */}
      <div className="w-full bg-white rounded-lg shadow">
        <BookingHistoryHeader />
        <hr className="h-[5px]" />
        <SectionHeader
          departure={sectionHeaderJson[0].departure}
          terminal={sectionHeaderJson[0].terminal}
          isDestination={sectionHeaderJson[0].isDestination}
          isLayover={sectionHeaderJson[0].isLayover}
        />
        <SectionInfo />
        <SectionHeader
          departure={sectionHeaderJson[1].departure}
          terminal={sectionHeaderJson[1].terminal}
          isDestination={sectionHeaderJson[1].isDestination}
          isLayover={sectionHeaderJson[1].isLayover}
        />
        <SectionInfo />
        <SectionHeader
          departure={sectionHeaderJson[2].departure}
          terminal={sectionHeaderJson[2].terminal}
          isDestination={sectionHeaderJson[2].isDestination}
          isLayover={sectionHeaderJson[2].isLayover}
        />
      </div>
    </Layout>
  );
}

export default BookingHistory;

export function BookingHistoryHeader() {
  return (
    <div className="flex gap-4 items-center p-4">
      <div className="w-[4%] flex justify-center ">
        <SerialNumber />
      </div>

      <div className="flex justify-between w-[95%] items-center">
        <div>
          <div className="font-bold">DAC → JFK</div>
          <div className="text-[#9BA6B2] flex items-center gap-2">
            Round trip
            <div className="w-1 h-1 bg-[#9BA6B2] rounded-full"></div>
            25 MAr-4 Apr 2023
            <div className="w-1 h-1 bg-[#9BA6B2] rounded-full"></div>1 Stop
          </div>
        </div>

        <Badge text={"33h 20m"} />
      </div>
    </div>
  );
}

export function SectionHeader({
  departure,
  terminal,
  isDestination,
  isLayover,
}) {
  return (
    <div className="flex gap-4 px-4 py-3 items-center">
      <div className="w-[4%] flex justify-center">
        {isDestination ? <DestinationLoaction /> : <DepartureLocationIcon />}
      </div>

      <div
        className={`flex justify-between items-center w-[95%] ${
          isLayover ? "bg-[#E8F3FF]" : "bg-[#F5F7FA]"
        } shadow-lg p-4 rounded-lg`}
      >
        <div className="font-bold text-[0.9em] text-[#1A2B3D]">{departure}</div>
        <div className="text-[0.9em]">
          <span className="font-bold  text-[#5A6573]">Terminal 1:</span>{" "}
          <span className="text-[#5A6573] ">{terminal}</span>
        </div>
      </div>
    </div>
  );
}

export function SectionInfo() {
  return (
    <div className="flex pl-4 gap-3">
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
              <div className="font-semibold">DAC-DXB</div>
              <div className="text-sm text-[#5A6573]">12 hr 20 min</div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="text-sm font-medium text-[##3E4957]">
                Turkish Airlines
              </div>
              <div className="text-[#5A6573] text-sm">Flight no : TUR467</div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <div className="font-semibold">07:30 PM</div>
              <div className="text-sm text-[#5A6573]">28 Mar, Friday</div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="text-sm text-[#5A6573]">
                Airbus Industrie 737-800-738
              </div>
              <div className="text-[#5A6573] text-sm">
                <span>Class :</span>{" "}
                <span className="font-medium	">ECONOMY-Y (O)</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <div className="font-semibold">08:50 AM</div>
              <div className="text-sm text-[#5A6573]">29 Mar, Saturday</div>
            </div>
          </div>
        </div>
        <Warning />
      </div>
    </div>
  );
}

export function Warning() {
  return (
    <div className="bg-[#FFEEDB]  p-3 gap-2 flex items-center rounded-lg mt-3 mr-4">
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
