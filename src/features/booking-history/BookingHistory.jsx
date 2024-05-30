import Layout from "@/components/Layout";
import React from "react";
import SectionInfo from "./components/SectionInfo";
import SectionHeader from "./components/SectionHeader";
import BookingHistoryHeader from "./components/BookingHistoryHeader";
import { useGetAllData } from "./api/useGetALLData";

function BookingHistory() {
  const { data: getAllData, isLoading: isLoadingAllData } = useGetAllData();

  const sectionHeaderData = getAllData?.segments
    ?.map((item, index) => {
      switch (index) {
        case 0:
          return item.departure;
        case 1:
          return item.layover;
        case 3:
          return item.arrival;
        default:
          return null;
      }
    })
    .filter(Boolean);

  const flights = getAllData?.segments
    ?.map((item) => item.flight)
    .filter(Boolean);

  return (
    <Layout>
      {isLoadingAllData ? (
        <div className="w-full h-full flex justify-center items-center">
          Loading...
        </div>
      ) : (
        <div className="w-full bg-white rounded-lg shadow">
          <BookingHistoryHeader getAllData={getAllData} />
          <hr className="h-[5px]" />
          <SectionHeader data={sectionHeaderData[0]} />
          <SectionInfo type={"departure"} flight={flights[0]} />
          <SectionHeader data={sectionHeaderData[1]} isLayover={true} />
          <SectionInfo type={"layover"} flight={flights[1]} />
          <SectionHeader data={sectionHeaderData[2]} isDestination={true} />
        </div>
      )}
    </Layout>
  );
}

export default BookingHistory;
