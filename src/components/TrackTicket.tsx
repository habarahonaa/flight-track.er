import React from "react";
import Barcode from "react-barcode";

interface FlightInformationProps {
  flight_icao: string;
  dep_icao: string;
  arr_icao: string;
  dep_terminal?: string;
  dep_gate?: string;
  dep_time: number;
  arr_terminal?: string;
  arr_gate?: string;
  arr_time: number;
  status: string;
}

export default function TrackTicket() {
  return (
    <div className="bg-slate-200 py-4 px-8 h-72 xl:h-1/3 max-w-[95%] w-full xl:max-w-lg fixed bottom-16 left-1/2 xl:left-4 xl:right-8 transform -translate-x-1/2 xl:transform-none xl:translate-x-0 xl:bottom-20 drop-shadow-xl">
      {" "}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div>
            <p className="font-medium">JBU 1957</p>
          </div>
          <div>
            <p className="font-medium capitalize">TUE, 7 APR</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <p className="text-5xl font-semibold">KFLL</p>
            <p className="text-5xl font-semibold">SKBO</p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <div className="flex flex-col gap-1">
                <p className="font-medium">21:19</p>
                <p className="font-medium text-gray-400">ETD</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-medium">F1</p>
                <p className="font-medium text-gray-400">GATE</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-1">
                <p className="font-medium">--</p>
                <p className="font-medium text-gray-400">GATE</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-medium">23:58</p>
                <p className="font-medium text-gray-400">ETA</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex align-bottom justify-center">
          <Barcode
            value="JBU1957"
            format={"CODE39"}
            height={50}
            background={"rgb(226 232 240)"}
          />
        </div>
      </div>
    </div>
  );
}
