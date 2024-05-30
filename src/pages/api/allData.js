let tripDetails = {
  route: "DAC → JFK",
  tripType: "Round trip",
  dates: "25 Mar - 4 Apr 2023",
  stops: "1 Stop",
  totalDuration: "33h 20m",
  segments: [
    {
      departure: {
        location: "Dhaka",
        airport: "Hazrat Shahjalal International Airport",
        terminal: "Terminal 1",
      },
      flight: {
        title: "DAC-DXB",
        number: "TUR467",
        airline: "Turkish Airlines",
        aircraft: "Airbus Industrie 737-800-738",
        class: "ECONOMY-Y (O)",
        departureTime: "07:30 PM",
        departureDate: "28 Mar, Friday",
        arrivalTime: "08:50 AM",
        arrivalDate: "29 Mar, Saturday",
        duration: "12 hr 20 min",
      },
      note: "Technical stoppage at Malpensa International Airport (Milano). Before booking this flight please check your visa requirements as per your nationality.",
    },
    {
      layover: {
        location: "Dubai",
        airport: "Dubai International Airport",
        duration: "12 hr 20 min",
      },
    },
    {
      flight: {
        title: "DAC-DXB",
        number: "TUR467",
        airline: "Turkish Airlines",
        aircraft: "Airbus Industrie 737-800-738",
        class: "ECONOMY-Y (O)",
        departureTime: "07:30 PM",
        departureDate: "28 Mar, Friday",
        arrivalTime: "08:50 AM",
        arrivalDate: "29 Mar, Saturday",
        duration: "12 hr 20 min",
      },
    },
    {
      arrival: {
        location: "New York",
        airport: "John F Kennedy International Airport",
        terminal: "Terminal 4",
      },
    },
  ],
};

export default function handler(req, res) {
  const { method } = req;

  if (method === "GET") {
    res.status(200).json(tripDetails);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
