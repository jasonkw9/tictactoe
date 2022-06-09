import React from "react";
import { SVGProps } from "../../interfaces";

export const XPlayer: React.FC<SVGProps> = ({
  width,
  height,
  disableHoverEffect,
  isClick,
}) => (
  <svg
    className={`ticktactoe-svg trasition duration-200 ease-in ${
      disableHoverEffect ? null : "hover:scale-[1.3] "
    } ${isClick === true ? "scale-[1.3]" : null}`}
    width={width ? width : 60}
    height={height ? height : 60}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" />

    <path
      d="M8 8L40 40"
      stroke="#FFFFFF"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M8 40L40 8"
      stroke="#FFFFFF"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
