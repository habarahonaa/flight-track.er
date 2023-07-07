"use client";
import BottomBar from "@/components/BottomBar";
import SearchBar from "@/components/SearchBar";
import TrackTicket from "@/components/TrackTicket";
import { Map } from "react-map-gl";

export default function Home() {
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
        <SearchBar />
        <TrackTicket />
        <BottomBar pathname="/" />
      </div>
    </div>
  );
}
