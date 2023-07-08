import React, { useEffect, useState } from "react";
import Barcode from "react-barcode";

interface FlightInformationProps {
  flight_icao: string;
  dep_icao: string;
  arr_icao: string;
  dep_terminal?: string;
  dep_gate?: string;
  dep_time: string;
  arr_terminal?: string;
  arr_gate?: string;
  arr_time: string;
  status: string;
}

export default function TrackTicket({
  selectedFlightInfo,
}: {
  selectedFlightInfo: FlightInformationProps;
}) {
  const [flightInfo, setFlightInfo] = useState<FlightInformationProps>();
  useEffect(() => {
    const fetchFlightInfo = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_AIRLABS_BASE_URL}flight?flight_icao=${selectedFlightInfo.flight_icao}&api_key=${process.env.NEXT_PUBLIC_AIRLABS_API_KEY}`
        );
        const data = await response.json();
        setFlightInfo(data.response);
      } catch (error) {
        console.error("Error fetching all flights:", error);
      }
    };
    fetchFlightInfo();
  }, []);
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      day: "numeric",
      month: "short",
    };
    return date.toLocaleDateString("en-US", options).toUpperCase();
  };
  const formatTime = (timeString: string) => {
    const date = new Date(timeString);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };
  return (
    <div className="bg-slate-200 py-4 px-8 h-72 xl:h-1/3 max-w-[95%] w-full xl:max-w-lg fixed bottom-16 left-1/2 xl:left-4 xl:right-8 transform -translate-x-1/2 xl:transform-none xl:translate-x-0 xl:bottom-20 drop-shadow-xl">
      {flightInfo ? (
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <div>
              <p className="font-medium">{selectedFlightInfo.flight_icao}</p>
            </div>
            <div>
              <p className="font-medium capitalize">
                {formatDate(flightInfo.arr_time)}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <p className="text-5xl font-semibold">
                {selectedFlightInfo.dep_icao}
              </p>
              <p className="text-5xl font-semibold">
                {selectedFlightInfo.arr_icao}
              </p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-4">
                <div className="flex flex-col gap-1">
                  <p className="font-medium">
                    {formatTime(flightInfo.dep_time) || "--"}
                  </p>
                  <p className="font-medium text-gray-400">ETD</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-medium">{flightInfo.dep_gate || "--"}</p>
                  <p className="font-medium text-gray-400">GATE</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col gap-1">
                  <p className="font-medium">{flightInfo.arr_gate || "--"}</p>
                  <p className="font-medium text-gray-400">GATE</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-medium">
                    {formatTime(flightInfo.arr_time) || "--"}
                  </p>
                  <p className="font-medium text-gray-400">ETA</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex align-bottom justify-center">
            <Barcode
              value={selectedFlightInfo.flight_icao}
              format={"CODE39"}
              height={50}
              background={"rgb(226 232 240)"}
            />
          </div>
        </div>
      ) : (
        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 rounded mb-4"></div>
          <div className="h-6 bg-gray-300 rounded"></div>
          <div className="flex justify-between mt-6">
            <div className="w-1/4 h-10 bg-gray-300 rounded"></div>
            <div className="w-1/4 h-10 bg-gray-300 rounded"></div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="w-1/4 h-8 bg-gray-300 rounded"></div>
            <div className="w-1/4 h-8 bg-gray-300 rounded"></div>
          </div>
          <div className="h-24 flex items-center justify-center mt-8">
            <div className="w-36 h-10 bg-gray-300 rounded"></div>
          </div>
        </div>
      )}
    </div>
  );
}
