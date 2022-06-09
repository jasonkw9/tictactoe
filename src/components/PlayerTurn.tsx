import React from "react";

interface PlayerTurnProps {
  isXPlayer: boolean;
}

export const PlayerTurn = ({ isXPlayer }: PlayerTurnProps) => {
  return (
    <div className="px-4 py-2 lg:my-5 my-1 bg-[#2a2b2e] rounded-xl">
      <p className="text-2xl">
        <span className={`${isXPlayer ? "text-white" : "text-[#F31779]"}`}>
          {isXPlayer ? "X" : "O"}
        </span>
        <span className="text-white">&nbsp;Turn</span>
      </p>
    </div>
  );
};
