import { useEffect, useState } from "react";

type Props = {
  field: number[][];
  numRows: number;
  numCols: number;
};

const PacMan: React.FC<Props> = ({ field }) => {
  const [position, setPosition] = useState({ row: 23, col: 13 });

  const isValidMove = (row: number, col: number) => {
    if (field[row][col] !== 4) {
      return true;
    }
    return false;
  };

  const move = (row: number, col: number) => {
    const newRow = position.row + row;
    const newCol = position.col + col;

    if (isValidMove(newRow, newCol)) {
      setPosition({ row: newRow, col: newCol });
    }
  };

  const handlePress = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case "ArrowUp":
        move(-1, 0);
        break;
      case "ArrowDown":
        move(1, 0);
        break;
      case "ArrowLeft":
        move(0, -1);
        break;
      case "ArrowRight":
        move(0, 1);
        break;
    }
  };

  useEffect(() => window.addEventListener("keydown", handlePress as any), []);

  return (
    <div
      className="pacman"
      style={{
        gridRow: position.row + 1,
        gridColumn: position.col + 1,
      }}
    ></div>
  );
};

export default PacMan;
