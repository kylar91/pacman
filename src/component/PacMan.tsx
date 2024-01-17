import React, { useEffect, useState } from "react";

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
  direction: string;
  setDirection: React.Dispatch<React.SetStateAction<string>>;
  animation: boolean;
  setAnimation: React.Dispatch<React.SetStateAction<boolean>>;
};

const PacMan: React.FC<Props> = ({
  field,
  setField,
  setPosition,
  position,
  direction,
  setDirection,
  animation,
  setAnimation,
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
      setDirection(e.key)
      handlePacManMove(newRow, newCol);
      setAnimation(true)
    }
  };

  const handlePacManMove = (row: number, col: number) => {

    setTimeout(() => {
      const newField = [...field];
      newField[position.row][position.col] = 0;

      newField[row][col] = 7;

      setField(newField);
      setPosition({ row: row, col: col });
      setAnimation(false)
    }, 200)

  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown as never);

    return () => {
      window.removeEventListener("keydown", handleKeyDown as never);
    };
  }, []);

  return <div
    className="pacman"
    style={{
      ...(animation && { animation: `Animation-${direction} 0.2s steps(1)` }),
      ...(direction === 'ArrowUp' && { transform: 'scale(1.8) rotate(270deg)' }),
      ...(direction === 'ArrowDown' && { transform: 'scale(1.8) rotate(90deg)' }),
      ...(direction === 'ArrowLeft' && { transform: 'scale(1.8) rotate(180deg)' }),
      ...(direction === 'ArrowRight' && { transform: 'scale(1.8) rotate(0deg)' })
    }}
  ></div>;
};

export default PacMan;
