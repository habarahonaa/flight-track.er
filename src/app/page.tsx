"use client";
import { useEffect, useState } from "react";
import { Map } from "react-map-gl";
import BottomBar from "@/components/BottomBar";
import SearchBar from "@/components/SearchBar";
import TrackTicket from "@/components/TrackTicket";

interface FlightInformation {
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

export default function Home() {
  const [selectedFlightInfo, setSelectedFlightInfo] =
    useState<FlightInformation>();
  const [allFlights, setAllFlights] = useState<FlightInformation[]>([]);

  const setSelectedFlight = (searchValue: string) => {
    const selectedFlight = allFlights.find((flight) => {
      return flight.flight_icao == searchValue;
    });
    setSelectedFlightInfo(selectedFlight);
  };

  useEffect(() => {
    const fetchAllFlights = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_AIRLABS_BASE_URL}flights?api_key=${process.env.NEXT_PUBLIC_AIRLABS_API_KEY}`
        );
        const data = await response.json();
        setAllFlights(data.response);
      } catch (error) {
        console.error("Error fetching all flights:", error);
      }
    };

    fetchAllFlights();
  }, []);

  return (
    <div className="relative">
      <div className="absolute inset-0 w-full h-screen">
        <Map
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
          initialViewState={{
            longitude: -122.4,
            latitude: 37.8,
            zoom: 3,
          }}
          style={{ width: "100%", height: "100%" }}
          mapStyle="mapbox://styles/hbarahonaa/cljqic7hj00zq01r5btuhdb6o"
        />
      </div>
      <div className="fixed top-0 left-0 w-full">
        <SearchBar setFlightNumber={setSelectedFlight} />
        {selectedFlightInfo && (
          <TrackTicket selectedFlightInfo={selectedFlightInfo} />
        )}
        <BottomBar pathname="/" />
      </div>
    </div>
  );
}
