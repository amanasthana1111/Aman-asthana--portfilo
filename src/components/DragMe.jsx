import React from "react";

export const DragMe = () => {
  return (
    <svg
      width="80"
      height="30"
      viewBox="0 0 80 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mr-5 -rotate-30"
    >
      <path
        d="M5 15C5 15 15 12 30 15C45 18 55 15 65 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="3 2"
      ></path>
      <path
        d="M5 10L10 15L5 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="rotate(-200, 7.5, 15) translate(2, 0.5)"
      ></path>
      <text
        x="25"
        y="10"
        fontSize="8"
        fontFamily="cursive"
        fill="currentColor"
        className="text-[10px] font-['MyFont1'] text-gray-500"
      >
        drag me!
      </text>
    </svg>
  );
};
