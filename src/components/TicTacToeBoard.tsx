import React from "react";
import { ExitIcon } from "./icons/ExitIcon";
import { OPlayer } from "./icons/OPlayer";
import { RestartIcon } from "./icons/RestartIcon";
import { XPlayer } from "./icons/XPlayer";

interface BoardProps {
  boards: Array<any>;
  buttonClick(value: number): void;
  isWinner: string | null;
  grid: number;
  restartGame(): void;
  quitGame(): void;
}

interface ColProps {
  rowNo: number;
}

export const TicTacToeBoard = ({
  boards,
  buttonClick,
  isWinner,
  grid,
  restartGame,
  quitGame,
}: BoardProps) => {
  const getButtonValue = (val: number) => {
    let buttonValue: JSX.Element | string | null = null;

    if (boards[val] === "X") {
      buttonValue = <XPlayer />;
    } else if (boards[val] === "O") {
      buttonValue = <OPlayer />;
    }

    return buttonValue;
  };

  const BoardCol: React.FC<ColProps> = (props) => {
    const { rowNo } = props;
    const cols: JSX.Element[] = [];
    const initialCounter = rowNo * grid;
    const initialTotal = rowNo === 0 ? grid : initialCounter + grid;
    for (let i = initialCounter; i < initialTotal; i++) {
      cols.push(
        <button
          key={`btn${i}`}
          onClick={() => buttonClick(i)}
          className="btn-tictactoe"
          disabled={isWinner ? true : false}
        >
          {getButtonValue(i)}
        </button>
      );
    }

    return <>{cols}</>;
  };

  const BoardRow: React.FC = () => {
    const rows: JSX.Element[] = [];
    for (let i = 0; i < grid; i++) {
      rows.push(
        <div className="tictactoe-row" key={`row${i}`}>
          <BoardCol rowNo={i} />
        </div>
      );
    }

    return <>{rows}</>;
  };

  return (
    <div className="tictactoe">
      <BoardRow />
      <div className="flex flex-row mt-[15px]">
        <button onClick={restartGame} type="button" className="btnRestartGame">
          <RestartIcon width={20} height={20} />
        </button>
        <button onClick={quitGame} type="button" className="btnQuitGame">
          <ExitIcon width={20} height={20} />
        </button>
      </div>
    </div>
  );
};
