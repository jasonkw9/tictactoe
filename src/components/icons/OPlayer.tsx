import React from "react";
import { SVGProps } from "../../interfaces";

export const OPlayer: React.FC<SVGProps> = ({
  width,
  height,
  disableHoverEffect,
  isClick,
}) => (
  <svg
    className={`ticktactoe-svg trasition duration-200 ease-in lg:w-[120px] w-[80px] ${
      disableHoverEffect ? null : "hover:scale-[1.3]"
    } ${isClick === true ? "scale-[1.3]" : null}`}
    width={width ? width : 60}
    height={height ? height : 60}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="24" cy="24" r="20" stroke="#F31779" strokeWidth="8" />
  </svg>
);
