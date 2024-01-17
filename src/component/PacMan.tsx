import React, { useEffect } from "react";

type Props = {
  field: number[][];
  setField: React.Dispatch<React.SetStateAction<number[][]>>;
  position: { row: number; col: number };
  setPosition: React.Dispatch<
    React.SetStateAction<{
      row: number;
      col: number;
    }>
  >;
};

const PacMan: React.FC<Props> = ({
  field,
  setField,
  setPosition,
  position,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    e.preventDefault();

    let newRow = position.row;
    let newCol = position.col;

    switch (e.key) {
      case "ArrowUp":
        newRow -= 1;
        break;
      case "ArrowDown":
        newRow += 1;
        break;
      case "ArrowLeft":
        newCol -= 1;
        break;
      case "ArrowRight":
        newCol += 1;
        break;
      default:
        return;
    }

    if (field[newRow][newCol] !== 4) {
      handlePacManMove(newRow, newCol);
    }
  };

  const handlePacManMove = (row: number, col: number) => {
    const newField = [...field];
    newField[position.row][position.col] = 0;

    newField[row][col] = 7;

    setField(newField);
    setPosition({ row: row, col: col });
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown as never);

    return () => {
      window.removeEventListener("keydown", handleKeyDown as never);
    };
  }, [position]);

  return <div className="pacman"></div>;
};

export default PacMan;
