import BookingHistory from "@/features/booking-history/components/BookingHistory";
import { Murecho } from "next/font/google";

const murecho = Murecho({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${murecho.className} bg-[#E8F3FF] pb-4 min-h-screen`}>
      <BookingHistory />
    </main>
  );
}
