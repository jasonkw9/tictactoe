import React from "react";
import { SVGProps } from "../../interfaces";

export const RestartIcon: React.FC<SVGProps> = ({
  width,
  height,
  disableHoverEffect,
}) => (
  <svg
    className="hover:animate-spin"
    width={width ? width : 24}
    height={height ? height : 24}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M42 8V24"
      stroke="#FFFFFF"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 24L6 40"
      stroke="#FFFFFF"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519"
      stroke="#FFFFFF"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M42.0007 24C42.0007 14.0589 33.9418 6 24.0007 6C18.9152 6 14.3223 8.10896 11.0488 11.5"
      stroke="#FFFFFF"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
