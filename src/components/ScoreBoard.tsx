import React from "react";

interface ScoreBoardProps {
  selectedPlayer: string;
}

export const ScoreBoard = ({ selectedPlayer }: ScoreBoardProps) => {
  const scoreboard = localStorage.getItem("scoreboard");
  let result = { X: 0, O: 0 };
  if (scoreboard) {
    result = JSON.parse(scoreboard);
  }
  return (
    <div className="flex flex-row px-4 py-2 my-5 bg-[#2a2b2e] rounded-xl justify-between">
      <div className="px-10 text-white font-extrabold text-2xl">
        X{selectedPlayer === "X" ? " (You)" : ""}
        <p className="text-[#18cfc9] text-center">{result["X"]}</p>
      </div>
      <div className="px-10 text-[#F31779] font-extrabold text-2xl">
        O{selectedPlayer === "O" ? " (You)" : ""}
        <p className="text-[#18cfc9] text-center">{result["O"]}</p>
      </div>
    </div>
  );
};
