import React, { useEffect, useState } from "react";

type Props = {
  field: number[][];
  startPosition: { row: number; col: number };
};

const PacMan: React.FC<Props> = ({ field, startPosition }) => {
  const [position, setPosition] = useState({
    row: startPosition.row,
    col: startPosition.col,
  });

  const isValidMove = (row: number, col: number) => field[row][col] !== 4;

  const move = (rowDirection: number, colDirection: number) => {
    let newRow = position.row + rowDirection;
    let newCol = position.col + colDirection;

    while (isValidMove(newRow, newCol)) {
      newRow += rowDirection;
      newCol += colDirection;
    }

    setPosition({ row: newRow - rowDirection, col: newCol - colDirection });
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

  useEffect(() => window.addEventListener("keydown", handlePress as never), []);

  return (
    <div
      className="pacman"
      style={{
        position: "absolute",
        top: position.row * 20 + "px",
        left: position.col * 20 + "px",
      }}
    ></div>
  );
};

export default PacMan;
