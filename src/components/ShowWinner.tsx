import React from "react";
import { ExitIcon } from "./icons/ExitIcon";
import { OPlayer } from "./icons/OPlayer";
import { RestartIcon } from "./icons/RestartIcon";
import { XPlayer } from "./icons/XPlayer";

interface ShowWinnerProps {
  isWinner: string | null;
  isDrawGame: boolean;
  restartGame(): void;
  quitGame(): void;
}

export const ShowWinner = ({
  isWinner,
  isDrawGame,
  restartGame,
  quitGame,
}: ShowWinnerProps) => {
  return (
    <div
      className={`${
        isWinner || isDrawGame
          ? "transition-all ease-in duration-700 opacity-100 scale-100 absolute mt-[20px]"
          : "opacity-0 scale-0"
      }`}
    >
      {isWinner === "X" ? (
        <XPlayer width={120} height={120} disableHoverEffect={true} />
      ) : isWinner === "O" ? (
        <OPlayer width={120} height={120} disableHoverEffect={true} />
      ) : null}

      {isDrawGame && !isWinner ? (
        <div className="flex flex-row">
          <XPlayer width={120} height={120} disableHoverEffect={true} />
          <OPlayer width={120} height={120} disableHoverEffect={true} />
        </div>
      ) : null}

      <p
        className={`text-3xl font-bold text-center text-white my-2 ${
          isWinner || isDrawGame
            ? "transition-all ease-in delay-700 duration-300 opacity-100 pt-[5px]"
            : "opacity-0 pt-[40px]"
        }`}
      >
        {isWinner ? "Winner!" : "Draw!"}
      </p>
      <div className="flex justify-center">
        <button
          onClick={restartGame}
          type="button"
          className={`btnRestartGame ${
            isWinner || isDrawGame
              ? "transition-all ease-in delay-700 duration-300 opacity-100"
              : "opacity-0"
          }`}
        >
          <RestartIcon width={20} height={20} />
        </button>
        <button
          onClick={quitGame}
          type="button"
          className={`btnQuitGame ${
            isWinner || isDrawGame
              ? "transition-all ease-in delay-700 duration-300 opacity-100"
              : "opacity-0"
          }`}
        >
          <ExitIcon width={20} height={20} />
        </button>
      </div>
    </div>
  );
};
