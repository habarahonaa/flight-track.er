"use client";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";

interface BottomBarProps {
  pathname: string;
}

export default function BottomBar({ pathname }: BottomBarProps) {
  return (
    <div className="bg-[#23272A] text-[#707F7B] font-medium fixed bottom-0 px-4 py-4 flex justify-between w-full h-15">
      <ul className="flex gap-4">
        <li
          className={
            pathname === "/"
              ? "text-slate-100"
              : "transition duration-300 ease-in-out hover:text-slate-100"
          }
        >
          <Link href="/">TRACK</Link>
        </li>
        <li
          className={
            pathname === "/schedules"
              ? "text-slate-100"
              : "transition duration-300 ease-in-out hover:text-slate-100"
          }
        >
          <Link href="/schedules">SCHEDULES</Link>
        </li>
      </ul>
      <div>
        <FontAwesomeIcon
          icon={faPlane}
          rotation={270}
          className="block h-6 w-6 text-slate-100"
        />
      </div>
    </div>
  );
}
