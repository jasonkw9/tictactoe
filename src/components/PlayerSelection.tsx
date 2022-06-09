import React, { useState } from "react";
import { OPlayer } from "./icons/OPlayer";
import { XPlayer } from "./icons/XPlayer";

interface PlayerSelectionProps {
  setDefaultGrid(grid: number): void;
  startGame(): void;
  setSelectedPlayer(player: string): void;
}

export const PlayerSelection = ({
  setDefaultGrid,
  startGame,
  setSelectedPlayer,
}: PlayerSelectionProps) => {
  const [grid, setGrid] = useState<number>(3);
  const [isXClick, setIsXClick] = useState<boolean>(false);
  const [isOClick, setIsOClick] = useState<boolean>(false);
  const gridOptions = [3, 4, 5, 6, 7, 8, 9];

  const handleGridInputChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setGrid(+event.target.value);
  };

  return (
    <div className="lg:px-20 lg:py-10 px-10 py-5 bg-[#2a2b2e] rounded-xl">
      <p className="text-3xl font-semibold text-white text-center pb-10">
        Select Player
      </p>
      <div className="flex flex-row items-center justify-center">
        <button
          className="px-2"
          type="button"
          onClick={() => {
            setIsXClick(true);
            setIsOClick(false);
          }}
        >
          <XPlayer isClick={isXClick} width={100} height={100} />
        </button>
        <button
          className="px-2"
          type="button"
          onClick={() => {
            setIsOClick(true);
            setIsXClick(false);
          }}
        >
          <OPlayer isClick={isOClick} width={100} height={100} />
        </button>
      </div>
      <p className="text-white lg:py-10 py-5">
        Reminder: X will start the game first
      </p>
      <p className="text-3xl font-semibold text-white text-center">
        Board Size
      </p>
      <div className="py-5 text-center">
        <select
          className="form-select appearance-none py-3 px-5 text-xl font-semibold text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Board Size"
          onChange={handleGridInputChange}
        >
          {gridOptions.map((val) => (
            <option key={val} value={val}>
              {val}x{val}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => {
            setDefaultGrid(grid);
            startGame();
            setSelectedPlayer(
              !isXClick && !isOClick ? "X" : isXClick ? "X" : "O"
            );
          }}
          type="button"
          className="border border-[#F31779] bg-[#F31779] text-white text-2xl font-extrabold rounded-md px-20 py-2 m-2 transition duration-500 ease select-none hover:bg-[#981c53] hover:border-[#981c53] focus:outline-none focus:shadow-outline"
        >
          Start
        </button>
      </div>
    </div>
  );
};
