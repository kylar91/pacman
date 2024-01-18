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
    let oldRow = position.row;
    let oldCol = position.col;
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

    movePacMan(newRow, newCol, e.key, oldRow, oldCol);
  };

  const movePacMan = (
    row: number,
    col: number,
    direction: string,
    correntRow: number,
    correntCol: number
  ) => {
    const isValidMove = () => {
      return field[row][col] !== 4;
    };

    const move = () => {
      if (isValidMove()) {
        setDirection(direction);
        setAnimation(true);

        // Salva la posizione corrente
        const oldRow = correntRow;
        const oldCol = correntCol;

        setTimeout(() => {
          setField((prevField) => {
            const newField = prevField.map((row) => [...row]);

            // Pulisce la vecchia posizione di Pac-Man
            newField[oldRow][oldCol] = 0;

            // Imposta la nuova posizione di Pac-Man
            newField[row][col] = 7;

            return newField;
          });

          setPosition({ row: row, col: col });
          setAnimation(false);
        }, 190);

        // Prossima posizione
        let newRow = row;
        let newCol = col;

        switch (direction) {
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
            break;
        }

        if (isValidMove()) {
          setTimeout(() => {
            movePacMan(newRow, newCol, direction, row, col);
          }, 190);
        } else {
          setAnimation(false);
        }
      }
    };

    move();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown as never);

    return () => {
      window.removeEventListener("keydown", handleKeyDown as never);
    };
  }, [handleKeyDown]);

  return (
    <div
      className="pacman"
      style={{
        ...(animation && { animation: `Animation-${direction} 0.2s steps(1)` }),
        ...(direction === "ArrowUp" && {
          transform: "scale(1.8) rotate(270deg)",
        }),
        ...(direction === "ArrowDown" && {
          transform: "scale(1.8) rotate(90deg)",
        }),
        ...(direction === "ArrowLeft" && {
          transform: "scale(1.8) rotate(180deg)",
        }),
        ...(direction === "ArrowRight" && {
          transform: "scale(1.8) rotate(0deg)",
        }),
      }}
    ></div>
  );
};

export default PacMan;
