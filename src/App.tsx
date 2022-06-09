import React, { useEffect, useState } from "react";
import { PlayerSelection } from "./components/PlayerSelection";
import { PlayerTurn } from "./components/PlayerTurn";
import { ScoreBoard } from "./components/ScoreBoard";
import { ShowWinner } from "./components/ShowWinner";
import { TicTacToeBoard } from "./components/TicTacToeBoard";

export const App: React.FC = () => {
  const [initGame, setInitGame] = useState<boolean>(true);
  const [isXPlayer, setIsXPlayer] = useState<boolean>(true);
  const [grid, setGrid] = useState<number>(3);
  const [player, setPlayer] = useState<string>("");
  const [boardsMatrix, setBoardsMatrix] = useState<Array<any>>(
    Array(grid * grid).fill(null)
  );

  const setSelectedPlayer = (player: string) => {
    setPlayer(player);
  };

  const setDefaultGrid = (defaultGrid: number) => {
    setGrid(defaultGrid);
  };

  const startGame = () => {
    setInitGame(false);
  };

  useEffect(() => {
    //storing scoreboard in localstorage
    localStorage.setItem("scoreboard", JSON.stringify({ X: 0, O: 0 }));
  }, []);

  //generate winning patterns
  const generateWinningCombinations = (n: number) => {
    let winRows: Array<number[]> = [];
    let iterator = 0;

    //get winning pattern for rows
    for (let i = 0; i < n; i++) {
      let subpatterns: Array<number> = [];
      for (let j = iterator; j < (iterator === 0 ? n : iterator + n); j++) {
        subpatterns.push(j);
      }
      iterator += n;
      winRows.push(subpatterns);
    }

    //get winning pattern for columns
    const winCols: Array<number[]> = [];
    for (let j = 0; j < n; j++) {
      winCols.push(winRows.map((val) => val[j]));
    }

    const winDiagonal: Array<number[]> = [];
    let leftDiag: Array<number> = [];
    let rightDiag: Array<number> = [];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        //get winning pattern for Left Diagonal
        if (i === j) leftDiag.push(winRows[i][j]);

        //get winning pattern for Right Diagonal
        if (i + j === n - 1) rightDiag.push(winRows[i][j]);
      }
    }
    winDiagonal.push(leftDiag, rightDiag);

    const winningPatterns = [...winRows, ...winCols, ...winDiagonal];
    return winningPatterns;
  };

  const checkIsDraw = () => {
    return boardsMatrix.every((matrix) => matrix !== null);
  };

  const checkWinner = (matrix: Array<any>) => {
    const winningConditions = generateWinningCombinations(grid);

    const winner = winningConditions
      .map((comboNumbers) => comboNumbers.map((key) => matrix[key]))
      //at least one line with all Xs or all Os, there's a winner
      .find(
        (comboValues) =>
          comboValues.every((v) => v === "X") ||
          comboValues.every((v) => v === "O")
      );

    if (typeof winner !== "undefined") {
      const scoreboard = localStorage.getItem("scoreboard");
      if (scoreboard) {
        const result = JSON.parse(scoreboard);
        result[winner[0]] += 1;
        localStorage.setItem("scoreboard", JSON.stringify(result));
      }
      return winner[0];
    }
    return null;
  };

  let isWinner = checkWinner(boardsMatrix);
  let isDrawGame = checkIsDraw();

  const buttonClick = (val: number) => {
    if (checkWinner(boardsMatrix) || boardsMatrix[val]) return;

    boardsMatrix[val] = isXPlayer ? "X" : "O";
    setBoardsMatrix(boardsMatrix);
    setIsXPlayer(!isXPlayer);
  };

  const restartGame = () => {
    setIsXPlayer(true);
    setBoardsMatrix(Array(9).fill(null));
  };

  const quitGame = () => {
    localStorage.setItem("scoreboard", JSON.stringify({ X: 0, O: 0 }));
    setIsXPlayer(true);
    setBoardsMatrix(Array(9).fill(null));
    setInitGame(true);
  };

  return (
    <div className="bg-[#037a76]">
      <div className="flex flex-col justify-center items-center">
        <div className="my-[30px] text-6xl font-extrabold">
          <h1 className="text-white">
            <span className="text-[#18cfc9]">Tic</span>
            <span className="text-[#F31779] px-3">Tac</span>
            Toe
          </h1>
        </div>
      </div>

      {initGame ? (
        <div className="flex flex-col min-h-screen items-center">
          <PlayerSelection
            setDefaultGrid={setDefaultGrid}
            startGame={startGame}
            setSelectedPlayer={setSelectedPlayer}
          />
        </div>
      ) : null}

      {!initGame ? (
        <div className="flex flex-col items-center justify-center">
          <ScoreBoard selectedPlayer={player} />
        </div>
      ) : null}

      {!isWinner && !isDrawGame && !initGame ? (
        <div className="flex flex-col justify-center items-center">
          <PlayerTurn isXPlayer={isXPlayer} />
        </div>
      ) : null}

      {!initGame ? (
        <div className="flex flex-col min-h-screen items-center">
          <div
            className={`transition-all ease-out duration-700 ${
              isWinner || isDrawGame
                ? "opacity-0 scale-50"
                : "opacity-100 scale-100"
            }`}
          >
            <TicTacToeBoard
              boards={boardsMatrix}
              buttonClick={buttonClick}
              isWinner={isWinner}
              restartGame={restartGame}
              quitGame={quitGame}
              grid={grid}
            />
          </div>
          <ShowWinner
            isWinner={isWinner}
            restartGame={restartGame}
            quitGame={quitGame}
            isDrawGame={isDrawGame}
          />
        </div>
      ) : null}
    </div>
  );
};
