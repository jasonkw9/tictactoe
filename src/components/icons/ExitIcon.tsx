import React from "react";
import { SVGProps } from "../../interfaces";

export const ExitIcon: React.FC<SVGProps> = ({
  width,
  height,
  disableHoverEffect,
}) => (
  <svg
    width={width ? width : 24}
    height={height ? height : 24}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" fill="none" />
    <path
      d="M23.9917 6L6 6L6 42H24"
      stroke="#fff"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M33 33L42 24L33 15"
      stroke="#fff"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 23.9917H42"
      stroke="#fff"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
