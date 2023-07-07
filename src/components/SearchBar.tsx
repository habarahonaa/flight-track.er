"use client";
import React, { ChangeEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value.toUpperCase());
  };
  const handleInvalidInput = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity("Please enter a valid ICAO flight number");
  };
  return (
    <>
      <nav className="bg-transparent mt-4">
        <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8 flex justify-between">
          <div className="inset-y-0 left-0 flex items-center sm:hidden order-2">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <FontAwesomeIcon
                icon={faBarsStaggered}
                className="block h-6 w-6"
              />
            </button>
          </div>
          <input
            type="text"
            name="flightNumber"
            id="flightNumber"
            className="xs:w-3/12 lg:w-3/12 bg-[#15171997] rounded-md py-3 pl-7 pr-20 text-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-700 sm:text-sm sm:leading-6"
            placeholder="Search by flight number"
            value={searchValue}
            onChange={handleInputChange}
            maxLength={6}
            pattern="[A-Z]{2}[0-9]{1,4}"
            onInvalid={handleInvalidInput}
            title="Please enter a valid ICAO flight number"
          />
        </div>
      </nav>
    </>
  );
}
